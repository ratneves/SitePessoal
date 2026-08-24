export type Locale = "pt" | "en";

export interface StatItem {
  value: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  deptHead?: boolean;
}

export type TeachingIcon = "university" | "trainer" | "certificate" | "council";

export interface TeachingItem {
  role: string;
  institution: string;
  period: string;
  details: string[];
  icon: TeachingIcon;
  featured?: boolean;
}

export interface ProjectItem {
  name: string;
  description: string;
  tag: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SectorItem {
  title: string;
  description: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    leadership: string;
    teaching: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    kicker: string;
    name: string;
    roles: string[];
    tagline: string;
    positioning: string;
    location: string;
    ctaContact: string;
    ctaCv: string;
    ctaDownload: string;
  };
  stats: StatItem[];
  about: {
    title: string;
    paragraphs: string[];
  };
  leadership: {
    title: string;
    intro: string;
    skills: string[];
  };
  teaching: {
    title: string;
    intro: string;
    items: TeachingItem[];
  };
  experience: {
    title: string;
    intro: string;
    deptHeadBadge: string;
    items: ExperienceItem[];
    additionalTitle: string;
    additional: ExperienceItem[];
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  sectors: {
    title: string;
    items: SectorItem[];
  };
  languages: {
    title: string;
    items: { name: string; level: string }[];
  };
  extra: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    intro: string;
    email: string;
    phone: string;
    linkedin: string;
    location: string;
    ctaDownload: string;
    ctaDownloadAts: string;
  };
  footer: {
    rights: string;
  };
}

