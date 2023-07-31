import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
    const { id } = await request.json();
    console.log(id);

    try {
        const deletedUser = await prisma.user.delete({
            where: { id },
        });

        return NextResponse.json(deletedUser);
    } catch (e) {
        return NextResponse.json({ error: e });
    }
}
