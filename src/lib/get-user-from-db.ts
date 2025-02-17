import { prisma } from "@/authentication/prisma";
import bcrypt from "bcryptjs";

export default async function getUserFromDb(
  email: string | undefined,
  pwHash: string
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(pwHash, user.password);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  } catch (error) {
    console.error("Erro ao buscar usuário no banco de dados:", error);
    throw new Error("Erro ao autenticar usuário.");
  }
}
