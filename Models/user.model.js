import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type : String,
        required: true,
        unique: true,
    },

    email:{
        type : String,
        required: true,
        unique: true,
    },

    password:{
        type : String,
        required: true
    },

    password:{
        type : String,
        default:""
    },

    searchHistory:{
        type:Array,
        default:[]
    }
})

export const User = mongoose.model('User', userSchema); //create a user collction that is based on this user shcema