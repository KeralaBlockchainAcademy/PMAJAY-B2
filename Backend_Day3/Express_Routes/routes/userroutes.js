const express = require('express');

const router = express.Router()

router.use(express.json());

let users= [
    {id:1, name: 'John'},
    {id:2, name: 'Jerry'}
];


router.get('/', (req,res) => {
    res.status(200);
    res.json(users);
})


router.post('/', (req,res)=> {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
})


router.put('/:id', (req,res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const userIndex = users.findIndex(user => user.id ===userId);

    if(userIndex !== -1){
        users[userIndex] = {...users[userIndex], ...updatedUser};
        res.json(users[userIndex]);
    }else{
        res.status(404).json({error: 'User not found'})
    }
})

router.delete('/:id', (req,res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id ===userId);

    if (userIndex !== -1) {
        const deleteUser = users.splice(userIndex,1);
        res.json(deleteUser)
    }else{
        res.status(404).json({error: 'User not found'});
    }
})

module.exports = router;
