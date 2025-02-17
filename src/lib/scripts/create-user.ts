import { prisma } from "../../authentication/prisma";
import * as bcrypt from "bcryptjs";

async function createUser() {
  const email = process.env.ROOT_EMAIL;
  const password: string | undefined = process.env.ROOT_PASSWORD;

  if (typeof password === "undefined") {
    console.log("É necessário adicionar uma email para o usuário root");
    return null;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });

  console.log("Usuário criado com sucesso:", user);
}

createUser();
