import "./globals.css";
import Providers from "@/lib/queryClient";

export const metadata = {
  title: "AI Visual Search",
  description: "AI-powered image search demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
