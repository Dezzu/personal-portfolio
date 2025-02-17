import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import * as nodemailer from "nodemailer";

export const emailRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        text: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      try {
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.SMTP_USER,
          subject: "Richiesta sito web",
          text: `
            Nome: ${input.name}
            Email: ${input.email}
            Messaggio: ${input.text}
          `,
        });

        return { success: true, message: "Email sent!" };
      } catch (error) {
        console.error("Email error:", error);
        throw new Error("Failed to send email");
      }
    }),
});
