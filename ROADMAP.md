# Roadmap di miglioramento di DustMigo

Data di riferimento: 2 ottobre 2026. Basata sulla visita della versione online da desktop e mobile, dal punto di vista di un acquirente arrivato da Reddit.

## Obiettivo

Aiutare un lettore a scegliere un robot compatibile con budget, casa e priorità, spiegando perché acquistarlo e quando scartarlo. Mantenere poche pagine curate, HTML/CSS/JavaScript puro, nessun backend e pubblicazione su GitHub Pages.

## Come usare questa roadmap

- Gli step non ancora eseguiti restano **da fare**; questo documento registra anche il lavoro completato su richiesta.
- L'utente può chiedere «Esegui lo step N». Eseguire soltanto quello step e le verifiche necessarie, senza iniziare automaticamente il successivo.
- Dopo ogni step, aggiornare qui lo stato, riassumere le modifiche e registrare verifiche ed eventuali limiti.
- Prima di modificare un'area, leggere la sua versione corrente: il sito potrebbe essere cambiato rispetto alla visita iniziale.
- Date di controllo, specifiche, prezzi e risultati di prove devono essere supportati da verifiche effettive. Non inventare autori, esperienze personali, dati o punteggi di affidabilità.

## Ordine di lavoro

| Step | Risultato | Dipende da | Stato |
| --- | --- | --- | --- |
| 1 | Questionario con scelte leggibili e risposte complete | — | Implementato; verificato in browser desktop e mobile |
| 2 | Accesso immediato al finder dalla homepage | — | Implementato; accesso verificato desktop e mobile |
| 3 | Specifiche e varianti dei prodotti verificate | — | Verificato e corretto |
| 4 | Budget e mercato chiaramente definiti | 3 | Implementato; verifiche statiche superate |
| 5 | Raccomandazioni motivate e compatibili con i vincoli | 1, 3, 4 | Implementato; scenari logici verificati |
| 6 | Schede prodotto utili a decidere | 3, 4 | Implementato; fonti e limiti esplicitati |
| 7 | Confronto concreto e leggibile su mobile | 3, 6 | Implementato; verifica responsive completata |
| 8 | Link Amazon verso prodotti e varianti precisi | 3 | Implementato; quattro ASIN verificati |
| 9 | Immagini e dettagli grafici più informativi | 2, 3, 6 | Implementato; foto Amazon autorizzate dall'utente, layout verificato desktop e mobile |
| 10 | Autore, contatti e metodologia credibili | 3, 6 | Parziale; canale e criteri esplicitati, autore non nominato |
| 11 | Verifica completa del percorso d'acquisto e del sito pubblicato | 1–10 | Audit desktop e mobile completato; modalità senza JavaScript non verificata in browser |
| 12 | Misurazione essenziale, se utile | 11 | Opzionale, da valutare |

### Step 1 — Correggere le interazioni del questionario

**Lavoro:**
- Evidenziare l'intera opzione selezionata, con un indicatore riconoscibile anche senza distinguere i colori. Attualmente viene evidenziata soltanto l'icona.
- Rendere leggibile il focus da tastiera e mantenere etichette e controlli accessibili.
- Sostituire i simboli poco riconoscibili con icone coerenti, oppure usare soltanto testo e indicatori semplici.
- Gestire esplicitamente le risposte mancanti: il risultato non deve partire da domande lasciate senza risposta. Rivedere anche le selezioni preimpostate.

**Completato quando:** tutte le scelte sono riconoscibili su desktop e mobile; il percorso funziona con mouse, touch e tastiera; un invio incompleto indica chiaramente cosa manca. La logica di raccomandazione viene affrontata nello step 5.

### Step 2 — Rendere immediato l'ingresso al finder

**Lavoro:**
- Inserire un pulsante principale visibile nella prima schermata, prima della foto, che porti al finder.
- Rendere titolo e introduzione più diretti sul beneficio per chi sta scegliendo un robot.
- Ridurre lo spazio che precede lo strumento, soprattutto su telefono, mantenendo lo stile editoriale.
- Verificare che gli ancoraggi portino alla sezione corretta e che il menu mobile si richiuda dopo la navigazione.

**Completato quando:** un nuovo visitatore capisce immediatamente cosa offre DustMigo e può iniziare il percorso senza cercare il comando nel menu o scorrere tutta l'introduzione.

### Step 3 — Verificare catalogo, varianti e specifiche

