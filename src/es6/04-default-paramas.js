function newUser(name, age, country, email, password){
    var name = name || 'Daniel Anonymous 👽';
    var age = age || 27;
    var country = country || 'Chia Anonymous 🎇';
    var email   = email || 'daniel@daniel,com';
    var password = password;

    console.log(name, age, country, email, password);
}

newUser();

//Nueva manera de asignar parametros por defecto

function newAdmin(name="Mateo", age=23, country="zipot", email="Matein@hotm.com", password=122333){
    console.log(name+" "+age+" "+country+" "+password +" "+email);
}

newAdmin();
newAdmin("freddy", 33,"bogota", "freddito@gmail.com", 12354);