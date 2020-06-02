const userRoutes = require('./users');
const userIdRoutes = require('./userID');

const appRouter = (app, fs) => {

    
    // the base API url
    app.get('/', (req, res) => {
        res.send('welcome to the development test2');
    });


    // run our user route 
    userRoutes(app, fs);

    // run our userID route 
    userIdRoutes(app, fs);
};

module.exports = appRouter;