# DustMigo: proposta per le pagine ricambi

Proposta del 6 ottobre 2026, aggiornata dopo l'implementazione iniziale. Stato: indice e prima pagina realizzati e verificati localmente; pubblicazione online ancora da eseguire.

## Implementazione iniziale

Creato l'[elenco di 32 modelli candidati](MODELLI_RICAMBI.md) con priorità, varianti e limiti dei segnali di popolarità. Realizzati `/parts/` e `/parts/roborock-qrevo/`, con sei inserzioni e fotografie Amazon verificate per il Qrevo originale. La pagina distingue ricambi originali e di terzi e spiega compatibilità, confezioni e manutenzione.

Il generatore Node in `_site-src/build.mjs` usa dati per modello, un template comune e partial condivisi per header, footer e Google Analytics. Anche le pagine preesistenti sono generate da queste sorgenti. Il tag già presente, `G-ZF7L8PV8EV`, è configurato una sola volta. I clic affiliati riportano modello, categoria del pezzo, ASIN e posizione del link; i dati della prova locale non sono inviati ad Analytics. Per il flusso di lavoro vedere [README.md](README.md).

Le sezioni seguenti conservano la strategia editoriale; il primo rilascio implementato comprende un modello, gli altri sono successive candidature da verificare.

## Valutazione

Una sezione ricambi è coerente con DustMigo: aiuta chi possiede già un robot e cerca un acquisto preciso. La proposta è intercettare ricerche modello + consumabile, risolvendo soprattutto la scelta del pezzo e della variante corretta.

L'intenzione di acquisto è un'ipotesi plausibile per termini come `replacement filter`, `dust bags` e `replacement parts kit`. Non abbiamo dati di volume, difficoltà SEO, conversione o fatturato: non sono state consultate proprietà Search Console o report Amazon Associates. Le ricerche web svolte sono esplorative, non una misurazione delle posizioni negli USA.

All'inizio della proposta il progetto aveva quattro URL nella sitemap, contenuti in inglese, pubblico USA, link Amazon.com e pubblicazione statica su GitHub Pages. Questi presupposti sono mantenuti. Ora la sitemap generata include anche indice e prima pagina ricambi. La struttura è stata verificata nel repository; il tentativo iniziale di leggere la homepage online tramite lo strumento web non è riuscito e non costituisce un audit del sito pubblicato.

L'opportunità commerciale va valutata sui ricavi per visita e sul costo di aggiornamento. Un ricambio può avere un ordine di valore inferiore a un robot completo; l'intento preciso e possibili acquisti successivi non garantiscono maggiori commissioni.

## 1. Architettura proposta

Obiettivo del primo gruppo: un indice e quattro pagine modello. Al momento sono stati realizzati indice e pagina Qrevo; gli altri URL seguenti restano proposti.

```text
/parts/
  /parts/roborock-qrevo/
  /parts/eufy-l60/
  /parts/eufy-x10-pro-omni/
  /parts/roomba-j7/
```

Ogni URL viene servito da un normale `index.html` nella relativa cartella. I modelli sono candidati: confermare il gruppo finale dopo la validazione della domanda e delle destinazioni di acquisto.

- Aggiungere `Replacement parts` nella navigazione e un accesso dalla homepage con il messaggio `Already own a robot vacuum?`.
- Nell'indice, consentire di trovare marca e nome esatto del modello; mostrare fin da subito tutti i collegamenti HTML. Per quattro modelli bastano poche schede, senza un nuovo questionario.
- La pagina modello contiene sezioni raggiungibili con ancore: `#filters`, `#dust-bags`, `#brushes`, `#mop-pads`, `#kits`, soltanto dove applicabili.
- Usare breadcrumb `Home > Replacement parts > [Model]`.
- Aggiungere collegamenti dalle schede di acquisto già presenti soltanto quando esiste una pagina ricambi per quel modello esatto. Qrevo S5V non va collegato a una pagina che copre soltanto Qrevo originale.
- In futuro, creare indici per marca quando aiutano realmente a navigare un catalogo più ampio. Il numero di livelli non è un requisito SEO.

Una pagina per modello copre inizialmente sia la ricerca generale sia le ricerche dei singoli consumabili. `Replacement parts`, `accessories` e `spare parts` non richiedono tre pagine differenti per lo stesso robot.

