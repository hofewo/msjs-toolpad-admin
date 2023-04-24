import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";

export interface Incidents_DataGridProps {
  msg: string;
}

function Incidents_DataGrid({ msg }: Incidents_DataGridProps) {
  return <Typography>{msg}</Typography>;
}

export default createComponent(Incidents_DataGrid, {
  argTypes: {
    msg: {
      typeDef: { type: "string", default: "Hello world!" },
    },
  },
});
