import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { object, string, z } from "zod";
import { DataTable } from "./components/DataTable";
import { columns } from "./columns";
import { request } from "@/utils/request";

const Produce = async () => {
  const data = await request("/platform");

  return (
    <Card>
      <CardHeader>
        <CardTitle>平台</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};

export default Produce;