## 2. Quali modelli valutare

Per i ricambi, la diffusione dei robot già nelle case conta almeno quanto l'interesse per le ultime uscite. Non limitare la selezione ai quattro robot della homepage.

| Candidato | Motivo per approfondirlo | Confine della pagina |
| --- | --- | --- |
| Roborock Qrevo originale | Il catalogo ufficiale offre un punto di partenza per rulli, mop e altri consumabili | Non estendere automaticamente a Qrevo S5V, Master, Curv o Edge |
| eufy L60 | Il catalogo ufficiale distingue accessori della serie e componenti della stazione | Specificare L60, Hybrid e configurazioni con stazione; verificare ogni pezzo |
| eufy X10 Pro Omni | Esistono un catalogo accessori dedicato e kit ufficiali | Nome completo X10 Pro Omni; eventuale condivisione con X9 va verificata per pezzo |
| Roomba j7 / j7+ | L'offerta ufficiale consente di distinguere filtri, rulli e sacchetti | Verificare i pezzi condivisi e il dock; separare le compatibilità Combo j7 |
| Roborock S8 Pro Ultra | Possibile estensione verso una configurazione con consumabili robot e dock | S8, S8+ e S8 MaxV Ultra non sono equivalenze implicite |
| Dreame L10s Ultra | Kit e catalogo ricambi ufficiali riferiti al modello | Distinguere Gen 2, Pro e altre denominazioni |
| Roborock Qrevo S5V | È già presente sul sito, quindi consente collegamenti interni pertinenti | Pagina distinta o copertura esplicita, con matrice specifica |

Questa è una shortlist di ricerca, non una classifica verificata dei modelli più venduti o più cercati.

Prima di scegliere le quattro pagine, confrontare:

1. Domanda USA per gruppi modello + pezzo in Keyword Planner o altro strumento disponibile; Search Console può aggiungere segnali se il sito ha già impression pertinenti. L'assenza di impression su argomenti non ancora coperti non prova assenza di domanda.
2. Tipo di risultati per ricerche concrete: negozi, produttori, guide, marketplace; individuare cosa resta difficile da capire. Una long tail non è automaticamente poco competitiva.
3. Fonti affidabili per la compatibilità e possibilità di identificare SKU e variante.
4. Destinazioni Amazon.com precise, selezione del pacco e reperibilità da ricontrollare prima del lancio.
5. Possibilità di aggiungere informazioni utili oltre alla descrizione del venditore e impegno di manutenzione.

La scelta editoriale iniziale è Qrevo originale, L60, X10 Pro Omni e j7/j7+, subordinata a questi controlli. Qrevo S5V può sostituire un candidato se domanda e collegamenti col sito lo rendono preferibile.

## 3. Cluster di ricerche

Esempi da validare, senza attribuire volumi o difficoltà non misurati:

| Intento | Esempi in inglese | Destinazione iniziale |
| --- | --- | --- |
| Consumabile specifico | `eufy x10 pro omni replacement filter`, `roborock qrevo dust bags` | Sezione pertinente della pagina modello |
| Kit | `roomba j7 replacement parts kit`, `eufy l60 replacement accessories kit` | Sezione kit |
| Ricambi generali | `roborock qrevo replacement parts`, `eufy l60 accessories` | Pagina modello |
| Compatibilità prima dell'acquisto | `roomba j7 vs combo j7 filters`, `qrevo s5v brush compatibility` | Spiegazione specifica e scelta del pezzo |
| Manutenzione | `when to replace eufy x10 filter` | Breve sezione della pagina; guida separata solo se utile |

Filtri, sacchetti, rulli, spazzole laterali, mop e kit sono il primo perimetro. Batterie, motori, elettronica e riparazioni approfondite richiedono un lavoro diverso sulle fonti e sull'assistenza: valutarli in una fase successiva.

## 4. Struttura della pagina modello

Esempio di titolo: `Roborock Qrevo Replacement Parts: Filters, Bags & Brushes | DustMigo`.

Esempio H1: `Roborock Qrevo replacement parts`.

Ordine della pagina:

