import express from 'express';
import path from 'path';
import history from 'connect-history-api-fallback';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use('/images', express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.resolve(__dirname, '../dist'), { maxAge: '1yr', etag: false }));
app.use(history());

// const port = process.env.PORT || 8001;

//Import the routers files
import indexRouter from './routes/index';
import usersRouter from './routes/users';

 

app.use('/', indexRouter);
app.use('/', usersRouter); 


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

//Listen to server
app.listen(process.env.PORT || 8001, () => {
  console.log('Server start on port: 8001')
})

module.exports= app;