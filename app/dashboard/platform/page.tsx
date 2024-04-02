import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./components/DataTable";
import { columns } from "./columns";
import { request } from "@/lib/request";
import FormDialog from "./components/FormDialog";

const Produce = async () => {
  const data = await request("/platform", { cache: "no-cache" });

  return (
    <Card>
      <CardHeader>
        <CardTitle>平台</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <FormDialog triggerNode={<Button>新增</Button>} />
        </div>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};

export default Produce;
