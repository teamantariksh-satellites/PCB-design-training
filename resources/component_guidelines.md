# Component Guidelines

Tips on choosing and placing components for your PCB.

---

## Microcontrollers

| MCU | Package | Notes |
|-----|---------|-------|
| ATmega328P | DIP-28 | Arduino Uno core, easy to solder |
| ATtiny85 | DIP-8 | Tiny projects, limited pins |
| ESP-12E/F | SMD module | WiFi, use breakout board footprint |
| STM32F103 (Blue Pill) | SMD module | Use module footprint |
| RP2040 | SMD module | Use module footprint |

> Prefer DIP packages for your first board. Module footprints (for ESP32, Blue Pill, etc.) are fine — treat the module as a component.

---

## Sensors

- Use breakout-board-style footprints if the sensor IC is SMD
- Add 100nF decoupling capacitor close to each sensor VCC pin
- Label sensor connectors clearly on silkscreen (e.g., `J_IMU`, `J_TEMP`)

---

## Motor Drivers

| IC | Package | Max Current |
|----|---------|-------------|
| L293D | DIP-16 | 600 mA per channel |
| L298N | Multiwatt | 2A per channel |
| DRV8833 | TSSOP (SMD) | 1.5A per channel |
| TB6612FNG | Module | 1.2A per channel |

- Add flyback diodes across motor terminals if not built into the IC
- Keep motor power traces wide (≥ 1.2 mm)

---

## Connectors

- Use **2.54 mm pitch** pin headers for all connections
- Label every connector on silkscreen with signal names
- Add a 1×2 or 1×3 power connector for VCC/GND input

---

## Decoupling Capacitors

- Place a **100nF ceramic capacitor** as close as possible to every IC VCC pin
- Add a **10µF electrolytic** near the main power input

---

## General Tips

- Run **ERC (Electrical Rules Check)** in the schematic editor — zero errors before moving to layout
- Every net should have a name — use **net labels**, not just wire connections
- Add **test points** on important nets (VCC, GND, key signals)
- Double-check pin numbers against the actual IC datasheet, not just the KiCad symbol
