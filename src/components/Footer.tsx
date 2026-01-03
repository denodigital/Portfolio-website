import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/deno_digital/", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ghohan-gehlot-752a7927a/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:denodigital0@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Deno Digital</h3>
            <p className="text-secondary-foreground/80 mb-6">
              Social Media Management & Content Creation agency helping brands grow their online presence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "Portfolio", "Case Studies", "Results", "Contact"].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    whileHover={{ x: 4 }}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-secondary-foreground/80 mb-2">
              Ready to grow your social presence?
            </p>
            <a
              href="mailto:hello@denodigital.com"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
             denodigital0@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Deno Digital. All rights reserved.
          </p>
          <p className="text-secondary-foreground/60 text-sm">
            Crafted with passion for social media excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