**Lavoro:**
- Controllare i quattro modelli attuali sulle fonti ufficiali relative alla variante USA. Separare caratteristiche documentate, dichiarazioni del produttore e risultati di prove.
- Correggere le descrizioni del Q10 S5+: verificare e riportare VibraRise 2.0 e sollevamento del mop, omessi nella presentazione attuale.
- Verificare la descrizione delle spazzole del Dreame L40 Ultra Gen 2, le funzioni delle basi e gli accessori inclusi oppure opzionali.
- Raccogliere i dettagli necessari ai successivi step: altezza robot, dimensioni base, gestione tappeti, sollevamento/rimozione mop, sensori e manutenzione.
- Motivare la composizione della shortlist. Valutare sostituzioni o poche aggiunte solo se colmano un'esigenza concreta; documentare ciò che non è verificabile.

**Completato quando:** ogni caratteristica usata per consigliare un prodotto ha una fonte precisa e una data di controllo; le correzioni fattuali sono coerenti nelle pagine esistenti.

### Step 4 — Definire budget e mercato

**Lavoro:**
- Dichiarare chiaramente che la selezione riguarda il mercato USA e che i link portano ad Amazon.com.
- Aggiungere il budget al finder e una fascia di costo comprensibile alle schede.
- Definire il metodo e la data delle eventuali fasce indicative, evitando di presentarle come prezzi Amazon aggiornati in tempo reale.
- Stabilire cosa mostrare quando nessun prodotto della shortlist rientra nel budget. Non suggerire automaticamente un modello più costoso.

**Completato quando:** il visitatore comprende mercato e livello di spesa; il budget è un vincolo che il finder può utilizzare senza promettere prezzi o disponibilità non verificati.

### Step 5 — Rendere il risultato del finder spiegabile

**Lavoro:**
- Rivedere le regole usando budget e requisiti essenziali come vincoli, poi ordinare i candidati secondo le priorità dichiarate.
- Mostrare una scelta principale e, quando utile, una seconda opzione con una differenza concreta.
- Collegare la spiegazione alle risposte: perché il prodotto è adatto, quale compromesso comporta e quando scegliere l'alternativa.
- Gestire parità, esigenze incompatibili e assenza di candidati. Non mostrare percentuali di compatibilità prive di una base misurabile.
- Verificare scenari rappresentativi: budget limitato, peli su tappeti, lavaggio frequente, cavi, mobili bassi e manutenzione ridotta. Chiedere un requisito se viene usato per decidere.

**Completato quando:** ciascun risultato rispetta i vincoli e spiega la scelta; i casi senza soluzione ricevono una risposta utile. Le raccomandazioni restano consultabili anche senza usare il finder.

### Step 6 — Approfondire le schede nelle pagine esistenti

**Lavoro:**
- Per ciascun modello, spiegare destinatario ideale, motivi per sceglierlo, motivi per scartarlo e alternativa più pertinente.
- Descrivere le attività di manutenzione e i limiti pratici con esempi concreti.
- Spiegare quali vantaggi giustificano una fascia superiore e quando la spesa aggiuntiva serve poco.
- Citare eventuali prove indipendenti pertinenti al modello esatto, chiarendo chi le ha eseguite e quali conclusioni sostengono. Non attribuire a DustMigo test mai svolti.

**Completato quando:** un lettore informato trova elementi sufficienti a restringere la scelta e comprende la base delle affermazioni. L'approfondimento rimane concentrato nelle poche pagine già presenti.

### Step 7 — Migliorare il confronto

**Lavoro:**
- Trasformare le celle generiche in differenze concrete usando le informazioni verificate: mop, tappeti, altezza, ingombro della base e attività manuali.
- Rendere evidente ciò che è incluso, opzionale o sconosciuto; usare unità coerenti.
- Migliorare la lettura su telefono: suggerimento di scorrimento prima della tabella, nomi identificabili e contesto delle righe durante il confronto.
- Controllare coerenza tra tabella, schede e risultati del finder.

**Completato quando:** il lettore può identificare le differenze decisive anche da mobile, senza dover ricostruire quale prodotto o caratteristica sta guardando.

### Step 8 — Collegare le varianti corrette su Amazon

**Lavoro:**
- Identificare le schede Amazon.com dei modelli e delle basi esatte, senza inventare ASIN o equivalenze.
- Sostituire le ricerche generiche con destinazioni precise quando verificate. Se serve una ricerca come ripiego, etichettarla chiaramente.
- Mantenere il tag `robvac93-20`, le etichette affiliate e gli attributi appropriati dei link.
- Verificare destinazione, nome, variante e bundle; prevedere come aggiornare i collegamenti quando cambiano.

**Completato quando:** ogni pulsante porta alla destinazione dichiarata e riduce l'ambiguità tra varianti. La presenza del tag non viene descritta come prova dell'effettivo accredito delle commissioni.

