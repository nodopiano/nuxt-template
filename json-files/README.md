# Cartella `json-files`

Qui puoi inserire i json failover per la costruzione delle viste con `buzz-fields`.

Inserisci dentro `pages/{resource}` i file `index.json` e `show.json` rispettivamente per indicare la composizione delle pagine index e show di una risorsa.

Automaticamente le pagine vengono caricate nello store nel caso in cui le API non dovessero funzionare correttamente. Se vuoi forzare il caricamento dei file in ogni caso, aggiungi nel tuo `.env`:
```
MOCK_PAGES=true
```
