
import prisma from "@/prisma";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { NextRequest, NextResponse } from "next/server"
import { error } from "node:console";
import { arrayBuffer } from "node:stream/consumers";

// export const config = { api: { bodyParser: false } };

export const POST = async (req: any) => {
    try {
        const { filename, contentType, itemDetails } = await req.json()
        console.log(filename, contentType)
        console.log(itemDetails)
        const client = new S3Client({
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY!,
                secretAccessKey: process.env.S3_SECRET_KEY!
            },
            region: process.env.S3_REGION!
        })
        const { url, fields } = await createPresignedPost(client, {
            Bucket: process.env.S3_NAME!,
            Key: filename,
            // Conditions: [
            //     ['content-length-range', 0, 10485760], // up to 10 MB
            //     ['starts-with', '$Content-Type', contentType],
            // ],
            Fields: {
                acl: 'public-read',
                'Content-Type': contentType,
            },
            Expires: 600, // Seconds before the presigned post expires. 3600 by default.
        })
        // const formData = await req.formData()

        // if (!formData) {
        //     return NextResponse.json({ error: "Failed to get Form Data" }, { status: 500 })
        // }

        // console.log(formData.get("itemPrice"))

        // const file = await formData.get("image")

        // if (!file) {
        //     return NextResponse.json({ error: "Failed to get file" }, { status: 500 })
        // }
        // console.log(file.name)
        // const buffer = Buffer.from(await file.arrayBuffer())
        // if (!buffer) {
        //     return NextResponse.json({ error: "Failed to create file buffer" }, { status: 500 })
        // }
        const s3 = new S3Client({
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY!,
                secretAccessKey: process.env.S3_SECRET_KEY!
            },
            region: process.env.S3_REGION!
        })

        // const command = new PutObjectCommand({
        //     Bucket: process.env.S3_NAME!,
        //     Key: file.name,
        //     Body: buffer,
        //     ContentType: `image/${file.name.split("").map((i: string, key: number) => { if (key > (file.name.length - 4)) { return i } }).join("")}`
        // })

        // await s3.send(command)

        const cloudfrontString = `https://d28uq625kfun5r.cloudfront.net/${filename}?Signature=2f1efadace45e6ee52819958515f7103ec104a94aa5bcfa617971dbd6f80338`
        await prisma.$connect()
        const newItem = await prisma.items.create({ data: { image: cloudfrontString, name: itemDetails.itemName, price: Number(itemDetails.itemPrice), asIsBitEnds: itemDetails.bitEnds, asIsBitMovement: itemDetails.bitMovement, asIsFinish: itemDetails.finish, asIsHeight: itemDetails.height, asIsMouthpieceAngle: itemDetails.mouthpieceAngle, asIsMouthpieceStyle: itemDetails.mouthppieceStyle, asIsSizeCheek: itemDetails.sizeCheek, asIsStyle: itemDetails.style, asIsTheme: itemDetails.theme, asIsTongueRelief: itemDetails.asIsTongueRelief, asIsWithCopperHoodAndCricket: itemDetails.chc } })
        if (!newItem) {
            return NextResponse.json({ error: "Failed to create new item" }, { status: 500 })
        }
        return NextResponse.json({ success: true, url, fields, item: newItem }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
