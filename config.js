// Enumerables

const Safety = {
  "safe": 1,
  "moderate": 2,
  "dangerous": 3,
  "extremely_dangerous": 4
};

const Elements =

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
    "name": "Hydrochloric acid",
    "formula": "\\(\\text{HCl}\\)",
    "safety": Safety.dangerous,
    "state": "Liquid",
    "enabled": false,
    "max": 3,
    "step": 0.25
  },
  {
    "name": "Calcium carbonate",
    "formula": "\\(\\text{CaCO}_3\\)",
    "safety": Safety.safe,
    "state": "Solid",
    "enabled": true,
    "max": 5,
    "step": 1,
  },
  
]