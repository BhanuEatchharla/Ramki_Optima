import "./globals.css";
import Providers from "./providers";
import { Inter } from "next/font/google";


export const metadata = {
  title:
    "OPTIMA - Powered Logistics & Transportation Management | Reduce Costs by 30%",
  description:
    "Transform your logistics with OPTIMA's Powered platform: predictive ETAs, smart routing, driver scorecards, and 100% paperless workflows.",
  openGraph: {
    title: "OPTIMA - Powered Logistics & Transportation Management",
    description:
      "Transform your logistics with AI automation. Reduce costs, boost on-time deliveries, and get real-time visibility across your entire supply chain.",
    url: "https://example.com",
    siteName: "OPTIMA",
  },
};
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 👉 Tiledesk Chatbot */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
/* ===============================
   1️⃣ Tiledesk basic config
================================ */
window.tiledeskSettings = {
  projectid: "693be89b7ebe7e0013eca0f2",
  align: "right",
  autoStart: true,
  showLauncher: true,
  launcherPosition: "bottom-right",
  theme: {
    primaryColor: "#2563eb",
    secondaryColor: "#ffffff",
    textColor: "#ffffff",
    launcherSize: "60px",
    mobileLauncherSize: "50px",
  },
};

/* ===============================
   2️⃣ Load Tiledesk script
================================ */
(function (d, s, id) {
  var w = window;
  var i = function () { i.c(arguments); };
  i.q = [];
  i.c = function (args) { i.q.push(args); };
  w.Tiledesk = i;

  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.async = true;
  js.src = "https://widget.tiledesk.com/v6/launch.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "tiledesk-jssdk");

/* ===============================
   3️⃣ FORCE launcher to MIDDLE-RIGHT
================================ */
(function () {
  var attempts = 0;
  var interval = setInterval(function () {
    var launcher =
      document.querySelector("#tiledesk-launcher") ||
      document.querySelector(".tiledesk-launcher") ||
      document.querySelector('iframe[src*="tiledesk"]');

    if (launcher && window.innerWidth < 768) {
      launcher.style.position = "fixed";
      launcher.style.bottom = "160px"; // 🔥 INCREASED (was 120)
      launcher.style.right = "16px";
      launcher.style.top = "auto";
      launcher.style.transform = "none";
      launcher.style.zIndex = "9999";
      clearInterval(interval);
    }

    attempts++;
    if (attempts > 30) clearInterval(interval);
  }, 400);
})();
            `,
          }}
        />
      </head>

      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
