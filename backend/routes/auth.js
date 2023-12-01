const { Router } = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = Router();

const {
  authUser,
  getLoggedUser,
} = require("../controllers/authController");


router.post("/login", authUser);
router.get("/me", protect, getLoggedUser);


module.exports = router;