export const content: Record<Locale, Content> = {
  pt: {
    meta: {
      title: "Rui Neves — Diretor de Departamento & Docente",
      description:
        "Percurso profissional de Rui Alberto Tomás Neves: 38 anos em liderança de departamentos de tecnologia e docência, de analista programador a CTO/CIO.",
    },
    nav: {
      about: "Sobre",
      leadership: "Liderança",
      teaching: "Docência",
      experience: "Percurso",
      projects: "Projetos",
      education: "Formação",
      skills: "Competências",
      contact: "Contacto",
    },
    hero: {
      kicker: "Rui Alberto Tomás Neves",
      name: "Rui Neves",
      roles: [
        "Diretor de Departamento",
        "Docente Universitário & Formador",
        "CTO / CIO",
      ],
      tagline:
        "Uma combinação pouco comum: a disciplina de liderar departamentos de tecnologia e a vocação de ensinar. A mesma capacidade de simplificar, formar e desenvolver pessoas que aplico em sala de aula, aplico também nas equipas que dirijo há mais de três décadas.",
      positioning:
        "Sempre aberto a boas conversas sobre liderança tecnológica e ensino.",
      location: "Porto, Portugal",
      ctaContact: "Contactar",
      ctaCv: "Ver percurso completo",
      ctaDownload: "Download CV",
    },
    stats: [
      { value: "38", label: "anos de carreira" },
      { value: "40", label: "anos como formador" },
      { value: "4", label: "departamentos liderados" },
      { value: "5", label: "países com projetos entregues" },
    ],
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Sou um executivo de tecnologia com uma carreira de 38 anos, construída sobre dois pilares que se reforçam mutuamente: a liderança de departamentos e a docência. Comecei a dar formação em 1986, ainda antes de iniciar funções como analista programador, e desde então nunca deixei de combinar a responsabilidade de gerir equipas e sistemas com a de formar e desenvolver pessoas — primeiro como responsável de setor, depois como diretor de departamento em várias organizações, e desde 2023 também como docente universitário.",
        "Ao longo do percurso, dirigi departamentos de informática e tecnologia em setores como saúde, têxtil, indústria automóvel e distribuição, sempre com responsabilidade direta por equipas, orçamentos e resultados. Em paralelo, mantive uma atividade constante de formação — mais de três décadas a preparar profissionais em áreas como sistemas de informação, bases de dados e ferramentas de produtividade.",
        "Atualmente concilio a função de CTO/CIO do Grupo Filinto Mota, onde reporto diretamente ao CEO, com a docência na Universidade Aberta, onde leciono Sistemas Operativos, Modelação de Sistemas de Informação e Sistemas de Gestão de Bases de Dados. Estou também a concluir o Doutoramento em Ciência e Tecnologia Web na UTAD.",
      ],
    },
    leadership: {
      title: "Liderança de Departamento",
      intro:
        "Ao longo de quatro décadas assumi a responsabilidade direta por departamentos de tecnologia — da definição da estratégia à gestão de pessoas, orçamentos e fornecedores.",
      skills: [
        "Gestão de equipas multidisciplinares (programadores, técnicos, helpdesk)",
        "Definição e execução de estratégia tecnológica, reportando à administração/CEO",
        "Gestão orçamental, de fornecedores e negociação de contratos",
        "Liderança situacional e desenvolvimento de equipas de alta performance",
        "Gestão da mudança e promoção de ambientes de inovação",
        "Comunicação clara e influente com todos os níveis da organização",
        "Resolução de conflitos e tomada de decisão assertiva",
      ],
    },
    teaching: {
      title: "Docência & Formação",
      intro:
        "A par da liderança executiva, a docência é uma constante desde 1990 — da formação profissional em contexto empresarial ao ensino universitário.",
      items: [
        {
          role: "Docente Universitário",
          institution: "Universidade Aberta (UAb)",
          period: "2023 – Atual",
          icon: "university",
          featured: true,
          details: [
            "Sistemas Operativos",
            "Modelação de Sistemas de Informação",
            "Sistemas de Gestão de Bases de Dados",
          ],
        },
        {
          role: "Formador",
          institution: "INESP, Unicenter-Joviform, Orientaris e IPLNT",
          period: "1986 – Atual",
          icon: "trainer",
          featured: true,
          details: [
            "Introdução à informática, Windows e Internet",
            "Programação — de Cobol e Basic a linguagens atuais",
            "Microsoft Office avançado (Excel, Word, Access) e Power BI",
            "Gestão e administração de bases de dados, gestão de stocks",
          ],
        },
        {
          role: "Formação Pedagógica de Formadores (CAP/CCP)",
          institution: "ENA",
          period: "2009",
          icon: "certificate",
          details: [
            "Certificação de Competências Pedagógicas, formalizando a atividade de formação já exercida",
          ],
        },
        {
          role: "Membro do Conselho Pedagógico",
          institution: "ISTEC — Instituto Superior de Tecnologias Avançadas",
          period: "Nomeado pela associação de estudantes",
          icon: "council",
          details: [
            "Participação ativa nos órgãos pedagógicos da instituição onde se licenciou",
          ],
        },
      ],
    },
    experience: {
      title: "Percurso Profissional",
      intro:
        "Progressão consistente desde analista programador até CTO/CIO, com responsabilidade direta de direção de departamento em várias das organizações.",
      deptHeadBadge: "Direção de Departamento",
      items: [
        {
          role: "CTO / CIO / IT Manager",
          company: "Grupo Filinto Mota",
          location: "Porto",
          period: "2019 – Atual",
          deptHead: true,
          bullets: [
            "Responsável por todas as soluções de tecnologia do grupo, reportando diretamente ao CEO, com autonomia total para definir e executar a estratégia tecnológica.",
            "Digitalizei mais de 80% dos processos administrativos e comerciais, reduzindo o tempo médio de resposta ao cliente em 35%.",
            "Liderei a implementação e customização de um portefólio alargado de sistemas (Sage X3, Sage People, DMS Icar, Xrt, Signature, GISe Rentway) em todas as empresas do grupo, aumentando a produtividade global em 25%.",
            "Implementei políticas de cibersegurança, gestão de acessos e conformidade RGPD, mantendo zero incidentes de segurança em 3 anos consecutivos.",
            "Introduzi práticas DevOps e pipelines CI/CD, modernizando a infraestrutura com cloud híbrida, containers e monitorização (Grafana/ELK).",
            "Estruturei o data warehouse do grupo e implementei dashboards em Power BI, reduzindo o tempo de elaboração de relatórios em 60%.",
            "Geri e desenvolvi uma equipa de 4 profissionais, elevando o índice de satisfação interna em 30%, e liderei projetos de otimização que geraram poupanças anuais superiores a 150 mil euros.",
          ],
        },
        {
          role: "IT Manager / Senior Developer",
          company: "Elastron Portugal, S.A.",
          location: "Paços de Ferreira",
          period: "2017 – 2019",
          bullets: [
            "Defini, em conjunto com a administração, a estratégia de desenvolvimento de software e as necessidades tecnológicas da empresa.",
            "Geri uma equipa de TI de 4 elementos e as infraestruturas de sistemas e rede, assegurando 98% de disponibilidade dos sistemas.",
            "Desenvolvi um ERP interno multiplataforma (C#, SQL Server, Web, Mobile com Xamarin), reduzindo o tempo de processamento de encomendas em 30%.",
            "Conduzi a adaptação da empresa ao RGPD e geri orçamentos para abertura de novas delegações, reduzindo custos em 20%.",
            "Customizei o ERP Primavera e implementei automatismos de reporting em Power BI e Excel/VBA.",
          ],
        },
        {
          role: "IT Manager / Team Leader / Senior Developer",
          company: "Confetil – Confeções Têxteis, Lda.",
          location: "Maia",
          period: "2015 – 2017",
          bullets: [
            "Liderei o desenvolvimento de um ERP têxtil integrado — encomendas, desenvolvimento de produto, planeamento, corte, produção e stocks — reduzindo em 40% o tempo de planeamento e gestão de stocks.",
            "Implementei soluções mobile/web para gestão de encomendas e produção, aumentando a eficiência operacional em 35%.",
            "Integrei máquinas de produção com o software de gestão, automatizando a recolha de dados de consumo e mão de obra e reduzindo erros manuais em 90%.",
            "Criei um portal web para subcontratados, com controlo de produção, qualidade e não conformidades em tempo real.",
          ],
        },
        {
          role: "Diretor de Departamento de Desenvolvimento",
          company: "Ediprinter – Soluções de Informática",
          location: "Vila do Conde",
          period: "2010 – 2015",
          deptHead: true,
          bullets: [
            "Coordenei uma equipa de 12 profissionais (7 programadores e 5 técnicos, incluindo helpdesk), entregando soluções para os setores de inspeção automóvel e logística.",
            "Geri projetos com metodologia Scrum (ferramenta interna e JIRA) para clientes como o Grupo Brisa (CONTROLAUTO) e o Grupo BPI (MASTERTEST), contribuindo para um aumento de 15% na quota de mercado dos clientes.",
            "Desenvolvi aplicações desktop, web e mobile (iOS, Android, Windows), acelerando o time-to-market de novos produtos em 25%.",
            "Certifiquei software junto da Autoridade Tributária e geri projetos internacionais em Angola, Moçambique, Cabo Verde, Argentina e Colômbia.",
            "Apoiei a gestão e desenvolvimento dos ERPs próprios da empresa: ediGest (faturação) e easyScreen (POS).",
          ],
        },
      ],
      additionalTitle: "Experiência Adicional",
      additional: [
        {
          role: "Analista de Sistemas de Informação",
          company: "Facevisível, Lda",
          location: "Porto",
          period: "2000 – 2010",
          bullets: [
            "Geri uma equipa de 4 elementos (2 programadores, 2 técnicos) em projetos de saúde, têxtil e tintas para clientes como o Hospital Santa Maria e o Centro Hospitalar São Francisco, incluindo integração com equipamento médico de imagiologia via DICOM e administração de bases de dados SQL Server com clustering e replicação.",
            "Outros clientes: Bracara (têxtil), Altere (tinturaria), Clisa, Soerad e IPR (saúde), CDRE (radiologia), Sifamolar (móveis), e as fábricas de tintas Douro e Anar.",
          ],
        },
        {
          role: "Diretor de Departamento de Informática / Adjunto de Direção",
          company: "António Ferreira da Silva e Filhos, Lda",
          location: "Maia",
          period: "1992 – 2000",
          deptHead: true,
          bullets: [
            "Liderei o departamento de informática (1992–1998) nas áreas de faturação, contabilidade e recursos humanos, assumindo depois funções de Adjunto de Direção (1998–2000), com responsabilidade pela negociação com bancos, seguradoras e fornecedores.",
          ],
        },
        {
          role: "Analista Programador / Responsável de Sector",
          company: "JUL – Sistemas Informáticos, Lda",
          location: "Vila Nova de Gaia",
          period: "1988 – 1992",
          bullets: [
            "Iniciei a carreira em desenvolvimento COBOL e administração de sistemas IBM AIX e ICL Unix, progredindo para a coordenação de equipas de análise, formação e grandes sistemas.",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos de Destaque",
      items: [
        {
          name: "CONTROLAUTO (Grupo Brisa)",
          tag: "Indústria Automóvel",
          description:
            "Sistema de gestão para centros de inspeção automóvel, com integração completa de processos de inspeção e faturação.",
        },
        {
          name: "MASTERTEST (Grupo BPI)",
          tag: "Indústria Automóvel",
          description:
            "Implementação do ERP de inspeção automóvel ediGCIA, com controlo de processos e conformidade regulamentar.",
        },
        {
          name: "CIMA, SA",
          tag: "Indústria Automóvel",
          description:
            "Implementação do ERP ediGCIA para gestão de centro de inspeção automóvel.",
        },
        {
          name: "Pneugiro",
          tag: "Indústria Automóvel",
          description:
            "Módulo de gestão de serviços e obras para oficinas automóvel.",
        },
        {
          name: "Hospital Santa Maria e Centro Hospitalar São Francisco",
          tag: "Saúde",
          description:
            "Desenvolvimento e integração de sistemas de gestão hospitalar com equipamento de imagiologia médica via DICOM.",
        },
        {
          name: "Autoramaia (Angola)",
          tag: "Internacional",
          description:
            "Aplicação a medida para controlo de armazém, faturação e replicação de dados entre a sede em Luanda e filiais em Huambo e Benfica.",
        },
        {
          name: "Prova-ímpar",
          tag: "Internacional",
          description:
            "Sistema de atribuição de matrículas para máquinas industriais, com módulo instalado em Portugal e Moçambique.",
        },
        {
          name: "ERP Têxtil Confetil",
          tag: "Têxtil",
          description:
            "Sistema integrado ponta a ponta, da encomenda do cliente à expedição, com automação de máquinas de produção.",
        },
        {
          name: "D'Accord",
          tag: "Recursos Humanos",
          description:
            "Aplicação a medida para controlo de recursos humanos e cálculo de horas, integrada com o sistema de vencimentos.",
        },
        {
          name: "Transformação Digital — Grupo Filinto Mota",
          tag: "Distribuição e Retalho",
          description:
            "Programa de digitalização multi-empresa, com integração de ERPs, data warehouse e políticas de cibersegurança.",
        },
      ],
    },
    education: {
      title: "Formação Académica",
      items: [
        {
          title: "Doutoramento em Ciência e Tecnologia Web",
          institution: "UTAD",
          period: "em curso, desde 2021",
        },
        {
          title: "Licenciatura em Informática — 15 valores",
          institution: "Instituto Superior de Tecnologias Avançadas (ISTEC)",
          period: "2006 – 2009",
        },
        {
          title: "Formação Pedagógica de Formadores (CAP/CCP)",
          institution: "ENA",
          period: "2009",
        },
        {
          title:
            "Formação técnica complementar — administração de sistemas (Unix, AIX), bases de dados SQL Server e análise de sistemas COBOL",
          institution: "NCR, IBM, ICL e Rumos",
          period: "1986 – 2001",
        },
      ],
    },
    skills: {
      title: "Competências Técnicas",
      groups: [
        {
          title: "Metodologias & Gestão de Projetos",
          items: ["Scrum", "JIRA", "UML", "Levantamento e gestão de requisitos"],
        },
        {
          title: "Cloud & DevOps",
          items: [
            "Azure",
            "AWS",
            "Docker",
            "Kubernetes (familiaridade)",
            "CI/CD",
            "Git",
            "Grafana",
            "ELK",
          ],
        },
        {
          title: "Desenvolvimento",
          items: [
            "COBOL",
            "C#",
            "ASP.NET",
            "VB.NET",
            "Pascal",
            "C++",
            "SQL",
            "PL/SQL",
            "Java",
            "PHP",
            "Python",
            "APIs REST",
            "Linq",
            "Entity Framework",
            "Microserviços (familiaridade)",
            "OutSystems (noções)",
          ],
        },
        {
          title: "Bases de Dados",
          items: [
            "SQL Server",
            "Firebird",
            "MariaDB",
            "MySQL",
            "Clustering, replicação, tuning e alta disponibilidade",
          ],
        },
        {
          title: "ERP & Sistemas",
          items: ["Sage X3", "Sage People", "Primavera", "PHC", "DMS Icar"],
        },
        {
          title: "Infraestrutura",
          items: [
            "Redes",
            "Servidores Windows/Linux",
            "Active Directory",
            "Firewalls",
            "Backups",
            "Virtualização",
          ],
        },
        {
          title: "Normas & Compliance",
          items: [
            "ISO 9001",
            "ISO 14001",
            "ISO 27001",
            "ISO 45001",
            "RGPD",
            "Políticas de segurança e auditoria",
          ],
        },
      ],
    },
    sectors: {
      title: "Setores de Atuação",
      items: [
        {
          title: "Saúde",
          description:
            "Sistemas de gestão hospitalar e integração com equipamento de imagiologia médica (DICOM) — clientes como Hospital Santa Maria e CHSF.",
        },
        {
          title: "Têxtil",
          description:
            "ERP de produção integrado, da encomenda à expedição (Confetil, Bracara).",
        },
        {
          title: "Indústria Automóvel",
          description:
            "Sistemas de gestão para centros de inspeção automóvel (CONTROLAUTO, MASTERTEST).",
        },
        {
          title: "Tintas",
          description: "Sistemas de gestão comercial e produção (Douro, Anar).",
        },
        {
          title: "Distribuição e Retalho",
          description:
            "ERP e digitalização de processos administrativos e comerciais (Grupo Filinto Mota).",
        },
      ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Profissional" },
      ],
    },
    extra: {
      title: "Informação Adicional",
      items: [
        "Membro do Conselho Pedagógico do ISTEC (nomeado pela associação de estudantes).",
        "Participação ativa em seminários e formações Microsoft ao longo da carreira: Roadshow SQL Server, MSDN, .NET e Windows Server.",
      ],
    },
    contact: {
      title: "Contacto",
      intro: "Disponível para conversar sobre liderança de tecnologia, docência ou novos projetos.",
      email: "raneves@gmail.com",
      phone: "+351 914 183 500",
      linkedin: "linkedin.com/in/raneves",
      location: "Porto, Portugal",
      ctaDownload: "Descarregar CV (PDF)",
      ctaDownloadAts: "Versão simples para portais de candidatura",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    meta: {
      title: "Rui Neves — Department Head & Lecturer",
      description:
        "Professional journey of Rui Alberto Tomás Neves: 38 years leading technology departments and teaching, from programmer analyst to CTO/CIO.",
    },
    nav: {
      about: "About",
      leadership: "Leadership",
      teaching: "Teaching",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      kicker: "Rui Alberto Tomás Neves",
      name: "Rui Neves",
      roles: ["Department Head", "University Lecturer & Trainer", "CTO / CIO"],
      tagline:
        "An uncommon combination: the discipline of leading technology departments and the vocation for teaching. The same ability to simplify, train and develop people I bring to the classroom, I also bring to the teams I have led for more than three decades.",
      positioning:
        "Always open to good conversations about technology leadership and teaching.",
      location: "Porto, Portugal",
      ctaContact: "Get in touch",
      ctaCv: "See full journey",
      ctaDownload: "Download CV",
    },
    stats: [
      { value: "38", label: "years of career" },
      { value: "40", label: "years as trainer" },
      { value: "4", label: "departments led" },
      { value: "5", label: "countries with delivered projects" },
    ],
    about: {
      title: "About me",
      paragraphs: [
        "I am a technology executive with a 38-year career built on two mutually reinforcing pillars: department leadership and teaching. I started training in 1986, even before beginning my career as a programmer analyst, and have never stopped combining responsibility for managing teams and systems with training and developing people — first as a section lead, then as department head in several organizations, and since 2023 also as a university lecturer.",
        "Throughout my career I have run IT and technology departments in sectors such as healthcare, textiles, automotive and distribution, always with direct responsibility for teams, budgets and results. In parallel, I have kept up a constant training activity — more than three decades preparing professionals in areas such as information systems, databases and productivity tools.",
        "I currently combine the role of CTO/CIO at Grupo Filinto Mota, reporting directly to the CEO, with lecturing at Universidade Aberta, where I teach Operating Systems, Information Systems Modeling and Database Management Systems. I am also completing a PhD in Web Science and Technology at UTAD.",
      ],
    },
    leadership: {
      title: "Department Leadership",
      intro:
        "Across four decades I have held direct responsibility for technology departments — from defining strategy to managing people, budgets and vendors.",
      skills: [
        "Management of multidisciplinary teams (developers, technicians, helpdesk)",
        "Definition and execution of technology strategy, reporting to the board/CEO",
        "Budget management, vendor management and contract negotiation",
        "Situational leadership and development of high-performance teams",
        "Change management and fostering innovation-friendly environments",
        "Clear, influential communication across all levels of the organization",
        "Conflict resolution and assertive decision-making",
      ],
    },
    teaching: {
      title: "Teaching & Training",
      intro:
        "Alongside executive leadership, teaching has been a constant since 1990 — from corporate professional training to university lecturing.",
      items: [
        {
          role: "University Lecturer",
          institution: "Universidade Aberta (UAb)",
          period: "2023 – Present",
          icon: "university",
          featured: true,
          details: [
            "Operating Systems",
            "Information Systems Modeling",
            "Database Management Systems",
          ],
        },
        {
          role: "Trainer",
          institution: "INESP, Unicenter-Joviform, Orientaris and IPLNT",
          period: "1986 – Present",
          icon: "trainer",
          featured: true,
          details: [
            "Introduction to computing, Windows and Internet",
            "Programming — from Cobol and Basic to modern languages",
            "Advanced Microsoft Office (Excel, Word, Access) and Power BI",
            "Database management and administration, stock management",
          ],
        },
        {
          role: "Pedagogical Training for Trainers (CAP/CCP)",
          institution: "ENA",
          period: "2009",
          icon: "certificate",
          details: [
            "Certified pedagogical competencies, formalizing training activity already underway",
          ],
        },
        {
          role: "Member of the Pedagogical Council",
          institution: "ISTEC — Instituto Superior de Tecnologias Avançadas",
          period: "Appointed by the students' association",
          icon: "council",
          details: [
            "Active participation in the governing pedagogical bodies of the institution where he graduated",
          ],
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      intro:
        "Consistent progression from programmer analyst to CTO/CIO, with direct department-head responsibility in several organizations.",
      deptHeadBadge: "Department Head",
      items: [
        {
          role: "CTO / CIO / IT Manager",
          company: "Grupo Filinto Mota",
          location: "Porto",
          period: "2019 – Present",
          deptHead: true,
          bullets: [
            "Responsible for all technology solutions across the group, reporting directly to the CEO, with full autonomy to define and execute technology strategy.",
            "Digitized more than 80% of administrative and commercial processes, cutting average customer response time by 35%.",
            "Led the implementation and customization of a broad systems portfolio (Sage X3, Sage People, DMS Icar, Xrt, Signature, GISe Rentway) across all group companies, increasing overall productivity by 25%.",
            "Implemented cybersecurity policies, access management and GDPR compliance, maintaining zero security incidents for 3 consecutive years.",
            "Introduced DevOps practices and CI/CD pipelines, modernizing infrastructure with hybrid cloud, containers and monitoring (Grafana/ELK).",
            "Structured the group's data warehouse and implemented Power BI dashboards, cutting reporting time by 60%.",
            "Managed and developed a team of 4 professionals, raising internal satisfaction by 30%, and led optimization projects generating annual savings above €150,000.",
          ],
        },
        {
          role: "IT Manager / Senior Developer",
          company: "Elastron Portugal, S.A.",
          location: "Paços de Ferreira",
          period: "2017 – 2019",
          bullets: [
            "Defined, together with management, the software development strategy and technology needs of the company.",
            "Managed a 4-person IT team and the systems/network infrastructure, ensuring 98% system uptime.",
            "Developed an in-house cross-platform ERP (C#, SQL Server, Web, Mobile with Xamarin), cutting order-processing time by 30%.",
            "Led the company's GDPR adaptation and managed budgets for opening new branches, cutting costs by 20%.",
            "Customized the Primavera ERP and implemented Power BI and Excel/VBA reporting automation.",
          ],
        },
        {
          role: "IT Manager / Team Leader / Senior Developer",
          company: "Confetil – Confeções Têxteis, Lda.",
          location: "Maia",
          period: "2015 – 2017",
          bullets: [
            "Led development of an integrated textile ERP — orders, product development, planning, cutting, production and stock — cutting planning and stock management time by 40%.",
            "Implemented mobile/web solutions for order and production management, increasing operational efficiency by 35%.",
            "Integrated production machinery with the management software, automating consumption and labor data collection and reducing manual errors by 90%.",
            "Built a web portal for subcontractors with real-time production, quality and non-conformity control.",
          ],
        },
        {
          role: "Development Department Head",
          company: "Ediprinter – Soluções de Informática",
          location: "Vila do Conde",
          period: "2010 – 2015",
          deptHead: true,
          bullets: [
            "Led a team of 12 professionals (7 developers and 5 technicians, including helpdesk), delivering solutions for the vehicle inspection and logistics sectors.",
            "Managed projects using Scrum (in-house tool and JIRA) for clients such as Grupo Brisa (CONTROLAUTO) and Grupo BPI (MASTERTEST), contributing to a 15% market-share increase for those clients.",
            "Developed desktop, web and mobile applications (iOS, Android, Windows), accelerating time-to-market for new products by 25%.",
            "Certified software with the Portuguese Tax Authority and managed international projects in Angola, Mozambique, Cape Verde, Argentina and Colombia.",
            "Supported management and development of the company's in-house ERPs: ediGest (billing) and easyScreen (POS).",
          ],
        },
      ],
      additionalTitle: "Additional Experience",
      additional: [
        {
          role: "Information Systems Analyst",
          company: "Facevisível, Lda",
          location: "Porto",
          period: "2000 – 2010",
          bullets: [
            "Managed a 4-person team (2 developers, 2 technicians) on healthcare, textile and paint industry projects for clients such as Hospital Santa Maria and Centro Hospitalar São Francisco, including integration with medical imaging equipment via DICOM and SQL Server database administration with clustering and replication.",
            "Other clients: Bracara (textiles), Altere (dyeing), Clisa, Soerad and IPR (healthcare), CDRE (radiology), Sifamolar (furniture), and the Douro and Anar paint factories.",
          ],
        },
        {
          role: "IT Department Head / Deputy Director",
          company: "António Ferreira da Silva e Filhos, Lda",
          location: "Maia",
          period: "1992 – 2000",
          deptHead: true,
          bullets: [
            "Led the IT department (1992–1998) covering billing, accounting and HR, later taking on Deputy Director duties (1998–2000), responsible for negotiating with banks, insurers and suppliers.",
          ],
        },
        {
          role: "Programmer Analyst / Section Lead",
          company: "JUL – Sistemas Informáticos, Lda",
          location: "Vila Nova de Gaia",
          period: "1988 – 1992",
          bullets: [
            "Started his career in COBOL development and IBM AIX / ICL Unix systems administration, progressing to coordinating analysis, training and large-systems teams.",
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          name: "CONTROLAUTO (Grupo Brisa)",
          tag: "Automotive",
          description:
            "Management system for vehicle inspection centers, with full integration of inspection and billing processes.",
        },
        {
          name: "MASTERTEST (Grupo BPI)",
          tag: "Automotive",
          description:
            "Implementation of the ediGCIA vehicle inspection ERP, with process control and regulatory compliance.",
        },
        {
          name: "CIMA, SA",
          tag: "Automotive",
          description:
            "Implementation of the ediGCIA ERP for a vehicle inspection center.",
        },
        {
          name: "Pneugiro",
          tag: "Automotive",
          description:
            "Service and workshop management module for auto repair shops.",
        },
        {
          name: "Hospital Santa Maria and Centro Hospitalar São Francisco",
          tag: "Healthcare",
          description:
            "Development and integration of hospital management systems with medical imaging equipment via DICOM.",
        },
        {
          name: "Autoramaia (Angola)",
          tag: "International",
          description:
            "Custom application for warehouse control, billing and data replication between headquarters in Luanda and branches in Huambo and Benfica.",
        },
        {
          name: "Prova-ímpar",
          tag: "International",
          description:
            "License-plate assignment system for industrial machinery, with a module deployed in Portugal and Mozambique.",
        },
        {
          name: "Confetil Textile ERP",
          tag: "Textiles",
          description:
            "End-to-end integrated system, from customer order to shipment, with production machine automation.",
        },
        {
          name: "D'Accord",
          tag: "Human Resources",
          description:
            "Custom application for HR and hours management, integrated with the payroll system.",
        },
        {
          name: "Digital Transformation — Grupo Filinto Mota",
          tag: "Distribution & Retail",
          description:
            "Multi-company digitization program, with ERP integration, data warehouse and cybersecurity policies.",
        },
      ],
    },
    education: {
      title: "Academic Background",
      items: [
        {
          title: "PhD in Web Science and Technology",
          institution: "UTAD",
          period: "in progress, since 2021",
        },
        {
          title: "BSc in Computer Science — grade 15/20",
          institution: "Instituto Superior de Tecnologias Avançadas (ISTEC)",
          period: "2006 – 2009",
        },
        {
          title: "Pedagogical Training for Trainers (CAP/CCP)",
          institution: "ENA",
          period: "2009",
        },
        {
          title:
            "Additional technical training — systems administration (Unix, AIX), SQL Server databases and COBOL systems analysis",
          institution: "NCR, IBM, ICL and Rumos",
          period: "1986 – 2001",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      groups: [
        {
          title: "Methodologies & Project Management",
          items: ["Scrum", "JIRA", "UML", "Requirements gathering and management"],
        },
        {
          title: "Cloud & DevOps",
          items: [
            "Azure",
            "AWS",
            "Docker",
            "Kubernetes (familiar)",
            "CI/CD",
            "Git",
            "Grafana",
            "ELK",
          ],
        },
        {
          title: "Development",
          items: [
            "COBOL",
            "C#",
            "ASP.NET",
            "VB.NET",
            "Pascal",
            "C++",
            "SQL",
            "PL/SQL",
            "Java",
            "PHP",
            "Python",
            "REST APIs",
            "Linq",
            "Entity Framework",
            "Microservices (familiar)",
            "OutSystems (basic)",
          ],
        },
        {
          title: "Databases",
          items: [
            "SQL Server",
            "Firebird",
            "MariaDB",
            "MySQL",
            "Clustering, replication, tuning and high availability",
          ],
        },
        {
          title: "ERP & Systems",
          items: ["Sage X3", "Sage People", "Primavera", "PHC", "DMS Icar"],
        },
        {
          title: "Infrastructure",
          items: [
            "Networking",
            "Windows/Linux servers",
            "Active Directory",
            "Firewalls",
            "Backups",
            "Virtualization",
          ],
        },
        {
          title: "Standards & Compliance",
          items: [
            "ISO 9001",
            "ISO 14001",
            "ISO 27001",
            "ISO 45001",
            "GDPR",
            "Security and audit policies",
          ],
        },
      ],
    },
    sectors: {
      title: "Sectors",
      items: [
        {
          title: "Healthcare",
          description:
            "Hospital management systems and integration with medical imaging equipment (DICOM) — clients such as Hospital Santa Maria and CHSF.",
        },
        {
          title: "Textiles",
          description:
            "Integrated production ERP, from order to shipment (Confetil, Bracara).",
        },
        {
          title: "Automotive",
          description:
            "Management systems for vehicle inspection centers (CONTROLAUTO, MASTERTEST).",
        },
        {
          title: "Paints",
          description: "Commercial and production management systems (Douro, Anar).",
        },
        {
          title: "Distribution & Retail",
          description:
            "ERP and digitization of administrative and commercial processes (Grupo Filinto Mota).",
        },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Professional" },
      ],
    },
    extra: {
      title: "Additional Information",
      items: [
        "Member of the ISTEC Pedagogical Council (appointed by the students' association).",
        "Active participation in Microsoft seminars and training throughout his career: SQL Server Roadshow, MSDN, .NET and Windows Server.",
      ],
    },
    contact: {
      title: "Contact",
      intro: "Open to conversations about technology leadership, teaching or new projects.",
      email: "raneves@gmail.com",
      phone: "+351 914 183 500",
      linkedin: "linkedin.com/in/raneves",
      location: "Porto, Portugal",
      ctaDownload: "Download CV (PDF)",
      ctaDownloadAts: "Plain version for application portals",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
