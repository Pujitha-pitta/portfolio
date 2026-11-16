// ---------- Open the portfolio from its title screen ----------

const enterWorldButton = document.getElementById("enterWorld");

if (enterWorldButton) {
    enterWorldButton.addEventListener("click", () => {
        document.documentElement.classList.remove("entry-lock");
        const homeHeading = document.getElementById("home");
        if (homeHeading) {
            homeHeading.setAttribute("tabindex", "-1");
            homeHeading.focus({ preventScroll: true });
        }
    });
}
// ---------- Type the portfolio owner name letter by letter ----------

const nameText = document.getElementById("nameText");

if (nameText) {
    const fullName = "Naga Pujitha Pitta";

    nameText.textContent = "";
    let letterIndex = 0;
    const typeNextLetter = () => {
        nameText.textContent = fullName.slice(0, letterIndex + 1);
        letterIndex += 1;
        if (letterIndex < fullName.length) window.setTimeout(typeNextLetter, 240);
    };
    typeNextLetter();
}
// ---------- Animated job title ----------

const roles = [
    "Software Developer",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Machine Learning Engineer"
];

const roleText = document.getElementById("roleText");
let roleIndex = 0;

function changeRole() {
    if (!roleText) return;

    roleIndex = (roleIndex + 1) % roles.length;
    roleText.textContent = roles[roleIndex];
}

setInterval(changeRole, 2500);


// ---------- Project list ----------
// File paths must match the actual names in your GitHub repository.

const projects = [
    {
        title: "Technical Debt in Requirements Engineering",
        description:
            "Investigated technical debt in requirements engineering and its impact on software development.",
        tags: ["Software Engineering", "Research"],
        file: "pdfs/Technical%20Debt%20in%20Requirements%20Engineering.pdf"
    },
    {
        title: "Multi-Tier Web Application in AWS Cloud",
        description:
            "Developed and deployed a multi-tier web application using AWS cloud services.",
        tags: ["AWS", "Cloud", "Web Development"],
        file: "pdfs/Deployment%20of%20Multi-Tier%20Web%20Application%20in%20AWS%20Cloud.pdf"
    },
    {
        title: "Threat Modelling for LLM-Based Architecture",
        description:
            "Analyzed threats, security risks, and mitigation approaches for an LLM-based architecture.",
        tags: ["Security", "Threat Modelling", "LLMs"],
        file: "pdfs/Threat%20Modelling%20and%20Risk%20Analysis%20for%20LLM-Based%20Architecture.htm"
    },
    {
        title: "Text2Image Mobile Application",
        description:
            "Worked on an AI-based mobile application that generates images from text prompts.",
        tags: ["AI", "Mobile Development"],
        file: "pdfs/Text2Image%20Mobile%20Application.apk"
    },
    {
        title: "Software Maintainability and Quality Analysis",
        description:
            "Applied the Goal-Question-Metric framework to evaluate software quality and maintainability.",
        tags: ["GQM", "Software Quality"],
        file: "pdfs/Software%20Maintainability%20and%20Quality%20Analysis%20Using%20GQM%20Framework.pdf"
    },
    {
        title: "EV Charging Optimization",
        description:
            "Explored optimization approaches for electric vehicle charging.",
        tags: ["Optimization", "Python"],
        file: "pdfs/EV%20Charging%20Optimization%20Using%20Intelligent%20Predictive%20Decision%20Support.pdf"
    },
    {
        title: "Cryptocurrency Price Prediction",
        description:
            "Explored cryptocurrency price prediction using historical and high-frequency data.",
        tags: ["Python", "Data Analysis"],
        file: "pdfs/Intelligent%20Decision%20Support%20System%20for%20Cryptocurrency%20Price%20Prediction.pdf"
    },
    {
        title: "Indian Stock Market Trend Analysis",
        description:
            "Analyzed stock market data to explore historical trends and patterns.",
        tags: ["Python", "Finance", "Data Analysis"],
        file: "pdfs/Indian%20Stock%20Market%20Trend%20Analysis%20Using%20CRISP-DM.pdf"
    },
    {
        title: "Accident Severity Prediction",
        description:
            "Analyzed road accident data and explored machine learning classification methods.",
        tags: ["Python", "Machine Learning"],
        file: "pdfs/Accident%20Severity%20Prediction%20Using%20Weather%20and%20Road%20Infrastructure%20Data.pdf"
    },
    {
        title: "Wine Quality Classification",
        description:
            "Explored classification techniques for predicting wine quality from input features.",
        tags: ["Python", "Scikit-learn"],
        file: "pdfs/Wine%20Quality%20Classification%20Using%20Machine%20Learning.pdf"
    },
    {
        title: "Spam Detection",
        description:
            "Explored text classification methods for detecting spam messages.",
        tags: ["Python", "Text Classification"],
        file: "pdfs/Spam%20Detection%20Using%20Supervised%20Learning%20Algorithms.pdf"
    },
    {
        title: "CalmCharge — EV Charging Planner",
        description: "Analyzes Sweden's SE4 electricity prices and weather to plan lower-cost EV charging, with forecasting and data-quality checks.",
        tags: ["Python", "Energy", "Forecasting"],
        github: "https://github.com/Pujitha-pitta/calmcharge"
    },
    {
        title: "The Haunted Snack Shop",
        description: "A cooperative, phone-friendly multiplayer shop game where players coordinate ghost-customer orders and a shared kitchen.",
        tags: ["Web Development", "Multiplayer", "Game"],
        github: "https://github.com/Pujitha-pitta/haunted-snack-shop"
    },
    {
        title: "Fridge Day Planner",
        description: "A family dashboard concept for a Samsung Family Hub with a clock, local weather, and daily schedule.",
        tags: ["Web Development", "Dashboard", "API"],
        github: "https://github.com/Pujitha-pitta/fridge-day-planner"
    },
    {
        title: "Pulseboard — Apple Health Analytics",
        description: "A local-first dashboard for exploring Apple Health activity and recovery trends from imported health data.",
        tags: ["Health Data", "Dashboard", "Privacy"],
        github: "https://github.com/Pujitha-pitta/apple-watch-health-dashboard"
    },
    {
        title: "TrendForge — Dataset Studio",
        description: "Collects and normalizes multi-source topic and weather data into datasets, with optional AI summaries and labels.",
        tags: ["AI", "Data Engineering", "APIs"],
        github: "https://github.com/Pujitha-pitta/trendforge-ai-dataset-builder"
    },
    {
        title: "Premier League Match Predictor",
        description: "Builds pre-match features from historical results and predicts Home, Draw, or Away probabilities.",
        tags: ["Python", "Machine Learning", "Sports Analytics"],
        github: "https://github.com/Pujitha-pitta/premier-league-match-predictor"
    },
    {
        title: "Terraform Kubernetes Ops Lab",
        description: "A local observability and operations lab using Docker, Kubernetes, Terraform, and a Python API.",
        tags: ["Terraform", "Kubernetes", "Docker"],
        github: "https://github.com/Pujitha-pitta/terraform-kubernetes-ops-lab"
    },
    {
        title: "Network Diagnostics & SLA Ticketing Toolkit",
        description: "Linux network diagnostics with automated SLA incident ticketing workflows.",
        tags: ["Python", "Linux", "Networking", "Jira"],
        github: "https://github.com/Pujitha-pitta/network-diagnostics-sla-tool"
    },
    {
        title: "RAID 5 Fault & Storage Telemetry Simulator",
        description: "Simulates storage hardware faults, SMART telemetry, and RAID 5 recovery, including a safe deterministic mode.",
        tags: ["Python", "Bash", "Storage"],
        github: "https://github.com/Pujitha-pitta/raid5-hardware-fault-simulator"
    },
    {
        title: "Radar — Team 8",
        description: "A virtual science park for Blue Science Park. Radar helps companies discover relevant funding, events, testbeds, and partners using evidence-backed profiles and AI agents.",
        tags: ["AI Agents", "Python", "TypeScript", "BUILD Hackathon 2026"]
    }
];


