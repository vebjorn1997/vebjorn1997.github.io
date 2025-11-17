"use client"
import * as React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

export default function CustomNode({ data }: NodeProps) {
  // `style` is received from the node (see nodes.ts, passed by React Flow)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          className="px-4 py-2 cursor-pointer shadow transition hover:shadow-lg select-none min-w-32"
          tabIndex={0}
          role="button"
        >
          <div className="font-semibold text-base text-center text-card-foreground">
            {data?.label as string || "Custom Node"}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{data?.label as string || "Custom Node"}</SheetTitle>
          <SheetDescription>
            {data?.description as string || "No description."}
          </SheetDescription>
        </SheetHeader>
        {/* Custom content goes here */}
        {/* <div className="mt-4">
          <p>
            <b>Node ID:</b> {data?.id as string || "Unknown"}
          </p>
          <p>
            <b>Description:</b> {data?.description as string || "No description."}
          </p>
        </div> */}
        <SheetClose asChild>
          <button className="mt-6 cursor-pointer m-auto bg-primary text-primary-foreground rounded px-4 py-2">
            Close
          </button>
        </SheetClose>
      </SheetContent>
      {/* Handles for edges */}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </Sheet>
  );
}