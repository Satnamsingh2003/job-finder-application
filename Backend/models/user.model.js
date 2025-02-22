import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ['student' , 'recruiter'],
    required: true,
  },
  profile: {
    bio:{type: String},
    skills: [{type: String}],
    company: {type: mongoose.Schema.Types.ObjectId , ref: 'Company'},
    resume: {type: String},
    resumeOriginalName: {type: String},
    profilePhoto:{
      type: String,
      default: "",
    }
  }
} , {timestamps: true});

export default User = mongoose.model('User' , userSchema)
