import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { prismaClient } from "../lib/db"
//@ts-ignore
import youtubesearchapi from "youtube-search-api"

const YT_Regex =  /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch(?:\/|\?v=))|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/;


const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()  //TODO: find if user has yt or spotify type url using zod
})


export async function POST(req: NextRequest){
    try {
        const data = CreateStreamSchema.parse(await req.json())
        const isYt = data.url.match(YT_Regex);
        if(!isYt) {
            return NextResponse.json({
                message: "Wrong URL format"
            }, {
                status: 411
            })
        }

        const extractedId = data.url.split("?v=")[1]; 

        const res = await youtubesearchapi.GetVideoDetails(extractedId)
        console.log("response: ",res)
        const thumbnails = res.thumbnail.thumbnails;
        thumbnails.sort((a: {width: number}, b: {width: number }) => a.width < b.width ? 1 : -1);

        const stream = await prismaClient.stream.create({
            data: {
                userId: data.creatorId,
                url: data.url,
                extractedId,
                type: "Youtube",
                title: res.title ?? "Cat",
                smallImg: (thumbnails.length > 1 ? thumbnails[thumbnails.length - 2].url : thumbnails[thumbnails.length - 1].url) ?? "https://www.google.com/imgres?q=a%20cat%20image...",
                bigImg: thumbnails[thumbnails.length - 1]?.url ?? "https://www.google.com/imgres?q=a%20cat%20image..."
            }
        })
        

        return NextResponse.json({
            message: "Stream added successfully",
            id: stream.id
        })

    } catch (e) {
        console.log(e)
        return NextResponse.json({
            message: "Error while adding a stream",
        }, {
            status:411
        })
    }
}



export async function GET(req: NextRequest){
    const creatorId = req.nextUrl.searchParams.get("creatorId")
    const streams = await prismaClient.stream.findMany({
        where: {
            userId: creatorId ?? ""
        }
    })

    return NextResponse.json({
        streams
    })
}


