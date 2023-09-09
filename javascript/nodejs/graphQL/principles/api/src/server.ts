import app from './app';

app.listen(app.get('port'), ()=> {
    // init app 
    console.log('localhost 4000s running')
})