import { createComponent } from "@lit/react";
import { ResetTheName as ResetTheNameWC } from "./reset-the-name";
import React from "react";

export const ResetTheName = createComponent({
  react: React,
  tagName: "reset-the-name",
  elementClass: ResetTheNameWC,
  // Defines props that will be event handlers for the named events
  events: {
    onPop: "pop",
    onReset: "reset",
  },
});
