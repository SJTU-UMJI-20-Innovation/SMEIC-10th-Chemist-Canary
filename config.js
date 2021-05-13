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
    "max": 3,
    "step": 0.5
  },
  {
    "name": "Cupric sulfate",
    "formula": "\\(\\text{CuSO}_4\\)",
    "safety": Safety.moderate,
    "max": 3,
    "step": 0.5
  },
  {
    "name": "Hydrochloric acid",
    "formula": "\\(\\text{HCl}\\)",
    "safety": Safety.dangerous,
    "max": 3,
    "step": 0.25
  },
  {
    "name": "Calcium carbonate",
    "formula": "\\(\\text{CaCO}_3\\)",
    "safety": Safety.safe,
    "max": 5,
    "step": 1,
  },
  
]