import type { LayoutServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import type { User } from '$lib/model';

export const load = (async ({ cookies }) => {
    const userId = cookies.get('user')
    let user: (User | null) = null

    if (userId) {
        user = await prisma.user.findUnique({ where: { id: userId } })
    }

    return {
        user
    }
}) satisfies LayoutServerLoad