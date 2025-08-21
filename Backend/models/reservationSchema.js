import mongoose from 'mongoose';
import validator from 'validator';


const reservationSchema = new mongoose.Schema({
    firstName:
    {
        type : String,
        required: true,
        minLength:[3,"First name must be at least 3 characters long"],
        maxLength:[30,"First name must not exceed 30 characters"],
    },
    lastName:
    {
        type : String,
        required: true,
        minLength:[3,"last name must be at least 3 characters long"],
        maxLength:[30,"last name must not exceed 30 characters"],
    },
    email:{
        type : String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    phone:{
        type : String,
        required: true,
        minLength:[11,"Phone number must be at least 11 characters long"],
        maxLength:[11,"Phone number must be at least 11 characters long"],
    },
    time:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    }
})


export const Reservation = mongoose.model("Reservation", reservationSchema);
export default reservationSchema;