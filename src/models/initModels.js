const Users = require('./users.models')
const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')


const initModels = () => {
    Users.hasMany(Conversations)
    Conversations.belongsTo(Users)
    Users.hasMany(Participants)
    Participants.belongsTo(Users)
    Users.hasMany(Messages)
    Messages.belongsTo(Users)
    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)
    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)
    Conversations.hasMany(Users)
    Users.belongsTo(Conversations)
    Messages.hasMany(Participants)
    Participants.belongsTo(Messages)
    Messages.hasMany(Conversations)
    Conversations.belongsTo(Messages)
    Messages.hasMany(Users)
    Users.belongsTo(Messages)
    Participants.hasMany(Conversations)
    Conversations.belongsTo(Participants)
    Participants.hasMany(Messages)
    Messages.belongsTo(Participants)
    Participants.hasMany(Users)
    Users.belongsTo(Participants)
}



module.exports = initModels