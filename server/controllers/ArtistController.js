const Artist = require('../models/ArtistModel');

// Create a new Artist
module.exports.createArtist = async (req, res) => {
    try {
        const newArtist = await Artist.create(req.body);
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all Artists
module.exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.status(200).json(artists);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Get an Artist by ID
module.exports.getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (!artist) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an Artist by ID
module.exports.updateArtistById = async (req, res) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedArtist) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        res.status(200).json(updatedArtist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an Artist by ID
module.exports.deleteArtistById = async (req, res) => {
    try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
        if (!deletedArtist) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        res.status(200).json({ message: 'Artist deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
