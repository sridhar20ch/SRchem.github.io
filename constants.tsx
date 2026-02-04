
import React from 'react';
import { Beaker, Microscope, BookOpen, FlaskConical, Award, Mail, Linkedin, Github } from 'lucide-react';
import { Education, ResearchExperience, SkillCategory, Project, Publication } from './types';

export const CANDIDATE_NAME = "Alexander J. Sterling";
export const CANDIDATE_TITLE = "M.Sc. Chemistry Graduate | Prospective PhD Candidate";
export const RESEARCH_INTERESTS = "Materials Chemistry, Heterogeneous Catalysis, Sustainable Energy, Porous Coordination Polymers (MOFs/COFs)";

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Master of Science in Chemistry",
    institution: "ETH Zürich",
    location: "Zurich, Switzerland",
    period: "2022 — 2024",
    honors: "Summa Cum Laude",
    gpa: "5.8/6.0",
    thesis: "Design and Synthesis of Functionalized Metal-Organic Frameworks for Selective CO2 Capture and Catalytic Conversion."
  },
  {
    degree: "Bachelor of Science in Chemistry",
    institution: "Imperial College London",
    location: "London, UK",
    period: "2019 — 2022",
    honors: "First Class Honours",
    gpa: "84%"
  }
];

export const RESEARCH_EXPERIENCE: ResearchExperience[] = [
  {
    role: "Graduate Research Assistant",
    institution: "Laboratory of Inorganic Chemistry, ETH Zürich",
    location: "Zurich, Switzerland",
    period: "Sept 2023 — Present",
    description: [
      "Developing novel transition-metal catalysts supported on porous frameworks for green hydrogen production.",
      "Conducted over 50 individual synthesis runs, optimizing yields from 40% to 85% through systematic ligand tuning.",
      "Collaborated with the theory department to validate experimental results with DFT calculations."
    ]
  },
  {
    role: "Research Intern",
    institution: "Max Planck Institute for Chemical Energy Conversion",
    location: "Mülheim, Germany",
    period: "June 2022 — Aug 2022",
    description: [
      "Assisted in the characterization of active sites in heterogeneous catalysts using in-situ Spectroscopy.",
      "Performed detailed kinetic studies on CO oxidation over gold-titania nanoparticles.",
      "Documented protocols for high-pressure reactor safety and maintenance."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Master's Thesis: Porous Polymers in Carbon Capture",
    type: "M.Sc. Research",
    summary: "Investigation into the amine-functionalization of Zr-based MOFs to enhance atmospheric CO2 adsorption under humid conditions.",
    outcomes: [
      "Synthesized three novel isostructural MOFs with varying pore aperture sizes.",
      "Achieved a 30% increase in CO2/N2 selectivity compared to commercial benchmarks.",
      "Results presented at the Swiss Chemical Society Fall Meeting 2024."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Synthesis Techniques",
    items: ["Solvothermal Synthesis", "Schlenk-line Techniques", "Air-sensitive Chemistry", "Microwave-assisted Synthesis", "Crystallization"]
  },
  {
    category: "Characterization",
    items: ["Powder X-ray Diffraction (PXRD)", "Single-crystal XRD", "NMR (1H, 13C, 31P)", "Gas Adsorption (BET)", "SEM/EDX", "TGA/DSC", "UV-Vis/IR"]
  },
  {
    category: "Software & Computing",
    items: ["ChemDraw", "Mercury (Crystallography)", "MestReNova", "OriginLab", "Python (Data Analysis)", "Gaussian/ORCA (Introductory)"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Synergistic Effects of Bimetallic Sites in MOFs for Enhanced Catalysis",
    authors: "Sterling, A. J., Müller, B., Schmidt, K.",
    journal: "Journal of the American Chemical Society (Under Review)",
    year: "2024"
  },
  {
    title: "Novel Linker Design for Stable Porous Architectures",
    authors: "Schmidt, K., Sterling, A. J.",
    journal: "Inorganic Chemistry Frontiers (Poster Session)",
    year: "2023"
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#home", icon: <FlaskConical size={18} /> },
  { name: "About", href: "#about", icon: <BookOpen size={18} /> },
  { name: "Research", href: "#research", icon: <Microscope size={18} /> },
  { name: "Skills", href: "#skills", icon: <Beaker size={18} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={18} /> }
];

export const CONTACT_INFO = [
  { label: "Email", value: "a.sterling@alumni.ethz.ch", icon: <Mail size={20} />, link: "mailto:a.sterling@alumni.ethz.ch" },
  { label: "LinkedIn", value: "linkedin.com/in/ajsterling", icon: <Linkedin size={20} />, link: "#" },
  { label: "GitHub", value: "github.com/asterling-chem", icon: <Github size={20} />, link: "#" }
];
