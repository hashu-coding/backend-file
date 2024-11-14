import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    id: {
    type: Number,
    require: true,
    unique: true
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require : true
    },
    city: {
        type: String,
        require: true
    }
})

export const Mode = mongoose.model("Mode", useSchema);