"use client";

import ConfirmDialog from "@/components/confirm";
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
    header: "name",
    cell({ row }) {
      return (
        <div className="w-20">
          <a href={row.original.url} target="_blank" className="text-primary">
            {row.original.name}
          </a>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "description",
    cell({ row: { original } }) {
      return (
        <div className="text-ellipsis overflow-hidden whitespace-nowrap w-96">
          {original.description}
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "type",
  },
  {
    accessorKey: "tag",
    header: "tag",
    cell({ row: { original } }) {
      return (
        <div className="w-60">
          <Badge variant="destructive">{original.tag}</Badge>
        </div>
      );
    },
  },
];