### Step 9 — Rendere le immagini e la grafica più utili

**Lavoro:**
- Aggiungere immagini autentiche dei modelli e delle basi da fonti utilizzabili con autorizzazione o licenza adeguata.
- Identificare la foto hero generata come illustrazione, evitando che sembri la documentazione di una prova svolta da DustMigo.
- Ottimizzare formati, dimensioni, testi alternativi e caricamento senza appesantire il sito.
- Rivedere testi piccoli, spazi e gerarchia delle schede e della tabella su telefono.

**Completato quando:** le immagini aiutano a riconoscere i prodotti e gli ingombri; la lettura rimane comoda e il layout stabile durante il caricamento.

### Step 10 — Completare autore, contatti e metodologia

**Lavoro:**
- Sostituire la firma generica «DustMigo editors» con una presentazione veritiera di chi cura il sito, usando soltanto informazioni reali fornite dall'utente.
- Aggiungere un canale concreto per segnalazioni e correzioni; aggiornare il riferimento alla repo ormai pubblica e rimuovere il testo provvisorio.
- Spiegare come vengono selezionati i modelli e come si passa dalle fonti alle raccomandazioni, mantenendo visibili i limiti delle prove disponibili.
- Rendere coerenti date di controllo, disclosure e indicazioni sulle revisioni.

**Completato quando:** il lettore comprende chi cura DustMigo, come vengono prodotte le raccomandazioni e dove inviare una correzione, senza una reputazione o una redazione inventate.

### Step 11 — Verificare il percorso completo e la pubblicazione

**Lavoro:**
- Percorrere il sito come nuovo visitatore con casi d'acquisto realistici, da desktop e mobile, controllando selezioni, risultato, confronto e destinazioni Amazon.
- Verificare tastiera, focus, messaggi delle risposte mancanti, ancoraggi e accesso alle informazioni senza JavaScript.
- Controllare immagini, caricamento e stabilità del layout; misurare le prestazioni con gli strumenti disponibili, riportando soltanto risultati effettivi.
- Controllare titoli, descrizioni, canonical, sitemap, robots.txt e anteprime social. Verificare la pagina 404 anche per URL inesistenti annidati.
- Verificare sulla versione pubblicata HTTPS, dominio, percorsi degli asset e corrispondenza con il commit atteso.

**Completato quando:** i percorsi principali sono verificati e gli eventuali problemi residui sono elencati con impatto e priorità. Il completamento comprende la verifica online dopo la pubblicazione autorizzata dall'utente.

### Step 12 — Valutare analytics essenziali (opzionale)

**Lavoro:**
- Definire prima le domande: i visitatori iniziano il finder? Arrivano al risultato? Aprono il confronto o Amazon?
- Valutare se serve uno strumento leggero compatibile con il sito statico, con raccolta minima di dati e senza registrazioni delle sessioni.
- Se l'utente decide di aggiungerlo, configurare gli eventi utili e aggiornare la pagina privacy secondo il comportamento effettivo.
- Stabilire come leggere i dati per migliorare il sito senza confondere clic affiliati e acquisti attribuiti.

**Completato quando:** è documentata la decisione di usare o meno analytics; l'eventuale raccolta ha uno scopo concreto ed è descritta correttamente. Questo step non è necessario per completare gli altri.

## Registro di avanzamento

### Step 1 — Questionario con scelte leggibili e risposte complete

- Rimosse le risposte preselezionate e aggiunto `required` a un controllo per ciascun gruppo.
- Resi visibili i controlli radio; l'intera opzione evidenzia lo stato selezionato e il focus da tastiera è evidente. Rimossi i simboli ambigui.
- L'invio incompleto mostra le domande senza risposta; modificare una risposta nasconde un risultato precedente.
- Verifiche: `node --check assets/site.js` e `git diff --check` senza errori; controllati nel markup i tre gruppi obbligatori e l'assenza di preselezioni.
- Limite: non ho potuto verificare visivamente le interazioni desktop e mobile. Il browser integrato blocca l'origine locale (`ERR_BLOCKED_BY_CLIENT`) e Chrome non è disponibile in questa sessione.

### Step 2 — Accesso immediato al finder dalla homepage

- Resi più diretti titolo e introduzione e aggiunto prima della foto il pulsante «Start the 30-second finder», collegato a `#finder`.
- Ridotti spazi e altezza della foto su mobile; la CTA occupa la larghezza disponibile e resta facile da toccare.
- Ridotto lo spazio di ancoraggio da 100 a 24 px: la barra di navigazione non è fissa e il finder arriva più vicino alla parte alta dello schermo.
- Verifiche statiche: `#finder` corrisponde alla sezione corretta; il menu mobile ha già un gestore che lo chiude dopo la selezione di un link; `node --check assets/site.js` e `git diff --check` senza errori.
- Limite: come per lo step 1, il browser non consente l'anteprima locale in questa sessione, quindi il layout e il clic non sono stati verificati visivamente su dispositivi.

