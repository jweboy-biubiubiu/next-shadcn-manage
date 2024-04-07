import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./components/DataTable";
import { columns } from "./columns";
import { request } from "@/lib/request";
import FormDialog from "./components/FormDialog";
import { useRequest } from "@/hooks/useRequest";

const Produce = async () => {
  const data = await request("/platform", { cache: "no-cache" });
  // const { data } = useRequest("/platform");
  // console.log(data);

  return <DataTable columns={columns} data={data} />;

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <CardTitle>
          <span>平台</span>
          <FormDialog triggerNode={<Button>新增</Button>} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};

export default Produce;
