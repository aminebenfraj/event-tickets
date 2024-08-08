const { Router } = require("express");
const { getAllUserEvents, createUserEvent, updateUserEventById, deleteUserEventById, getUserEventById } = require("../controllers/UserEventController");
const router = Router();

router.get("/AllUserEvents", getAllUserEvents);
router.post("/UserEvent", createUserEvent);
router.put("/UserEvent/update/:id", updateUserEventById);
router.delete("/UserEvent/delete/:id", deleteUserEventById);
router.get("/UserEvent/:id", getUserEventById);


router.post("/artists", createArtist);
router.get("/artists", getAllArtists);
router.get("/artists/:id", getArtistById);
router.put("/artists/:id", updateArtistById);
router.delete("/artists/:id", deleteArtistById);

module.exports = router;
