# PCB Design Training — Team Antariksh

Welcome to the PCB Design Training repository. This is where you submit your KiCad schematic and PCB layout project.

---

## Project Brief

Design a PCB for a project of your choice that includes:
- A microcontroller (Arduino, STM32, ESP32, ATtiny, etc.)
- At least one sensor (temperature, IMU, ultrasonic, etc.)
- At least one actuator or driver (motor driver, relay, LED driver, etc.)
- Supporting passives (resistors, capacitors, connectors)

The final board will be single-layer, etched using laser marking or ferric chloride, drilled, and soldered with female headers.

---

## Repository Structure

```
PCB-design-training/
├── README.md
├── template/                  <- Copy this to get started
│   ├── README_template.md
│   └── kicad_project/
├── resources/
│   ├── design_rules.md        <- PCB constraints for etching
│   ├── component_guidelines.md
│   └── submission_checklist.md
└── students/
    └── <your-name>/           <- Your submission goes here
```

---

## Getting Access to This Repo

Since this repo is private, you need to be added as a collaborator before you can clone or push.

Fill in this form and you will be automatically invited:
**[Request Access Form](https://forms.gle/REPLACE_WITH_YOUR_FORM_LINK)**

You will get a GitHub invitation email — accept it, then proceed below.

---

## How to Submit Your Project

### Step 1 — Clone

```bash
git clone https://github.com/teamantariksh-satellites/PCB-design-training.git
cd PCB-design-training
```

### Step 2 — Create your folder

Copy the template into `students/` using your name (lowercase, no spaces):

```bash
# Windows
xcopy template students\your-name /E /I

# Mac/Linux
cp -r template students/your-name
```

Example: `students/riya-sharma` or `students/arjun-v`

### Step 3 — Work on your project

Open `students/your-name/kicad_project/project.kicad_pro` in KiCad 10.

Design your schematic, then create the PCB layout. Follow the rules in `resources/design_rules.md` before you start routing.

### Step 4 — Export before submitting

From KiCad, export:
- Schematic as PDF: File > Plot > PDF
- Gerber files: PCB Editor > File > Fabrication Outputs > Gerbers
- BOM: Tools > Generate BOM

Place all exports inside your project folder.

### Step 5 — Submit via Pull Request

```bash
git checkout -b submission/your-name
git add students/your-name/
git commit -m "Add PCB project: [brief description] - your-name"
git push origin submission/your-name
```

Open a Pull Request with:
- Title: `[Submission] Your Name — Project Name`
- Description: Brief explanation of your circuit and component choices

---

## Asking Questions

Open a GitHub Issue in this repo with the label `question`. Tag your mentor in the issue. This way everyone can see the answer — not just you.

Do not ask on WhatsApp or in DMs for anything technical.

---

## Submission Checklist

See [resources/submission_checklist.md](resources/submission_checklist.md) before raising a PR.

---

## Design Rules

Read [resources/design_rules.md](resources/design_rules.md) before starting your layout. These are hard constraints set by our etching process.

---

## Tools Required

| Tool | Version | Download |
|------|---------|----------|
| KiCad | 10.x | [kicad.org/download](https://www.kicad.org/download/) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |

---

## Open Source KiCad Projects to Explore

Looking at real projects is the fastest way to learn. Here are some worth studying:

| Project | What it is | Why it's interesting |
|---------|-----------|----------------------|
| [Arduino UNO R3 (official KiCad files)](https://github.com/arduino/ArduinoCore-avr/tree/master/boards) | The classic Arduino board | See how a real product is laid out |
| [Keyboard PCB by jmdaly/CO60](https://github.com/jmdaly/CO60) | Open hardware 60% keyboard | Clean single-board layout, good silkscreen practice |
| [ESP32 LiFePO4 board](https://github.com/pho/esp32-lifepo4-board) | ESP32 + battery charging circuit | Compact mixed-signal layout |
| [scottokeebs](https://github.com/joe-scotto/scottokeebs) | Collection of keyboard/macropad PCBs | Great for studying component placement |
| [svg2shenzhen](https://github.com/badgeek/svg2shenzhen) | Art PCBs made from Inkscape SVGs | Shows how creative PCB art works |
| [kicad-3rd-party-tools](https://github.com/devbisme/kicad-3rd-party-tools) | Curated list of KiCad tools | Useful plugins and scripts |
| [SparkFun KiCad Libraries](https://github.com/sparkfun/SparkFun-KiCad-Libraries) | SparkFun's component library | Reference for footprints and symbols |
| [Beginner's Guide to KiCad](https://github.com/pablov55/Beginner-s-Guide-to-KiCad) | Step-by-step guide with project files | Good companion to this training |

---

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
