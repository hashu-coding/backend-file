import { Mode } from "../models/Model.schema.js";


export const addData = async (req, res) => {
    try {
        const response = await Mode.find().limit(10);
        // console.log("response is here => ", response);
        if(response) {
            res.send({
                data: response,
                status:201
            })
        }
    } catch (error) {
        console.error("response is not working : ", error);
    }
}



export const insertData = async (req, res) => {
    try {
        const response = await Mode.create(req.body);
        // console.log("response is here => ", response);
        if(response) {
            res.send({
                data: response,
                status:201
            })
        }
    } catch (error) {
        console.error("response is not working : ", error);
    }
}