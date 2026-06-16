import { Link } from 'react-router-dom';
import {
  HomeIcon,
  Building2,
  Warehouse,
  Factory,
  HardHat,
  Building,
  Users,
  ArrowRight,
  Check,
} from 'lucide-react';

const industries = [
  {
    id: 'residential',
    icon: HomeIcon,
    title: 'Residential',
    description:
      'Structural drafting support for single-family homes, custom residences, and residential developments. We help engineering firms produce clear documentation for foundation systems, floor framing, roof structures, and connection details.',
    needs: [
      'Foundation plans and details',
      'Floor and roof framing plans',
      'Structural details and connections',
      'Permit drawing packages',
      'Revision support for plan check corrections',
    ],
    projects: ['Single-Family Homes', 'Custom Residences', 'ADUs', 'Home Additions'],
  },
  {
    id: 'multifamily',
    icon: Building2,
    title: 'Multifamily',
    description:
      'Drafting support for apartment complexes, condominiums, and multi-unit housing projects. Our team understands the complexity of multifamily structural documentation and coordination requirements.',
    needs: [
      'Construction documentation',
      'Floor plans and layouts',
      'Coordination drawings',
      'Type V construction details',
      'Podium structure documentation',
    ],
    projects: ['Apartment Complexes', 'Condominiums', 'Townhomes', 'Senior Living Facilities'],
  },
  {
    id: 'commercial',
    icon: Warehouse,
    title: 'Commercial',
    description:
      'Commercial structural drafting for retail, office, and mixed-use developments. We support engineering teams with steel, concrete, and masonry structural documentation.',
    needs: [
      'Steel structure drafting',
      'Concrete frame documentation',
      'Foundation systems',
      'Lateral force resisting systems',
      'Construction documents',
    ],
    projects: ['Retail Centers', 'Office Buildings', 'Mixed-Use Developments', 'Restaurants'],
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial',
    description:
      'Structural drafting for warehouses, manufacturing facilities, and industrial buildings. Experienced with pre-engineered metal building documentation and industrial structural systems.',
    needs: [
      'Pre-engineered metal building drafting',
      'Foundation and anchor bolt plans',
      'Mezzanine framing',
      'Heavy equipment support',
      ' Crane runway documentation',
    ],
    projects: ['Warehouses', 'Manufacturing Facilities', 'Distribution Centers', 'Cold Storage'],
  },
  {
    id: 'design-build',
    icon: HardHat,
    title: 'Design-Build',
    description:
      'Integrated drafting support for design-build teams that need responsive documentation throughout the design and construction process. We adapt to the fast-paced nature of design-build project delivery.',
    needs: [
      'Rapid design iteration support',
      'Construction document development',
      'Design change incorporation',
      'Coordination drawings',
      'Submittal documentation',
    ],
    projects: ['Fast-Track Projects', 'Design-Build Teams', 'Integrated Project Delivery'],
  },
  {
    id: 'engineering-firms',
    icon: Users,
    title: 'Engineering Firms',
    description:
      'Technical drafting partnership for structural engineering firms seeking to expand production capacity without adding overhead. We integrate with your document control and quality standards.',
    needs: [
      'Structural drawing production',
      'Model development and maintenance',
      'Standard detail libraries',
      'Multi-project support',
      'Flexible capacity scaling',
    ],
    projects: ['Structural Engineering Firms', 'MEP Engineering Firms', 'Civil Engineering Firms'],
  },
  {
    id: 'contractors',
    icon: Building,
    title: 'Contractors',
    description:
      'Drafting support for general contractors and construction managers who need shop drawing development, as-built documentation, and construction support drawings.',
    needs: [
      'Shop drawing review support',
      'RFI documentation',
      'As-built drawings',
      'Coordination models',
      'Construction sequencing documents',
    ],
    projects: ['General Contractors', 'Construction Managers', 'Design-Build Contractors'],
  },
];

export default function Industries() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
            <Building className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">Industries</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Industries We Support
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Structural drafting and BIM support across residential, multifamily,
            commercial, industrial, and design-build sectors.
          </p>
        </div>
      </section>

      {/* Industry Quick Nav */}
      <section className="py-8 bg-slate-900/50 border-y border-slate-800 sticky top-20 z-40 -mt-px">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-800 rounded text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <ind.icon className="w-4 h-4" />
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`section-padding ${
            index % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/50'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                    <industry.icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {industry.title}
                  </h2>
                </div>

                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {industry.description}
                </p>

                <div className="mb-8">
                  <h3 className="font-semibold text-white mb-4">
                    Common Drafting Needs
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {industry.needs.map((need) => (
                      <li
                        key={need}
                        className="flex items-start gap-2 text-slate-300"
                      >
                        <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="btn-primary text-sm"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Projects Card */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
                  <h3 className="font-semibold text-white mb-6">
                    Project Types
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {industry.projects.map((project) => (
                      <div
                        key={project}
                        className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-gold-500 rounded-full" />
                        <span className="text-sm text-slate-200">{project}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <p className="text-slate-400 text-sm">
                      Looking for support on a {industry.title.toLowerCase()}{' '}
                      project? We work directly with engineering teams to deliver
                      accurate, timely documentation.
                    </p>
                  </div>
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
            Support for Your Industry
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Contact us to discuss how NorthPeak can support your drafting needs
            in any of these sectors.
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
