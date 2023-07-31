import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
    const { id, email, name } = await request.json();
   

    try {
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                name,
                email,
            },
        });

        return NextResponse.json(updatedUser);
    } catch (e) {
        return NextResponse.json({ error: e });
    }
}
