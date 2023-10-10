//const promesseA = new Promise( (resolutionFunc,rejectionFunc) => {
//    resolutionFunc(777);
//});
// Ici, "promesseA" est déjà acquittée.
//promesseA.then((val) => console.log(val, "hello: ", val));
//console.log("journalisation immédiate");

// On aura alors, dans la console, la suite de messages suivante :
// journalisation immédiate
// journalisation asynchrone / val vaut : 777

function getFullResponseFromAPI(success) {

  const promiseA = new Promise( (resolve, reject) => {
    if(success) {
    resolve(
      {

    status: 200,
    body: 'Success',
      }
    );
    }
    else {
    reject(Error('The fake API is not working currently'));
  }

  });

  return promiseA;

}
console.log(getFullResponseFromAPI(true));
