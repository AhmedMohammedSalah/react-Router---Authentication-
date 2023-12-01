const asyncHandler = require("express-async-handler");
const generateToken = require("../libs/generateToken");


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password })
  if (email && email.toLowerCase() === 'admin@mail.com' && password === '123456789') {
    res.json({
      _id: '1234',
      name: 'Admin',
      email,
      token: generateToken('admin@mail.com'),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    get Logged User by Token
// @route   GET /api/v1/auth/me
// @access  Private
const getLoggedUser = asyncHandler(async (req, res) => {
  // const user = await User.findOne({ email });
  if (!req.user) {
    res.status(400);
    res.json({
      message: "No user ",
    });
  }

  const userData = req.user.id;


  res.status(200).json({
    email: userData,
  });
});

module.exports = {
  authUser,
  getLoggedUser,
};
