import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Structural Drafting', href: '/services#structural-drafting' },
    { name: 'Revit Modeling', href: '/services#revit-modeling' },
    { name: 'BIM Support', href: '/services#bim-support' },
    { name: 'Construction Documentation', href: '/services#construction-documentation' },
    { name: 'Structural Detailing', href: '/services#structural-detailing' },
  ],
  industries: [
    { name: 'Residential', href: '/industries#residential' },
    { name: 'Multifamily', href: '/industries#multifamily' },
    { name: 'Commercial', href: '/industries#commercial' },
    { name: 'Industrial', href: '/industries#industrial' },
    { name: 'Engineering Firms', href: '/industries#engineering-firms' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <img
                  src="/NortPeak_Logo.png"
                  alt="NorthPeak Drafting"
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <p className="text-slate-400 text-sm mb-6 max-w-sm">
                Structural Drafting & BIM Support for engineering firms,
                contractors, and design-build teams.
              </p>
              <div className="flex flex-col gap-3 text-sm text-slate-400">
                <a
                  href="mailto:mike@northpeakdrafting.studio"
                  className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  mike@northpeakdrafting.studio
                </a>
                <a
                  href="tel:+12025948099"
                  className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 (202) 594-8099
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  United States
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold text-white mb-4">Industries</h4>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} NorthPeak Drafting. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
