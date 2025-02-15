import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    const settings = await prisma.configuration.findMany()
    return NextResponse.json(settings)
}

export async function POST(request: Request) {
    const body = await request.json()
    const {key, value} = body

    const setting = await prisma.configuration.upsert({
        where: {key},
        update: {value},
        create: {key, value},
    })

    return NextResponse.json(setting)
}
