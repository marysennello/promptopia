// using this to connect / hook up to database

import mongoose from 'mongoose';

let isConnected = false; //track connection status

export const connectToDB = async () => {
    //sets mongoose options, if we don't do this warnings in console
    mongoose.set('strictQuery', true)

 
    if(isConnected) {
      console.log('MongoDB is already connected')
      return;
    }
    //if not connected...
    try {
      //try to establish connection
      //mongodb uri - the database we want to connect to to save the users. mongodb atlas which is an online cloud storage to create our database.
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

      isConnected = true;
      
      console.log('MongoDB connected')

    } catch (error) {
      console.log(error);
    }

}