import React from "react";

export default function Drawer({ open, onClose, side = "left", children }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-700
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 h-full w-[100%] bg-white shadow-xl z-50
          transform transition-transform duration-700
          ${side === "left" ? "left-0" : "right-0"}
          ${open
            ? "translate-x-0"
            : side === "left"
              ? "-translate-x-full"
              : "translate-x-full"
          }
        `}
      >
        {children}
      </div>
    </>
  );
}
