const users = [
    {
        id: 1,
        name: 'Kasun',

    },
    {
        id: 2,
        name: 'Malith',
    }

];

const getUsers = (cb) => {
    cb(users);

};

const getUserbyId = (id, cb) => {
    const users = users.find(user => user.id == id);
    cb(user);


};

exports.getUsers = getUsers;
exports.getUserbyId = getUserbyId;