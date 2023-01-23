const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
        resolve("correcto HTTP 202")
        }else{
        reject('bas rquest HTTP 404 505')
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => {console.log("FINALLY!")})