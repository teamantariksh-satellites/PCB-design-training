# PCB Design Training — Team Antariksh

Welcome to the PCB Design Training repository! This is where you'll submit your KiCad schematic and PCB layout project.

---

## 🎯 Project Brief

Design a PCB for a project of your choice that includes:
- A **microcontroller** (Arduino, STM32, ESP32, ATtiny, etc.)
- At least one **sensor** (temperature, IMU, ultrasonic, etc.)
- At least one **actuator or driver** (motor driver, relay, LED driver, etc.)
- Supporting passives (resistors, capacitors, connectors)

The final board will be:
1. Single-layer PCB layout
2. Etched using laser marking or ferric chloride
3. Drilled, soldered with female headers, and components attached

---

## 📁 Repository Structure

```
PCB-design-training/
├── README.md                  ← You are here
├── template/                  ← Copy this folder to get started
│   ├── README_template.md
│   └── kicad_project/
│       ├── project.kicad_pro
│       ├── project.kicad_sch
│       └── project.kicad_pcb
├── resources/
│   ├── design_rules.md        ← PCB constraints for etching
│   ├── component_guidelines.md
│   └── submission_checklist.md
└── students/
    └── <your-name>/           ← Your submission goes here
        ├── README.md
        └── kicad_project/
```

---

## 🚀 How to Submit Your Project

### Step 1 — Fork or Clone

```bash
git clone https://github.com/teamantariksh-satellites/PCB-design-training.git
cd PCB-design-training
```

### Step 2 — Create your folder

Copy the template into the `students/` directory using your name:

```bash
cp -r template students/your-name
```

> Use lowercase, no spaces. Example: `students/riya-sharma` or `students/arjun-v`

### Step 3 — Work on your project

- Open `students/your-name/kicad_project/project.kicad_pro` in KiCad
- Design your schematic in the Schematic Editor
- Create your PCB layout in the PCB Editor
- Follow the design rules in `resources/design_rules.md`

### Step 4 — Export your files

Before submitting, export from KiCad:
- **Schematic PDF** → File → Plot → PDF
- **Gerber files** → PCB Editor → File → Fabrication Outputs → Gerbers
- **BOM** (Bill of Materials)

Place all exports inside your project folder.

### Step 5 — Submit via Pull Request

```bash
git checkout -b submission/your-name
git add students/your-name/
git commit -m "Add PCB project: [brief description] - your-name"
git push origin submission/your-name
```

Then open a **Pull Request** on GitHub with:
- Title: `[Submission] Your Name — Project Name`
- Description: Brief explanation of your circuit and component choices

---

## ✅ Submission Checklist

See [`resources/submission_checklist.md`](resources/submission_checklist.md) for the full checklist before raising a PR.

---

## 📐 Design Rules (Important!)

Since we're etching these boards ourselves, there are strict constraints. Read [`resources/design_rules.md`](resources/design_rules.md) before starting your layout.

---

## 🛠 Tools Required

| Tool | Version | Download |
|------|---------|----------|
| KiCad | 7.x or 8.x | [kicad.org](https://www.kicad.org/) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |

---

## 🙋 Questions?

Open a GitHub **Issue** with the label `question` and tag your mentor. Don't ask in WhatsApp — keeping it here means everyone benefits from the answer.
