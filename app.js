const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());

const usersGetData = (userid) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.id == userid)
            resolve(user);
            if (!user) reject("user not found");
        }, 2000)
    })
}

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

const movieList = [
    {id: '1', name: 'Movie A', actors: ['1', '2']},
    {id: '3', name: 'Movie B', actors: ['1']},
    {id: '2', name: 'Movie B', actors: ['3']},
    {id: '1', name: 'Movie D', actors: ['2', '3']},
];

const getUser = (userid) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.id == userid)
            resolve(user);
            if (!user) reject("user not found");
        }, 2000);
    });
}

const getActor = (actorName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const actor = actors.find(a => a.name.toLowerCase() == actorName.toLowerCase())
            resolve(actor);
            if (!actor) reject("actor not found");
        }, 2000);
    });
}

const getMovies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Failed");
        }, 2500);
    });
}


app.get('/user/:id/actor/:name', async (req,res)=>{
    try {
        const userid = req.params.id;
        const actorName = req.params.name;

        Promise.allSettled([getMovies(), getUser(userid), getActor(actorName)]).then(d => {
            console.log(d[0]);
            console.log(d[1]);
            console.log(d[2]);
            res.send('done')
        }).catch(e => {
            res.status(500).send("Unexpected Error.")
            console.log(e);
        })

        // // movies
        // const movies = await getMovies();

        // // get user
        // const user = await getUser(userid);
        // console.log(user);

        // // get actor
        // const actor = await getActor(actorName);
        // console.log(actor);

        // const filteredMovies = movies.filter((movie) => {
        //     return movie.actors.includes(actor.id);
        // })
        // res.send([user, actor, filteredMovies]);
    } catch (err) {
        console.error(err);
    }
})


module.exports=app;