### Step 3 — Specifiche e varianti dei prodotti verificate

- Ricontrollate il 2 ottobre 2026 le pagine USA ufficiali dei quattro modelli e sostituiti nella pagina di confronto i collegamenti generici con quelli dei singoli modelli. Le fonti sono elencate in `how-we-choose.html`.
- **Roborock Q10 S5+:** confermati LiDAR, Reactive Tech, doppio sistema anti-groviglio, VibraRise 2.0 vibrante con sollevamento su tappeto e dock solo auto-empty. La dichiarazione del produttore indica fino a 7 settimane per il sacchetto; non equivale a un risultato DustMigo.
- **Roborock Qrevo S5V:** confermati 12.000 Pa dichiarati, sistema anti-groviglio a tre componenti, doppi mop rotanti, sollevamento di 10 mm pensato per tappeti a pelo corto, Reactive Tech e dock con lavaggio, asciugatura ad aria calda, auto-empty e refill del robot. Altezza robot pubblicata: 3,80 in. La pagina esatta non dà l'ingombro della base, quindi non è stato aggiunto un dato dimensionale.
- **Dreame L40 Ultra Gen 2:** verificati rullo principale in gomma, TriCut opzionale, 25.000 Pa dichiarati, ostacoli 3DAdapt/structured light, sollevamento mop di 10,5 mm e lavaggio/asciugatura a caldo del dock. Il dock riempie il serbatoio del robot, ma l'utente deve riempire l'acqua pulita e svuotare quella sporca. Dispenser automatico della soluzione e TriCut non sono inclusi nel pacchetto standard; la pagina offre bundle diversi.
- **Roborock Saros 10R:** confermati corpo alto 7,98 cm, navigazione 3D ToF con RGB, doppi mop rotanti, anti-groviglio e distacco automatico dei supporti mop. Il produttore riporta test di riconoscimento fino a oggetti di 2 cm e avverte che i risultati variano. La variante con refill/scarico idraulico è distinta ed è disponibile solo in alcuni mercati.
- Corrette le schede e la tabella: ripristinata la descrizione VibraRise del Q10, corretto il Qrevo da “dual” a “triple anti-tangle”, chiarito che TriCut è opzionale e rimossi riferimenti di prezzo non verificati. Aggiunte le differenze tra le basi e tra le varianti Saros.
- La shortlist resta invariata: i quattro modelli coprono priorità distinte; budget e mercato vengono affrontati nello step 4, mentre le destinazioni Amazon esatte nello step 8. Nessun prezzo o dato di disponibilità è stato copiato dalle pagine dinamiche del produttore.

### Step 4 — Definire budget e mercato

- Dichiarato vicino al finder e nella metodologia che la selezione riguarda le configurazioni USA, i budget sono in USD e i link portano ad Amazon.com.
- Aggiunta una quarta domanda obbligatoria al finder: fino a $500, $600, $900, $1,600 oppure nessun limite fisso. Le schede ora riportano fasce qualitative relative («Lower», «Midrange», «Premium»), senza mostrare prezzi di prodotto.
- Le fasce sono riferimenti ampi, non promozionali, basati sul posizionamento standard delle configurazioni USA nelle pagine ufficiali dei produttori, ricontrollate il 2 ottobre 2026. Il finder applica il tetto di budget alle fasce; una promozione o un bundle può quindi cambiare il prezzo effettivo. La metodologia invita a verificare la pagina Amazon corrente.
- Non sono stati inseriti prezzi Amazon statici: le policy Associates riservano la visualizzazione di prezzi/disponibilità ai dati serviti da Amazon o ottenuti e usati tramite le API autorizzate. Il sito statico attuale non usa quelle fonti. Link alle policy aggiunto nella metodologia.
- Se il tetto selezionato non ammette alcuna fascia della shortlist, il finder dice che non c’è una scelta compatibile e non propone automaticamente un modello più caro. La scelta da $500 verifica questo caso.
- Verifiche: `node --check assets/site.js` e `git diff --check` senza errori; controllati i quattro gruppi obbligatori, i cinque limiti di budget e le soglie usate dal filtro. La logica di punteggio tra i modelli ammessi resta quella precedente; il riordino e le spiegazioni legate alle priorità spettano allo step 5.
- Limite: non è stata verificata visivamente la nuova domanda su desktop e mobile; il browser locale era già risultato bloccato nelle verifiche degli step 1–2. La verifica completa del percorso resta nello step 11.

