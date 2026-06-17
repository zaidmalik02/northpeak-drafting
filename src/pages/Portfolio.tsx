import { Link } from 'react-router-dom';
import {
  ArrowRight,
  HomeIcon,
  Building2,
  Warehouse,
  FileText,
  Layers,
} from 'lucide-react';

const categories = ['All', 'Residential', 'Multifamily', 'Commercial', 'Industrial'];

const projects = [
  {
    id: 1,
    title: 'Residential Structural Package',
    category: 'Residential',
    image:
      'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=800',
    services: [
      'Foundation Plans',
      'Floor Framing Plans',
      'Roof Framing Plans',
      'Structural Details',
    ],
    software: ['AutoCAD'],
    description:
      'Residential structural drafting package prepared to support permit and construction documentation requirements. Complete set of structural drawings including foundation, framing, and connection details.',
    stats: {
      drawings: 12,
      timeline: '2 weeks',
    },
  },
  {
    id: 2,
    title: 'Multifamily Residential Development',
    category: 'Multifamily',
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    services: [
      'Construction Documentation',
      'Floor Plans',
      'Coordination Drawings',
      'Structural Details',
    ],
    software: ['AutoCAD', 'Revit'],
    description:
      'Large-scale multifamily drafting and documentation support project. Provided complete construction documentation for a multi-building residential development including coordination drawings and structural details.',
    stats: {
      drawings: 45,
      timeline: '6 weeks',
    },
  },
  {
    id: 3,
    title: 'Commercial Warehouse Facility',
    category: 'Commercial',
    image:'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    services: [
      'Steel Structure Drafting',
      'Frame Marking Plans',
      'Mezzanine Plans',
      'Construction Documentation',
    ],
    software: ['Revit', 'AutoCAD'],
    description:
      'Commercial warehouse drafting and structural documentation support project. Based on a pre-engineered steel building workflow, including mezzanine levels and loading dock areas.',
    stats: {
      drawings: 28,
      timeline: '4 weeks',
    },
  },
];

const capabilities = [
  { icon: HomeIcon, title: 'Residential Projects', count: '50+' },
  { icon: Building2, title: 'Multifamily Projects', count: '25+' },
  { icon: Warehouse, title: 'Commercial Projects', count: '30+' },
  { icon: Layers, title: 'Industrial Projects', count: '15+' },
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
            <FileText className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">Portfolio</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Representative samples of our structural drafting and BIM support
            work for engineering firms and contractors.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold-500/10 text-gold-400 mb-3">
                  <cap.icon className="w-6 h-6" />
                </div>
                <div className="font-display text-3xl font-bold text-white mb-1">
                  {cap.count}
                </div>
                <div className="text-sm text-slate-400">{cap.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                    cat === 'All'
                      ? 'bg-gold-500 text-slate-950'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded text-xs text-slate-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Services Provided
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 bg-slate-800 text-xs text-slate-300 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-800">
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-4 h-4" />
                        {project.stats.drawings} drawings
                      </span>
                      <span>{project.stats.timeline}</span>
                    </div>
                    <div className="flex gap-1.5">
                      {project.software.map((sw) => (
                        <span
                          key={sw}
                          className="px-2 py-1 bg-gold-500/10 border border-gold-500/20 text-xs text-gold-400 rounded"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Software Expertise */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Software Expertise
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Experienced with industry-standard drafting and modeling software.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'AutoCAD',
              'Revit',
              'Navisworks',
              'Bluebeam',
              'BIM 360',
              'Tekla Structures',
            ].map((software) => (
              <div
                key={software}
                className="flex items-center justify-center p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors"
              >
                <span className="text-slate-200 font-medium">{software}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Let's discuss how NorthPeak can support your drafting and
            documentation needs.
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
