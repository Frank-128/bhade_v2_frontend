import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientProviderComponent from "@/providers/QuerClientProviderComponent";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bhade",
  description: "Bhade Management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen`}>
        <QueryClientProviderComponent>{children}</QueryClientProviderComponent>
      </body>
    </html>
  );
}
