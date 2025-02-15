import { Roles } from '@/types/globals'
import { auth } from '@clerk/nextjs/server'

export const checkRole = async (role: Roles) => {
    const {sessionClaims} = await auth()
    // if the user is not signed in, return false
    if (!sessionClaims) return false

    console.log(sessionClaims)
    return sessionClaims;
    // return sessionClaims?.metadata?.role === role
}
