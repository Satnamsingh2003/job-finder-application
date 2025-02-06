import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
      type: String,
      required: true  
    },
    jobType: {
        type: String,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    positions: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    applications: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }
]
} , {timestamps: true});

export default Job = mongoose.model('Job' , jobSchema)
