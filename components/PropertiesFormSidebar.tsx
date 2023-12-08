import React from "react";
// import useDesigner from "./hooks/useDesigner";
import { FormElements } from "./FormElements";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { setSelectedElement } from "./state/reducer/designerSlice";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
// side bar with properties
function PropertiesFormSidebar() {
  // const { selectedElement, setSelectedElement } = useDesigner();
  const selectedElement = useSelector((state: RootState) => state.designer.selectedElement);
    
  if (!selectedElement) return null;

  const PropertiesForm = FormElements[selectedElement?.type].propertiesComponent;

  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between items-center">
        <p className="text-sm text-foreground/70">Element properties</p>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {
            setSelectedElement(null);
          }}
        >
          <AiOutlineClose />
        </Button>
      </div>
      <Separator className="mb-4" />
      {/* defined in FormElements.tsx */}
      <PropertiesForm elementInstance={selectedElement} />
    </div>
  );
}

export default PropertiesFormSidebar;
