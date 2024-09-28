


export const HOST=import.meta.env.VITE_SERVER_URL as string 

console.log(HOST,"HELLO HOST")
export const AUTH_ROUTES="/api/auth"

export const SIGNUP_ROUTES=`${AUTH_ROUTES}/signup`
export const LOGIN_ROUTES=`${AUTH_ROUTES}/login`

export const USER_LOGIN_INFO=`${AUTH_ROUTES}/userInfo`

// VITE_SERVER_URL="http://localhost:4000"