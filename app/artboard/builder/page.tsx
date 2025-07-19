"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useArtboardStore } from "@/hooks/useArtboardStore";
// Stubs for missing dependencies
const MM_TO_PX = 3.7795275591; // 1mm in px
const pageSizeMap = { A4: { width: 210, height: 297 } };
const getTemplate = () => (props: any) => <div className="w-full h-full bg-gray-200 flex items-center justify-center">Template Preview (stub)</div>;
const Page = (props: any) => <div className="border bg-white shadow w-[600px] h-[800px] m-4 flex items-center justify-center">{props.children}</div>;

function BuilderHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-20 h-16 bg-secondary-accent/50 backdrop-blur-lg flex items-center justify-between px-4">
      <div className="flex items-center gap-x-2">
        <button className="w-8 h-8 rounded-full bg-gray-300" title="Sidebar" />
        <span className="text-xs opacity-40">/</span>
        <span className="font-medium">Resume Title (stub)</span>
        <span className="ml-2 opacity-75">🔒</span>
      </div>
      <button className="w-8 h-8 rounded-full bg-gray-300" title="Sidebar" />
    </div>
  );
}
function BuilderToolbar() {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto hidden py-6 text-center md:block z-30">
      <div className="inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-900 px-4 shadow-xl">
        {/* Toolbar action placeholders */}
        {Array.from({ length: 11 }).map((_, i) => (
          <button key={i} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 mx-1" />
        ))}
        {/* PDF Export Button */}
        <button className="w-8 h-8 rounded-full bg-red-400 text-white mx-1 font-bold" title="Export PDF">
          PDF
        </button>
      </div>
    </div>
  );
}
function LeftSidebar() {
  return (
    <div className="flex bg-secondary-accent/30 h-full">
      <div className="hidden basis-12 flex-col items-center justify-between bg-secondary-accent/30 py-4 sm:flex">
        {/* Section Icons (placeholders) */}
        <div className="flex flex-col items-center justify-center gap-y-2">
          {["basics","summary","profiles","experience","education","skills","languages","awards","certifications","interests","projects","publications","volunteer","references","custom"].map((id) => (
            <button key={id} className="w-8 h-8 rounded-full bg-gray-300 mb-2" title={id} />
          ))}
        </div>
        {/* User Avatar Placeholder */}
        <button className="w-8 h-8 rounded-full bg-gray-400 mt-4" title="User" />
      </div>
      <div className="flex-1 overflow-y-auto h-full p-6">
        {/* Scrollable section content placeholder */}
        <div className="grid gap-y-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 dark:bg-gray-800 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
function RightSidebar() {
  return (
    <div className="flex bg-secondary-accent/30 h-full">
      <div className="flex-1 overflow-y-auto h-full p-6">
        {/* Scrollable section content placeholder */}
        <div className="grid gap-y-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-100 dark:bg-gray-800 rounded" />
          ))}
        </div>
      </div>
      <div className="hidden basis-12 flex-col items-center justify-between bg-secondary-accent/30 py-4 sm:flex">
        <div />
        <div className="flex flex-col items-center justify-center gap-y-2">
          {[
            "template","layout","typography","theme","css","page","sharing","statistics","export","notes","information"
          ].map((id) => (
            <button key={id} className="w-8 h-8 rounded-full bg-gray-300 mb-2" title={id} />
          ))}
        </div>
        <button className="w-8 h-8 rounded-full bg-gray-400 mt-4" title="Theme Switch" />
      </div>
    </div>
  );
}

function BuilderCanvas() {
  const [wheelPanning, setWheelPanning] = useState(true);
  const transformRef = useRef<any>(null);
  // For now, use stub data
  const layout = useArtboardStore((state) => state.resume?.metadata?.layout || [[[]]]);
  const format = useArtboardStore((state) => state.resume?.metadata?.page?.format || "A4");
  const template = useArtboardStore((state) => state.resume?.metadata?.template || "default");
  const Template = useMemo(() => getTemplate(template), [template]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data.type === "ZOOM_IN") transformRef.current?.zoomIn?.(0.2);
      if (event.data.type === "ZOOM_OUT") transformRef.current?.zoomOut?.(0.2);
      if (event.data.type === "CENTER_VIEW") transformRef.current?.centerView?.();
      if (event.data.type === "RESET_VIEW") {
        transformRef.current?.resetTransform?.(0);
        setTimeout(() => transformRef.current?.centerView?.(0.8, 0), 10);
      }
      if (event.data.type === "TOGGLE_PAN_MODE") {
        setWheelPanning(event.data.panMode);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [transformRef]);

  // For now, just render a single page with a stub template
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* TODO: Live PDF preview will be integrated here */}
      <Page>
        <Template isFirstPage columns={[]} />
      </Page>
    </div>
  );
}

export default function ArtboardBuilderPage() {
  return (
    <div className="relative w-full h-screen flex overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-1/5 min-w-[200px] max-w-[350px] border-r border-gray-300 dark:border-gray-700">
        <LeftSidebar />
      </div>
      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col">
        <BuilderHeader />
        <div className="flex-1 bg-white dark:bg-gray-900 flex items-center justify-center">
          <BuilderCanvas />
        </div>
        <BuilderToolbar />
      </div>
      {/* Right Sidebar */}
      <div className="w-1/5 min-w-[200px] max-w-[350px] border-l border-gray-300 dark:border-gray-700">
        <RightSidebar />
      </div>
    </div>
  );
} 