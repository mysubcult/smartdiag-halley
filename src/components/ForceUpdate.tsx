import { useEffect } from "react";

export default function ForceUpdate() {
  useEffect(() => {
    // Force reflow to apply styles
    const updateStyles = () => {
      const toc = document.querySelector("aside");
      if (toc) {
        toc.classList.add("border", "border-neutral-300", "dark:border-neutral-700", "rounded-lg", "p-4", "bg-white", "dark:bg-neutral-900", "shadow-lg");
      }
    };

    updateStyles();
  }, []);

  return null;
}
