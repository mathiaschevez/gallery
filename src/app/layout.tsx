import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { TopNav } from "./_components/TopNav";

export const metadata = {
  title: "Gallery",
  description: "Upload and view images in a gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
      <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className="dark">
          <div className="h-screen grid grid-rows-[auto,1fr]">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
