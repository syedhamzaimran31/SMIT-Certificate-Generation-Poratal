import dotenv from 'dotenv';
dotenv.config()


const serverConfig = {
    appPort: process.env.SERVER_APP_PORT,
    dbUri:process.env.SERVER_APP_DB_URI,
    secretKey:process.env.SERVER_SECRET_KEY,
    sendinblueapikey:process.env.SERVER_SENDINBLUE_APIKEY,
    cloudinaryName:process.env.SERVER_CLOUDINARY_NAME,
    clodinaryApiKey:process.env.SERVER_CLOUDINARY_API_KEY,
    cloudinaryApiSectret:process.env.SERVER_CLOUDINARY_API_SECTRET
}

export {
    serverConfig
}