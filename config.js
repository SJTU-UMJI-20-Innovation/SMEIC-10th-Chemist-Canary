// Enumerables

const Safety = {
  "safe": 1,
  "moderate": 2,
  "dangerous": 3,
  "extremely_dangerous": 4
};

const Chemicals = [
  {
    "name": "Sodium hydroxide",
    "formula": "\\(\\text{NaOH}\\)",
    "safety": Safety.danger,
    "state": "Liquid",
    "enabled": true,
    "max": 3,
    "step": 0.5
  },
  {
    "name": "Cupric sulfate",
    "formula": "\\(\\text{CuSO}_4\\)",
    "safety": Safety.moderate,
    "state": "Liquid",
    "enabled": true,
    "max": 3,
    "step": 0.5
  },
  {
    "name": "Hydrogen peroxide",
    "formula": "\\(\\text{H}_2\\text{O}_2\\)",
    "safety": Safety.dangerous,
    "state": "Liquid",
    "enabled": false,
    "max": 3,
    "step": 0.25
  },
  {
    "name": "Manganese Dioxide",
    "formula": "\\(\\text{MnO}_2\\)",
    "safety": Safety.safe,
    "state": "Solid",
    "enabled": true,
    "max": 5,
    "step": 1,
  },
  
]