1. Nome e variante coperti, mercato USA e una risposta breve su cosa scegliere. Data dell'effettivo controllo delle fonti.
2. Accessi rapidi alle categorie di ricambio. I prodotti devono essere raggiungibili senza attraversare una lunga introduzione.
3. Tabella compatta: pezzo, nome/SKU del ricambio, robot o dock supportato, tipo di fonte e destinazione di acquisto.
4. Schede per pezzo: cosa include il pacco, originale o produttore terzo, variante necessaria, motivo concreto per sceglierlo, limite della verifica. Uno o pochi collegamenti pertinenti per pezzo.
5. Kit completo rispetto ai singoli pezzi: chiarire quando servono tutti i componenti e quando è sufficiente sostituirne uno. Non affermare un risparmio senza un confronto di prezzi valido.
6. Come identificare il modello e gli errori di acquisto più comuni, specifici per quella pagina.
7. Quando pulire o sostituire, usando il manuale del modello e segnali di usura documentati. Non applicare scadenze universali a tutti i robot.
8. Domande pratiche, fonti e collegamenti pertinenti.

Su mobile la scelta deve essere leggibile senza una grande tabella che richieda continui scorrimenti. Si può usare una tabella breve e schede verticali per i dettagli.

## 5. Il valore distintivo: compatibilità per pezzo

