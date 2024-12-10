import React from "react";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="absolute -rotate-90 left-[-225px] bottom-[174px]">
      <small className="text-[#a6adb5] text-[11px] selection:bg-[rgba(255, 255, 255, 0.1)]">
        <p className="opacity-40">
          &copy; {getCurrentYear()} Copyright by
          <a
            href="https://github.com/Anishadahal"
            target="_blank"
            className="underline"
          >
            {" "}
            Anisha
          </a>
        </p>
      </small>
    </footer>
  );
}
