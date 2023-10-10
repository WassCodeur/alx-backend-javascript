export default function uploadPhoto(filename) {
  const promiseA = new Promise((reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
  return promiseA;
}
