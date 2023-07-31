export default function uploadPhoto(filename) {
  const promiseA = new Promise((reject) => {
    reject(Error(`${filename} cannot be processed`));
  });
  return promiseA;
}
