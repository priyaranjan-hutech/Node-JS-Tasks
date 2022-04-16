const app=require('./app');

app.listen(3000, (err) => {
    if(err) console.error(err);
    console.log(`Server is running in port 3000`);
})