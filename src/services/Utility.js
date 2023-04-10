import { client } from "../configs/connectDB";

async function getValueForNextSequence() {
    try {
        const result = await client
            .db("DataUsers")
            .findAndModify({
                query: { _id: "UNIQUE COUNT DOCUMENT IDENTIFIER" },
                update: {
                    $inc: { COUNT: 1 },
                },
                writeConcern: 'majority'
            });
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
    }
    return null;
}

export {getValueForNextSequence} ;
