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

        const link = document.createElement("a");
        link.className = "project-link";
        link.href = project.file;
        link.textContent = "View project ↗";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.append(number, title, description, tags, link);
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



