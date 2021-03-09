import express from 'express';
import path from 'path';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use('/images', express.static(path.join(__dirname, '../assets')));

const port = process.env.PORT || 8001;

import indexRouter from './routes/index';
import usersRouter from './routes/users';

 

app.use('/', indexRouter);
app.use('/', usersRouter); 


app.listen(port, () => {
  console.log(`Server start on port: ${8001}`)
})

module.exports= app;