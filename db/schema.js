const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema(
  { email:     { type: String, required: true }
  , password:  { type: String, required: true }
  , createdAt: { type: Date, default: Date.now }
  }
)
// ----------------------
// USER DETAILS
// ----------------------
const userDetailSchema = new mongoose.Schema(
  { userID   : { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  , email    : { type: String, required: true, trim: true }
  , lastName : { type: String, trim: true }
  , firstName: { type: String, trim: true }
  , createdAt: { type: Date, default   : Date.now }
  , itemCollection : [{type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
  , attendanceCollection : [{type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }]
  })


// ----------------------
// ITEM
// ----------------------
const itemSchema = new mongoose.Schema(
  { userDetailID: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDetail' }
  , eventID     : { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }
  , itemName    : { type: String, required                   : true, trim: true }
  , itemQuantity: { type: String, required                   : true, trim: true }
  , createdAt   : { type: Date, default                      : Date.now }
  })

// ----------------------
// EVENTS
// ----------------------
const eventSchema = new mongoose.Schema(
  { title               : { type  : String, required     : true, trim: true }
  , description         : { type  : String, required     : true, trim: true }
  , location            : { type  : String, required     : true, trim: true }
  , eventDate           : { type  : Date, default        : Date.now }
  , hostID              : { type  : mongoose.Schema.Types.ObjectId, ref: 'UserDetail' }
  , itemCollection      : [{ type : mongoose.Schema.Types.ObjectId, ref: 'Item' }]
  , attendanceCollection: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance'}]
  , createdAt           : { type  : Date, default                      : Date.now }
})
// ----------------------
// EVENT DETAIL
// ----------------------
const eventDetailSchema = new mongoose.Schema(
  { eventID    : { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }
  , hostID     : { type: mongoose.Schema.Types.ObjectId, ref: 'UserDetail' }
  , description: { type: String, required: true, trim: true }
  , title      : { type: String, required: true, trim: true }
  , location   : { type: String, required: true, trim: true }
  , eventDate  : { type: Date, default   : Date.now }
  , createdAt  : { type: Date, default   : Date.now }
  }
)
// ----------------------
// ATTENDANCE
// ----------------------
const attendanceSchema = new mongoose.Schema(
  { userDetailID : { type: mongoose.Schema.Types.ObjectId, ref: 'UserDetail' }
  , eventID      : { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }
  , userPartySize: { type: Number, required                   : true, trim: true }
  , createdAt    : { type: Date, default                      : Date.now }
  }
)

//MONGOOSE SCHEMAS:
module.exports =
{ User: mongoose.model('User', usersSchema)
, UserDetail: mongoose.model('UserDetail', userDetailSchema)
, Item: mongoose.model('Item', itemSchema)
, Event: mongoose.model('Event', eventSchema)
, EventDetail: mongoose.model('EventDetail', eventDetailSchema)
, Attendance: mongoose.model('Attendance', attendanceSchema)
}

