const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcryptjs' );
const { SALT_ROUNDS }=require('../common/constant')

const UserSchema = new mongoose.Schema( {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
} );

// Hash password before saving
UserSchema.pre( 'save', async function ( next )
{
    if ( !this.isModified( 'password' ) )
    {
        return next();
    }
    const salt = await bcrypt.genSalt( SALT_ROUNDS );
    this.password = await bcrypt.hash( this.password, salt );
    next();
} );

UserSchema.methods.matchPassword = async function ( password )
{
    return await bcrypt.compare( password, this.password );
};

const User = mongoose.model( 'User', UserSchema );

module.exports = User;
