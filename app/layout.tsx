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
      <head>
        {/* 👉 Tiledesk chatbot script */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
      window.tiledeskSettings = {
        projectid: "693be89b7ebe7e0013eca0f2",
        hideWidget: false,
        startHidden: false,
        align: "right", 
        marginX: 15,
        marginY: 15,
        mobileMarginX: 10,
        mobileMarginY: 10,
        autoStart: true,
        showLauncher: true,
        launcherPosition: "bottom-right",
        theme: {
          primaryColor: "#2563eb",
          secondaryColor: "#ffffff",
          textColor: "#ffffff",
          launcherSize: "60px", 
          mobileLauncherSize: "50px"
        }
      };

      (function(d, s, id) { 
        var w = window; 
        var d = document; 
        var i = function() { i.c(arguments); };
        i.q = []; 
        i.c = function(args) { i.q.push(args); }; 
        w.Tiledesk = i;                    
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); 
        js.id = id; js.async = true; 
        js.src = "https://widget.tiledesk.com/v6/launch.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'tiledesk-jssdk'));
    `
  }}
/>

      </head>

      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
