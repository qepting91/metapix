const logRequest = (req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
  };
  
  const authenticate = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(401).send({ error: 'Unauthorized' });
    }
    const token = authorization.split(' ')[1];
    // Verify token here
    next();
  };
  
  module.exports = {
    logRequest,
    authenticate
  };
  