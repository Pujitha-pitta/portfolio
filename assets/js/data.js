/* All portfolio content lives here. Edit this file to update the site. */
window.PORTFOLIO = {
  name: 'Naga Pujitha Pitta',
  role: 'AI/ML Researcher & Software Engineer',
  roles: ['AI/ML Researcher', 'Software Engineer', 'Cloud & DevOps Builder', 'Data Scientist'],
  location: 'Karlskrona, Sweden',
  email: 'nagapujitha456@gmail.com',
  linkedin: 'https://linkedin.com/in/naga-pujitha-pitta-bb8784255',
  github: 'https://github.com/Pujitha-pitta',
  resume: 'Naga_Pujitha_Pitta_Resume.pdf?v=3',

  /* Project categories (filters). Colors live in styles.css as --t-<key>. */
  tracks: {
    ml: { label: 'Machine learning' },
    ai: { label: 'AI apps & agents' },
    cloud: { label: 'Cloud & DevOps' },
    infra: { label: 'Systems & networking' },
    web: { label: 'Web apps & games' },
    security: { label: 'Security' },
    se: { label: 'Software engineering' }
  },

  /* link = report/paper, code = GitHub repo, demo = live site */
  projects: [
    {
      id: 'radar', folder: 'Team_08_RADAR', track: 'ai', featured: 'BUILD Hackathon 2026 winner',
      title: 'Radar: an AI scout for Blue Science Park',
      desc: 'Our winning BUILD Hackathon 2026 project. AI agents build an evidence-backed profile of each company in the Blue Science Park ecosystem, watch Swedish and EU funding, events and testbeds, and explain why each opportunity fits, with a source and date on every claim.',
      skills: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'LLM agents', 'Embeddings', 'Playwright'],
      code: 'https://github.com/Pujitha-pitta/Team_08_RADAR',
      demo: 'https://radar-for-blue-science-park-8msd.vercel.app'
    },
    {
      id: 'calmcharge', folder: 'calmcharge', track: 'ml',
      title: 'CalmCharge: EV charging planner',
      desc: 'Follows Swedish SE4 electricity prices from download to a charging plan: data-quality checks, weather and calendar features, ridge regression with expanding-window validation, and a cheapest-hour charging planner. One-hour-ahead error is 14.4 EUR/MWh (MAE), against 40 for a same-hour-yesterday baseline.',
      skills: ['Python', 'Ridge regression', 'Time series', 'Data quality', 'CI'],
      code: 'https://github.com/Pujitha-pitta/calmcharge'
    },
    {
      id: 'premier', folder: 'premier-league-match-predictor', track: 'ml',
      title: 'Premier League match predictor',
      desc: 'Leakage-aware prediction of Premier League match outcomes, with data cleaning, recent-form features and chronological evaluation.',
      skills: ['Python', 'Feature engineering', 'Data cleaning', 'Chronological evaluation'],
      code: 'https://github.com/Pujitha-pitta/premier-league-match-predictor'
    },
    {
      id: 'trendforge', folder: 'trendforge-ai-dataset-builder', track: 'ml',
      title: 'TrendForge AI dataset builder',
      desc: 'AI-assisted Hacker News dataset builder with data cleaning, topic enrichment, CSV export and Kaggle packaging.',
      skills: ['Python', 'Data pipelines', 'Data cleaning', 'Kaggle'],
      code: 'https://github.com/Pujitha-pitta/trendforge-ai-dataset-builder'
    },
    {
      id: 'terraform', folder: 'terraform-kubernetes-ops-lab', track: 'cloud',
      title: 'Terraform & Kubernetes ops lab',
      desc: 'A local Terraform and Kubernetes lab for deploying, scaling and monitoring a containerised Python app with Docker Desktop, without AWS costs.',
      skills: ['Terraform', 'Kubernetes', 'Docker', 'Python'],
      code: 'https://github.com/Pujitha-pitta/terraform-kubernetes-ops-lab'
    },
    {
      id: 'aws', folder: 'aws-multi-tier-app', track: 'cloud',
      title: 'Multi-tier web application on AWS',
      desc: 'Deployed a multi-tier web application on AWS: EC2 instances behind a load balancer, Auto Scaling for demand spikes, and a VPC network, with Apache serving the web tier.',
      skills: ['AWS EC2', 'Auto Scaling', 'Load balancing', 'VPC', 'Apache'],
      link: 'pdfs/Deployment%20of%20Multi-Tier%20Web%20Application%20in%20AWS%20Cloud.pdf', linkLabel: 'Read report'
    },
    {
      id: 'network', folder: 'network-diagnostics-sla-tool', track: 'infra',
      title: 'Network diagnostics & SLA ticketing toolkit',
      desc: 'Automates OSI layer 1–3 Linux network diagnostics and generates Jira SLA incident tickets, with simulation scenarios, a virtual Ethernet lab and tests.',
      skills: ['Python', 'Bash', 'Linux networking', 'Jira'],
      code: 'https://github.com/Pujitha-pitta/network-diagnostics-sla-tool'
    },
    {
      id: 'raid5', folder: 'raid5-hardware-fault-simulator', track: 'infra',
      title: 'RAID 5 hardware fault simulator',
      desc: 'Storage telemetry and RAID 5 fault-recovery simulator with S.M.A.R.T. disk indicators and kernel-log (dmesg) analysis. Runs in live Linux kernel mode or a deterministic simulation mode.',
      skills: ['Python', 'Bash', 'RAID 5', 'S.M.A.R.T.', 'Linux'],
      code: 'https://github.com/Pujitha-pitta/raid5-hardware-fault-simulator'
    },
    {
      id: 'n8n', folder: 'fliplink-showcase-independent', track: 'ai',
      title: 'Telegram AI day planner (n8n)',
      desc: 'An n8n workflow that turns a Telegram to-do list into a time-blocked day plan with Google Gemini and replies in the same chat, with per-chat memory and access limited to one chat.',
      skills: ['n8n', 'Gemini', 'Telegram API', 'Automation'],
      code: 'https://github.com/Pujitha-pitta/fliplink-showcase-independent'
    },
    {
      id: 'apple', folder: 'apple-watch-health-dashboard', track: 'web',
      title: 'Apple Watch health dashboard',
      desc: 'Local-first Apple Health analytics dashboard for activity, heart-rate and sleep trends from XML or CSV exports.',
      skills: ['JavaScript', 'HTML', 'Data visualisation'],
      code: 'https://github.com/Pujitha-pitta/apple-watch-health-dashboard'
    },
    {
      id: 'haunted', folder: 'haunted-snack-shop', track: 'web',
      title: 'The Haunted Snack Shop',
      desc: 'Phone-friendly multiplayer co-op game for 2–8 players: join with a room code and serve ghost customers from a shared kitchen, with every move synced live. Runs on Netlify Functions, with a Cloudflare Workers backend.',
      skills: ['TypeScript', 'JavaScript', 'Real-time sync', 'Netlify', 'Cloudflare Workers'],
      code: 'https://github.com/Pujitha-pitta/haunted-snack-shop'
    },
    {
      id: 'fridge', folder: 'fridge-day-planner', track: 'web',
      title: 'Fridge day planner',
      desc: 'Fridge-friendly daily planner for organising household schedules, tracking completed plans and keeping the day at a glance.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      code: 'https://github.com/Pujitha-pitta/fridge-day-planner'
    },
    {
      id: 'llm', folder: 'llm-threat-model', track: 'security',
      title: 'Threat modelling for an LLM-based architecture',
      desc: 'Mapped the data flows of a system built on a large language model and analysed spoofing, tampering, repudiation, information-disclosure, denial-of-service and privilege-escalation threats, with mitigations for each.',
      skills: ['STRIDE', 'Threat modelling', 'LLM security'],
      link: 'pdfs/Threat%20Modelling%20and%20Risk%20Analysis%20for%20LLM-Based%20Architecture.htm', linkLabel: 'Read report'
    },
    {
      id: 't2i', folder: 'text2image-app', track: 'ai',
      title: 'Text2Image mobile application',
      desc: 'A Flutter mobile app that turns a text prompt into a generated image.',
      skills: ['Flutter', 'Generative AI', 'Android'],
      link: 'pdfs/Text2Image%20Mobile%20Application.apk', linkLabel: 'Download APK (21 MB)'
    },
    {
      id: 'ev', folder: 'ev-charging', track: 'ml',
      title: 'EV charging optimisation',
      desc: 'Systematic review of 15 studies on forecasting electric-vehicle charging demand over short, medium and long horizons, and on using those forecasts to optimise charging for drivers and the power grid.',
      skills: ['Forecasting', 'LSTM', 'Optimisation', 'Systematic review'],
      link: 'pdfs/EV%20Charging%20Optimization%20Using%20Intelligent%20Predictive%20Decision%20Support.pdf', linkLabel: 'Read paper'
    },
    {
      id: 'crypto', folder: 'crypto-prediction', track: 'ml',
      title: 'Cryptocurrency price prediction',
      desc: 'Decision-support system that compares LSTM, XGBoost, Random Forest and regression models for predicting prices from historical and high-frequency data.',
      skills: ['Python', 'LSTM', 'XGBoost', 'Random Forest', 'Time series'],
      link: 'pdfs/Intelligent%20Decision%20Support%20System%20for%20Cryptocurrency%20Price%20Prediction.pdf', linkLabel: 'Read paper'
    },
    {
      id: 'accident', folder: 'accident-severity', track: 'ml',
      title: 'Accident severity prediction',
      desc: 'Predicted road-accident severity from Florida accident records using weather, road-infrastructure and time-of-day features, handling class imbalance with SMOTE.',
      skills: ['Python', 'Random Forest', 'SMOTE', 'Feature engineering', 'Pandas'],
      link: 'pdfs/Accident%20Severity%20Prediction%20Using%20Weather%20and%20Road%20Infrastructure%20Data.pdf', linkLabel: 'Read paper'
    },
    {
      id: 'stock', folder: 'stock-trends', track: 'ml',
      title: 'Indian stock market trend analysis',
      desc: 'Followed the CRISP-DM process end to end to analyse historical Indian market data and forecast trends with ARIMA models.',
      skills: ['Python', 'ARIMA', 'CRISP-DM', 'Time series'],
      link: 'pdfs/Indian%20Stock%20Market%20Trend%20Analysis%20Using%20CRISP-DM.pdf', linkLabel: 'Read report'
    },
    {
      id: 'wine', folder: 'wine-quality', track: 'ml',
      title: 'Wine quality classification',
      desc: 'Compared Random Forest and Gradient Boosting classifiers for predicting wine quality, using SMOTE for imbalanced classes and cross-validation for evaluation.',
      skills: ['scikit-learn', 'Random Forest', 'Gradient Boosting', 'SMOTE', 'Cross-validation'],
      link: 'pdfs/Wine%20Quality%20Classification%20Using%20Machine%20Learning.pdf', linkLabel: 'Read report'
    },
    {
      id: 'spam', folder: 'spam-detection', track: 'ml',
      title: 'Spam detection',
      desc: 'Compared SVM, Random Forest and Logistic Regression for classifying spam messages, evaluated with cross-validation.',
      skills: ['scikit-learn', 'SVM', 'Logistic Regression', 'Text classification'],
      link: 'pdfs/Spam%20Detection%20Using%20Supervised%20Learning%20Algorithms.pdf', linkLabel: 'Read report'
    },
    {
      id: 'techdebt', folder: 'tech-debt-re', track: 'se',
      title: 'Technical debt in requirements engineering',
      desc: 'Research report on how technical debt builds up during requirements engineering and how it affects later software development.',
      skills: ['Requirements engineering', 'Research methods'],
      link: 'pdfs/Technical%20Debt%20in%20Requirements%20Engineering.pdf', linkLabel: 'Read report'
    },
    {
      id: 'gqm', folder: 'gqm-quality', track: 'se',
      title: 'Software maintainability with GQM',
      desc: 'Applied the Goal-Question-Metric framework with SonarQube to measure the quality and maintainability of a Java code base.',
      skills: ['Java', 'GQM', 'SonarQube'],
      link: 'pdfs/Software%20Maintainability%20and%20Quality%20Analysis%20Using%20GQM%20Framework.pdf', linkLabel: 'Read report'
    }
  ],

  research: [
    {
      id: 'trustfed', kind: "Master's thesis",
      title: 'A Federated Learning Approach for Reliable Diabetes Prediction',
      desc: 'A privacy-preserving federated learning framework for diabetes prediction. It compares machine-learning and deep-learning models (Logistic Regression, Random Forest, XGBoost and neural networks) trained with FedAvg, makes their probabilities trustworthy with isotonic calibration, and explains them with SHAP.',
      highlight: 'Patient data never leaves the hospital: only model updates are shared.',
      skills: ['Federated learning', 'FedAvg', 'Calibration', 'SHAP', 'XGBoost', 'TensorFlow', 'scikit-learn'],
      links: [
        { label: 'Read thesis', href: 'Diabetes%20Prediction.pdf' },
        { label: 'Code on GitHub', href: 'https://github.com/Pujitha-pitta/trustfed-diabetes' }
      ]
    },
    {
      id: 'credit', kind: "Bachelor's thesis",
      title: 'Analyzing Rule-Based Models in Personal Loan Credit Scoring',
      desc: 'Compared the RIPPER and CN2 rule-learning algorithms for financial risk assessment on accuracy, precision, recall and F1-score.',
      highlight: 'CN2 outperformed RIPPER: 47.51% vs 38.24% accuracy.',
      skills: ['RIPPER', 'CN2', 'Model evaluation', 'Matplotlib'],
      links: [{ label: 'Read thesis', href: 'pdfs/Analyzing%20Rule-Based%20Models%20in%20Personal%20Loan%20Credit%20Scoring.pdf' }]
    }
  ],

  experience: [
    {
      id: 'fly', role: 'Machine Learning Intern', org: 'FLY Rank AI', place: 'Sweden', dates: 'Jun 2026 – Sep 2026', year: '2026',
      code: 'https://github.com/Pujitha-pitta/Flyrank-ML-internship',
      points: [
        'Developed Python applications for predictive analytics and intelligent data processing.',
        'Built machine-learning models with scikit-learn and evaluated their performance.',
        'Applied feature engineering and preprocessing to improve prediction accuracy.',
        'Documented technical implementation and project outcomes with mentors.'
      ]
    },
    {
      id: 'aicte', role: 'Python Intern', org: 'AICTE', place: 'Remote', dates: 'May 2023 – Jun 2023', year: '2023',
      points: [
        'Built predictive algorithms and optimised data pipelines for decision-support systems.',
        'Deployed and validated supervised machine-learning models against benchmarks.',
        'Worked with cross-functional teams on data security and compliance.'
      ]
    }
  ],

  award: {
    title: 'Winner, BUILD Hackathon Challenge 2026',
    detail: 'Team 8 · Radar, built in Karlskrona for the Virtual Science Park challenge by Blue Science Park.',
    link: 'https://github.com/Pujitha-pitta/Team_08_RADAR'
  },

  education: [
    { degree: 'M.Sc. in Computer Science', school: 'Blekinge Institute of Technology, Karlskrona, Sweden', dates: '2024 – 2026', focus: 'Software engineering, AI/ML, cloud computing and constitutional AI' },
    { degree: 'B.Tech in Computer Science', school: 'Blekinge Institute of Technology', dates: '2020 – 2024', focus: '' }
  ],

  /* Skill groups. Each skill lists where it was used, so a visitor can jump to the proof.
     Ids = project ids above, research ids (trustfed, credit) and work ids (fly, aicte). */
  skills: [
    { group: 'Machine learning', items: [
      ['scikit-learn', ['wine', 'spam', 'credit', 'trustfed', 'fly']],
      ['Random Forest & Gradient Boosting', ['wine', 'spam', 'accident', 'crypto', 'trustfed']],
      ['XGBoost', ['crypto', 'trustfed']],
      ['Regression models (ridge, logistic)', ['calmcharge', 'spam', 'crypto', 'trustfed']],
      ['Deep learning (LSTM, neural nets)', ['crypto', 'ev', 'trustfed']],
      ['TensorFlow', ['trustfed']],
      ['Federated learning (FedAvg)', ['trustfed']],
      ['Explainable AI (SHAP)', ['trustfed']],
      ['Probability calibration', ['trustfed']],
      ['Rule learning (RIPPER, CN2)', ['credit']]
    ]},
    { group: 'Data & forecasting', items: [
      ['Python', ['radar', 'calmcharge', 'premier', 'trendforge', 'fly', 'network', 'raid5', 'crypto', 'accident', 'stock', 'wine', 'spam', 'trustfed']],
      ['Time-series forecasting (ARIMA, LSTM)', ['calmcharge', 'stock', 'crypto', 'ev']],
      ['Data cleaning & quality checks', ['calmcharge', 'premier', 'trendforge']],
      ['Feature engineering', ['premier', 'calmcharge', 'accident', 'fly']],
      ['Leakage-aware evaluation', ['premier', 'calmcharge', 'wine', 'spam']],
      ['Class imbalance (SMOTE)', ['wine', 'accident']],
      ['Pandas & NumPy', ['accident', 'trustfed']],
      ['DuckDB & Jupyter', ['fly']],
      ['CRISP-DM', ['stock']]
    ]},
    { group: 'AI agents & LLMs', items: [
      ['LLM agents', ['radar', 'n8n']],
      ['Embeddings & semantic matching', ['radar']],
      ['Google Gemini', ['n8n']],
      ['n8n workflow automation', ['n8n']],
      ['Web scraping (Playwright)', ['radar']],
      ['Generative AI apps', ['t2i', 'radar']],
      ['LLM security analysis', ['llm']]
    ]},
    { group: 'Cloud & DevOps', items: [
      ['AWS (EC2, Auto Scaling, VPC)', ['aws']],
      ['Terraform', ['terraform']],
      ['Kubernetes', ['terraform']],
      ['Docker', ['terraform']],
      ['Serverless (Vercel, Netlify, Cloudflare)', ['radar', 'haunted']],
      ['CI & Git/GitHub', ['calmcharge', 'radar', 'trustfed']],
      ['Apache web server', ['aws']]
    ]},
    { group: 'Web & app development', items: [
      ['JavaScript', ['apple', 'haunted', 'fridge']],
      ['TypeScript & Next.js', ['radar', 'haunted']],
      ['FastAPI & REST APIs', ['radar']],
      ['HTML & CSS', ['apple', 'fridge']],
      ['Real-time multiplayer sync', ['haunted']],
      ['Data visualisation', ['apple', 'calmcharge']],
      ['Flutter', ['t2i']]
    ]},
    { group: 'Systems, networking & security', items: [
      ['Linux & Bash', ['network', 'raid5']],
      ['Network diagnostics (OSI L1–3)', ['network']],
      ['Storage & RAID 5', ['raid5']],
      ['Jira SLA automation', ['network']],
      ['STRIDE threat modelling', ['llm']],
      ['GQM & SonarQube', ['gqm']],
      ['Java', ['gqm']],
      ['Requirements engineering', ['techdebt']]
    ]}
  ],

  alsoKnow: ['C++', 'SQL', 'PyTorch', 'AWS RDS & S3', 'OOP'],
  languages: ['English (professional)', 'Swedish (basic, A1)']
};
