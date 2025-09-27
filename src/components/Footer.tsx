import { GraduationCap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "For Students", href: "#students" },
        { name: "For Colleges", href: "#colleges" },
        { name: "For Industry", href: "#industry" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Help Center", href: "#help" },
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#cases" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Partners", href: "#partners" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "NEP Compliance", href: "#nep" },
        { name: "Data Security", href: "#security" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Instagram, href: "#instagram", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/10 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">NEP InternConnect</h3>
                  <p className="text-sm text-white/70">Smart Platform</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Revolutionizing internship management through innovative technology, 
                connecting students with industry opportunities while ensuring NEP 2020 compliance.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>contact@nepinternconnect.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Stay Updated with NEP InternConnect
              </h4>
              <p className="text-white/70 text-sm">
                Get the latest updates on new features, partnerships, and internship opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm min-w-[250px]"
              />
              <button className="bg-gradient-primary px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-white/70 text-sm text-center md:text-left">
              © 2024 NEP InternConnect. All rights reserved. Built for Smart India Hackathon 2024.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <p className="text-white/50 text-xs">
              This platform is designed in compliance with the New Education Policy (NEP) 2020 guidelines 
              and supports the digital transformation of India's education system.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;