import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (e) {
        return NextResponse.json({ error: e });
    }
}
