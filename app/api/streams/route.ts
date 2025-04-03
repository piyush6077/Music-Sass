import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { prismaClient } from "../lib/db"
const YT_Regex = new RegExp("^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+$")


const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()  //TODO: find if user has yt or spotify type url using zod
})


export async function POST(req: NextRequest){
    try {
        const data = CreateStreamSchema.parse(await req.json())
        const isYt = YT_Regex.test(data.url);
        if(!isYt) {
            return NextResponse.json({
                message: "Wrong URL format"
            }, {
                status: 411
            })
        }

        const extractedId = data.url.split("?v=")[1]; 

        await prismaClient.stream.create({
            data: {
                userId: data.creatorId,
                url: data.url,
                extractedId,
                type: "Youtube"
            }
        })
        //TODO RateLimiting
    } catch (error) {
        return NextResponse.json({
            message: "Error while adding a stream"
        }, {
            status:411
        })
    }
}