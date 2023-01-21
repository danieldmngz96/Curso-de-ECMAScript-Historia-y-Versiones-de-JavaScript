// enhaced ovject literals 
function newUser(user, age, contry, uid){
    return{
        user,
        age,
        contry,
        id: uid
    };
}

console.log(newUser('daniel.dmngz', 28, 'CO',0));