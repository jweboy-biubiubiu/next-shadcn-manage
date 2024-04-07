import { useToast } from "@/components/ui/use-toast";
import { request } from "@/lib/request";
import React from "react";
import useSWR from "swr";

export const useRequest = (url: string, params?: any) => {
  console.log(useToast);
  // const { toast } = useToast();
  const [data, setData] = React.useState();

  const handler = () => request(url);

  return {
    request: handler,
    data,
  };
};
