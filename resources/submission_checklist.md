# Submission Checklist

Go through every item before raising your Pull Request. Screenshots are your friend — attach them to the PR description.

---

## Schematic

- [ ] All components have correct symbols and pin mappings verified against datasheets
- [ ] All nets are named with net labels
- [ ] Power flags (`PWR_FLAG`) added to VCC and GND nets
- [ ] Decoupling capacitors placed on every IC VCC pin
- [ ] ERC run — **zero errors** (warnings are okay if explained in PR)
- [ ] Schematic exported as **PDF** and placed in your project folder

## PCB Layout

- [ ] All components placed within board outline
- [ ] Board is **single layer** only
- [ ] All tracks routed — no unconnected nets (ratsnest is clear)
- [ ] Track widths follow `resources/design_rules.md`
- [ ] Clearances follow `resources/design_rules.md`
- [ ] DRC run — **zero errors**
- [ ] Silkscreen labels on all connectors and ICs
- [ ] Board outline on `Edge.Cuts` layer
- [ ] Board size within 100 mm × 100 mm (or approved by mentor)

## Exports

- [ ] Schematic PDF exported
- [ ] Gerber files exported (at minimum: `F.Cu` or `B.Cu`, `Edge.Cuts`)
- [ ] BOM (Bill of Materials) exported or written manually in your README

## Your Project README

- [ ] `students/your-name/README.md` filled in with:
  - Project name and brief description
  - Microcontroller used
  - Sensors and actuators used
  - Any special design decisions or notes
  - 3D render or screenshot of PCB layout (optional but appreciated)

## Git / PR

- [ ] Only files inside `students/your-name/` are changed
- [ ] No binary files committed except exports (PDF, Gerbers)
- [ ] KiCad project files committed (`.kicad_pro`, `.kicad_sch`, `.kicad_pcb`)
- [ ] PR title follows format: `[Submission] Your Name — Project Name`
- [ ] PR description explains your circuit briefly
