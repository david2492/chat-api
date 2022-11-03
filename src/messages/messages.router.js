const router = require('express').Router()
const passport = require('passport')
require('../middlewares/auth.middleware')(passport)
const messagesServices = require('./messages.services')
const userServices = require('../users/users.services')
const adminValidate = require('../middlewares/role.middleware')
 

router.route('/:conversation_id/messages')
    .get(passport.authenticate('jwt', {session: false}),messagesServices.getMsgByConversationId)
    .post(passport.authenticate('jwt',{session: false}),adminValidate,messagesServices.createMessage)


router.route('/:conversation_id/messages/:message_id')
    .get(passport.authenticate('jwt',{session: false}),messagesServices.getMsgByMessageId)
    .delete(passport.authenticate('jwt',{session: false}),adminValidate,messagesServices.deleteMsgByMessageId)


    
module.exports = router