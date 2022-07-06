const mongoose = require('mongoose'); //mongoose is a MONGODB object modeling tool mongoose require connection
//to mongodb database 

const Schema = mongoose.Schema; 

let Client = new Schema({
    ClientName: {
        type: String
    },
    ClientBio: {
        type: String
    },
    ClientAge: {
        type: Number
    },
    ClientAddress: {
        type: String
    },
    CaseTitle: {
        type: String
    },
    LastHearingDate: {
        type: String
    },
    NextHearingDate: {
        type: String
    },
    CourtName: {
        type: String
    },
    JudgeName: {
        type: String
    },
    JudgeRemarks: {
        type: String
    },
    lr: {
        type: String
    },

}, {
    collection: 'Client'
});
module.exports = mongoose.model('Client', Client); //to use our schema definition we need 
//to convert our "client" schema into model so we pass it inot mongoose.model(modelname, schema)
