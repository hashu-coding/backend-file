import mongoose  from "mongoose";

export const conn = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/tempData");
    } catch (error) {
        console.error("connection failled => => ", error);
    }
}