Esempio verificato: il catalogo Roborock pubblica un [rullo per Qrevo, Qrevo S e altri modelli](https://us.roborock.com/products/s7-main-brush) e un [rullo distinto che include Qrevo S5V, Curv ed Edge](https://us.roborock.com/products/main-brush-for-roborock-qrevo-curv-and-qrevo-edge). Il nome di famiglia, da solo, non basta a scegliere il prodotto. Questo esempio non verifica l'intero elenco ricambi di nessuno dei modelli.

Anche [iRobot distingue kit e filtri per serie e configurazioni Combo](https://www.irobot.com/en_US/shop/combo.html). Alcuni pezzi possono essere condivisi e altri cambiare: la matrice va costruita per componente, non per somiglianza dei nomi.

Per ogni abbinamento modello/pezzo registrare:

- Identificativo del modello e della variante; eventuale dock richiesto.
- Categoria, produttore del pezzo, SKU se pubblicato, quantità e configurazione del pacco.
- Modelli esplicitamente supportati e limitazioni esplicitamente documentate.
- URL della fonte, tipo di fonte e data del controllo.
- URL di acquisto e ASIN, quando verificati; non inventare equivalenze o codici.
- Nota editoriale specifica utile alla scelta.

Usare etichette descrittive: `Listed as compatible by the manufacturer` oppure `Compatibility stated by the seller; not independently tested`. Una compatibilità dichiarata non equivale a una prova fisica DustMigo. L'assenza di un modello da un elenco non dimostra automaticamente l'incompatibilità.

Per il lancio partire dai prodotti originali con fonti solide. Aggiungere alternative di terzi soltanto quando l'esatta compatibilità e la qualità delle informazioni consentono un confronto utile. Collegare anche la fonte o lo store ufficiale quando aiuta a verificare il codice.

Google distingue le pagine affiliate utili dai contenuti che riproducono le descrizioni dei negozi senza valore aggiunto. La stessa documentazione tratta la produzione di molte pagine prive di utilità come abuso di contenuti su larga scala. Un template condiviso è utile, purché ogni pagina contenga una selezione e indicazioni proprie. [Google Search: spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

## 6. Realizzazione nel progetto attuale

Per il prototipo e il primo piccolo gruppo, mantenere HTML/CSS/JavaScript puro e GitHub Pages. Usare gli stili del sito, un layout pagina modello coerente e un catalogo editoriale separato con le verifiche di compatibilità.

Le pagine devono contenere testo, schede e collegamenti già nell'HTML. JavaScript può filtrare l'indice e migliorare la navigazione. Tutti i modelli restano accessibili anche senza interazione.

Su richiesta dell'utente di standardizzare subito, è già stato introdotto un piccolo generatore locale senza framework che legge dati e template e produce normali file HTML. L'automazione riduce la duplicazione tecnica; la ricerca e le note specifiche per modello restano curate.

Dettagli da includere nell'implementazione:

- URL di cartella coerenti, title e description specifici, un H1 e canonical alla propria URL.
- Collegamenti interni HTML, breadcrumb e sitemap con le nuove pagine pubbliche; `lastmod` solo quando descrive un cambiamento reale.
- Percorsi root-relative per CSS, JavaScript, immagini e navigazione nelle nuove cartelle.
- Etichette affiliate vicino alle CTA e attributi dei link coerenti con quelli già presenti.
- Destinazioni dirette verso il ricambio e il pacco verificati, anziché ricerche generiche o robot completi.
- Coerenza con il sito attuale, che non mostra prezzi Amazon statici.
- Dati strutturati `BreadcrumbList` coerenti con la navigazione. Non applicare markup pensato per un singolo prodotto all'intera raccolta ricambi: [Google Product snippets](https://developers.google.com/search/docs/appearance/structured-data/product-snippet).
- FAQ utili ai lettori; il changelog Google consultato indica che i risultati avanzati FAQ non compaiono più dal 7 maggio 2026, quindi non impostare su di essi la strategia. [Google documentation updates](https://developers.google.com/search/updates).

Prima della pubblicazione verificare in particolare compatibilità e link, accessibilità da tastiera, layout mobile, HTML disponibile senza JavaScript, asset delle cartelle annidate, canonical e sitemap. La pubblicazione è un passaggio successivo alla presente proposta.

## 7. Lancio e misurazione

Sequenza suggerita:

1. Validare i quattro candidati e compilare la matrice dei pezzi del primo modello.
2. Realizzare una pagina pilota completa, iniziando da Qrevo, per verificare contenuti, percorso di acquisto e layout.
3. Realizzare l'indice e le altre tre pagine, riutilizzando la struttura ma scrivendo le differenze specifiche.
4. Integrare navigazione, collegamenti pertinenti, sitemap e misurazione disponibile; pubblicare il gruppo verificato.
5. Rivedere i primi segnali dopo 8–12 settimane dal lancio. È una finestra operativa proposta, non una previsione di ranking o un termine entro cui aspettarsi traffico.

Distinguere:

- Indicizzazione: quali URL sono stati indicizzati e quali problemi tecnici emergono.
- Visibilità organica: impression e clic USA per pagina e gruppi modello/pezzo; il CTR in Search Console riguarda i risultati di ricerca.
- Passaggio al negozio: sessioni della pagina con almeno un clic affiliato / sessioni della pagina. Il tag Analytics e l'evento `affiliate_click` sono ora nel codice generato; la raccolta per la nuova sezione inizierà dopo la pubblicazione. Registrare in GA4 le dimensioni evento per modello, pezzo, ASIN e posizione del link per segmentare i risultati.
- Risultato commerciale: clic e commissioni dai report Associates; un tracking ID dedicato alla sezione, se configurato, aiuta a distinguerla. Non presumere di poter attribuire ogni vendita alla pagina o al pezzo senza una configurazione adeguata.
- Qualità: errori di compatibilità segnalati, destinazioni cambiate e tempo necessario per mantenere le pagine.

Introdurre una pagina dedicata a un pezzo, per esempio `/parts/eufy-x10-pro-omni/dust-bags/`, quando le ricerche osservate e il contenuto disponibile giustificano una risposta distinta. Il nuovo URL deve approfondire scelta, varianti e pacchi; la pagina modello rimane un indice con un riepilogo e un collegamento. Non duplicare integralmente la stessa sezione su due pagine.

Prevedere controlli periodici di fonti e destinazioni e aggiornamenti quando cambiano modelli o pacchi. Le date di verifica devono rappresentare controlli effettivi.

## Fonti aggiuntive consultate

- [Google: creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Roborock US: accessories](https://us.roborock.com/collections/accessories).
- [Roborock US: Qrevo S5V e accessori associati](https://us.roborock.com/products/roborock-qrevo-s5v).
- [eufy US: catalogo accessori](https://us.eufy.com/collections/accessory).
- [eufy US: X10 Pro Omni accessories](https://www.eufy.com/collections/x10-pro-omni-accessories).
- [Dreame US: kit L10s Ultra](https://www.dreametech.com/products/accessory-kit-for-dreamebot-l10s-ultra).

Queste fonti supportano l'esistenza dei cataloghi e gli esempi indicati. Non attestano volumi di ricerca, quote di mercato, popolarità relativa o la compatibilità completa delle future pagine.
