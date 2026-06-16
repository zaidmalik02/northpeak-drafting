import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Clock,
  Users,
  Target,
  Award,
  LineChart,
  ArrowRight,
  Mountain,
} from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality',
    description:
      'Systematic quality control processes ensure accurate, consistent deliverables.',
  },
  {
    icon: Clock,
    title: 'Responsiveness',
    description:
      'Fast turnaround on requests and clear communication throughout projects.',
  },
  {
    icon: Target,
    title: 'Accuracy',
    description:
      'Attention to detail in every drawing, model, and document we produce.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'Working as an extension of your team with aligned goals and standards.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24hr', label: 'Response Time' },
  { value: '3hr', label: 'Average Revision Turnaround' },
];

const expertise = [
  'Structural Drafting',
  'Revit Modeling',
  'AutoCAD',
  'BIM Coordination',
  'Construction Documentation',
  'Steel Detailing',
  'Wood Frame Structures',
  'Foundation Design Support',
  'Permit Drawing Packages',
  'Quality Control Review',
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <Mountain className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-sm font-medium">About</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Built to Support Engineering Teams
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8">
              NorthPeak Drafting helps engineering firms expand drafting
              capacity, improve turnaround times, and maintain documentation
              quality through reliable technical production support.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              We focus on accuracy, responsiveness, and documentation quality.
              Our team integrates with engineering workflows to deliver clear,
              buildable documentation that meets project requirements and
              engineering standards.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl sm:text-5xl font-bold text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  We operate as a technical production partner for engineering
                  firms, contractors, and design-build teams. Our focus is on
                  delivering accurate structural documentation that supports
                  project success.
                </p>
                <p>
                  Every drawing set is developed to client specifications, with
                  consistent layer structures, annotation standards, and
                  documentation conventions that match your existing workflows.
                </p>
                <p>
                  We maintain clear communication throughout projects, providing
                  status updates and responding promptly to feedback. Our goal
                  is to make the drafting process efficient and predictable for
                  engineering teams.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-800">
                <img
                  src="https://images.pexels.com/photos/1367279/pexels-photo-1367279.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Technical drafting workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-gold-400" />
                  <div>
                    <div className="font-semibold text-white">Quality Focused</div>
                    <div className="text-sm text-slate-400">
                      Systematic QA on all deliverables
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Core values that guide our work and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-slate-800/30 border border-slate-700 rounded-xl hover:border-gold-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Technical Expertise
              </h2>
              <p className="text-slate-300 mb-6">
                Experienced across structural drafting, BIM modeling, and
                construction documentation for residential, multifamily,
                commercial, and industrial projects.
              </p>
              <p className="text-slate-400 mb-8">
                We understand US building codes, engineering documentation
                standards, and the coordination requirements of complex
                structural projects.
              </p>
              <Link to="/services" className="btn-primary text-sm">
                View Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {expertise.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-3 bg-slate-800/30 border border-slate-700 rounded-lg"
                >
                  <LineChart className="w-4 h-4 text-gold-400" />
                  <span className="text-sm text-slate-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note on Services */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="font-semibold text-xl text-white mb-4">
              What We Provide
            </h3>
            <p className="text-slate-300 mb-6">
              NorthPeak Drafting provides drafting and documentation services
              that support licensed professional engineers, contractors, and
              design-build teams.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-gold-400 mb-2">We Provide</div>
                <ul className="space-y-1 text-slate-400">
                  <li>Structural drafting</li>
                  <li>Revit modeling</li>
                  <li>BIM support</li>
                  <li>Construction documentation</li>
                  <li>Revision support</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-slate-500 mb-2">Not Provided</div>
                <ul className="space-y-1 text-slate-500">
                  <li>PE stamping</li>
                  <li>Engineering certification</li>
                  <li>Engineering design approval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Schedule a consultation to discuss your drafting needs and project
            requirements.
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
