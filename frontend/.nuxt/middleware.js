const middleware = {}

middleware['authenticated'] = require('@/middleware/authenticated.js');
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['notAuthenticated'] = require('@/middleware/notAuthenticated.js');
middleware['notAuthenticated'] = middleware['notAuthenticated'].default || middleware['notAuthenticated']

middleware['notAuthenticated.login'] = require('@/middleware/notAuthenticated.login.js');
middleware['notAuthenticated.login'] = middleware['notAuthenticated.login'].default || middleware['notAuthenticated.login']

export default middleware
