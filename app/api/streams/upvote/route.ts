import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prismaClient } from "../../lib/db";


const UpvoteSchema = z.object({
    streamId: z.string()
})

export async function POST(req: NextRequest){
    const session = await getServerSession();
    // TODO: You can get Rid of the db call here  
    if(!session?.user?.email){
        return NextResponse.json({
            message: "Unauthenticated"
        }, {
            status: 403
        })
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: session?.user?.email ?? ""
        }
    });

    if (!user) {
        return NextResponse.json({
            message: "Unauthenticated"
        }, {
            status: 403
        })
    }


    try {
        const data = UpvoteSchema.parse(await req.json())
        await prismaClient.upvote.create({
            data: {
                userId: user.id,
                streamId: data.streamId
            }
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error while upvoting"
        },{
            status: 403
        })
    }
}