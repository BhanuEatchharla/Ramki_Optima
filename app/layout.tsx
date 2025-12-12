import "./globals.css";
import Providers from "./providers";
export const metadata = {
  title: "OPTIMA - AI-Powered Logistics & Transportation Management | Reduce Costs by 30%",
  description:
    "Transform your logistics with OPTIMA's AI-powered platform: predictive ETAs, smart routing, driver scorecards, and 100% paperless workflows.",
  openGraph: {
    title: "OPTIMA - AI-Powered Logistics & Transportation Management",
    description:
      "Transform your logistics with AI automation. Reduce costs, boost on-time deliveries, and get real-time visibility across your entire supply chain.",
    url: "https://example.com",
    siteName: "OPTIMA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
