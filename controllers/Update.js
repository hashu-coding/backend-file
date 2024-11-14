import { Mode } from "../models/Model.schema.js";

export const uptoDate = async (req, res) => {
    try {
        const response = await Mode.findOneAndUpdate({name: {$eq : "Kavita"}}, req.body , {name: true});
        console.log("update data in this users => : ", response);
    } catch (error) {
        console.error("response is null : ", error);
    }
}