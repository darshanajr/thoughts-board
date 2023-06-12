import type { Actions } from './$types';
import prisma from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { hash } from '$lib/server/passwordUtil';

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData()
        const username = String(formData.get('username'))
        const password = String(formData.get('password'))

        const errors: Record<string, unknown> = {}
        if (!username) errors.username = 'required'
        if (!password) errors.password = 'required'

        const userExists = await prisma.user.findUnique({ where: { username } })
        if (userExists) errors.userExists = 'Already registered'

        if (Object.keys(errors).length) {
            const data = {
                data: Object.fromEntries(formData),
                errors
            }

            return fail(400, data)
        }

        const user = await prisma.user.create({
            data: {
                username,
                password: await hash(password)
            }
        })

        cookies.set('user', user.id, { path: '/' })

        throw redirect(303, '/')
    }
} satisfies Actions;