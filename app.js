const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());

const users = [
    {id: 'debanil', name: 'Debanil'},
    {id: 'swaroop', name: 'Swaroop'},
    {id: 'vimarsh', name: 'Vimarsh'},
    {id: 'madan', name: 'Madan'},
    {id: 'pankaj', name: 'Pankaj'},
];

const actors = [
    {id: '1', name: 'Dhanush'},
    {id: '2', name: 'Rajni'},
    {id: '3', name: 'Amir'},
];

const movieActor = [
    {id: '1', name: 'Movie A'},
    {id: '3', name: 'Movie A'},
    {id: '2', name: 'Movie B'},
    {id: '1', name: 'Movie C'},
]

app.get('/userid/actor',(req,res)=>{
    console.log(req.body);
})


module.exports=app;