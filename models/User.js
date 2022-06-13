const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

// Définition d'un schema qui définit les settings de l'utilisateur
const userSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, 'Firstname is required'],
            // Ôte les espaces
            trim: true,
            text: true,
        },

        last_name: {
            type: String,
            required: [true, 'Lastname is required'],
            trim: true,
            text: true,
        },

        username: {
            type: String,
            required: [true, 'Username is required'],
            trim: true,
            text: true,
            // Il ne doit pas y avoir 2 usernames identiques
            unique: true,
        },

        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
        },

        password: {
            type: String,
            required: [true, 'Password is required'],
        },

        picture: {
            type: String,
            trim: true,
            // image par défaut
            default:
                'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
        },

        cover: {
            type: String,
            trim: true,
        },

        gender: {
            type: String,
            required: [true, 'Gender is required'],
            trim: true,
            enum: ['Male', 'Female'],
        },

        birthdayYear: {
            type: Number,
            required: [true, 'BirthDay year is required'],
            trim: true,
        },

        birthdayMonth: {
            type: Number,
            required: [true, 'BirthDay month is required'],
            trim: true,
        },

        birthdayDay: {
            type: Number,
            required: [true, 'BirthDay day is required'],
            trim: true,
        },

        verified: {
            // compte non vérifié par défaut
            type: Boolean,
            default: false,
        },

        friends: {
            type: Array,
            default: [],
        },

        following: {
            type: Array,
            default: [],
        },

        followers: {
            type: Array,
            default: [],
        },

        requests: {
            typa: Array,
            default: [],
        },

        search: [
            // Recherches concernant un User
            {
                user: {
                    // Déstructuré en haut de script, type: mongoose.Schema.objectId
                    type: ObjectId,
                    ref: 'User',
                },
            },
        ],

        details: {
            bio: {
                type: String,
            },

            otherName: {
                type: String,
            },

            job: {
                type: String,
            },

            workPlace: {
                type: String,
            },

            HighSchool: {
                type: String,
            },

            college: {
                type: String,
            },

            currentCity: {
                type: String,
            },

            homeTown: {
                type: String,
            },

            relationShip: {
                type: String,
                // Listing de correspondance avec "enum"
                enum: ['Single', 'In a relationship', 'Married', 'Divorced'],
            },

            instagram: {
                type: String,
            },
        },

        savedPosts: [
            {
                post: {
                    type: ObjectId,
                    ref: 'Post',
                },

                savedAt: {
                    type: Date,
                    default: new Date(),
                },
            },
        ],
    },
    {
        // createdAt, updatedAt
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
