import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization; // Use Authorization header

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
  }

  const token = authHeader.split(' ')[1]; // Extract token after "Bearer "

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.id) {
      req.user = { id: decoded.id }; // Attach decoded user ID to req.user
      next(); // Proceed to the next middleware or route handler
    } else {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
    }
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
};

export default userAuth;
