import bcrypt from "bcrypt";

const encryptPassword = (password: string, callback: (h: string) => any) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => callback(hash));
  });
};

export default encryptPassword;
