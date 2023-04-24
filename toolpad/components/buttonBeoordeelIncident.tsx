import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";

export interface buttonBeoordeelIncidentProps {
  msg: string;
}

function buttonBeoordeelIncident({ msg }: buttonBeoordeelIncidentProps) {
  return <Typography>{msg}</Typography>;
}

export default createComponent(buttonBeoordeelIncident, {
  argTypes: {
    msg: {
      typeDef: { type: "string", default: "Hello world!" },
    },
  },
});
