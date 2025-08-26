import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectingDb = async () => {
    try {
        const dbReturn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Db Return Stringh sahil: ${dbReturn.connection.host}`)

    } catch(error) {
        console.log("ERROR in mongo connection: ",error);
        process.exit(1)
    }
}


export default connectingDb;