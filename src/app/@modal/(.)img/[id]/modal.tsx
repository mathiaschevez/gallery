'use client';

import { usePathname, useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (pathname === "/" || pathname === "/my-images") ? null : (
    <div className="absolute top-0 w-screen h-screen bg-black/90 m-0 text-white">
      <button
        className="absolute top-4 left-4 text-white"
        onClick={() => router.back()}
      ><CloseIconSVG /></button>
      {children}
    </div>
  );
}

function CloseIconSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}