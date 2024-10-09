"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { useUrls } from "../hooks/useUrls";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useUrlValidation } from "@/features/dashboard/hooks/useUrlValidation";

const formSchema = z.object({
  url: z
    .string()
    .url({ message: "Insira uma URL válida." })
    .min(1, { message: "A URL é obrigatória." }),
  name: z
    .string()
    .min(2, { message: "O nome da URL deve ter no mínimo 2 caracteres." }),
});

type FormData = z.infer<typeof formSchema>;

interface AddUrlFormProps {
  closeModal?: () => void;
}

const AddUrlForm = ({ closeModal }: AddUrlFormProps) => {
  const { toast } = useToast();
  const { token } = useAuth();
  const { addUrl } = useUrls();
  const router = useRouter();

  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      name: "",
    },
  });

  const { isValid: isUrlValid } = useUrlValidation(form.watch("url"));

  const onSubmit = async (data: FormData) => {
    setSubmitError("");
    setLoading(true);
    try {
      if (!isUrlValid) {
        throw new Error("Insira uma URL válida do YouTube.");
      }

      if (token) {
        await addUrl(data.url, data.name);

        toast({
          title: "Sucesso!",
          description: "URL adicionada com sucesso.",
        });

        if (closeModal) closeModal();

        router.push("/dashboard");
      } else {
        throw new Error("Usuário não autenticado.");
      }
    } catch (err) {
      setSubmitError((err as Error).message);

      toast({
        title: "Erro!",
        description: "Algo inesperado aconteceu. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da URL</FormLabel>
              <FormControl>
                <Input placeholder="Nome do vídeo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL do YouTube</FormLabel>
              <FormControl>
                <Input placeholder="https://www.youtube.com/..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitError && <p className="text-red-500">{submitError}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Adicionando..." : "Adicionar URL"}
        </Button>
      </form>
    </Form>
  );
};

export default AddUrlForm;
