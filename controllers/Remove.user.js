import { Mode } from "../models/Model.schema.js";


export const deleData = async (req, res) => {
    try {
        const response = await Mode.findOneAndDelete({id: {$eq : 1}}, req.body , {id: true});
        console.log("delete data is here => : ", response);
    } catch (error) {
        console.error("controller is not working ==> : ", error);
    }
} 