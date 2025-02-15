"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client({
    endpoint: process.env.AWS_S3_ENDPOINT,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})

export async function uploadToS3(file: File): Promise<string> {
    const fileName = `${Date.now()}-${file.name}`
    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: file,
        ContentType: file.type,
    }

    try {
        await s3Client.send(new PutObjectCommand(params))
        return `https://${process.env.AWS_S3_ENDPOINT}/${process.env.AWS_S3_BUCKET_NAME}/${fileName}`
    } catch (error) {
        console.error("Error uploading file:", error)
        throw error
    }
}
