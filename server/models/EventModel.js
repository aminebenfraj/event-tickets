// models/Event.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    place: { type: String, required: true },
    images: [{ type: String }],
    organizer: { type: Schema.Types.ObjectId, ref: 'UserEvent', required: true },
    attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }],
    artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
