declare namespace NodeJS {
    export interface ProcessEnv {
        MONGODB_URI:string
        GOOGLE_CLIENT_ID:string
        GOOGLE_CLIENT_SECRET:string
        Discord_CLIENT_ID:string
        Discord_CLIENT_SECRET:string
        NEXTAUTH_URL:string
        NEXTAUTH_SECRET:string
    }
}