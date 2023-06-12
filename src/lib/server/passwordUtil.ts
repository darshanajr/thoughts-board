import bcrypt from 'bcrypt'

const saultRounds = 10

export const hash = async (password: string) => {
    return await bcrypt.hash(password, saultRounds)
}

export const compare = async (password: string, hashPassword: string) => {
    return await bcrypt.compare(password, hashPassword)
}