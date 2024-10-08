


export const HOST=import.meta.env.VITE_SERVER_URL as string 

console.log(HOST,"HELLO HOST")

/**
 * @description {AUTH ROUTES API START HERE}
 */
export const AUTH_ROUTES="/api/auth"



export const SIGNUP_ROUTES=`${AUTH_ROUTES}/signup`
export const LOGIN_ROUTES=`${AUTH_ROUTES}/login`

export const USER_LOGIN_INFO=`${AUTH_ROUTES}/userInfo`

export const USER_LOGOUT_INFO=`${AUTH_ROUTES}/logout`

// VITE_SERVER_URL="http://localhost:4000"


/**
 * @description {CONTACTS ROUTES API START HERE}
 */

    const CONTACTS_ROUTES="/api/contacts"

export const SEARCH_USERS=`${CONTACTS_ROUTES}/searchUser`
