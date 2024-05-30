const mongoose = require('mongoose')
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim:true,
        maxlength:[50,'Name can not be more than 50 characters']
    },
    slug:String,
    description:{
        type:String,
        required:[true,"Please add a description."],
        maxlength:[500,'Description can not be more than 500 chanracters.'],

    },
    website:{
        type:String,
        match:[/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/, "Please enter a valid website URL with HTTP or HTTPS."]
    },
    phone:{
        type:String,
        maxlength:[20,'Phone number can not be more than 20 characters.'],
        minlength:[6,'Phone number can not be less than 6 characters']
    },
    email:{
        type:String,
        match:[/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address."]
    },
    address:{
        type:String,
        required:[true,"Please add an address"]
    },
    location:{
        //GeoJSON Point
        type:{
            type:String,
            enum:['Point'],
            required:true
        },
        coordinates:{
            type:[Number],
            required:true,
            index:"2dsphere"
        },
        formattedAddress:String,
        street:String,
        city:String,
        state:String,
        zipcode:String,
        country:String

    },
    careers:{
        //Array of strings
        type:[String],
        required:true,
        enum:['Web Development', 'Mobile Development', 'UI/UX', 'Data Science', 'Business', 'Other']
    },
    averageRating:{
        type:Number,
        min:[1,'Rating must be at least 1'],
        max:[10,'Rating can not be more than 10'],
    },
    averageCost:Number,
    photo:{
        type:String,
        default:'no-photo.jpg'
    },
    housing:{
        type:Boolean,
        default:false
    },
    jobGuarantee:{
        type:Boolean,
        default:false 
    },
    acceptGi:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Bootcamp',BootcampSchema);