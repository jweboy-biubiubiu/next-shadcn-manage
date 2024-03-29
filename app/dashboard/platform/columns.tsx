"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "名称",
    cell({ row }) {
      return (
        <div className="w-40">
          <a href={row.original.url} className="text-primary">
            {row.original.name}
          </a>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "描述信息",
    cell({ row: { original } }) {
      return (
        <div className="w-96 text-ellipsis overflow-hidden whitespace-nowrap">
          {original.description}
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "分类",
  },
  {
    accessorKey: "type",
    header: "类型",
  },
  {
    accessorKey: "tag",
    header: "标签",
    cell({ row: { original } }) {
      return <Badge variant="destructive">{original.tag}</Badge>;
    },
  },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
