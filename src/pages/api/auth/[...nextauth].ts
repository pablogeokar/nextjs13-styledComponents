import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // Se o email ou senha não existirem então retorna null
        if (!email || !password) {
          throw new Error("Email e Senha são obrigatórios");
        }

        // Localiza o usuário de acordo com o email informado
        const user = await prisma.user.findFirst({
          where: { email },
        });

        // caso não encontre usuário então retorna null
        if (!user) {
          throw new Error("Este usuário não possui acesso ao sistema");
        }

        // compara a senha informada e o hash salvo no banco
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        // Se o password for invalido então retorna null
        if (!passwordIsValid) {
          throw new Error("Email ou Senha Inválidos");
        }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error("Não foi possível logar no sistema");
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
