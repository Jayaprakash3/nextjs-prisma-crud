

import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email, name } = await request.json();
    console.log(email),
        console.log(name)

    try {

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email
            }
        })
        return NextResponse.json(user)

    } catch (e) {
        return NextResponse.json({ error: e })
    }
}