### Step 5 — Rendere il risultato del finder spiegabile

- Separati i vincoli dai segnali di priorità: il budget resta un filtro rigido; «wash the mop, too» esclude il Q10, che non ha il lavaggio del mop nel dock; una misura del mobile esclude i robot che non lasciano almeno 0,2 in oltre l'altezza pubblicata.
- Verificate sulle pagine ufficiali USA e usate dal finder le altezze robot pubblicate: Q10 S5+ 3,90 in, Qrevo S5V 3,80 in, Dreame L40 Ultra Gen 2 3,82 in, Saros 10R 3,14 in. Il margine di 0,2 in è una regola prudenziale editoriale, non una garanzia del produttore o un test fisico; fonti e spiegazione sono nella pagina metodologica.
- Riordinate soltanto le opzioni che rispettano i vincoli. Il punteggio interno combina superficie, problema principale e preferenza di manutenzione; non viene esposto come percentuale. I pareggi sono dichiarati e la fascia di spesa più bassa viene mostrata per prima.
- Il risultato spiega perché il modello segue le risposte, dichiara un compromesso e mostra una seconda opzione quando è vicina o a pari merito. Ogni link Amazon mantiene tag e disclosure.
- I casi senza candidati spiegano quale vincolo ha escluso la shortlist; il finder non alza il budget né suggerisce di ignorare la misura. L'opzione cavi/clutter aumenta la priorità dei sistemi di riconoscimento, ma avverte che nessun modello garantisce di evitare ogni filo.
- Scenari verificati con la funzione effettiva di selezione: budget $500 → nessun match; peli su tappeti → Q10/Dreame in cima; lavaggio frequente → Qrevo/Dreame; cavi → Saros in cima; gap misurato 3,5 in → solo Saros; gap 3,2 in → nessun match; budget $600 + lavaggio nel dock → nessun match; parità su uso semplice → Q10 e Qrevo mostrati come pari merito.
- Verifiche: `node --check assets/site.js`, `git diff --check` e gli scenari sopra senza errori. Il controllo visuale desktop/mobile resta da fare nello step 11; in questa sessione non è stata ripetuta la verifica nel browser.

### Step 6 — Approfondire le schede nelle pagine esistenti

- Aggiunte nella pagina di confronto quattro note decisionali: destinatario, motivi per scegliere/scartare, manutenzione concreta, alternativa e criterio per capire se vale la spesa superiore.
- Per il Q10 S5+ e il Qrevo S5V citati test di Vacuum Wars sul modello esatto (acquisto dichiarato dalla redazione): i risultati mostrano rispettivamente una buona raccolta di sporco su tappeto/peli e un limite netto nell’evitare ostacoli. Il Qrevo ha ottenuto buoni risultati nei test su tappeto, peli e lavaggio, ma soltanto 6/24 ostacoli evitati nel protocollo pubblicato.
- Per il Saros 10R citato il test pratico di Marcus Schwarten su Notebookcheck: buona rilevazione di cavi e calze, ma mancata rilevazione di un laccio piatto e alcune riserve su navigazione e macchie secche. È dichiarato che il campione è stato fornito dal produttore; la pubblicazione dichiara assenza di influenza del produttore.
- Consumer Reports inserisce il L40 Ultra Gen 2 nel proprio programma di test di laboratorio, ma la pagina pubblica non mostra punteggio o verdetto senza membership: il sito dichiara esplicitamente questa limitazione e non inferisce un risultato.
- Aggiornata la metodologia per distinguere prove esterne, claim dei produttori e analisi di DustMigo; chiarito che protocolli e percentuali non sono confrontabili direttamente fra editori. Le routine di cura sono descritte come attività ricorrenti, senza inventare intervalli o promesse di manutenzione.
- Verifiche: fonti aperte e affermazioni confrontate con le pagine dei test; `git diff --check` senza errori. La verifica visiva responsive resta nello step 11.

### Step 7 — Migliorare il confronto

