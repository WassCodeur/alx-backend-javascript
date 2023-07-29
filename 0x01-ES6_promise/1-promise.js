export default function getFullResponseFromAPI(success) {
  const suc = {
    status: 200,
    body: 'Success',
  };
  const promiseA = new Promise((resolve, reject) => {
    if (success) {
      resolve(suc);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  return promiseA;
}
