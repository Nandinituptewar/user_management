const express = require( 'express' );
const mongoose = require( 'mongoose' );
const authRoutes = require( './routes/auth' );
require( 'dotenv' ).config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use( express.json() );

// Connect to MongoDB
mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => console.log( 'MongoDB connected' ) )
    .catch( err => console.log( err ) );

app.use( '/api/auth', authRoutes );

app.listen( PORT, () =>
{
    console.log( `Server running on port ${ PORT }` );
} );
