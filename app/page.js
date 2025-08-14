"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { CopyIcon, SunIcon, MoonIcon } from "lucide-react";
import { toast } from "sonner";
import styles from "@/lib/style";

export default function StyleShowcase() {
  const [currentStyleKey, setCurrentStyleKey] = useState("modern-sass");
  const [colorMode, setColorMode] = useState("dark");

  const displayedStyles = styles[currentStyleKey].dark;
  const copiedStyles = styles[currentStyleKey][colorMode];

  const copyToClipboard = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success(
          `Copied ${styles[currentStyleKey].name} (${colorMode} mode)!`,
          {
            duration: 2000,
            position: "bottom-center",
          }
        );
      })
      .catch((err) => {
        toast.error("Failed to copy style.", {
          duration: 2000,
          position: "bottom-center",
        });
        console.error("Failed to copy:", err);
      });
  };

  const handleStyleChange = (key) => {
    setCurrentStyleKey(key);
    toast.info(`Switched to ${styles[key].name} style.`, {
      duration: 1500,
      position: "bottom-center",
    });
  };

  const handleColorModeToggle = () => {
    const newMode = colorMode === "dark" ? "light" : "dark";
    setColorMode(newMode);
    toast(`Copy mode set to ${newMode} theme.`, {
      description: "The displayed styles remain in dark mode.",
      duration: 2000,
      position: "bottom-center",
      icon:
        newMode === "dark" ? (
          <MoonIcon className="h-4 w-4" />
        ) : (
          <SunIcon className="h-4 w-4" />
        ),
    });
  };

  return (
    <main className="p-4 sm:p-6 md:px-16 space-y-12 md:space-y-16">
      <div className="pt-10 md:py-0 md:min-h-screen flex flex-col justify-center md:justify-around">
        <header className="pb-5 w-full flex flex-row justify-between items-center">
          <img src="/logo.svg" alt="Logo" className="size-20" />

          <h3 className="text-zinc-400 text-sm sm:text-base font-mono">
            made with love by{" "}
            <a
              className="text-teal-500 font-bold underline"
              href="https://yashd.in"
              target="_blank"
            >
              yashd
            </a>
          </h3>
        </header>
        <hr className="opacity-30 border-zinc-500" />

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] tracking-tight leading-[1.05] font-semibold break-words py-10">
          Better Typography{" "}
          <span className="text-yellow-400">Starts Here.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-zinc-200 text-base sm:text-lg ">
          <a
            className="bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 font-medium h-fit max-w-full md:order-last text-black text-center hidden md:block"
            href="#switch"
          >
            Let&apos;s Build!
          </a>

          <p className="md:col-span-1 md:order-first hidden md:block">
            Typography is the art and craft of arranging type to make written
            language not just legible, but also visually engaging. It&apos;s one
            of the core pillars of design, whether you&apos;re building a
            website, designing an app, or creating for print. Like it or not,
            typography shapes the entire look and feel of a project. Sometimes,
            it even steals the spotlight and becomes the main attraction.
          </p>
          <p className="md:col-span-1">
            I&apos;ve put together a set of ready-to-use typography snippets you
            can simply copy, paste, and drop into your projects.
          </p>
        </div>
      </div>
      <hr className="opacity-30 border-zinc-800 hidden md:block" />

      <div
        className="w-full flex flex-row  justify-between items-start gap-4 max-w-full sm:px-4 md:px-10"
        id="switch"
      >
        <div className="flex flex-row items-center justify-between w-full gap-2 sm:gap-4">
          <Select
            onValueChange={handleStyleChange}
            defaultValue={currentStyleKey}
          >
            <SelectTrigger className="w-full sm:w-[200px] border border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800">
              <SelectValue placeholder="Choose your style" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border border-zinc-700 text-zinc-100">
              {Object.keys(styles).map((key) => (
                <SelectItem key={key} value={key}>
                  {styles[key].name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Toggle
            pressed={colorMode === "dark"}
            onPressedChange={handleColorModeToggle}
            aria-label="Toggle dark/light mode for copied code"
            className="border border-zinc-700 text-zinc-100 hover:bg-zinc-800 flex items-center"
          >
            {colorMode === "dark" ? (
              <MoonIcon className="h-4 w-4" />
            ) : (
              <SunIcon className="h-4 w-4" />
            )}
            <span className="ml-2 hidden sm:inline-block text-sm">
              Copy as {colorMode === "dark" ? "Dark" : "Light"}
            </span>
          </Toggle>
        </div>
      </div>

      <section className="min-h-screen w-full px-2 sm:px-4 md:px-10 pt-16 overflow-hidden">
        <div className="space-y-10 md:space-y-32">
          {[
            [
              "// H1_STYLE",
              "For Massive Headlines",
              "h1",
              "Shipwracking storms and direful thunders",
            ],
            [
              "// H2_STYLE",
              "For Section Titles & Major Subheadings",
              "h2",
              "Dismayed not this our captains",
            ],
            [
              "// H3_STYLE",
              "For Minor Section Titles & Feature Headings",
              "h3",
              "Is this a dagger which I see before me",
            ],
            [
              "// H4_STYLE",
              "For Sub-Labels & Footer Categories",
              "h4",
              "The Weird Sisters Prophecies",
            ],
            [
              "// PARAGRAPH_STYLE",
              "For Body Text & Descriptions",
              "p",
              `"Life's but a walking shadow, a poor player..."`,
            ],
            [
              "// SMALL_TEXT_STYLE_1",
              "For Secondary Details & Meta-information",
              "p_sm",
              `"Look like th' innocent flower, but be the serpent under't."`,
            ],
            [
              "// EXTRA_SMALL_TEXT_STYLE",
              "For Fine Print & Copyrights",
              "p_xs",
              `"Double, double toil and trouble; Fire burn, and cauldron bubble."`,
            ],
            [
              "// MONOSPACE_LABEL_STYLE",
              "For Section Markers & Code-like Labels",
              "label_mono",
              "// PRODUCTION_METRICS",
            ],
            [
              "// BADGE_STYLE",
              "For Categorization & Highlighted Tags",
              "badge",
              "NotesPortal",
            ],
          ].map(([label, desc, styleKey, content], idx) => (
            <div key={idx} className="w-full flex flex-col justify-between pb-4 border-b">
              <div className="w-full flex flex-wrap justify-between items-center text-stone-400/40 font-mono text-xs uppercase tracking-[0.2em] mb-4 gap-2">
                <div className="flex flex-wrap items-center gap-2 max-w-full">
                  <h4 className="whitespace-nowrap ">{label}</h4>{" "}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(copiedStyles[styleKey])}
                    className="text-zinc-500 hover:text-zinc-100"
                  >
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>

                <h4 className="whitespace-normal italic">{desc}</h4>
              </div>
              {styleKey.startsWith("p") ||
              styleKey.includes("label") ||
              styleKey === "badge" ? (
                styleKey === "badge" ? (
                  <span className={displayedStyles[styleKey]}>{content}</span>
                ) : (
                  <p className={displayedStyles[styleKey]}>{content}</p>
                )
              ) : (
                React.createElement(
                  styleKey,
                  { className: displayedStyles[styleKey] },
                  content
                )
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
