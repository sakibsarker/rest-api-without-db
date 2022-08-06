const { v4: uuidv4 }=require('uuid');
const users=[
    {
        id:uuidv4(),
        username:"sakib sarker",
        email:"sakib@gmail.com"
    },
    {
        id:uuidv4(),
        username:"sohel rana",
        email:"sohel@yahoo.com"
    },
];
module.exports=users;