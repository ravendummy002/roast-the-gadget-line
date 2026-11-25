import { mkdirSync, writeFileSync } from "node:fs";

// One original line roasting a gadget used every day: wireless earbuds
// that always die mid-call. Written out verbatim, deterministic, no
// trailing newline, so the gate sees exactly this text.
const LINE =
  "My wireless earbuds quit mid-sentence on every call, like tiny union workers on a strict contract: one ear at a time, and never overtime.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
