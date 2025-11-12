// src/ui-shim.js
import React, { createContext, useContext, useMemo, useState } from "react";

/* ------------ Card ------------ */
export function Card({ className = "", children, ...props }) {
  return (
    <div className={`bg-white shadow rounded-2xl ${className}`} {...props}>
      {children}
    </div>
  );
}
export function CardHeader({ className = "", children, ...props }) {
  return (
    <div className={`px-6 pt-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
export function CardTitle({ className = "", children, ...props }) {
  return (
    <h3 className={`text-lg font-semibold ${className}`} {...props}>
      {children}
    </h3>
  );
}
export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

/* ------------ Badge ------------ */
export function Badge({ className = "", children, ...props }) {
  return (
    <span
      className={`inline-block text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

/* ------------ Button ------------ */
export function Button({ className = "", variant = "default", children, ...props }) {
  const base = "px-4 py-2 rounded-lg";
  const styles =
    variant === "outline"
      ? "border border-slate-300"
      : variant === "secondary"
      ? "bg-white text-slate-900"
      : "bg-slate-900 text-white";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

/* ------------ Tabs (간단 동작) ------------ */
const TabsCtx = createContext(null);

export function Tabs({ defaultValue, value, onValueChange, className = "", children }) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;
  const setVal = onValueChange ?? setInternal;
  const ctx = useMemo(() => ({ value: current, setValue: setVal }), [current, setVal]);
  return (
    <TabsCtx.Provider value={ctx}>
      <div className={className}>{children}</div>
    </TabsCtx.Provider>
  );
}

export function TabsList({ className = "", children }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, className = "", children }) {
  const ctx = useContext(TabsCtx);
  const active = ctx?.value === value;
  return (
    <button
      type="button"
      onClick={() => ctx?.setValue(value)}
      className={
        `px-3 py-2 rounded-lg border text-sm ` +
        (active ? "bg-slate-900 text-white border-slate-900" : "bg-white border-slate-300")
        + ` ${className}`
      }
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = "", children }) {
  const ctx = useContext(TabsCtx);
  if (ctx?.value !== value) return null;
  return <div className={className}>{children}</div>;
}
