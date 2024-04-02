"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, useForm } from "react-hook-form";
import PlatformDtoForm from "./DtoForm";

function FormDialog({ triggerNode }: { triggerNode: React.ReactElement }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerNode}</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>新建平台</DialogTitle>
        </DialogHeader>
        <PlatformDtoForm />
      </DialogContent>
    </Dialog>
  );
}

export default FormDialog;
