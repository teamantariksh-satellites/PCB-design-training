# PCB Design Rules

These constraints are set by our etching process (laser marking / ferric chloride). **Violating these will make your board un-etchable.**

---

## Track Width

| Parameter | Minimum | Recommended |
|-----------|---------|-------------|
| Signal track width | 0.4 mm | 0.6 mm |
| Power track width | 0.8 mm | 1.2 mm |
| GND track width | 1.0 mm | 1.5 mm |

## Clearance

| Parameter | Minimum |
|-----------|---------|
| Track-to-track clearance | 0.4 mm |
| Track-to-pad clearance | 0.4 mm |
| Pad-to-pad clearance | 0.4 mm |

## Drill / Holes

| Parameter | Value |
|-----------|-------|
| Minimum drill diameter | 0.8 mm |
| Recommended through-hole pad drill | 1.0 mm |
| Pad annular ring (minimum) | 0.3 mm |

## Board

- **Single copper layer only** — use `B.Cu` (back copper) or `F.Cu` (front copper), not both
- Board outline on `Edge.Cuts` layer
- Maximum board size: **100 mm × 100 mm** (discuss with mentor for larger boards)
- No blind/buried vias — through-hole only

## Footprints

- Use **through-hole (THT)** components wherever possible
- SMD is allowed only for passives (resistors, capacitors) in 0805 or larger
- All ICs should be in DIP packages unless discussed with mentor

## Silkscreen

- Keep silkscreen (`F.Silkscreen`) clean — label all connectors and ICs
- Minimum text size: 0.8 mm height, 0.15 mm line width

---

## Setting Up Design Rules in KiCad 10

1. Open PCB Editor
2. Go to **File → Board Setup → Design Rules → Constraints**
3. Set minimum values as per the table above
4. Run **Inspect → Design Rules Checker (DRC)** before submitting — zero errors required

KiCad 10 download: https://www.kicad.org/download/
