import { Link } from 'react-router-dom';
import {
  PencilRuler,
  Layers,
  FileCheck,
  LayoutGrid,
  Building2,
  ArrowRight,
  Check,
  Monitor,
} from 'lucide-react';

const services = [
  {
    id: 'structural-drafting',
    icon: PencilRuler,
    title: 'Structural Drafting',
    overview:
      'Comprehensive structural drafting services designed to support licensed engineers and contractors with accurate, code-compliant documentation. We translate engineering designs into clear, buildable drawings.',
    deliverables: [
      'Foundation Plans',
      'Framing Plans',
      'Floor Plans',
      'Roof Plans',
      'Sections and Details',
      'Structural Notes',
      'Connection Details',
      'General Arrangement Drawings',
    ],
    software: ['AutoCAD', 'Revit', 'Bluebeam'],
    projectTypes: [
      'Single-Family Residential',
      'Multifamily Housing',
      'Commercial Buildings',
      'Industrial Facilities',
      'Mixed-Use Developments',
    ],
    benefits: [
      'Accurate documentation to engineering standards',
      'Clean, organized drawing sets',
      'Consistent layer and naming conventions',
      'Fast turnaround on revisions',
    ],
  },
  {
    id: 'revit-modeling',
    icon: Layers,
    title: 'Revit Modeling',
    overview:
      'Intelligent BIM modeling services that create accurate, coordinated 3D models for structural projects. Our Revit models serve as a foundation for documentation, coordination, and project visualization.',
    deliverables: [
      '3D Structural Models',
      'Construction Documents',
      'Section and Detail Views',
      'Sheet Layouts',
      'Schedules and Tables',
      'Model Coordination Views',
      'Clash Detection Reports',
      'Family Creation',
    ],
    software: ['Autodesk Revit', 'Navisworks', 'BIM 360'],
    projectTypes: [
      'Commercial Structures',
      'Multifamily Developments',
      'Industrial Facilities',
      'Institutional Buildings',
      'Mixed-Use Projects',
    ],
    benefits: [
      'Parametric modeling for efficient updates',
      'Improved coordination across disciplines',
      'Accurate quantity takeoffs',
      'Enhanced project visualization',
    ],
  },
  {
    id: 'bim-support',
    icon: Building2,
    title: 'BIM Support',
    overview:
      'Ongoing BIM support services to help engineering teams maintain model accuracy, incorporate revisions, and coordinate with project stakeholders. We work as an extension of your documentation team.',
    deliverables: [
      'Model Updates',
      'Redline Incorporation',
      'Design Change Implementations',
      'Coordination Reviews',
      'Model Maintenance',
      'Documentation Updates',
      'Sheet Revisions',
      'Clash Resolution Support',
    ],
    software: ['Autodesk Revit', 'Navisworks', 'BIM 360', 'AutoCAD'],
    projectTypes: [
      'Active Construction Projects',
      'Design Development Phase',
      'Construction Documentation',
      'As-Built Documentation',
      'Retrofit Projects',
    ],
    benefits: [
      'Maintain model accuracy throughout project lifecycle',
      'Quick turnaround on design changes',
      'Reduced internal drafting workload',
      'Consistent quality control',
    ],
  },
  {
    id: 'construction-documentation',
    icon: FileCheck,
    title: 'Construction Documentation',
    overview:
      'Comprehensive construction documentation services that produce permit-ready drawing packages and support engineering teams through the submittal process with clear, complete documentation.',
    deliverables: [
      'Permit Drawing Packages',
      'Construction Drawing Sets',
      'Shop Drawing Review Support',
      'RFI Response Drawings',
      'Coordination Drawings',
      'As-Built Documentation',
      'Submittal Packages',
      'Drawing Revisions',
    ],
    software: ['AutoCAD', 'Revit', 'Bluebeam', 'Adobe Acrobat'],
    projectTypes: [
      'Permit Submittals',
      'Construction Drawings',
      'Design-Build Projects',
      'Plan Check Responses',
      'Building Department Submittals',
    ],
    benefits: [
      'Complete, permit-ready packages',
      'Reduced plan check corrections',
      'Professional documentation standards',
      'Efficient submittal process',
    ],
  },
  {
    id: 'structural-detailing',
    icon: LayoutGrid,
    title: 'Structural Detailing',
    overview:
      'Detailed structural documentation including steel connection details, framing layouts, and specialized structural support drawings. We prepare fabrication-level drawings to support project execution.',
    deliverables: [
      'Steel Connection Details',
      'Framing Details',
      'Foundation Details',
      'Wood Connection Details',
      'Concrete Reinforcement Layouts',
      'Anchor Bolt Plans',
      'Bracing Details',
      'Typical Details Libraries',
    ],
    software: ['AutoCAD', 'Revit', 'Tekla Structures'],
    projectTypes: [
      'Steel Structures',
      'Wood Frame Buildings',
      'Concrete Structures',
      'Pre-Engineered Metal Buildings',
      'Hybrid Structural Systems',
    ],
    benefits: [
      'Fabrication-ready detail drawings',
      'Clear connection documentation',
      'Reduced field questions',
      'Improved construction efficiency',
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
            <Monitor className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">Services</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Drafting & BIM Services
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Professional drafting and BIM support services for engineering
            firms, contractors, and design-build teams. Reliable documentation
            that meets engineering standards.
          </p>
        </div>
      </section>

      {/* Service Cards - Overview */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-800/30 border border-slate-800 hover:border-gold-500/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                  <service.icon className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-300 text-center group-hover:text-white transition-colors">
                  {service.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${
            index % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/50'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {service.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Deliverables */}
                  <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-4">
                      Typical Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <Check className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Software */}
                  <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-6">
                    <h3 className="font-semibold text-white mb-4">Software Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.software.map((sw) => (
                        <span
                          key={sw}
                          className="px-3 py-1.5 bg-slate-700/50 border border-slate-600 rounded text-sm text-slate-200"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-semibold text-white mb-4 mt-6">
                      Project Types
                    </h3>
                    <ul className="space-y-1.5">
                      {service.projectTypes.map((type) => (
                        <li
                          key={type}
                          className="text-sm text-slate-300 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 border border-gold-500/20 rounded-xl p-6 sticky top-28">
                  <h3 className="font-semibold text-white mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <Check className="w-5 h-5 text-gold-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 w-full btn-primary text-sm justify-center"
                  >
                    Request Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Need a Different Service?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Contact us to discuss your specific drafting requirements and project
            needs.
          </p>
          <Link to="/contact" className="btn-primary text-base">
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
