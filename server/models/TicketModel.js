const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    price: { type: Number, required: true },
    qrCode: { type: String, required: true },
    isValid: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
