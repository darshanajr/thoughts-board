import type { PageServerLoad } from './$types';
import prisma from '../lib/server/prisma';

export const load = (async ({ params }) => {
    const thoughts = await prisma.thought.findMany({
        where: { published: true }
    })

    return {
        thoughts
    }
}) satisfies PageServerLoad