# Procedura per le pagine Replacement Parts

Questa procedura si applica quando l'utente chiede «fai la prossima pagina dei replacement» o una frase equivalente. La frase autorizza a completare la prossima guida, aggiornare la navigazione generata, verificare il risultato, fare commit su `main` e push su `origin/main`.

## Prima di scrivere

1. Leggi questo documento, `README.md`, `MODELLI_RICAMBI.md` e la guida modello più recente in `_site-src/models/`.
2. Controlla branch, stato Git e pagine già pubblicate. Scegli il primo candidato non ancora trattato nell'ordine editoriale, salvo che le fonti o le varianti mostrino che vada consolidato o saltato; annota la ragione.
3. Ricerca dati aggiornati per la variante USA esatta. Usa manuali e pagine del produttore per modello, ricambi originali e manutenzione; per ogni prodotto affiliato controlla la scheda Amazon.com selezionata, il suo ASIN, la confezione, le esclusioni, il venditore, il titolo e la foto di quella stessa inserzione. Registra la data e collega le fonti con `sourceIds`.
4. Includi soltanto ricambi con compatibilità supportata. Distingui robot, dock e generazioni; un accessorio condiviso non dimostra che siano compatibili anche gli altri pezzi. Se una verifica manca, lascia la guida in bozza e descrivi il punto da risolvere.

## Pagina standard

Usa `_site-src/models/roborock-qrevo.json` come esempio del formato, non come testo da copiare. Crea `_site-src/models/<slug>.json` con `status: "draft"` mentre raccogli le fonti. Per ogni ricambio compila tutti i campi richiesti dal generatore, compreso `searchLabel`, con una frase naturale modello + pezzo, per esempio `replacement filters`. La scheda pubblica mostra:

- H1, titolo SEO, description, scope e avviso chiaro per distinguere il modello dalle varianti simili.
- Collegamenti rapidi ai ricambi verificati e schede con foto cliccabile dalla relativa inserzione Amazon, tipo (originale o terza parte), marca, quantità, pulsante affiliato, compatibilità, quando sostituire e controllo da fare prima dell'ordine.
- Titoli visibili delle schede con nome modello e query specifica, ad esempio `Roborock Qrevo replacement filters`. Usa wording utile, senza ripetere keyword artificialmente.
- Una scheda del robot originale con foto e link affiliato alla sua inserzione esatta Amazon.com, come nel Qrevo; verifica modello, colore/configurazione e ASIN. Non mostrare prezzi o disponibilità copiati.
- Note di compatibilità, intervalli di manutenzione con fonti del produttore, FAQ pratiche e nota su come sono stati verificati i ricambi.
- La disclosure affiliata una sola volta a fine pagina nel footer condiviso; nessuna ripetizione sotto pulsanti o immagini.

Scrivi in inglese semplice per il pubblico USA, dando precedenza alla scelta rapida del pezzo e alla compatibilità. Evita introduzioni generiche, affermazioni senza fonte, pagine sottili o duplicati. Se il modello non ha abbastanza ricambi verificabili, non forzare una guida pubblica.

## Navigazione, Analytics e generazione

Il tag Google Analytics è incluso dal partial condiviso e si configura in `_site-src/config.json`: non copiarlo a mano nelle pagine. Anche il tracciamento dei click affiliati è condiviso. La navigazione globale punta all'indice Replacement Parts; attivando il modello come `published`, il generatore aggiunge la scheda all'indice, genera breadcrumb e URL canonico e aggiorna `sitemap.xml`. Non aggiungere link manuali duplicati a ciascun modello nel menu globale. Aggiorna menu/configurazione soltanto se cambia la struttura generale del sito.

Quando fonti e contenuti sono completi, imposta `status: "published"`, poi genera l'HTML con `npm run build`. Aggiorna il README o il piano editoriale se il processo o lo stato dei candidati cambia.

## Controllo e pubblicazione

Prima del commit controlla la guida a desktop e mobile: foto caricate, CTA visibili e dirette all'ASIN verificato, testo senza overflow, ancore, breadcrumb, disclosure singola in fondo. Controlla anche che Analytics compaia una volta, che indice e sitemap contengano la nuova URL e che le altre pagine non abbiano modifiche inattese.

Esegui `npm run check` e `git diff --check`. Se i controlli passano, rivedi le modifiche, crea un commit descrittivo su `main` e fai push a `origin/main`. Dopo il push verifica la pubblicazione della nuova pagina sul sito live prima di comunicare il completamento. Non dichiarare verificata una disponibilità Amazon, un acquisto o una visita live senza averli controllati.

## Sorgenti tecniche

- Dati per modello: `_site-src/models/<slug>.json`
- Generatore e convalida: `_site-src/build.mjs`
- Layout guida e indice: `_site-src/render-parts.mjs`
- Documento, partial Analytics, header e footer: `_site-src/templates/` e `_site-src/partials/`
- Elenco candidature: `MODELLI_RICAMBI.md`
- Istruzioni build e hosting: `README.md`