// ---------- Render projects ----------

const projectList = document.getElementById("projectList");

if (projectList) {
    projectList.replaceChildren();

    projects.forEach((project, index) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const number = document.createElement("span");
        number.className = "project-number";
        number.textContent = `PROJECT ${String(index + 1).padStart(2, "0")}`;

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const tags = document.createElement("div");
        tags.className = "project-tags";

        project.tags.forEach(tagText => {
            const tag = document.createElement("span");
            tag.textContent = tagText;
            tags.appendChild(tag);
        });

        const actions = document.createElement("div");
        actions.className = "project-actions";

        if (project.file) {
            const fileLink = document.createElement("a");
            fileLink.className = "project-link";
            fileLink.href = project.file;
            fileLink.textContent = "View project ↗";
            fileLink.target = "_blank";
            fileLink.rel = "noopener noreferrer";
            actions.appendChild(fileLink);
        }
        if (project.github) {
            const githubLink = document.createElement("a");
            githubLink.className = "project-link";
            githubLink.href = project.github;
            githubLink.textContent = project.title === "Radar — Team 8" ? "My copy on GitHub ↗" : "View on GitHub ↗";
            githubLink.target = "_blank";
            githubLink.rel = "noopener noreferrer";
            actions.appendChild(githubLink);
        }

        card.append(number, title, description, tags, actions);
        projectList.appendChild(card);
    });
}


// ---------- Glowing cursor follows mouse ----------

const glowCursor = document.querySelector(".glow-cursor");

if (glowCursor && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", event => {
        glowCursor.style.left = `${event.clientX - 12}px`;
        glowCursor.style.top = `${event.clientY - 12}px`;
    });
}


// ---------- Footer year ----------

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}




