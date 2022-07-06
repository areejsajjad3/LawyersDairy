const express = require('express');
const app = express();
const clientRoutes = express.Router();

//require member model in our router module.. 
let Client = require('../models/Client');

//Defined store/post route
clientRoutes.route('/add').post(function(req, res) {
    let client = new Client(req.body);
    client.save()
        .then(client => {
            res.status(200).json({ 'Client': 'Client has been added successfully' })
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});
//define getdata route link
clientRoutes.route('/').get(function(req, res) {

    Client.find(function(err, clients) {
        if (err) {
            console.log(err);
        } else {
            res.json(clients)
        }
    });
});
//define edit route link
clientRoutes.route('/edit/:id').get(function(req, res) {
    let id = req.params.id;
    Client.findById(id, function(err, client) {
        res.json(client);
    });
});
//define update route link
clientRoutes.route('/update/:id').post(function(req, res) {
    Client.findById(req.params.id, function(err, client) {
        if (!client)
            res.status(404).send("Record not found");
        else {
            client.ClientName = req.body.ClientName;
            client.ClientBio = req.body.ClientBio;
            client.ClientAge = req.body.ClientAge;
            client.ClientAddress = req.body.ClientAddress;
            client.CaseTitle = req.body.CaseTitle;

            client.LastHearingDate = req.body.LastHearingDate;
            client.NextHearingDate = req.body.NextHearingDate;
            client.CourtName = req.body.CourtName;
            client.JudgeName = req.body.JudgeName;
            client.JudgeRemarks = req.body.JudgeRemarks;
            client.lr = req.body.lr;





            client.save().then(client => {
                    res.json('update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});
//define delete route llink
clientRoutes.route('/delete/:id').get(function(req, res) {
    Client.findByIdAndRemove({ _id: req.params.id }, function(err, client) {
        if (err) res.json(err);
        else res.json('Successfully removed');

    });
});
module.exports = clientRoutes;
//mongoose model is used to save, update, delete the daat from database it will handle all CRUD tasks at backend 
//crud operation functions are setup in router link har operation k liye router link bana diya hai