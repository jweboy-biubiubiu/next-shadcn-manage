"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
  RefreshCwIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { DataTable } from "../platform/components/DataTable";
import { request } from "@/lib/request";
import { columns } from "./columns";
import { revalidateTag } from "next/cache";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import ConfirmDialog from "@/components/confirm";
import { CoreRow, Row } from "@tanstack/react-table";
import Link from "next/link";
import Dropdown from "@/components/dropdown";
import QueryString from "qs";
import { serializateUrlWithQuery } from "@/lib/utils";

async function deleteRecord(url: string, { arg: id }: { arg: string }) {
  await fetch(url + "/" + id, {
    method: "DELETE",
  });
}

const ProductPage = () => {
  const { data } = useSWR("/platform");
  const { trigger } = useSWRMutation("/platform", deleteRecord);
  const [type, setType] = React.useState("");
  // const { data } = useSWR(
  //   type
  //     ? () =>
  //         serializateUrlWithQuery("http://127.0.0.1:4000/platform", { type })
  //     : "http://127.0.0.1:4000/platform"
  // );

  const deleteCurrRecord = React.useCallback(
    (row: CoreRow<any>) => {
      trigger(row.id);
    },
    [trigger]
  );

  const withActionColumns = React.useMemo(() => {
    return [
      ...columns,
      {
        accessorKey: "actions",
        header: "actions",
        cell({ row: { original } }) {
          return (
            <div className="flex gap-x-2">
              <Link
                href={serializateUrlWithQuery("/dashboard/product/form", {
                  id: original.id,
                })}
                className="cursor-pointer"
              >
                Edit
              </Link>
              <ConfirmDialog
                onConfirm={deleteCurrRecord.bind(null, original)}
                trigger={
                  <span className="text-primary cursor-pointer">Delete</span>
                }
              />
            </div>
          );
        },
      },
    ];
  }, [deleteCurrRecord]);

  return (
    <React.Fragment>
      <div className="ml-auto flex items-center gap-2">
        <Dropdown
          options={[
            { label: "database", value: "database" },
            { label: "design", value: "design" },
          ]}
          onChange={(value) => {
            console.log(value);
            // mutate(value);
            // setType(value);
          }}
          trigger={
            <Button variant="outline" size="sm" className="h-7 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          }
        />
        <Button size="sm" variant="outline" className="h-7 gap-1">
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Export
          </span>
        </Button>
        <Link href="/dashboard/product/form">
          <Button size="sm" className="h-7 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Manage your showcase products</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable data={data} columns={withActionColumns} />
        </CardContent>
        {/* <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter> */}
      </Card>
    </React.Fragment>
  );
};

export default ProductPage;
