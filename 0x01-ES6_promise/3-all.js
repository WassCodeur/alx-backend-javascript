import { uploadPhoto, createUser } from './utils';

const Photo = uploadPhoto();
const User = createUser();
export default function handleProfileSignup() {
  Promise.all([Photo, User])
    .then((results) => {
      const msg = `${results[0].body} ${results[1].firstName} ${results[1].lastName}`;
      console.log(msg);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
