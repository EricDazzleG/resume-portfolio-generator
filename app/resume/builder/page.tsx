"use client";

import { useRef, useEffect } from "react";

export default function ResumeBuilderPage() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  // Placeholder: In the next step, we'll sync resume data and set up state
  useEffect(() => {
    // Future: Sync resume data to iframe
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <iframe
        ref={frameRef}
        title="Resume Editor"
        src="/artboard/builder"
        className="w-full"
        style={{ height: "100vh", border: "none" }}
      />
    </div>
  );
} 