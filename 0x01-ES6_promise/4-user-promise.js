export default function signUpUser(firstName, lastName) {
  const User = {
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  };
  const promiseA = new Promise((resolve) => {
    resolve(User);
  });
  return promiseA;
}