- Sostituite le celle generiche con differenze concrete su spazzole per peli, altezza del robot, gestione di mop e tappeti, sensori, mansioni residue, dimensioni delle basi e dotazione/opzioni. Le misure riportano unità imperiali e metriche; per Qrevo S5V è indicata la provenienza delle dimensioni della base dalla panoramica ufficiale di serie.
- Resi espliciti i limiti dei test sui cavi, ciò che il dock non fa (incluso il mancato lavaggio ad acqua calda del Qrevo) e le attività manuali su acqua e pulizia. Chiarite le opzioni TriCut/dispenser Dreame e la variante idraulica Saros separata e regionale.
- Aggiunti un suggerimento di scorrimento prima della tabella, nomi completi dei modelli, caption accessibile e intestazioni di riga/colonna. Su viewport stretti la tabella scorre in entrambe le direzioni nel proprio riquadro; la colonna dei criteri e l'intestazione dei modelli restano visibili durante lo scorrimento.
- Aggiornata la metodologia con le fonti ufficiali che supportano sollevamento del mop e dimensioni delle basi; mantenute le attribuzioni dei test indipendenti già documentate nello step 6.
- Verifica visuale con viewport 390×844 e 1280×900: su mobile il contenitore della tabella scorre orizzontalmente e verticalmente, i nomi/criteri restano riconoscibili e la pagina non sviluppa overflow orizzontale; su desktop la tabella entra nel layout e il suggerimento mobile è nascosto. Controllata la console, senza errori o avvisi. È una verifica in browser con viewport ridimensionati, non una prova su dispositivi fisici.
- Verifiche statiche: `git diff --check` senza errori. Il passo successivo è lo step 8: verificare le destinazioni Amazon per modello e variante.

### Step 8 — Collegare le varianti corrette su Amazon

- Sostituite le quattro ricerche generiche con destinazioni dirette Amazon.com `/dp/ASIN`, mantenendo `?tag=robvac93-20`, `rel="sponsored nofollow noopener"`, le etichette dei pulsanti e le disclosure accanto ai link.
- Verificati sulle pagine Amazon.com titolo/modello e corrispondenza dell'ASIN: Q10 S5+ `B0DWXF15GF`; Qrevo S5V `B0DSP8J476`; Dreame L40 Ultra Gen 2 `B0FVFL86M9`; Saros 10R standard tank-fill `B0DHCJ571Z`. Le pagine Amazon aperte identificano i modelli esatti; per il Saros la scheda risultava venduta da Roborock Technology Co. Ltd. I pulsanti sono aggiornati nella homepage, nella tabella e nell'URL usato dal risultato del finder.
- Registrati ASIN e data di verifica nella metodologia. Chiarito che venditore, bundle, offerte e disponibilità possono cambiare e che l'acquirente deve ricontrollare dotazione e dock prima del checkout. Non vengono esposti prezzi.
- Verifiche: `node --check assets/site.js` e `git diff --check` senza errori; ciascun ASIN compare una volta in homepage, confronto e catalogo del finder, con il tag mantenuto; le destinazioni generiche sono state rimosse e `target="_blank"` con `rel="sponsored nofollow noopener"` è conservato. Nessun flusso di acquisto o conversione è stato simulato.

### Step 9 — Rendere le immagini e la grafica più utili

