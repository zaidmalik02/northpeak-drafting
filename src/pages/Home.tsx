import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  LayoutGrid,
  Layers,
  PencilRuler,
  Building,
  Factory,
  HomeIcon,
  Clock,
  FileCheck,
  Users,
  MapPin,
  ShieldCheck,
  RefreshCw,
  Zap,
} from 'lucide-react';

const trustBadges = [
  { icon: HomeIcon, label: 'Residential' },
  { icon: Building2, label: 'Multifamily' },
  { icon: Building, label: 'Commercial' },
  { icon: Factory, label: 'Industrial' },
];

const softwareBadges = ['AutoCAD', 'Revit', 'BIM Support', 'Fast Turnaround', 'Revision Support', 'Construction Documentation'];

const services = [
  {
    icon: PencilRuler,
    title: 'Structural Drafting',
    description:
      'Foundation plans, framing plans, sections, details, and structural documentation prepared to engineering specifications.',
    href: '/services#structural-drafting',
  },
  {
    icon: Layers,
    title: 'Revit Modeling',
    description:
      'Accurate BIM models and coordinated construction documentation for complex structural projects.',
    href: '/services#revit-modeling',
  },
  {
    icon: FileCheck,
    title: 'Construction Documentation',
    description:
      'Permit-ready drawing packages and comprehensive documentation support for project submittals.',
    href: '/services#construction-documentation',
  },
  {
    icon: LayoutGrid,
    title: 'Structural Detailing',
    description:
      'Steel detailing, framing details, connection designs, and structural support documentation.',
    href: '/services#structural-detailing',
  },
  {
    icon: Building2,
    title: 'BIM Support',
    description:
      'Model updates, redline incorporation, clash detection, and drafting coordination services.',
    href: '/services#bim-support',
  },
];

const reasons = [
  { icon: FileCheck, title: 'Accurate Documentation', description: 'Precision-focused drafting that meets engineering standards' },
  { icon: Clock, title: 'Fast Response Times', description: 'Quick turnaround on revisions and project updates' },
  { icon: RefreshCw, title: 'Revision Support', description: 'Dedicated support throughout the revision process' },
  { icon: Users, title: 'Scalable Drafting Capacity', description: 'Flexible resources to match project demands' },
  { icon: MapPin, title: 'US Project Experience', description: 'Familiar with US building codes and standards' },
  { icon: Building, title: 'Multi-Sector Expertise', description: 'Residential, commercial, and industrial project experience' },
  { icon: ShieldCheck, title: 'Quality Control Process', description: 'Systematic QA checks on all deliverables' },
  { icon: Zap, title: 'Dedicated Support', description: 'Direct communication with technical drafting professionals' },
];

const processSteps = [
  {
    step: '01',
    title: 'Project Intake',
    description: 'Receive markups, sketches, PDFs, CAD files, or BIM models from your team.',
  },
  {
    step: '02',
    title: 'Scope Review',
    description: 'Review requirements, clarify deliverables, and establish project timeline.',
  },
  {
    step: '03',
    title: 'Production',
    description: 'Drafting, modeling, and documentation development to specifications.',
  },
  {
    step: '04',
    title: 'Internal QA',
    description: 'Quality review and coordination checks before delivery.',
  },
  {
    step: '05',
    title: 'Submission',
    description: 'Deliver drawings and provide revision support as needed.',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.pexels.com/photos/1216588/pexels-photo-1216588.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">
                Structural Drafting & BIM Support
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
              Reliable Structural Drafting & BIM Support for{' '}
              <span className="text-gold-400">Engineering Firms</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl animate-slide-up animate-delay-100">
              Helping engineering firms, contractors, and design-build teams
              accelerate project delivery through accurate drafting, BIM
              modeling, and construction documentation.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-slide-up animate-delay-200">
              <Link to="/contact" className="btn-primary text-base">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/portfolio" className="btn-secondary text-base">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-slate-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-slate-400"
              >
                <badge.icon className="w-5 h-5 text-gold-500" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
            {softwareBadges.map((badge) => (
              <div
                key={badge}
                className="px-4 py-1.5 bg-slate-800/50 border border-slate-700 rounded text-xs font-medium text-slate-300"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Drafting & BIM Services
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Professional drafting support for engineering firms, contractors,
              and design-build teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group card card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-500/10 text-gold-500 mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-gold-400 font-medium hover:text-gold-300 transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why NorthPeak Section */}
      <section className="section-padding bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why NorthPeak Drafting
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Technical drafting partnership built on quality, responsiveness,
              and documentation accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 text-gold-400 mb-4">
                  <reason.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-slate-400 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A streamlined workflow designed for engineering teams.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="relative z-10 bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-gold-500/30 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-bold font-display text-lg mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Expand Your Drafting Capacity?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your project requirements and
            learn how NorthPeak can support your team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/portfolio" className="btn-secondary text-base">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
