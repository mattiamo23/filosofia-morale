// ============================================================
//  CATEGORIE  (sample = domande estratte per sessione)
// ============================================================
const categorie = {
  tutti:      { nome: 'Tutto il Programma',         emoji: '\u{1F4DA}',        sample: 20, pool: 72 },
  linee:      { nome: 'Etica Linee Evolutive',      emoji: '\u{1F3DB}\uFE0F',  sample: 15, pool: 28 },
  politiche:  { nome: 'Politiche della Differenza', emoji: '\u2696\uFE0F',     sample: 10, pool: 12 },
  nicomachea: { nome: 'Etica Nicomachea',           emoji: '\u{1F4DC}',        sample: 15, pool: 20 },
  beauvoir:   { nome: 'Sottomessa Non Si Nasce',    emoji: '\u270A',           sample: 10, pool: 12 },
};

// ============================================================
//  DOMANDE
// ============================================================
const domande = [

  // ══════════════════════════════════════════════════════════
  //  ETICA LINEE EVOLUTIVE  (28 domande)
  // ══════════════════════════════════════════════════════════

  // ── Platone ───────────────────────────────────────────────
  {
    categoria: 'linee',
    question: "Nel dialogo Gorgia, Callicle sostiene che la giustizia è:",
    answers: [
      "La virtù propria del filosofo",
      "Un'invenzione dei deboli per frenare i forti",
      "Il fondamento naturale della convivenza civile",
      "La forma più alta di sapienza politica"
    ],
    correct: 1,
    explanation: "Per Callicle la giustizia convenzionale è un trucco dei deboli. Le vere virtù sarebbero la sfrenatezza e la libertà del più forte. Platone smonta questa posizione attraverso Socrate."
  },
  {
    categoria: 'linee',
    question: "Nel Gorgia, Platone paragona la retorica alla cucina perché entrambe:",
    answers: [
      "Producono veri benefici per il corpo e per l'anima",
      "Sono arti che richiedono lunga preparazione tecnica",
      "Mirano al piacere e all'apparenza, non al vero bene",
      "Sono necessarie per la vita politica della polis"
    ],
    correct: 2,
    explanation: "Come la cucina adulatoria imita la medicina mirando al piacere del corpo (non alla salute), la retorica imita la filosofia-politica mirando al piacere dell'anima (non alla sua cura)."
  },
  {
    categoria: 'linee',
    question: "Le quattro virtù della kallipolis platonica nella Repubblica sono sophia, andreia, sophrosyne e:",
    answers: ["Fronesis", "Dikaiosyne", "Episteme", "Noesis"],
    correct: 1,
    explanation: "Le quattro virtù cardinali di Platone: sophia (sapienza, propria dei governanti), andreia (coraggio, propria dei guerrieri), sophrosyne (temperanza, comune a tutte le classi) e dikaiosyne (giustizia: che ciascuna classe svolga la propria funzione)."
  },
  {
    categoria: 'linee',
    question: "Nella tripartizione dell'anima della Repubblica, la parte 'irascibile' (thymoeides) ha come funzione:",
    answers: [
      "Governare con la ragione le altre parti",
      "Generare desideri corporei come fame e piacere",
      "Produrre ardore, coraggio e sostegno alla parte razionale",
      "Contemplare direttamente le Idee eterne"
    ],
    correct: 2,
    explanation: "L'anima per Platone ha tre parti: razionale (logistikon), irascibile (thymoeides) e appetitiva (epithumetikon). La parte irascibile è la sede del coraggio e dell'ardore; alleata con la ragione, controlla i desideri."
  },
  {
    categoria: 'linee',
    question: "Nel Simposio, qual è il gradino più alto della scala dell'amore descritta da Diotima?",
    answers: [
      "L'amore per un giovane bello",
      "L'amore per la bellezza dell'anima",
      "La contemplazione del Bello in sé, eterno e assoluto",
      "L'amore per la conoscenza filosofica"
    ],
    correct: 2,
    explanation: "La scala platonica dell'eros sale: da un corpo bello → tutti i corpi belli → la bellezza dell'anima → la bellezza delle attività e delle leggi → quella del sapere → fino al Bello in sé: eterno, assoluto, incorruttibile."
  },
  {
    categoria: 'linee',
    question: "Nel Fedone, Platone argomenta l'immortalità dell'anima sostenendo che essa è:",
    answers: [
      "Composta di atomi indivisibili e quindi indistruttibile",
      "Semplice, affine alle Idee eterne, e principio della vita stessa",
      "Una parte del corpo che sopravvive alla morte fisica",
      "Un'emanazione del Sole come principio dell'Idea del Bene"
    ],
    correct: 1,
    explanation: "Platone nel Fedone usa vari argomenti: l'anima è semplice (non composta, quindi non si dissolve), è affine alle Idee immutabili ed è partecipante all'Idea della Vita, quindi non può accogliere la morte."
  },
  {
    categoria: 'linee',
    question: "L'attività filosofica di Socrate nell'Apologia è descritta come:",
    answers: [
      "L'insegnamento della retorica ai giovani ateniesi",
      "La formulazione di teorie cosmologiche sulla natura",
      "La 'cura dell'anima' attraverso l'esame critico di sé e degli altri",
      "La difesa della democrazia ateniese contro i tiranni"
    ],
    correct: 2,
    explanation: "Socrate nell'Apologia si definisce come colui che 'si prende cura delle anime' (epimeleia tes psyches): esamina le credenze proprie e altrui attraverso il dialogo per capire se reggano alla prova del logos."
  },

  // ── Aristotele (nelle Linee Evolutive) ────────────────────
  {
    categoria: 'linee',
    question: "Nella dottrina delle quattro cause, cos'è il 'motore immobile' di Aristotele?",
    answers: [
      "La causa materiale di cui è fatto l'universo",
      "La forma che organizza la materia in ogni essere",
      "La causa efficiente ultima che muove tutto senza essere mossa",
      "Il fine verso cui tende ogni processo naturale"
    ],
    correct: 2,
    explanation: "Il motore immobile è la causa efficiente suprema: non è mosso da nulla, ma muove tutto 'come l'amato muove l'amante'. È puro atto (energeia) senza potenza, eternamente in atto di pensarsi."
  },
  {
    categoria: 'linee',
    question: "Aristotele definisce l'uomo 'animale politico' (zōon politikon) perché:",
    answers: [
      "L'uomo è naturalmente aggressivo e ha bisogno di governo",
      "Solo nella polis l'uomo realizza pienamente la propria natura razionale",
      "La politica è l'attività più piacevole per l'essere umano",
      "L'uomo ha paura dello stato di natura e cerca protezione"
    ],
    correct: 1,
    explanation: "Per Aristotele la polis è naturale e viene prima dell'individuo (come il tutto prima della parte). L'uomo è per natura un essere sociale: solo nella comunità politica può realizzare il telos della propria natura razionale."
  },
  {
    categoria: 'linee',
    question: "Le virtù morali si distinguono da quelle intellettuali perché:",
    answers: [
      "Sono innate e non si possono apprendere",
      "Derivano dall'abitudine (ethos), non dall'insegnamento",
      "Riguardano solo la parte razionale dell'anima",
      "Sono proprie solo dei filosofi"
    ],
    correct: 1,
    explanation: "Le virtù etiche si acquisiscono attraverso l'esercizio ripetuto: 'diventiamo giusti compiendo azioni giuste, coraggiosi comportandoci coraggiosamente'. Le virtù dianoetiche (intellettuali) invece nascono e crescono prevalentemente dall'insegnamento."
  },
  {
    categoria: 'linee',
    question: "La fronesis (saggezza pratica) per Aristotele è la virtù intellettuale che:",
    answers: [
      "Riguarda la contemplazione delle verità necessarie ed eterne",
      "Permette di deliberare correttamente su ciò che è bene e utile nella vita concreta",
      "Ci permette di conoscere le prime cause e i principi",
      "Governa direttamente le azioni senza bisogno di deliberazione"
    ],
    correct: 1,
    explanation: "La fronesis è la virtù pratica per eccellenza: la capacità di deliberare rettamente su ciò che è bene e utile per vivere bene. Si differenzia dalla sofia (sapienza teoretica) che riguarda le verità universali e necessarie."
  },

  // ── Hume ──────────────────────────────────────────────────
  {
    categoria: 'linee',
    question: "Hume distingue 'impressioni' da 'idee'. Quali sono le impressioni?",
    answers: [
      "I concetti astratti elaborati dalla ragione pura",
      "Le percezioni vivaci e immediate dell'esperienza (sensazioni, emozioni)",
      "Le immagini della memoria a lungo termine",
      "Le idee innate presenti fin dalla nascita"
    ],
    correct: 1,
    explanation: "Le impressioni sono le percezioni più vivaci e dirette: sensazioni, passioni, emozioni. Le idee sono le loro copie sbiadite conservate dalla mente. Tutto il contenuto mentale deriva da impressioni originali: questo è il programma empirista di Hume."
  },
  {
    categoria: 'linee',
    question: "Nella concezione etica di Hume, il ruolo delle passioni è:",
    answers: [
      "Ostacolare la vita morale; la ragione deve dominarle",
      "Essere i principi attivi della vita umana; la ragione è schiava delle passioni",
      "Produrre illusioni prive di valore morale",
      "Derivare interamente dalle idee razionali"
    ],
    correct: 1,
    explanation: "Hume capovolge la tradizione razionalista: la ragione è inattiva, non produce azioni. Le passioni sono i motori dell'agire umano. 'La ragione è, e deve solo essere, la schiava delle passioni.'"
  },
  {
    categoria: 'linee',
    question: "La 'simpatia' in Hume è:",
    answers: [
      "Un sentimento di pietà verso chi soffre",
      "Un meccanismo psicologico di trasmissione delle passioni tra individui",
      "La virtù fondamentale della vita sociale",
      "Un principio razionale di equità distributiva"
    ],
    correct: 1,
    explanation: "La simpatia è un meccanismo neutrale: ci formiamo un'idea delle passioni altrui che, collegandosi con l'impressione vivace del nostro io, si trasforma in una passione analoga. Non è solo empatia affettiva ma un processo di trasmissione emotiva."
  },
  {
    categoria: 'linee',
    question: "Hume distingue virtù naturali e virtù artificiali. Qual è la differenza?",
    answers: [
      "Le virtù naturali sono innate; quelle artificiali si apprendono con l'educazione",
      "Le virtù naturali (compassione, mitezza) appartengono alla mente per natura; quelle artificiali (giustizia) sono convenzioni umane",
      "Le virtù naturali si applicano in natura; quelle artificiali nella società",
      "Le virtù artificiali sono superiori a quelle naturali"
    ],
    correct: 1,
    explanation: "Le virtù naturali (compassione, generosità, mitezza) sorgono spontaneamente dalla struttura della mente umana. Le virtù artificiali (giustizia, rispetto delle promesse, buone maniere) sono costruzioni sociali convenute dagli uomini per gestire la vita in comune."
  },
  {
    categoria: 'linee',
    question: "Il fondamento ultimo dei giudizi morali per Hume è:",
    answers: [
      "La ragione, che calcola le conseguenze degli atti",
      "La legge divina rivelata",
      "Il sentimento di approvazione o disapprovazione generato dalla simpatia",
      "Il contratto sociale tra i cittadini"
    ],
    correct: 2,
    explanation: "Hume è un sentimentalista morale: i giudizi etici non derivano dalla ragione (che è inattiva) ma da un sentimento di approvazione o disapprovazione. La simpatia ci permette di condividere i sentimenti altrui e genera valutazioni morali."
  },

  // ── Smith ─────────────────────────────────────────────────
  {
    categoria: 'linee',
    question: "Lo 'spettatore imparziale' in Adam Smith è:",
    answers: [
      "Un giudice esterno indipendente nominato dalla comunità",
      "Un meccanismo interno di autocorrezione: immaginiamo come un osservatore neutrale valuterebbe le nostre azioni",
      "Il legislatore ideale della polis",
      "Il filosofo che contempla il bello in sé"
    ],
    correct: 1,
    explanation: "Lo spettatore imparziale non è una persona reale ma un dispositivo psicologico: immaginiamo uno spettatore neutrale e correggiamo le nostre reazioni simpatetiche per avvicinarci alla sua prospettiva. È il frutto dell'auto-valutazione imparziale."
  },
  {
    categoria: 'linee',
    question: "La simpatia in Smith si differenzia da quella di Hume perché:",
    answers: [
      "Smith la usa solo in economia politica, Hume in etica",
      "In Smith la simpatia richiede una correzione attiva attraverso lo scambio di prospettive; non è solo trasmissione passiva",
      "Smith nega che la simpatia sia importante per la morale",
      "In Smith la simpatia riguarda solo i rapporti economici"
    ],
    correct: 1,
    explanation: "Smith sviluppa la simpatia di Hume: non basta ricevere passivamente le emozioni altrui, bisogna attivamente mettersi nei loro panni e calibrare le proprie risposte. Questo processo di sintonizzazione reciproca genera lo spettatore imparziale."
  },

  // ── Kant ──────────────────────────────────────────────────
  {
    categoria: 'linee',
    question: "La differenza tra imperativo ipotetico e categorico in Kant è:",
    answers: [
      "L'imperativo ipotetico è più rigido e non ammette eccezioni",
      "L'ipotetico ordina 'se vuoi X, fai Y'; il categorico ordina incondizionatamente 'fa Y'",
      "L'imperativo categorico si applica solo ai filosofi",
      "L'ipotetico è razionale; il categorico è empirico"
    ],
    correct: 1,
    explanation: "Gli imperativi ipotetici prescrivono azioni come mezzi per fini contingenti. L'imperativo categorico prescinde da ogni condizione: comanda incondizionatamente, indipendentemente dai desideri del soggetto."
  },
  {
    categoria: 'linee',
    question: "La formulazione principale dell'imperativo categorico kantiano è:",
    answers: [
      "Agisci in modo da produrre la maggior felicità per il maggior numero",
      "Agisci solo secondo quella massima che puoi volere che divenga legge universale",
      "Agisci sempre in accordo con le passioni più elevate della ragione",
      "Agisci come lo spettatore imparziale approverebbe"
    ],
    correct: 1,
    explanation: "'Agisci solo secondo quella massima che al tempo stesso puoi volere che divenga una legge universale' (Fondazione della metafisica dei costumi). Questa formula testa la coerenza universale delle massime d'azione."
  },
  {
    categoria: 'linee',
    question: "Kant chiama 'autonomia' la situazione in cui:",
    answers: [
      "Il soggetto è libero da ogni costrizione fisica esterna",
      "La volontà si dà la legge da sola attraverso la ragione pura pratica",
      "Il soggetto segue i propri desideri naturali",
      "Lo Stato non interferisce con le scelte individuali"
    ],
    correct: 1,
    explanation: "L'autonomia (auto-nomos: darsi la propria legge) è la capacità della volontà razionale di legiferare su se stessa. Si contrappone all'eteronomia: quando la volontà è determinata da fattori esterni (inclinazioni, utilità, autorità)."
  },
  {
    categoria: 'linee',
    question: "Il 'fatto della ragione' (Faktum der Vernunft) in Kant è:",
    answers: [
      "L'esistenza dimostrabile di Dio attraverso la ragione speculativa",
      "La consapevolezza immediata e indiscutibile della legge morale",
      "Il principio empirico su cui si fonda la morale utilitarista",
      "La libertà intesa come assenza di costrizioni esterne"
    ],
    correct: 1,
    explanation: "Il 'fatto della ragione' è la presenza immediata e innegabile della legge morale nella coscienza: ogni essere razionale riconosce la voce del dovere. Non è dimostrato ma è il punto di partenza indiscutibile dell'etica kantiana."
  },
  {
    categoria: 'linee',
    question: "Il 'sommo bene' (höchstes Gut) in Kant è:",
    answers: [
      "Il massimo piacere raggiungibile nell'arco di una vita",
      "La combinazione di virtù e felicità proporzionata alla virtù",
      "La pace perpetua tra gli Stati",
      "La contemplazione dell'Idea platonica del Bene"
    ],
    correct: 1,
    explanation: "Il sommo bene kantiano non è il piacere (come nell'utilitarismo) ma l'unione di virtù e felicità: la felicità proporzionata alla virtù. Richiede i postulati della ragione pratica: libertà, immortalità dell'anima, esistenza di Dio."
  },

  // ── Mill ──────────────────────────────────────────────────
  {
    categoria: 'linee',
    question: "Come si differenzia Mill da Bentham nella concezione dei piaceri?",
    answers: [
      "Bentham valorizza i piaceri della mente; Mill quelli del corpo",
      "Mill introduce una distinzione qualitativa: i piaceri intellettuali sono superiori a quelli corporei",
      "Mill rifiuta completamente il calcolo utilitaristico di Bentham",
      "Non vi è differenza sostanziale tra i due autori"
    ],
    correct: 1,
    explanation: "Bentham misura i piaceri solo quantitativamente (intensità, durata). Mill distingue qualità: 'È meglio essere Socrate insoddisfatto che un idiota soddisfatto.' I piaceri dell'intelletto e della moralità sono qualitativamente superiori a quelli sensibili."
  },
  {
    categoria: 'linee',
    question: "Il 'principio del danno' (harm principle) di Mill stabilisce che:",
    answers: [
      "Lo Stato può limitare la libertà ogni volta che un'azione è moralmente riprovevole",
      "L'unico scopo legittimo per cui la società può limitare la libertà individuale è prevenire danni ad altri",
      "La libertà individuale deve cedere al benessere collettivo",
      "Le azioni che danneggiano sé stessi possono essere vietate dalla legge"
    ],
    correct: 1,
    explanation: "Nel 'Sulla Libertà': il potere può essere legittimamente esercitato su un individuo solo per prevenire danni ad altri. Le azioni che riguardano esclusivamente sé stessi appartengono alla sfera della sovranità individuale e non possono essere vietate."
  },
  {
    categoria: 'linee',
    question: "Per Mill, un'azione non va considerata come atto isolato perché:",
    answers: [
      "Deve sempre essere valutata in base all'imperativo categorico",
      "Tende a rafforzare azioni simili e a consolidare tratti del carattere nel soggetto",
      "Il suo valore dipende solo dalle intenzioni di chi la compie",
      "Ogni azione produce effetti cosmici imprevedibili"
    ],
    correct: 1,
    explanation: "Mill sostiene che ogni azione lascia un'impronta sul carattere: tende a rafforzare disposizioni già esistenti nel soggetto. Questo aspetto formativo è centrale nella sua concezione etica, che guarda non solo alle conseguenze esterne ma anche allo sviluppo del carattere."
  },
  {
    categoria: 'linee',
    question: "La libertà di pensiero e discussione per Mill è fondamentale perché:",
    answers: [
      "La verità è sempre già nota e la discussione la preserva",
      "Anche un'opinione falsa obbliga a difendere le ragioni di quella vera, evitando che diventi dogma morto",
      "La libertà di pensiero è un diritto naturale inalienabile",
      "Il mercato delle idee produce automaticamente la verità migliore"
    ],
    correct: 1,
    explanation: "Mill argomenta che anche le opinioni false hanno valore: costringono chi detiene la verità a giustificarla razionalmente. Un'opinione mai contestata diventa un 'dogma morto', non una convinzione viva. Il libero dibattito mantiene vitale la conoscenza."
  },


  // ══════════════════════════════════════════════════════════
  //  LE POLITICHE DELLA DIFFERENZA – Young  (12 domande)
  // ══════════════════════════════════════════════════════════

  {
    categoria: 'politiche',
    question: "Iris Marion Young individua due aporie nel paradigma distributivo. La prima è che:",
    answers: [
      "Si focalizza sui beni materiali ignorando struttura sociale e contesto istituzionale",
      "Attribuisce troppo peso alle differenze culturali tra gruppi",
      "Non considera la distribuzione della ricchezza",
      "Si basa su principi troppo astratti e universali"
    ],
    correct: 0,
    explanation: "La prima aporia: concentrandosi sull'allocazione di beni, il paradigma distributivo induce a non prendere in considerazione la struttura sociale e il contesto istituzionale che genera e riproduce l'ineguaglianza."
  },
  {
    categoria: 'politiche',
    question: "La seconda aporia del paradigma distributivo secondo Young è che:",
    answers: [
      "Non distingue tra beni materiali e immateriali",
      "Tratta come oggetti distribuibili anche diritti, opportunità e potere, che sono invece relazioni",
      "Si applica solo alle società capitalistiche",
      "Non considera le differenze culturali tra i gruppi"
    ],
    correct: 1,
    explanation: "La seconda aporia: il paradigma 'reifica' beni come diritti, opportunità e rispetto trattandoli come cose distribuibili. In realtà sono relazioni sociali e strutture istituzionali: non si 'distribuiscono' come pezzi di torta."
  },
  {
    categoria: 'politiche',
    question: "Secondo Young, qual è la differenza tra un 'gruppo sociale' e un 'aggregato'?",
    answers: [
      "Un gruppo è più numeroso di un aggregato",
      "Un aggregato è una classificazione arbitraria per attributi; un gruppo è definito da pratiche e relazioni condivise",
      "Un gruppo è volontario; un aggregato è imposto dall'esterno",
      "Non vi è differenza sostanziale tra i due"
    ],
    correct: 1,
    explanation: "Un aggregato raggruppa persone per un attributo esterno (es. capelli biondi). I gruppi sociali esistono in relazione ad altri gruppi, sono definiti da pratiche, forme di vita e identificazione reciproca: l'identità di gruppo è relazionale e non fissa."
  },
  {
    categoria: 'politiche',
    question: "Quale delle seguenti NON è una delle cinque 'facce dell'oppressione' di Young?",
    answers: [
      "Sfruttamento",
      "Marginalizzazione",
      "Imperialismo culturale",
      "Ineguaglianza economica"
    ],
    correct: 3,
    explanation: "Le cinque facce: sfruttamento, marginalizzazione, mancanza di potere, imperialismo culturale e violenza. L'ineguaglianza economica non è una categoria autonoma: può essere effetto dello sfruttamento o della marginalizzazione."
  },
  {
    categoria: 'politiche',
    question: "Lo 'sfruttamento' come faccia dell'oppressione per Young è:",
    answers: [
      "Qualsiasi forma di lavoro salariato",
      "Il trasferimento strutturale dei frutti del lavoro di un gruppo a vantaggio di un altro",
      "La privazione di risorse materiali ai gruppi marginali",
      "La violenza fisica esercitata contro i lavoratori"
    ],
    correct: 1,
    explanation: "Lo sfruttamento non è solo lavoro mal retribuito: è un trasferimento strutturale dei frutti del lavoro di un gruppo (spesso donne e persone di colore) verso un altro attraverso relazioni sociali sistemiche — non solo economiche ma anche di genere e razza."
  },
  {
    categoria: 'politiche',
    question: "La 'marginalizzazione' è per Young la forma di oppressione più pericolosa perché:",
    answers: [
      "È la più violenta fisicamente",
      "Espelle le persone dal sistema produttivo, privandole di partecipazione sociale e senso di utilità",
      "Riguarda solo le minoranze etniche nelle società occidentali",
      "Colpisce esclusivamente le classi lavoratrici"
    ],
    correct: 1,
    explanation: "I marginalizzati sono espulsi dall'utilità produttiva. Questo comporta non solo privazione materiale ma perdita di senso, mancanza di rispetto, dipendenza: una forma di oppressione che rischia di privare intere categorie di persone della possibilità di partecipare alla vita sociale."
  },
  {
    categoria: 'politiche',
    question: "La 'mancanza di potere' (powerlessness) descrive la condizione di chi:",
    answers: [
      "Non ha accesso ai beni materiali di prima necessità",
      "Svolge lavoro esecutivo privo di discrezionalità, rispetto professionale e prospettive di sviluppo",
      "È escluso dal sistema scolastico",
      "Vive in uno Stato autoritario senza diritto di voto"
    ],
    correct: 1,
    explanation: "La mancanza di potere è la condizione opposta a quella dei professionisti: chi è privo di potere non ha autonomia nel lavoro, non riceve rispetto professionale, non sviluppa le proprie competenze. Non è solo povertà ma assenza di agency."
  },
  {
    categoria: 'politiche',
    question: "Per Young l'imperialismo culturale consiste in:",
    answers: [
      "La conquista militare di popoli da parte di nazioni più potenti",
      "L'universalizzazione dell'esperienza di un gruppo dominante presentata come norma per tutti",
      "La distribuzione ineguale delle risorse culturali",
      "La violenza fisica contro le minoranze culturali"
    ],
    correct: 1,
    explanation: "L'imperialismo culturale: il gruppo dominante universalizza la propria esperienza e la presenta come norma neutra. Gli altri gruppi vengono visti come 'Altro' stereotipato, sia invisibili (le loro specificità non contano) sia ipervisibili (marcati dalla loro differenza)."
  },
  {
    categoria: 'politiche',
    question: "La 'violenza' come faccia dell'oppressione si distingue dalla violenza ordinaria perché:",
    answers: [
      "È sempre fisica e mai psicologica",
      "È sistematica, motivata dall'identità di gruppo e socialmente tollerata",
      "Riguarda esclusivamente le minoranze etniche",
      "È esercitata solo dallo Stato"
    ],
    correct: 1,
    explanation: "La violenza opprimente è strutturale: rivolta a persone per la loro appartenenza a un gruppo (donne, gay, persone di colore), è socialmente tollerata o non adeguatamente contrastata. Non è il singolo atto ma il sistema che la rende possibile, attesa e normale."
  },
  {
    categoria: 'politiche',
    question: "Young propone di ridefinire la giustizia non come distribuzione ma come:",
    answers: [
      "Uguaglianza formale dei diritti civili e politici",
      "Eliminazione dell'oppressione e della dominazione che ostacola la partecipazione",
      "Redistribuzione della ricchezza secondo il principio di differenza rawlsiano",
      "Tutela delle minoranze attraverso quote garantite"
    ],
    correct: 1,
    explanation: "Per Young una società è giusta quando le sue strutture permettono a tutti di sviluppare le proprie capacità e di partecipare alla vita sociale. La giustizia è un processo partecipativo, non uno stato distributivo."
  },
  {
    categoria: 'politiche',
    question: "Young difende una 'politica della differenza' che richiede:",
    answers: [
      "L'assimilazione di tutti i gruppi in un'unica identità civica",
      "Il riconoscimento pubblico delle identità di gruppo come base per rappresentanza speciale dei gruppi oppressi",
      "La separazione delle comunità per preservare le loro culture",
      "La negazione delle differenze in nome dell'universalismo"
    ],
    correct: 1,
    explanation: "La politica liberale 'cieca alle differenze' perpetua l'oppressione perché tratta come universali le norme del gruppo dominante. Young sostiene che una democrazia autentica deve riconoscere le differenze e garantire rappresentanza speciale ai gruppi storicamente oppressi."
  },
  {
    categoria: 'politiche',
    question: "La critica di Young al liberalismo classico è che:",
    answers: [
      "Non garantisce sufficienti diritti economici",
      "La sua pretesa universalità e neutralità maschera i valori e le norme del gruppo dominante",
      "Non ammette l'esistenza di diritti collettivi",
      "Si basa su una concezione troppo rigida del contratto sociale"
    ],
    correct: 1,
    explanation: "L'ideale liberale di cittadinanza 'imparziale' è in realtà costruito sull'esperienza di uomini bianchi e benestanti. Chi non corrisponde a questo modello viene marginalizzato proprio in nome della neutralità che dovrebbe includerlo."
  },


  // ══════════════════════════════════════════════════════════
  //  ETICA NICOMACHEA – Aristotele  (20 domande)
  // ══════════════════════════════════════════════════════════

  {
    categoria: 'nicomachea',
    question: "L'Etica Nicomachea apre sostenendo che tutte le azioni umane mirano a:",
    answers: [
      "Il piacere immediato",
      "Un fine, e tutti i fini convergono verso un bene supremo",
      "L'onore e la gloria nella polis",
      "La sopravvivenza dell'individuo"
    ],
    correct: 1,
    explanation: "'Ogni arte e ogni ricerca, ogni azione e ogni scelta sembra mirare a qualche bene.' C'è una gerarchia teleologica di fini che culmina nel bene supremo, l'eudaimonia. Ogni attività umana ha senso in questa struttura orientata al fine."
  },
  {
    categoria: 'nicomachea',
    question: "Aristotele definisce la felicità (eudaimonia) come:",
    answers: [
      "Il massimo piacere fisico raggiungibile nell'arco di una vita",
      "Un'attività dell'anima secondo virtù, in una vita completa",
      "La contemplazione dell'Idea del Bene di Platone",
      "La ricchezza materiale sufficiente a soddisfare ogni bisogno"
    ],
    correct: 1,
    explanation: "'Il bene umano risulta essere attività dell'anima secondo virtù.' La felicità non è uno stato passivo (come la pietra) né il piacere: è l'esercizio attivo e virtuoso delle facoltà proprie dell'uomo nel corso di una vita intera."
  },
  {
    categoria: 'nicomachea',
    question: "Aristotele afferma che le virtù morali si acquisiscono attraverso l'abitudine perché:",
    answers: [
      "Sono innate e l'abitudine le rivela",
      "Diventiamo virtuosi compiendo azioni virtuose ripetutamente, finché la disposizione diventa stabile",
      "L'insegnamento è sufficiente senza bisogno di pratica",
      "La natura ci dota di virtù ma l'abitudine le raffina"
    ],
    correct: 1,
    explanation: "'Non ci è dato dagli dei essere virtuosi dalla nascita... lo diventiamo per abitudine (ethos).' Diventiamo giusti compiendo azioni giuste, coraggiosi comportandoci coraggiosamente. La virtù è una disposizione (hexis) acquisita attraverso la pratica ripetuta."
  },
  {
    categoria: 'nicomachea',
    question: "Il 'giusto mezzo' (mesotēs) aristotelico non è una media matematica perché:",
    answers: [
      "Dipende dal caso e dalla fortuna",
      "È relativo a noi e alla situazione concreta, non a valori assoluti",
      "Cambia a seconda della polis in cui si vive",
      "Si applica solo alle virtù intellettuali"
    ],
    correct: 1,
    explanation: "Il giusto mezzo è relativo a noi (pros hemas): non eccede né manca rispetto alla persona e alla situazione. Non è la via di mezzo tra due numeri (10 non è il mesotès tra 2 e 18) ma la medietà tra due vizi opposti (eccesso e difetto)."
  },
  {
    categoria: 'nicomachea',
    question: "Il coraggio (andreia) nel Libro III è il giusto mezzo tra:",
    answers: [
      "Codardia e temerarietà cieca",
      "Collera e paura",
      "Arroganza e umiltà",
      "Generosità e avarizia"
    ],
    correct: 0,
    explanation: "Il coraggio è tra la viltà (difetto: troppa paura) e la temerarietà (eccesso: impulsività cieca). Il coraggioso affronta pericoli reali per nobili scopi, con ragione e per scelta deliberata — non per insensibilità né per bravata."
  },
  {
    categoria: 'nicomachea',
    question: "La temperanza (sophrosyne) riguarda il giusto mezzo rispetto a:",
    answers: [
      "L'ira e la collera",
      "I piaceri corporei del tatto e del gusto",
      "La generosità nell'uso del denaro",
      "Il desiderio di onori e riconoscimento"
    ],
    correct: 1,
    explanation: "La temperanza riguarda i piaceri che condividiamo con gli animali: tatto e gusto (cibo, bevanda, sesso). L'intemperante eccede nel cercarli; l'insensibile, caso raro, manca di apprezzarli. Il temperante si compiace nella misura giusta e come vuole la ragione."
  },
  {
    categoria: 'nicomachea',
    question: "L'uomo magnanimo (megalopsychos) nel Libro IV è colui che:",
    answers: [
      "Si sopravvaluta rispetto al proprio reale valore",
      "Si sottovaluta per falsa modestia",
      "Ha una stima di sé adeguata alla propria reale grandezza",
      "Non si cura né di lodi né di biasimi"
    ],
    correct: 2,
    explanation: "La magnanimità è il giusto mezzo tra vanità (eccesso: si ritiene degno di più di quanto valga) e pusillanimità (difetto: si sottovaluta). Il magnanimo è consapevole del proprio grande valore e si comporta di conseguenza."
  },
  {
    categoria: 'nicomachea',
    question: "La fronesis si distingue dalla sofia (sapienza) perché:",
    answers: [
      "La fronesis riguarda le verità necessarie ed eterne; la sofia le situazioni pratiche",
      "La sofia riguarda le verità necessarie ed eterne; la fronesis le situazioni contingenti pratiche",
      "La fronesis è inferiore alla sofia nella gerarchia delle virtù",
      "Sono due nomi per la stessa virtù intellettuale"
    ],
    correct: 1,
    explanation: "La sofia è la virtù teoretica suprema: riguarda le verità immutabili (matematica, filosofia prima). La fronesis è la virtù pratica suprema: delibera correttamente su ciò che è variabile e contingente — le situazioni concrete della vita."
  },
  {
    categoria: 'nicomachea',
    question: "Aristotele afferma che deliberiamo (bouleuometha) su:",
    answers: [
      "I fini ultimi che perseguiamo nella vita",
      "I mezzi per raggiungere i fini, non sui fini stessi",
      "Le verità matematiche e scientifiche",
      "Le azioni del passato per imparare da esse"
    ],
    correct: 1,
    explanation: "La deliberazione riguarda i mezzi (ta pros ta tele), non i fini. Non deliberiamo se vogliamo essere felici (è dato), ma su come raggiungerla. È una ricerca razionale e pratica: indaghiamo quali azioni portino al fine, partendo dal fine e ragionando a ritroso."
  },
  {
    categoria: 'nicomachea',
    question: "Un'azione è 'involontaria' per Aristotele quando:",
    answers: [
      "Il soggetto non vuole compierla ma è obbligato dalla legge",
      "È causata da costrizione esterna o da ignoranza non colpevole delle circostanze",
      "Procura dolore a chi la compie",
      "Non produce il risultato desiderato"
    ],
    correct: 1,
    explanation: "Le azioni involontarie sono di due tipi: quelle compiute per costrizione (il principio è esterno, il soggetto non contribuisce nulla) e quelle per ignoranza non colpevole delle circostanze concrete. L'ignoranza morale non rende l'azione involontaria."
  },
  {
    categoria: 'nicomachea',
    question: "La giustizia distributiva usa una proporzione geometrica che significa:",
    answers: [
      "Distribuire parti uguali a tutti indipendentemente dal merito",
      "Distribuire beni e onori proporzionalmente al merito di ciascuno",
      "Ristabilire l'uguaglianza dopo un danno subito",
      "Dividere equamente le risorse tra tutti i cittadini"
    ],
    correct: 1,
    explanation: "La giustizia distributiva (geometrica) alloca onori e risorse proporzionalmente al merito/contributo (axia). Non è uguale per tutti ma proporzionale: A:B = bene di A : bene di B. Differisce dalla correttiva che usa proporzione aritmetica."
  },
  {
    categoria: 'nicomachea',
    question: "La giustizia correttiva (diorthotikon) nel Libro V:",
    answers: [
      "Alloca risorse proporzionalmente al merito in una proporzione geometrica",
      "Ristabilisce l'uguaglianza lesa da una transazione ingiusta con una proporzione aritmetica",
      "Regola le leggi scritte della polis",
      "Si applica solo ai contratti tra privati"
    ],
    correct: 1,
    explanation: "La giustizia correttiva ristabilisce la parità aritmetica nelle transazioni (volontarie e involontarie). Se A ha guadagnato ingiustamente ciò che B ha perso, il giudice toglie ad A e restituisce a B: la pena ripristina l'uguaglianza originale."
  },
  {
    categoria: 'nicomachea',
    question: "L'equità (epieikeia) è superiore alla giustizia legale perché:",
    answers: [
      "Si basa sull'opinione della maggioranza",
      "Corregge la legge universale nei casi particolari dove la sua applicazione rigida sarebbe ingiusta",
      "Sostituisce la legge scritta con la consuetudine",
      "Permette al giudice di ignorare la legge quando lo ritiene opportuno"
    ],
    correct: 1,
    explanation: "La legge per sua natura è universale, ma non può prevedere tutti i casi particolari. L'equo corregge la legge dove, per la sua generalità, manca o sbaglia: non agisce contro la legge ma la integra come avrebbe fatto il legislatore stesso se avesse visto quel caso."
  },
  {
    categoria: 'nicomachea',
    question: "Aristotele individua tre tipi di amicizia. Quale è la più duratura?",
    answers: [
      "L'amicizia basata sull'utilità reciproca",
      "L'amicizia basata sul piacere",
      "L'amicizia basata sulla virtù",
      "L'amicizia tra persone di età diversa"
    ],
    correct: 2,
    explanation: "L'amicizia tra persone buone (basata sulla virtù) è la più duratura perché ciascuno vuole il bene dell'altro per lui stesso. Le amicizie di utilità e piacere si dissolvono quando viene meno l'utilità o il piacere. Quella virtuosa è rara, richiede tempo e presenza."
  },
  {
    categoria: 'nicomachea',
    question: "L'amicizia (philia) è fondamentale per la polis perché:",
    answers: [
      "L'amicizia elimina la necessità di leggi e tribunali",
      "I legislatori si preoccupano dell'amicizia più che della giustizia: la concordia tiene unita la città",
      "Solo tra amici si può governare giustamente",
      "L'amicizia rende superflua la divisione del lavoro"
    ],
    correct: 1,
    explanation: "'I legislatori si preoccupano dell'amicizia (philia) più che della giustizia.' La concordia (homonoia) che tiene unita la polis è una forma di amicizia politica. Dove c'è vera amicizia non serve la giustizia nel senso coercitivo."
  },
  {
    categoria: 'nicomachea',
    question: "Nel Libro X Aristotele ridefinisce il piacere come:",
    answers: [
      "Il fine ultimo di tutte le azioni umane",
      "Il completamento (teleiosis) di un'attività non ostacolata",
      "Una sensazione corporea di soddisfazione",
      "L'assenza di dolore e preoccupazione"
    ],
    correct: 1,
    explanation: "Il piacere non è una sensazione passiva ma il completamento di un'attività che si svolge senza ostacoli: 'completa l'attività come la fioritura della giovinezza completa chi è nel fiore degli anni.' Il piacere non è fine a sé ma il coronamento di un'attività eccellente."
  },
  {
    categoria: 'nicomachea',
    question: "La vita contemplativa (bios theoretikos) è la più felice perché:",
    answers: [
      "È la più piacevole e meno faticosa",
      "È la vita propria dell'elemento più divino in noi (nous): autosufficiente, continua e per sé stessa",
      "Produce i maggiori benefici per la comunità",
      "È accessibile a tutti i cittadini della polis"
    ],
    correct: 1,
    explanation: "Il nous è il meglio in noi: la sua attività è continua, piacevolissima in sé, autosufficiente (non dipende da altri) e appartiene a ciò che c'è di divino nell'uomo. Aristotele conclude che 'l'uomo deve immortalarsi per quanto possibile'."
  },
  {
    categoria: 'nicomachea',
    question: "L'akrasia (incontinenza) consiste nel:",
    answers: [
      "Non conoscere il bene e agire male per ignoranza",
      "Conoscere ciò che è meglio ma agire ugualmente contro di esso, trascinati dalla passione",
      "Scegliere deliberatamente il male per ottenere un vantaggio",
      "Mancare di virtù per mancanza di educazione"
    ],
    correct: 1,
    explanation: "L'akratico conosce che un'azione è sbagliata ma la compie perché le passioni temporaneamente prevalgono sulla ragione. È diverso dal vizioso (che non vede il male) e dal continente (che resiste alle passioni). L'akratico soffre dopo aver ceduto."
  },
  {
    categoria: 'nicomachea',
    question: "Aristotele critica la vita dedicata esclusivamente al piacere perché:",
    answers: [
      "Il piacere non produce benefici per la comunità",
      "È una vita da bestie: fa dell'uomo schiavo delle passioni, non degna dell'animale razionale",
      "Il piacere è per definizione effimero",
      "Platone aveva già dimostrato che il piacere è un male"
    ],
    correct: 1,
    explanation: "Nel Libro I Aristotele descrive la vita dedita al piacere come 'vita da bestie da pascolo'. La felicità umana deve essere conforme alla natura razionale dell'uomo: non può ridursi alla soddisfazione dei bisogni animali."
  },
  {
    categoria: 'nicomachea',
    question: "La virtù etica è definita da Aristotele come:",
    answers: [
      "Un comando della ragione che prescinde dalle inclinazioni naturali",
      "Una disposizione (hexis) stabile che ci porta a scegliere il giusto mezzo secondo la ragione dell'uomo saggio",
      "Un'abitudine instillata dagli dei nell'anima",
      "Una tendenza naturale al bene che non richiede esercizio"
    ],
    correct: 1,
    explanation: "La definizione classica: la virtù etica è una 'hexis prohairetike' (disposizione elettiva) che consiste nella medietà relativa a noi, determinata dalla retta ragione (orthos logos) e come la determinerebbe il fronimos. È stabile, scelta e conforme alla ragione."
  },


  // ══════════════════════════════════════════════════════════
  //  SOTTOMESSA NON SI NASCE  (12 domande)
  // ══════════════════════════════════════════════════════════

  {
    categoria: 'beauvoir',
    question: "La tesi 'donna non si nasce, si diventa' di de Beauvoir implica che:",
    answers: [
      "La femminilità è un dato biologico immutabile",
      "Non vi è determinismo legato al sesso: è la società a costruire la differenza attraverso la situazione storica",
      "Le donne devono rifiutare completamente la propria identità di genere",
      "L'essenza femminile precede l'esistenza individuale"
    ],
    correct: 1,
    explanation: "De Beauvoir rifiuta ogni essenzialismo: non vi è determinismo biologico, metafisico o linguistico della femminilità. Applicando Sartre ('l'esistenza precede l'essenza') alla questione femminile, sostiene che la condizione femminile è costruita socialmente."
  },
  {
    categoria: 'beauvoir',
    question: "De Beauvoir critica l'essenzialismo biologico sostenendo che:",
    answers: [
      "Le differenze biologiche tra i sessi non esistono",
      "Le differenze biologiche esistono ma non determinano inferiorità: è il contesto sociale a interpretarle come tali",
      "La biologia è irrilevante per comprendere la condizione umana",
      "Le differenze biologiche giustificano ruoli diversi ma non gerarchie"
    ],
    correct: 1,
    explanation: "De Beauvoir non nega la biologia ma rifiuta il determinismo: le differenze anatomiche e riproduttive non implicano necessariamente inferiorità o sottomissione. È la società che interpreta questi dati biologici come destino e inferiorità."
  },
  {
    categoria: 'beauvoir',
    question: "L'essenzialismo metafisico critica l'idea che:",
    answers: [
      "Le donne abbiano un'anima immortale",
      "Esista un'essenza femminile fissa che precede e determina l'esistenza delle donne concrete",
      "La natura femminile sia culturalmente determinata",
      "Le donne siano superiori agli uomini in alcune qualità"
    ],
    correct: 1,
    explanation: "Contro l'essenzialismo metafisico: non esiste un'Idea platonica di 'Donna' che determini dall'esterno cosa sia una donna. Ogni donna è un progetto esistenziale aperto: l'esistenza precede l'essenza, anche per le donne."
  },
  {
    categoria: 'beauvoir',
    question: "De Beauvoir critica la tesi freudiana del masochismo femminile sostenendo che:",
    answers: [
      "Le donne sono biologicamente programmate per il masochismo",
      "Il masochismo femminile non è innato ma è la risposta psicologica adattiva a una situazione di oppressione esterna",
      "Freud aveva ragione ma la psicanalisi può liberare la donna",
      "Il masochismo è ugualmente presente in uomini e donne"
    ],
    correct: 1,
    explanation: "De Beauvoir ribalta Freud: non è l'istinto che porta le donne alla sottomissione, ma la situazione di oppressione che produce risposte psicologiche adattive (come il masochismo). La causa è sociale e storica, non biologica o pulsionale."
  },
  {
    categoria: 'beauvoir',
    question: "Come si differenzia de Beauvoir da Sartre riguardo alla 'situazione'?",
    answers: [
      "De Beauvoir rifiuta il concetto di situazione come troppo materialistico",
      "Per Sartre la libertà è sempre radicale; de Beauvoir sostiene che certi contesti oppressivi la limitano concretamente",
      "De Beauvoir ritiene che la situazione sia sempre liberatoria",
      "Sartre e de Beauvoir concordano completamente sul tema"
    ],
    correct: 1,
    explanation: "Sartre enfatizza la libertà radicale del soggetto anche in situazioni avverse. De Beauvoir corregge: la situazione concreta (oppressione, mancanza di risorse, violenza strutturale) può effettivamente ostacolare l'esercizio della libertà. La situazione femminile è una limitazione reale."
  },
  {
    categoria: 'beauvoir',
    question: "De Beauvoir usa la dialettica hegeliana servo-padrone per contrasto. La donna è 'Altro assoluto' perché:",
    answers: [
      "Ha una prospettiva filosofica alternativa a quella maschile",
      "A differenza del servo, non si pone come soggetto che sfida il primato dell'uomo, essendo costruita come alterità senza reciprocità",
      "Vive in una cultura completamente separata da quella maschile",
      "La sua alterità è riconosciuta e valorizzata nella cultura occidentale"
    ],
    correct: 1,
    explanation: "Nel servo-padrone hegeliano c'è reciprocità potenziale: il servo può rovesciare il rapporto. La donna invece è costruita come 'Altro assoluto': non ha una propria trascendenza autonoma, è definita solo in relazione all'uomo-soggetto. Questa alterità non genera dialettica."
  },
  {
    categoria: 'beauvoir',
    question: "De Beauvoir descrive la condizione tradizionale della donna come 'immanenza'. Essa indica:",
    answers: [
      "La superiorità della vita spirituale su quella materiale",
      "L'essere confinata nella ripetizione e nella cura del corpo, senza proiettarsi verso progetti futuri",
      "La tendenza femminile alla contemplazione filosofica",
      "Il legame privilegiato delle donne con la natura"
    ],
    correct: 1,
    explanation: "La libertà autentica è 'trascendenza': proiettarsi verso progetti e trasformare il mondo. La donna nel patriarcato è confinata all'immanenza: i suoi compiti (cura della casa e della famiglia) sono ripetitivi e non la proiettano verso il futuro come soggetto."
  },
  {
    categoria: 'beauvoir',
    question: "Come viene utilizzato il concetto heideggeriano di Dasein nell'analisi di de Beauvoir?",
    answers: [
      "Per dimostrare che il Dasein femminile è ontologicamente diverso da quello maschile",
      "Per mostrare che l'essere umano è sempre 'progetto nel mondo' senza essenza fissa: la femminilità è costruzione storica, non struttura ontologica",
      "Per giustificare la differenza biologica tra i sessi",
      "Heidegger applicò direttamente il Dasein alla questione femminista"
    ],
    correct: 1,
    explanation: "Il Dasein heideggeriano ('essere-nel-mondo') mostra che l'essere umano non ha essenza fissa: è sempre un progetto. Applicato alla donna: la femminilità non è una struttura ontologica del Dasein ma una costruzione storica e sociale che può essere trasformata."
  },
  {
    categoria: 'beauvoir',
    question: "Per MacKinnon, la dominazione maschile si distingue da quella descritta da de Beauvoir perché:",
    answers: [
      "La sessualità eterosessuale è il meccanismo centrale attraverso cui il patriarcato si riproduce nei corpi",
      "MacKinnon nega l'esistenza del patriarcato",
      "MacKinnon ritiene la dominazione inevitabile e biologicamente determinata",
      "MacKinnon non si occupa della questione del corpo femminile"
    ],
    correct: 0,
    explanation: "Per MacKinnon la sessualità eterosessuale è il vettore fondamentale della dominazione maschile: è costruita attorno al desiderio di potere e controllo sulla donna. Non è solo costruzione simbolica del genere ma una pratica che inscrive la dominazione nei corpi."
  },
  {
    categoria: 'beauvoir',
    question: "De Beauvoir descrive la liberazione femminile come:",
    answers: [
      "Il rifiuto totale della propria femminilità",
      "Un progetto di libertà individuale che richiede anche solidarietà collettiva: riconoscersi come soggetti e assumere la propria trascendenza",
      "L'integrazione completa nella cultura maschile dominante",
      "Il ritorno a valori tradizionali femminili rivalutati"
    ],
    correct: 1,
    explanation: "De Beauvoir rifiuta sia l'essenzialismo (valorizzare una femminilità essenziale) sia l'assimilazionismo totale. La liberazione richiede che le donne si riconoscano come soggetti, proiettino se stesse come trascendenza e costruiscano solidarietà politica."
  },
  {
    categoria: 'beauvoir',
    question: "Nell'analisi della sottomissione femminile, de Beauvoir critica l'essenzialismo linguistico perché:",
    answers: [
      "Il linguaggio maschile è più preciso di quello femminile",
      "Usare 'donna' come categoria fissa e omogenea nasconde la pluralità delle situazioni femminili concrete",
      "Le donne devono creare un linguaggio completamente nuovo",
      "Il linguaggio è irrilevante per la costruzione dell'identità di genere"
    ],
    correct: 1,
    explanation: "L'essenzialismo linguistico tratta 'donna' come categoria stabile e uniforme. De Beauvoir mostra invece che le donne esistono in situazioni storiche, sociali e culturali radicalmente diverse: non c'è un'essenza linguistica che le unifichi al di là delle costruzioni contingenti."
  },
  {
    categoria: 'beauvoir',
    question: "De Beauvoir afferma che la situazione della donna è peggiore di quella del proletariato perché:",
    answers: [
      "Le donne subiscono più violenza fisica degli operai",
      "Il proletariato ha una coscienza di classe e un progetto collettivo; le donne sono disperse tra gli uomini e mancano di solidarietà di gruppo",
      "Le donne non hanno accesso all'istruzione",
      "Gli operai possono cambiare classe; le donne non possono cambiare sesso"
    ],
    correct: 1,
    explanation: "Il proletariato ha unità storica, coscienza di classe e progetto politico condiviso. Le donne sono disperse: vivono con padri, fratelli, mariti che appartengono ai gruppi dominanti, il che rende più difficile lo sviluppo di una coscienza collettiva di oppressione."
  }
];

