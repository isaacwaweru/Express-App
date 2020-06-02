const userIdRoutes = (app, fs) => {

    // get users 
    const dataPath = './data/users.json';

    
    // refactored helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };


    // READ by id
    app.get('/users/:id', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let users =JSON.parse(data);
            const found = users.find(item => item.id===parseInt(req.params.id ));
            if(found===undefined){
                res.send({
                    message:"user not found"
                });
 
            }else
            res.send(found);

        });
    });
};

module.exports = userIdRoutes;