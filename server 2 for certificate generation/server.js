import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { serverConfig } from './src/configs/server.config.js';
import { DB_RETRY_LIMIT, DB_RETRY_TIMEOUT } from './src/constants/constants.js';
import route from './src/routes/user.rotes.js';

let connnectionRetries = 0
const connectionDB = async () => {
    try {
        console.log("Establishing DB connection....")
        await mongoose.connect(serverConfig.dbUri);
        console.log('Db connected')

    } catch (error) {
        if (connnectionRetries < DB_RETRY_LIMIT) {
            connnectionRetries++
            console.log(`Reconnecting to DB ${connnectionRetries}/${DB_RETRY_LIMIT}`)
            await new Promise(resolve => setTimeout(resolve, DB_RETRY_TIMEOUT))
            await connectionDB()
        } else {
            process.exit()
        }
    }
}
const PORT = serverConfig.appPort
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure the temp directory exists
// const tempDir = path.join(__dirname, 'temp/certificates');
// const pdfDir = path.join(__dirname, 'tem/pdfs');
// if (!fs.existsSync(tempDir)) {
//     fs.mkdirSync(tempDir);
// }


connectionDB()
    .then(res => console.log("Connected"))
    .catch(err => console.log("DB NOT Connected"))



    // Middleware for Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware for JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())



app.use('/', route)
app.listen(PORT, () => {
    console.log(`server is running on port  ${PORT}`)
})


export default app
