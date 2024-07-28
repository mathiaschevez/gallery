'use client';

import { usePathname } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return pathname === "/" ? null : (
    <div className="absolute top-0 w-screen h-screen bg-black/90 m-0 text-white">
      {children}
      {/* <button onClick={onDismiss} className="close-button" /> */}
    </div>
  );
}