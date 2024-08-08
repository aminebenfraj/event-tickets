const UserEvent = require('../models/UserEventModel');
const Event = require('../models/EventModel');

// Create a new User Event
module.exports.createUserEvent = async (req, res) => {
    try {
        const newUserEvent = await UserEvent.create(req.body);
        res.status(201).json(newUserEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all User Events
module.exports.getAllUserEvents = async (req, res) => {
    try {
        const userEvents = await UserEvent.find().populate('createdEvents');
        res.status(200).json(userEvents);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Get a User Event by ID
module.exports.getUserEventById = async (req, res) => {
    try {
        const userEvent = await UserEvent.findById(req.params.id).populate('createdEvents');
        if (!userEvent) {
            return res.status(404).json({ error: 'User Event not found' });
        }
        res.status(200).json(userEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a User Event by ID
module.exports.updateUserEventById = async (req, res) => {
    try {
        const updatedUserEvent = await UserEvent.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedUserEvent) {
            return res.status(404).json({ error: 'User Event not found' });
        }
        res.status(200).json(updatedUserEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a User Event by ID
module.exports.deleteUserEventById = async (req, res) => {
    try {
        const deletedUserEvent = await UserEvent.findByIdAndDelete(req.params.id);
        if (!deletedUserEvent) {
            return res.status(404).json({ error: 'User Event not found' });
        }
        res.status(200).json({ message: 'User Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
