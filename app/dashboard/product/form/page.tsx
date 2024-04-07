"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { request } from "@/lib/request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { object, string, z } from "zod";

const formSchema = object({
  name: string().min(1, "Please input name"),
  url: string().min(1, "Please input url"),
  description: string().min(1, "Please input description"),
  type: string(),
  tag: string(),
});

async function updateProduct(url: string, { arg }: { arg: any }) {
  const { id, ...restData } = arg;
  await fetch(url, {
    body: JSON.stringify(restData),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function createProduct(url: string, { arg }: { arg: any }) {
  const { id, ...restData } = arg;
  await fetch(url, {
    body: JSON.stringify(restData),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const ProductForm = () => {
  const { toast } = useToast();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data } = useSWR(() => `/platform/${id}`);
  const { trigger } = useSWRMutation(
    id ? () => `/platform/${id}` : "/platform",
    !!id ? updateProduct : createProduct,
    {
      onSuccess() {
        toast({
          duration: 300,
          description: !!id
            ? "Record successful update"
            : "Record created successfully",
        });
        replace("/dashboard/product");
      },
    }
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      url: "",
      description: "",
      type: "database",
      tag: "mongodb",
    },
  });

  React.useEffect(() => {
    if (!!id) {
      console.log(data);
      form.setValue("name", data?.name);
      form.setValue("url", data?.url);
      form.setValue("description", data?.description.replace(/\\n/g, "\n"));
      form.setValue("type", data?.type);
      form.setValue("tag", data?.tag);
    }
  }, [data, id, form]);

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    trigger({ ...values, id });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Please input name" {...field} />
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
                  <FormLabel>Url</FormLabel>
                  <FormControl>
                    <Input placeholder="Please input url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="database">database</SelectItem>
                        <SelectItem value="design">design</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tag"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tag</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mongodb">mongodb</SelectItem>
                        <SelectItem value="postgres">postgres</SelectItem>
                        <SelectItem value="ui">ui</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={6}
                      placeholder="Please input description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">submit</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

const ProductFormPage = () => {
  return (
    <React.Suspense>
      <ProductForm />
    </React.Suspense>
  );
};

export default ProductFormPage;
