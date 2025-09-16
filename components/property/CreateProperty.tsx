"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {  getBlocks } from "@/actions/block";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { createProperty } from "@/actions/property";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Block name must be at least 3 characters.",
  }),
  type: z.enum(["room", "house"], {
    message: "Type must be either 'room' or 'house'.",
  }),
  property_no: z.string().min(1, {
    message: "Property number must be provided",
  }),
  block: z.number().nullable(),
});

export function AddProperty() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
          name: "",
    type: "room",
    property_no: "",
    block: null,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: { name: string }) => createProperty(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["properties"],
      });
      setOpen(false);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  const { data:blockData, isFetching } = useQuery({
    queryKey: ["blocks"],
    queryFn: () => getBlocks(),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-500 text-white p-1 rounded">
          Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Name</FormLabel>
                  <FormControl>
                    <Input placeholder="property name here" {...field} />
                  </FormControl>

                  <FormMessage className="text-red-500 text-xs italic " />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="property_no"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Number</FormLabel>
                  <FormControl>
                    <Input placeholder="property number here" {...field} />
                  </FormControl>

                  <FormMessage className="text-red-500 text-xs italic " />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a property" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Property available</SelectLabel>
                        <SelectItem value="room">Room</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs italic text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Block</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a property" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel>Blocks</SelectLabel>
                        {
                        isFetching? "Loading..." :  blockData?.map((item:{id:number,name:string},idx:number)=>

                            <SelectItem key={idx} value={`${item.id}`}>{item.name}</SelectItem>

                          )
                        }
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs italic text-red-500" />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                className="bg-purple-500 text-white p-1 text-xs"
                type="submit"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
