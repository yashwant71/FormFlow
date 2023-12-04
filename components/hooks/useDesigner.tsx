"use client";

import { useContext } from "react";
import { DesignerContext } from "../context/DesignerContext";

// it returns the stored data from context of elements which are dropped
function useDesigner() {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error("useDesigner must be used within a DesignerContext");
  }

  return context;
}

export default useDesigner;
