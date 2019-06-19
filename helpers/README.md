# Cartella `helpers`

Qui sono contenuti due classi che possono aiutare con qualche operazione.

## DownloadReport
Scarica un report in formato `.csv` o `.xlsx`

```js
// Esempio
import DownloadReport from './downloadReport'

const exportData = [
  { 'Label 1': 'Valore 1', 'Label 2': 'Valore 2' },
  // ...
]

// Esporta il file "report.csv"
new DownloadReport(exportData).csv().download('report')

// Esporta il file "report.xlsx" con workspace "Foglio di test"
new DownloadReport(exportData).xlsx('Foglio di test').download('report')
```

## GenerateColors
Genera un numero di colori a partire da un colore principale.
```js
// Esempio
import generateColors from './generateColors'

// Genero 4 colori a partire da #dad7e1
const generated = generateColors('#dad7e1, 4)
```
