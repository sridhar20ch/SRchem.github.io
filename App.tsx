
import React from 'react';
import { ChevronRight, ExternalLink, Download } from 'lucide-react';
import { 
  CANDIDATE_NAME, 
  CANDIDATE_TITLE, 
  RESEARCH_INTERESTS, 
  EDUCATION_DATA, 
  RESEARCH_EXPERIENCE, 
  PROJECTS, 
  SKILLS, 
  PUBLICATIONS, 
  NAV_LINKS, 
  CONTACT_INFO 
} from './constants';
import AssistantChat from './components/AssistantChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
            {CANDIDATE_NAME.split(' ').map((n, i) => i === 2 ? n : n[0]).join('. ')}
          </div>
          <div className="font-bold text-xl tracking-tight text-slate-900 sm:hidden">
            AJS.
          </div>
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
              >
                <span className="hidden md:inline">{link.name}</span>
                <span className="md:hidden">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold uppercase tracking-wider">
              PhD Applicant 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              {CANDIDATE_NAME}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl leading-relaxed">
              {CANDIDATE_TITLE}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a href="#contact" className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all font-medium flex items-center gap-2 shadow-lg shadow-slate-200">
                Inquire Details <ChevronRight size={18} />
              </a>
              <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-all font-medium flex items-center gap-2">
                Download CV <Download size={18} />
              </button>
            </div>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 bg-slate-900 rounded-full rotate-6 scale-95 opacity-5"></div>
            <img 
              src="https://picsum.photos/seed/chemistry/800/800" 
              alt={CANDIDATE_NAME}
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white px-6 scroll-mt">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Education & Academic Focus</h2>
            <div className="h-1 w-20 bg-slate-900"></div>
          </div>
          
          <div className="grid gap-12">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l border-slate-200">
                <div className="absolute left-[-5px] top-1 w-2 h-2 bg-slate-900 rounded-full"></div>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">{edu.period}</span>
                </div>
                <p className="text-lg text-slate-700 mb-1">{edu.institution}, {edu.location}</p>
                {edu.honors && <p className="text-sm font-medium text-slate-500 italic mb-2">{edu.honors} • GPA: {edu.gpa}</p>}
                {edu.thesis && (
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg border-l-2 border-slate-900">
                    <p className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-tighter">Thesis</p>
                    <p className="text-slate-600 text-sm italic">"{edu.thesis}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 uppercase tracking-widest text-xs">
              Research Interests
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {RESEARCH_INTERESTS}
            </p>
          </div>
        </div>
      </section>

      {/* Research Experience */}
      <section id="research" className="py-24 px-6 scroll-mt">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Professional Research Experience</h2>
            <div className="h-1 w-20 bg-slate-900"></div>
          </div>

          <div className="grid gap-8">
            {RESEARCH_EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-slate-600 font-medium">{exp.institution} | {exp.location}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-500 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-center">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                      <div className="mt-2 w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900 text-white px-6 scroll-mt">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-white">Laboratory & Technical Skills</h2>
            <div className="h-1 w-20 bg-white/30"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-xl font-bold text-slate-300 border-b border-white/10 pb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-slate-200 hover:bg-white/10 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Publications */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
              <div className="h-1 w-20 bg-slate-900"></div>
            </div>
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-slate-100 text-slate-500 rounded">
                    {project.type}
                   </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed">{project.summary}</p>
                <ul className="space-y-2 pt-2">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <ChevronRight size={14} className="text-slate-900" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Publications & Abstracts</h2>
              <div className="h-1 w-20 bg-slate-900"></div>
            </div>
            <div className="space-y-8">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="group">
                  <p className="text-sm font-bold text-slate-400 mb-1">{pub.year}</p>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-600 transition-colors cursor-pointer flex items-center gap-2">
                    {pub.title} <ExternalLink size={16} />
                  </h3>
                  <p className="text-sm text-slate-600">{pub.authors}</p>
                  <p className="text-sm italic text-slate-500">{pub.journal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 px-6 scroll-mt">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4 flex flex-col items-center">
            <h2 className="text-4xl font-bold text-slate-900">Get in Touch</h2>
            <p className="text-slate-600 max-w-lg">
              Currently open to PhD positions starting in 2025. I am particularly interested in research groups focusing on sustainable catalysis and advanced materials.
            </p>
            <div className="h-1 w-20 bg-slate-900 mt-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {CONTACT_INFO.map((info, idx) => (
              <a 
                key={idx} 
                href={info.link}
                className="flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-64"
              >
                <div className="p-4 bg-slate-900 text-white rounded-full mb-4">
                  {info.icon}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{info.label}</p>
                <p className="text-slate-900 font-medium">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {CANDIDATE_NAME}. Professional Academic Portfolio.
          </p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors text-xs uppercase font-bold tracking-widest">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors text-xs uppercase font-bold tracking-widest">Research Gate</a>
            <a href="#" className="hover:text-slate-900 transition-colors text-xs uppercase font-bold tracking-widest">ORCID</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AssistantChat />
    </div>
  );
};

export default App;
