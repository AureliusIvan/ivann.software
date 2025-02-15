import { NextResponse } from "next/server"
import prisma from "@lib/prisma"

export async function GET() {
    const articles = await prisma.article.findMany()
    return NextResponse.json(articles)
}

export async function POST(request: Request) {
    const body = await request.json()
    try {
        const article = await prisma.article.create({
            data: {
                title: body.title,
                content: body.content,
                status: body.status,
            },
        })
        return NextResponse.json(article)
    } catch (error) {
        console.log(error)
    }
}
