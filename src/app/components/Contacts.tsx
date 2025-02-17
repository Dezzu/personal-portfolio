"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { api } from "~/trpc/react";
import { useToast } from "@/src/hooks/use-toast";

function Contacts() {
  const emailMutation = api.email.sendEmail.useMutation();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z
      .string({ required_error: "Campo obbligatorio" })
      .min(2, { message: "Il nome deve avere almeno 2 caratteri" })
      .max(50, { message: "Il nome non può superare i 50 caratteri" })
      .nonempty({ message: "Il nome è obbligatorio" }),
    email: z
      .string({ required_error: "Campo obbligatorio" })
      .email({ message: "Inserisci un'email valida" }),
    message: z
      .string({ required_error: "Campo obbligatorio" })
      .max(500, { message: "Il messaggio non può superare i 500 caratteri" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      email: undefined,
      message: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const result = await emailMutation.mutateAsync({
      email: values.email,
      name: values.name,
      text: values.message,
    });
    console.log(result);
    if (result.success) {
      toast({
        variant: "success",
        title: "Email inviata!",
        description:
          "Grazie per avermi contattato, verrai ricontattato quanto prima!",
      });
    } else {
      toast({
        variant: "error",
        title: "Mi dispiace!",
        description:
          "Non sono riuscito a mandare la mail, riprova più tardi o contattami direttamente!",
      });
    }
  }

  return (
    <div
      id="contacts"
      className="flex flex-col items-center justify-center bg-gray-900 py-12"
    >
      <h2 className="mb-6 text-center text-3xl font-bold">Contatti</h2>
      <div className="w-full px-4 sm:w-fit">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col"
          >
            <div className="flex w-full flex-col gap-0 sm:flex-row sm:gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel className="text-lg">Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel className="text-lg">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel className="text-lg">Messagio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Messaggio" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="rounded bg-black-300 hover:bg-slate-500"
              disabled={emailMutation.isPending}
            >
              Invia!
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Contacts;
