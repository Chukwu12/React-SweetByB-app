export const ensureAuth = (req, res, next) => {
<<<<<<< HEAD
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    } else {
      return res.status(401).json({ message: "Unauthorized: Please log in." });
    }
  };
  
=======
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).json({ message: "Unauthorized: Please log in." });
  }
};
>>>>>>> c12718f69537c3ccc2acad518c4fe7f21444a91c