// ============================================================
//  UTILITÀ
// ============================================================
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================================
//  STATO DEL QUIZ
// ============================================================
let currentIndex     = 0;
let score            = 0;
let answered         = false;
let selectedCategory = 'tutti';
let domandeFiltrate  = [];

// ============================================================
//  FUNZIONI
// ============================================================

function pickCategory(cat) {
  selectedCategory = cat;
  const info = categorie[cat];

  document.getElementById('quiz-categories').style.display = 'none';
  document.getElementById('quiz-start').style.display      = 'block';

  document.getElementById('start-category-name').textContent = info.emoji + '\u00A0' + info.nome;
  document.getElementById('total-questions-display').textContent = info.sample;
  document.getElementById('pool-size-display').textContent = info.pool;
}

function startQuiz() {
  const pool = selectedCategory === 'tutti'
    ? [...domande]
    : domande.filter(d => d.categoria === selectedCategory);

  const n = categorie[selectedCategory].sample;
  domandeFiltrate = shuffleArray(pool).slice(0, Math.min(n, pool.length));

  currentIndex = 0;
  score        = 0;
  answered     = false;

  document.getElementById('quiz-start').style.display    = 'none';
  document.getElementById('quiz-question').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q     = domandeFiltrate[currentIndex];
  const total = domandeFiltrate.length;

  document.getElementById('progress-bar').style.width =
    ((currentIndex / total) * 100) + '%';
  document.getElementById('question-counter').textContent =
    'Domanda ' + (currentIndex + 1) + ' di ' + total;
  document.getElementById('quiz-score-live').textContent =
    'Punteggio: ' + score;
  document.getElementById('question-text').textContent = q.question;

  const container = document.getElementById('answers-container');
  container.innerHTML = '';
  q.answers.forEach(function(ans, i) {
    const btn      = document.createElement('button');
    btn.className  = 'answer-btn';
    btn.textContent = ans;
    btn.onclick    = function() { selectAnswer(i); };
    container.appendChild(btn);
  });

  const fb = document.getElementById('feedback-box');
  fb.style.display = 'none';
  fb.className     = 'feedback-box';

  const nextBtn = document.getElementById('next-btn');
  nextBtn.style.display = 'none';
  nextBtn.textContent   = currentIndex === total - 1 ? 'Vedi il risultato \u2192' : 'Prossima \u2192';
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q       = domandeFiltrate[currentIndex];
  const buttons = document.querySelectorAll('.answer-btn');

  buttons.forEach(function(btn, i) {
    btn.disabled = true;
    if (i === q.correct)          btn.classList.add('correct');
    else if (i === selectedIndex) btn.classList.add('wrong');
  });

  const isCorrect = selectedIndex === q.correct;
  if (isCorrect) score++;

  const fb = document.getElementById('feedback-box');
  fb.style.display = 'block';
  fb.className     = 'feedback-box ' + (isCorrect ? 'correct' : 'wrong');
  fb.innerHTML     = isCorrect
    ? '\u2714 Corretto!' + (q.explanation ? ' ' + q.explanation : '')
    : '\u2718 Risposta errata. La risposta giusta era: <strong>' + q.answers[q.correct] + '</strong>.' +
      (q.explanation ? '<br>' + q.explanation : '');

  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < domandeFiltrate.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz-question').style.display = 'none';
  document.getElementById('quiz-result').style.display   = 'block';

  const total = domandeFiltrate.length;
  const pct   = Math.round((score / total) * 100);

  document.getElementById('result-score').textContent = score + ' / ' + total;

  var icon = '\u{1F389}', title = 'Ottimo risultato!', msg = '';
  if      (pct < 40) { icon = '\u{1F4D6}'; title = 'Da ripassare!';  msg = 'Non scoraggiarti, rileggi i riassunti e riprova.'; }
  else if (pct < 70) { icon = '\u{1F4AA}'; title = 'Discreto!';      msg = 'Ci sei quasi! Un altro ripasso e sarai pronto.'; }
  else if (pct < 90) { icon = '\u{1F31F}'; title = 'Molto bene!';    msg = 'Grande preparazione. Qualche piccolo dettaglio da ripassare.'; }
  else               { icon = '\u{1F3C6}'; title = 'Eccellente!';    msg = "Preparazione ottima. Sei pronto per l'esame!"; }

  document.getElementById('result-icon').textContent  = icon;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-text').textContent  = msg;
}

function restartQuiz() {
  startQuiz();
}

function backToCategories() {
  document.getElementById('quiz-result').style.display    = 'none';
  document.getElementById('quiz-start').style.display     = 'none';
  document.getElementById('quiz-question').style.display  = 'none';
  document.getElementById('quiz-categories').style.display = 'block';
}
