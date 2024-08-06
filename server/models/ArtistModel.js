
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    bio: { type: String },
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }], // Referencing the Event model
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Artist', artistSchema);
