"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const defaultForm = {
  picture: "https://lh3.googleusercontent.com/a/AAcHTteE...", // placeholder
  fullName: "Eric Dazzle",
  headline: "",
  email: "eric.dazzle.george@gmail.com",
  website: "",
  phone: "",
  location: "",
  summary: "",
};

export default function ResumeBuilderPage() {
  const [form, setForm] = useState(defaultForm);
  const [preview, setPreview] = useState(defaultForm);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    setPreview(form);
  }

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      {/* Left Sidebar: Form */}
      <aside className="w-[340px] bg-[#18181b] text-white flex flex-col px-6 py-8 gap-8 border-r border-zinc-800 overflow-y-auto">
        <div>
          <h2 className="text-2xl font-bold mb-6">Basics</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium">Picture</label>
              <Input
                name="picture"
                value={form.picture}
                onChange={handleChange}
                className="mt-1 bg-zinc-900 border-zinc-700 text-white"
                placeholder="Image URL"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <Input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="mt-1 bg-zinc-900 border-zinc-700 text-white"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Headline</label>
              <Input
                name="headline"
                value={form.headline}
                onChange={handleChange}
                className="mt-1 bg-zinc-900 border-zinc-700 text-white"
                placeholder="Headline"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="text-sm font-medium">Email</label>
                <Input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 bg-zinc-900 border-zinc-700 text-white"
                  placeholder="Email"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium">Website</label>
                <Input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  className="mt-1 bg-zinc-900 border-zinc-700 text-white"
                  placeholder="Website"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="text-sm font-medium">Phone</label>
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 bg-zinc-900 border-zinc-700 text-white"
                  placeholder="Phone"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium">Location</label>
                <Input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="mt-1 bg-zinc-900 border-zinc-700 text-white"
                  placeholder="Location"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Summary</label>
              <Textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                className="mt-1 bg-zinc-900 border-zinc-700 text-white min-h-[80px]"
                placeholder="Summary"
              />
            </div>
            <Button onClick={handleSave} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full">Save</Button>
          </div>
        </div>
      </aside>

      {/* Center: Resume Preview */}
      <main className="flex-1 flex flex-col items-center justify-start py-12 px-8 bg-white dark:bg-zinc-900 overflow-y-auto">
        <div className="w-full max-w-[600px] min-h-[700px] bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-10 flex flex-col items-center">
          {preview.picture && (
            <img
              src={preview.picture}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-500 bg-zinc-200"
              onError={e => (e.currentTarget.style.display = 'none')}
            />
          )}
          <h1 className="text-3xl font-bold text-center mb-1 text-zinc-900 dark:text-white">{preview.fullName || "Your Name"}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-2">{preview.headline}</p>
          <p className="text-md text-blue-600 dark:text-blue-400 mb-2">
            {preview.email && <a href={`mailto:${preview.email}`}>{preview.email}</a>}
          </p>
          <div className="flex gap-4 mb-4">
            {preview.phone && <span className="text-zinc-500 dark:text-zinc-400">{preview.phone}</span>}
            {preview.location && <span className="text-zinc-500 dark:text-zinc-400">{preview.location}</span>}
            {preview.website && <a href={preview.website} className="text-blue-500 dark:text-blue-400" target="_blank" rel="noopener noreferrer">{preview.website}</a>}
          </div>
          <div className="w-full border-t border-zinc-200 dark:border-zinc-700 my-4" />
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Summary</h2>
            <p className="text-zinc-700 dark:text-zinc-200 whitespace-pre-line min-h-[60px]">{preview.summary}</p>
          </div>
        </div>
      </main>

      {/* Right Sidebar: Template Grid */}
      <aside className="w-[340px] bg-[#18181b] text-white flex flex-col px-6 py-8 gap-8 border-l border-zinc-800 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Template</h2>
        <div className="grid grid-cols-2 gap-4">
          {["Azurril", "Bronzor", "Chikorita", "Ditto"].map((name, i) => (
            <div key={name} className={`rounded-lg border-2 ${i === 0 ? "border-blue-500" : "border-zinc-700"} overflow-hidden cursor-pointer transition-all hover:border-blue-400 bg-zinc-900 flex flex-col items-center p-2`}>
              <div className="w-full h-32 bg-gradient-to-br from-zinc-700 to-zinc-900 mb-2 rounded"></div>
              <span className="font-semibold text-md mb-1">{name}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
} 