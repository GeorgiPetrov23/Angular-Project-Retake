const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    // const token = req.headers.authorization?.split(' ')[1];
    // if (!token) return res.status(401).json({ message: 'Auth token missing' });
    // try {
    //     const decoded = jwt.verify(token, jwtSecret);
    //     req.user = decoded;
    //     next();
    // } catch (err) {
    //     res.status(403).json({ message: 'Invalid token' });
    // }


//     try {
//     const token =
//       req.cookies?.token ||
//       (req.headers.authorization?.startsWith('Bearer ')
//         ? req.headers.authorization.split(' ')[1]
//         : null);

//     if (!token) return res.status(401).json({ message: 'Not authenticated' });

//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { id: payload.id };
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid or expired token' });
//   }
    const raw =
    req.cookies['auth-cookie'] ||
    (req.headers.authorization?.startsWith('Bearer ')
      ? req.headers.authorization.split(' ')[1]
      : null);

  if (!raw) return res.status(401).json({ message: 'Not authenticated' });

  try {
    const { id } = jwt.verify(raw, process.env.JWT_SECRET);
    req.user = { id };
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};