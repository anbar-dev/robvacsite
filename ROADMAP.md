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
| 1 | Questionario con scelte leggibili e risposte complete | — | Implementato; verifica visuale bloccata |
| 2 | Accesso immediato al finder dalla homepage | — | Implementato; verifica visuale limitata |
| 3 | Specifiche e varianti dei prodotti verificate | — | Verificato e corretto |
| 4 | Budget e mercato chiaramente definiti | 3 | Implementato; verifiche statiche superate |
| 5 | Raccomandazioni motivate e compatibili con i vincoli | 1, 3, 4 | Da fare |
| 6 | Schede prodotto utili a decidere | 3, 4 | Da fare |
| 7 | Confronto concreto e leggibile su mobile | 3, 6 | Da fare |
| 8 | Link Amazon verso prodotti e varianti precisi | 3 | Da fare |
| 9 | Immagini e dettagli grafici più informativi | 2, 3, 6 | Da fare |
| 10 | Autore, contatti e metodologia credibili | 3, 6 | Da fare |
| 11 | Verifica completa del percorso d'acquisto e del sito pubblicato | 1–10 | Da fare |
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
