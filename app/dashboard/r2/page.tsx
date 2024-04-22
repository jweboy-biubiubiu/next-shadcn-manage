"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DeleteIcon,
  Folder,
  FolderOpen,
  LucideDelete,
  Trash,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const renderChildren = (url: string) => {
  if (~url.indexOf(".mp4")) {
    return (
      <video
        width={120}
        height={120}
        controls
        preload="none"
        className="object-contain transition-all w-32 h-32"
      >
        <source src={url} />
      </video>
    );
  }

  return (
    <Image
      src={url}
      width={80}
      height={80}
      className="object-contain transition-all w-20 h-20"
      alt="media resource"
      priority
    />
  );
};

const R2BucketManage = () => {
  const BASE_URL = `https://hono-r2-upload-service.jweboy0630.workers.dev`;
  // const BASE_URL = `http://localhost:8787`;
  const [catalog, setCatalog] = React.useState("");
  const { data } = useSWR(`${BASE_URL}/list?catalog=${catalog}`);
  console.log(data, process.env.NEXT_PUBLIC_CLOUDFARE_R2_URL);

  const handleFolderClick = (key: string) => () => {
    console.log(key);
    setCatalog(key);
  };

  return (
    <div className="grid grid-cols-6 gap-6">
      {data?.delimitedPrefixes?.map((item: any) => {
        return (
          <Card
            key={item}
            className="cursor-pointer"
            onClick={handleFolderClick(item)}
          >
            <CardHeader>{item}</CardHeader>
            <CardContent className="flex justify-center">
              <FolderOpen size={96} />
            </CardContent>
          </Card>
        );
      })}
      {data?.objects?.map((item: any) => {
        const url = process.env.NEXT_PUBLIC_CLOUDFARE_R2_URL + item.key;
        return (
          <Card key={item.key}>
            <CardHeader>
              <Link href={url} target="_blank" className="text-primary">
                {item.key}
              </Link>
            </CardHeader>
            <CardContent className="flex justify-center">
              {renderChildren(url)}
            </CardContent>
            <CardFooter className="justify-end">
              <Trash />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default R2BucketManage;
