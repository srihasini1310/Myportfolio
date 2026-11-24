# 🌌 Sri Hasini Dunna — Personal Engineering Portfolio

> **B.Tech Mechanical Engineering &bull; Section G &bull; Maulana Azad National Institute of Technology (MANIT), Bhopal (2026–27)**  
> **Tagline:** Mechanical Engineering | MANIT Bhopal  
> **Philosophy:** *"An aspiring engineer, lifelong learner and creative problem-solver who believes that every great innovation begins with curiosity."*  
> **YouTube Initiative:** [JEE Formula Flash](https://youtube.com/@jee-formulaflash?si=f-bHW8NFIkjFElwt) | **GitHub:** [@srihasini1310](https://github.com/srihasini1310)

---

## 📑 Table of Contents
1. [Overview & Visual Identity](#-overview--visual-identity)
2. [Academic Journey & Highlights](#-academic-journey--highlights)
3. [Competencies & Skills Architecture](#-competencies--skills-architecture)
4. [Projects & Innovation Showcase](#-projects--innovation-showcase)
5. [How to Add Your Actual Photograph](#-how-to-add-your-actual-photograph)
6. [Step-by-Step Deployment Guide (GitHub Pages & Netlify)](#-step-by-step-deployment-guide)
7. [Code Walkthrough & How to Demonstrate to Reviewers](#-code-walkthrough--how-to-demonstrate-to-reviewers)
8. [Tools & AI Note (Submission Disclosure)](#-tools--ai-note-submission-disclosure)

---

## 🎨 Overview & Visual Identity
This website is custom-engineered with a **Premium Dark Futuristic Design** tailored to represent an ambitious, academically disciplined engineering undergraduate:
- **Color Canvas:** Deep Midnight Navy (`#060913`, `#080E21`, `#0C142E`) paired with **Electric Cyan** (`#00F5FF`) and **Subtle Violet** (`#8B5CF6`) gradients.
- **Typography:** **Space Grotesk** for tech headings, **Manrope** for natural, confident reading flow, and **JetBrains Mono** for technical accents.
- **Glassmorphism:** Restrained, elegant elevation cards with semi-translucent backdrop blur (`backdrop-filter: blur(14px)`).
- **Zero Heavy Dependencies:** Built on pure, accessible web standards (**HTML5, modern CSS3, and ES6+ JavaScript**) for maximum responsiveness and fast load times.

---

## 🎓 Academic Journey & Highlights

| Academic Level | Board / Institute | Metric / Rank | Key Focus Areas |
| :--- | :--- | :--- | :--- |
| **B.Tech (Current)** | **MANIT Bhopal** (NIT) | **JEE Main Qualified** | First-year Mechanical Engineering, Section G, 2026–27 |
| **Class 12 (Senior Sec.)** | **CBSE Board** | **93.6%** | Science Stream (Physics, Chemistry, Mathematics) |
| **Class 10 (Secondary)** | **ICSE Board** | **98.0%** | **School 2nd Rank**, High Academic Distinction |

---

## 🛠️ Competencies & Skills Architecture
In strict adherence to academic honesty and authentic personal branding:
1. **Analytical & Academic Skills:** Mathematical reasoning, analytical thinking, logical deduction, complex problem-solving, conceptual clarity, and rapid learning agility.
2. **Personal & Professional Skills:** Effective communication, creativity & innovation, adaptability, teamwork & collaboration, time management, self-discipline, and determination.
3. **Technical Interests & Learning Track:**
   - *Core:* Mechanical Engineering fundamentals, engineering design & modeling, sustainable technology.
   - *Exploratory Focus:* Robotics & automation, interdisciplinary engineering.
   - *Developing Skills (In Progress):* Programming & computer science fundamentals, web development basics.

---

## 💡 Projects & Innovation Showcase
The portfolio maintains a strict, honest distinction between active initiatives and conceptual engineering proposals:
- **Project 1: SMARTGUARD &mdash; Portable Multi-Level Digital Locker** *(Proposed Concept &bull; Hardware Security)*  
  A portable digital locker concept designed for communal spaces (hostels, libraries, transit). Features conceptual multi-tiered authentication (keypad + biometrics), modular interior organization, and low-power alert mechanics.
- **Project 2: Smart Solar Dustbin &mdash; Automated Civic Waste Management** *(Sustainability Concept &bull; Smart Cities)*  
  A proposed green initiative leveraging solar energy, ultrasonic fill-level sensors, automated segregation mechanics, and a civic reward incentive model for cleaner campuses.
- **Project 3: JEE Formula Flash &mdash; High-Yield Educational Media** *(Active Initiative &bull; Public YouTube)*  
  An active peer-learning channel helping engineering aspirants master critical physics, chemistry, and mathematics principles through concise visual explanations.  
  👉 [Visit Channel: @jee-formulaflash](https://youtube.com/@jee-formulaflash?si=f-bHW8NFIkjFElwt)

---

## 📸 How to Add Your Actual Photograph

The website is set up to display your real photograph:

1. Copy your photograph into the `assets` folder.
2. Name the image file **`profile.jpg`** (or `.png` / `.jpeg`):
   ```text
   yugnext-portfolio/assets/profile.jpg
   ```
3. Refresh the website in your browser! The hero card will immediately display your real portrait with the sleek futuristic glowing border and badges.
*(Note: If no photo is added yet, the website automatically displays a custom-designed geometric engineer silhouette fallback).*

---

## 🚀 Step-by-Step Deployment Guide

You can deploy your portfolio live to the web for free in less than 3 minutes.

### Method A: Deploying via GitHub Pages (Recommended)
1. Log into your GitHub account: **[@srihasini1310](https://github.com/srihasini1310)**.
2. Create a new repository:
   - Go to [github.com/new](https://github.com/new).
   - Repository Name: `srihasini1310.github.io` (for custom root link) or `portfolio`.
   - Set it to **Public**.
3. Upload all files from this folder (`index.html`, `css/`, `js/`, `assets/`, `README.md`).
4. In your GitHub repository, click **Settings** > **Pages** (in the left sidebar).
5. Under **Build and deployment > Branch**, select **`main`** (or `master`) and folder **`/(root)`**, then click **Save**.
6. Wait 60 seconds and refresh. Your public live URL will appear:  
   👉 `https://srihasini1310.github.io/portfolio/`

### Method B: Deploying via Netlify (Instant Drag-and-Drop)
1. Go to [app.netlify.com](https://app.netlify.com) and sign in.
2. Go to **Sites** and drag the entire `yugnext-portfolio` folder directly into the Netlify upload zone.
3. Your site goes live instantly with an SSL-secured HTTPS link!

---

## 🔍 Code Walkthrough & How to Demonstrate to Reviewers

When presenting your portfolio during evaluations, highlight these key engineering and design decisions:
1. **Semantic HTML5 (`index.html`):** Built with accessibility in mind—using semantic sectioning (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`), aria attributes for screen readers, and Open Graph metadata.
2. **Design System & CSS Tokens (`css/style.css`):** Employs CSS custom properties (`:root`) for color palettes, fluid typography (`clamp()`), and media queries ensuring fluid responsiveness on mobile (<768px), tablet (768px–1024px), and desktop.
3. **Interactive Scripts (`js/main.js`):**
   - *IntersectionObserver Counter:* Smoothly increments academic percentages (98% and 93.6%) only when the user scrolls to the Academics section.
   - *Typewriter Engine:* Asynchronously cycles through your professional identities using vanilla timing intervals.
   - *Modal Manager:* Manages blueprint overlays with accessible keyboard ESC listeners and background scroll-lock.
   - *Input Validator:* Client-side email pattern matching and sanitized mail client URL generation.

---

## 🛡️ Tools & AI Note (Submission Disclosure)

In strict compliance with academic honesty guidelines:

```markdown
### Tools & AI Note
- AI Tools Utilized: ChatGPT (OpenAI) and Google Antigravity (Google DeepMind Agentic Suite).
- What AI Assisted With: Website structural planning, semantic HTML5 boilerplate, modern responsive CSS Grid and Flexbox layout architectures, color token palettes, and foundational JavaScript DOM event listeners.
- What I Personally Reviewed, Edited, Customized & Tested:
  1. Identity & Academic Integrity: Verified all personal academic milestones (Class 10 ICSE 98%, Class 12 CBSE 93.6%, JEE Main qualification, MANIT Bhopal admission, Section G) for total factual accuracy without exaggerated claims.
  2. Authentic Skill Framing: Explicitly labeled programming and web development as "developing skills" under active learning.
  3. Honest Project Distinctions: Distinctly categorized SMARTGUARD and Smart Solar Dustbin as conceptual engineering proposals under development, confirming no false claims of completed physical prototypes, while linking JEE Formula Flash as an active public YouTube educational initiative.
  4. Visual Direction: Guided the dark futuristic visual identity—incorporating deep midnight navy, electric blue, and cyan accents with Space Grotesk and Manrope typography.
  5. Cross-Device Quality Assurance: Tested responsive behavior across mobile, tablet, and desktop viewports, verified mailto integration, and managed version control and deployment.
```

---

## 📬 Contact & Profiles
- **Candidate:** Sri Hasini Dunna
- **Academic Email:** [26116011141@stu.manit.ac.in](mailto:26116011141@stu.manit.ac.in)
- **YouTube:** [JEE Formula Flash](https://youtube.com/@jee-formulaflash?si=f-bHW8NFIkjFElwt)
- **GitHub:** [github.com/srihasini1310](https://github.com/srihasini1310)
- **Institution:** Maulana Azad National Institute of Technology (MANIT), Bhopal
