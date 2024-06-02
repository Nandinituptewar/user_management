const express = require( 'express' );
const router = express.Router();
const User = require( '../models/User' );
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );

// Sign-up route
router.post( '/signup', async ( req, res ) =>
{
    const { firstName, lastName, email, password } = req.body;

    try
    {
        const userExists = await User.findOne( { email } );
        if ( userExists )
        {
            return res.status( 400 ).json( { message: 'User already exists' } );
        }

        const user = new User( { firstName, lastName, email, password } );
        await user.save();

        res.status( 201 ).json( { message: 'User created successfully' } );
    } catch ( error )
    {
        res.status( 500 ).json( { message: 'Server error' } );
    }
} );

// Sign-in route
router.post( '/signin', async ( req, res ) =>
{
    const { email, password } = req.body;

    try
    {
        const user = await User.findOne( { email } );
        if ( !user )
        {
            return res.status( 400 ).json( { message: 'Invalid email or password' } );
        }

        const isMatch = await user.matchPassword( password );
        if ( !isMatch )
        {
            return res.status( 400 ).json( { message: 'Invalid email or password' } );
        }

        res.status( 200 ).json( { message: 'Login successful' } );
    } catch ( error )
    {
        res.status( 500 ).json( { message: 'Server error' } );
    }
} );

module.exports = router;
