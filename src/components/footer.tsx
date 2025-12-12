"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle, // WhatsApp
} from "lucide-react";
import logo from "@/assets/logo.png"; // replace with your logo path

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const siteLinks = [
    "Home",
    "About",
    "Industries",
    "Features",
    "Analytics",  
    "Roadmap",
    
  ];

  const socialIcons = [
    { icon: Linkedin, label: "LinkedIn", gradient: "from-blue-500 to-blue-700" },
    { icon: Twitter, label: "X / Twitter", gradient: "from-cyan-400 to-blue-500" },
    { icon: Instagram, label: "Instagram", gradient: "from-pink-500 via-yellow-400 to-purple-600" },
    { icon: Youtube, label: "YouTube", gradient: "from-red-500 to-red-700" },
    { icon: MessageCircle, label: "WhatsApp", gradient: "from-green-400 to-green-600" },
    { icon: Facebook, label: "Facebook", gradient: "from-blue-600 to-blue-800" },
    { icon: Mail, label: "Email", gradient: "from-purple-400 to-indigo-600" },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 animate-float">
              <div className="w-10 h-10 relative">
                <Image
                  src={logo}
                  alt="OPTIMA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">OPTIMA</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Headquartered at Hyderabad, Telangana, OPTIMA is a flagship company founded in 2018, delivering streamlined and customizable services and solutions to our clients.
            </p>
            <Button
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-lg group ">
              Download Our Brochure
            </Button>
          </div>

          {/* Column 2: Site Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Site Links</h3>
            <ul className="space-y-1 text-sm">
              {siteLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(/\s/g, ""))}
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office Address */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Office Address</h3>
            <div className="space-y-2 text-sm">
              <p>OPTIMA</p>
              <p>1-8-448, Lakshmi Building, 5th Floor, S P Road, Begumpet, Hyderabad - 500003</p>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919959045474" className="hover:text-primary transition-colors hover:underline">
                  +91 99590 45474
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@ramkigroup.com" className="hover:text-primary transition-colors hover:underline">
                  info@ramkigroup.com
                </a>
              </div>
              <div>
                <a href="https://www.ramkitechnologies.com" target="_blank" className="hover:text-primary transition-colors hover:underline">
                  www.ramkitechnologies.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Social Icons */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect with Us</h3>
            <div className="flex items-center flex-wrap gap-3 pt-2">
              {socialIcons.map((item, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className={`h-10 w-10 p-0 bg-gradient-to-br ${item.gradient} rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-125 transition-all duration-300`}
                >
                  <item.icon className="h-5 w-5 text-white" />
                  <span className="sr-only">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm">
          © 2018 OPTIMA. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
