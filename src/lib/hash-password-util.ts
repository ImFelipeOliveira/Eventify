import bcrypt from "bcryptjs";

export default async function saltAndHashPassword(
  password: string | undefined
) {
  try {
    const salt = await bcrypt.genSalt(10);
    if (password) {
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}
