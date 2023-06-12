import type { PageServerLoad, Actions } from './$types';
import prisma from '$lib/server/prisma';
import { compare } from '$lib/server/passwordUtil';
import { fail, redirect } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData()
        const username = String(formData.get('username'))
        const password = String(formData.get('password'))

        const errors: Record<string, unknown> = {}
        if (!username) errors.username = 'required'
        if (!password) errors.password = 'required'

        console.log(username, password)

        const user = await prisma.user.findUnique({ where: { username } })
        if (!user || await compare(password, user.password)) errors.message = 'Invalid credentials'

        if (Object.keys(errors).length) {
            const data = {
                data: Object.fromEntries(formData),
                errors
            }

            return fail(400, data)
        }

        cookies.set('user', user!.id, { path: '/' })

        throw redirect(303, '/')
    }
} satisfies Actions;