- Esplicitato sia nell'alt text sia nella didascalia che l'immagine hero è un'illustrazione generata, generica e non riferita a un modello recensito o a una prova di DustMigo. La didascalia è più leggibile, soprattutto su mobile.
- Sostituiti i riquadri grafici nascosti delle quattro schede con schemi SVG originali che affiancano una sagoma generica del robot alle impronte dei dock. I dock sono disegnati con scala comune approssimativa di 2 px/cm e misure riportate in didascalia; `title` e `desc` rendono la funzione accessibile. Gli schemi sono esplicitamente dichiarati non fotografici e non sono rendering esatti dei modelli.
- Il WebP hero già usato è 1600×1067 e pesa 122.310 byte; mantiene `width`/`height` coerenti con il file, `fetchpriority="high"` e `decoding="async"`. Gli SVG sono inline: non aggiungono richieste di immagini o font esterni.
- Non copiate foto dei produttori: i [termini Dreame](https://global.dreametech.com/pages/terms-conditions) consultati riservano la riproduzione e l'uso commerciale del materiale senza consenso scritto; la disponibilità dei [file media Roborock](https://newsroom.roborock.com/us/media/product/58?name=Q+Revo) non stabilisce da sola una licenza d'uso per il sito. Per completare la parte fotografica occorrono asset forniti dall'utente o permessi/licenze espliciti per tutte le immagini impiegate.
- Verifiche statiche: `git diff --check`; tutte le quattro SVG hanno `role="img"` con titoli/descrizioni univoci; la hero ha alt text, dimensioni intrinseche e priorità di caricamento. Renderizzati e controllati i soli schemi SVG. Non è stata verificata in browser la pagina completa su viewport mobili.
- Restano da fare: aggiungere foto autentiche con diritti verificati, verificarne il rendering responsive e aggiornare questa riga a completata solo quando gli asset autorizzati sono disponibili. Il punto rimane quindi parziale; si può riprendere appena arrivano i file o le licenze.

### Step 10 — Completare autore, contatti e metodologia

- Sostituita la firma «DustMigo editors» con «DustMigo» e aggiunta una breve descrizione del publisher: il sito è mantenuto dal suo creatore, pubblica sotto il nome DustMigo e non sostiene di avere un gruppo di tester o di aver svolto prove proprie.
- Aggiornata la metodologia per collegare le raccomandazioni alle specifiche USA e ai test esterni citati; mantenute in chiaro le limitazioni e la disclosure Amazon. La data dell’ultimo controllo resta coerente: 2 ottobre 2026.
- Aggiunta una via per inviare correzioni su GitHub Issues, con un modulo guidato che chiede pagina, problema e fonte a supporto. La via è collegata dai footer; il sito dichiara che per inviare una segnalazione serve un account GitHub e collega anche il repository pubblico. Il repository mostra Issues attive e la schermata «New issue» da utente non autenticato rimanda al login.
- Il nome personale e una biografia dell’autore non sono stati inventati né dedotti dal nome della cartella utente. Se si vuole una firma personale, servono nome e breve descrizione approvati dall’utente; per ora il publisher è identificato con il marchio.
- Verifiche: diff controllato; link pubblico Issues aperto, con comando «New issue» disponibile e login richiesto per inviare. Nessun modulo è stato inviato a GitHub.
- Stato: parziale in attesa di eventuali informazioni reali per una firma personale. Il canale per le correzioni e il metodo editoriale sono pubblicati sotto il marchio DustMigo.

### Step 11 — Verificare il percorso completo e la pubblicazione

- Verificato il dominio pubblicato in HTTPS: `https://www.dustmigo.com/` risponde con redirect 301 verso `https://dustmigo.com/`. Sulla homepage live risultano i metadati e le dimensioni dell'immagine introdotti nel commit `793707d`; canonical e percorsi degli asset puntano al dominio corretto.
- Percorso finder desktop a 1280×720: l’invio vuoto presenta i cinque gruppi mancanti; caso peli + tappeti entro $900 restituisce Q10 S5+ e Dreame L40 come alternativa; apertura misurata 3,5 in restituisce solo Saros 10R; apertura da 3,0 in e budget $600 con lavaggio mop richiesto non mostrano prodotti incompatibili né link Amazon.
- Il controllo del gap ha trovato un errore: i radio inviavano `clearance-mode`, mentre la logica cercava `clearanceMode`. Corretto con il commit `fbb77da` e ripetuto il caso live con risultato coerente. `node --check assets/site.js` e `git diff --check` superati.
- Verificati nella tabella i quattro ASIN Amazon.com con tag `robvac93-20` e `rel="sponsored nofollow noopener"`; la tabella entra a 1280 px senza overflow orizzontale. La homepage e il confronto espongono disclosure accanto ai link.
- Da tastiera, il primo Tab porta allo skip link con focus visibile; Invio porta a `#main`. Console browser senza errori nel controllo. I prodotti e il confronto sono contenuti staticamente nell'HTML; aggiunto un avviso e collegamenti di ripiego per il finder senza JavaScript, ma la modalità JS disabilitato non è stata eseguita nel browser.
- SEO live: controllati titoli, descrizioni, canonical, anteprime Open Graph e Twitter; immagine social presente con alt che la identifica come generata. `robots.txt` consente la scansione e indica la sitemap; `sitemap.xml` elenca le quattro pagine pubbliche.
- Il 404 annidato restituisce HTTP 404. Prima non caricava CSS e il link home puntava alla cartella inesistente; dopo il commit `b7b0aed` CSS e link tornano alla root. L’hero carica dal WebP locale da 122.310 byte, 1600×1067; attributi intrinseci e dimensioni reali ora coincidono. Non sono stati misurati Core Web Vitals o prestazioni con Lighthouse.
- Limiti: il browser disponibile è rimasto a 1280×720 e non consente di impostare un viewport 390×844; non sono state ripetute le prove mobile né una prova su dispositivo fisico. La verifica senza JavaScript è limitata alla presenza dei contenuti e del fallback nell'HTML. Step parziale finché non si completano questi controlli.

### Revisione dopo l'aggiunta delle fotografie — 2 ottobre 2026

- L'utente ha autorizzato l'uso delle immagini prodotto Amazon. Le fotografie delle quattro schede corrispondono agli ASIN già collegati e sono caricate dal CDN Amazon nella homepage, nel finder e nel confronto.
- La visita della homepage pubblicata ha individuato immagini più alte dei riquadri, sovrapposte a titoli e descrizioni. Rimosso il dimensionamento implicito della griglia nei riquadri; le foto ora restano interamente contenute, con proporzioni conservate. Aggiornate anche le dimensioni intrinseche nell'HTML alle dimensioni effettive dei file.
- Nel confronto mobile la colonna delle etichette occupava quasi metà dello schermo e tagliava la colonna del modello. Ridotta a 100 px e adattata la larghezza dei modelli al viewport; verificato lo scorrimento laterale con le etichette ferme. I link Amazon nel confronto mobile hanno ora un'area cliccabile alta almeno 44 px.
- Aggiornata la metodologia che descriveva ancora schemi grafici; la privacy ora spiega il caricamento delle foto dai server Amazon e chiarisce che le risposte del finder non sono incluse nelle richieste delle immagini.
- Verifiche locali in browser: tutte le quattro foto caricano e restano contenute a 1280 x 720 e 390 x 844, senza overflow orizzontale della pagina. Il confronto conserva una colonna completa anche a 360 x 800; lo scorrimento a Qrevo mantiene la colonna delle etichette fissa.
- Finder: invio vuoto con feedback completo; tappeti + peli + lavaggio mop entro 900 USD restituisce Dreame; apertura misurata 3,5 in restituisce Saros; apertura 3,0 in o fascia 500 USD non producono link Amazon incompatibili. Il caso pavimenti duri + lavaggio mop entro 900 USD sulla versione pubblicata restituisce Qrevo con Dreame come alternativa.
- Console browser senza errori nei percorsi provati; sintassi JavaScript e diff controllati senza errori. Questa revisione valuta contenuti e flussi esistenti e non rinnova la verifica delle specifiche o dei prezzi delle fonti esterne. Modalità senza JavaScript, dispositivo fisico e Core Web Vitals non verificati.
- Nel controllo online dopo il push, il nuovo HTML era pubblicato ma il browser riutilizzava ancora il vecchio CSS. Aggiunta una versione esplicita al collegamento del foglio di stile in tutte le pagine, incluso il 404, per richiedere subito la nuova risorsa.

### Sezione ricambi e sorgenti condivise — 6 ottobre 2026

- Preparato `MODELLI_RICAMBI.md`: 32 modelli candidati per il mercato USA, con priorità editoriali, varianti e fonti. I segnali di popolarità non sono una classifica certificata né volumi keyword misurati.
- Creati indice `/parts/` e prima pagina `/parts/roborock-qrevo/`. Sei inserzioni Amazon.com verificate: filtri, sacchetti, rullo, spazzola laterale, panni e kit. Ogni foto proviene dalla relativa inserzione; i pulsanti mantengono il tag `robvac93-20`. Chiarite le differenze fra prima generazione e altri Qrevo e fra ricambi originali e di terzi.
- Introdotto un generatore Node senza dipendenze: dati per modello, documento e layout comuni, header/footer/Analytics condivisi. Anche le cinque pagine HTML preesistenti sono generate. Una nuova pagina completa aggiorna automaticamente indice, metadata, breadcrumb e sitemap; le bozze sono escluse. Workflow documentato nel README.
- Centralizzato il tag già presente `G-ZF7L8PV8EV` nella configurazione, con una sola inizializzazione per pagina. Aggiunto `affiliate_click` per modello, categoria, ASIN e posizione; aggiornate le note privacy. Le risposte del finder non entrano negli eventi e Analytics non carica sull'anteprima locale. Dimensioni personalizzate e ricezione degli eventi nella proprietà GA4 restano da verificare dopo la pubblicazione.
- Verifiche: generazione deterministica; sette pagine con header/footer/tag una sola volta, canonical e sitemap coerenti, link e ancore interni validi, sei schede con foto e pulsanti. Controlli sintassi JavaScript e diff superati.
- Browser locale: sei foto caricate, desktop 1280×720 e mobile 390×844/360×800 senza overflow. Primi tre pulsanti Amazon nella prima schermata desktop, pulsanti mobile alti almeno 48 px; menu, salti ai pezzi, FAQ e navigazione indice da tastiera funzionanti. Il finder tappeti + peli + lavaggio mop entro 900 USD restituisce Dreame L40 Ultra Gen 2; console senza errori nei percorsi provati.
- Stato: infrastruttura e prima guida pubblicate su GitHub Pages il 6 ottobre 2026 dal commit `f4d3a71`; la pagina Qrevo live risponde HTTP 200. Non effettuati test fisici sui ricambi, misurazioni dei Core Web Vitals o verifica dei volumi di ricerca.
