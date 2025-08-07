# Sicilia e Sapori Front End

# MIlestone 1 -> navbar menu

1. centralizzare navDoc navMenu e navFilter √

2. Implementare comportamento responsive per la navigazione delle categorie (nav list)√

   Obiettivo:
   Adattare la visualizzazione della navList per dispositivi mobili in modo che:
   • la lista delle categorie sia nascosta per schermi piccoli (es. < 768px),√
   • venga mostrata al click su un’icona o bottone (es. “Menù”),
   • il comportamento sia accessibile e fluido.

   Cose da fare:

   1. Aggiungere media query per nascondere la nav list su schermi piccoli.√
   2. Creare uno stato (setIsMenuOpen) per controllare la visibilità della lista.√
   3. Associare un click handler al bottone “Menù” per mostrare/nascondere la nav list.√
   4. Aggiungere eventuale animazione o transizione per rendere l’apertura/chiusura più fluida.√
   5. Verificare che la nav list sia facilmente navigabile da mobile (accessibilità, tappabilità, ecc.).√

3. Creare popup Allergeni√

   1. Creare componente <AllergensPopup /> con overlay e contenitore centrale.v
   2. Gestire stato di apertura/chiusura (isAllergensOpen).√
   3. Implementare overlay semi-trasparente che oscura lo schermo.v
   4. Impostare popup responsivo (70-80% altezza, larghezza adattabile).v
   5. Inserire contenuto informativo sugli allergeni.v
   6. Abilitare chiusura con click su X o su overlay.√

   <!-- allergeni -->

   - Per essere completamente a norma:

4. Creare popup Filtri

   1. Creare componente <FiltersPopup /> con overlay e contenitore.√
   2. Gestire stato di apertura/chiusura (isFiltersOpen).√
   3. Progettare UI con opzioni filtro (checkbox, dropdown, switch).√
   4. Implementare logica di applicazione filtri sui prodotti.√
   5. Permettere chiusura con click su X o overlay.√
   6. Aggiungere animazioni fluide e gestione accessibilità (focus trap, esc).√

5. Gestire stato della sezione corrente in base allo scroll

   1. Creare gli anchor-point in pagina √

      - Inserire ref o id corrispondenti ai nomi delle categorie (es. id="pizze") sulle sezioni dei prodotti nel menu.

   2. Aggiungere gli observer o listener di scroll√

      - Usare IntersectionObserver o window.addEventListener('scroll') per rilevare la sezione visibile nella viewport.

   3. Confrontare posizione scroll con i contenuti√

      - Verificare quale sezione è attualmente visibile e aggiorna lo stato currentSection.

   4. Aggiornare la UI in base allo stato

      - Applicare una classe attiva sulla categoria nel menu (es. opacità, colore diverso, underline…).

   5. Ottimizzare la performance dello scroll listener x

      - Usare throttle o debounce per evitare troppi aggiornamenti.

   6. Testare su mobile e desktop √

      - Verificare che il comportamento sia coerente su diverse risoluzioni e che il menu evidenzi correttamente la sezione.

   7. La normativa (Regolamento UE 1169/2011) richiede che:
      • L’informazione sugli allergeni sia sempre disponibile al consumatore prima dell’acquisto.√
      • Non bastano solo le icone → va indicato cosa rappresentano (quindi la tua legenda è fondamentale).√
      • Deve esserci chiarezza visiva e linguistica: se usi simboli, devono essere accompagnati da una spiegazione visibile (non nascosta dietro un clic invisibile).√

   8. Best practice extra:
      • Inserisci un piccolo testo in fondo o all’inizio del menu che dica:
      “Per maggiori informazioni sugli allergeni consulta la sezione Allergeni o chiedi al personale.”

# Milestone 2 -> home page

<!-- cose da sistemare -->

<!-- - ricordare in pagina chi siamo di cambiare il background del root in primary brown -->

- cambiare di nuovo svg header con quelle corrette con la 'e' corretta
- modificare sezione impasti per eccentuare i prezzi
- modificare layout pizze per renderlo piu semplice e pulito
- organizzare i prezzi in ordine di vendità (se possibile)
- aggiungi -Coperto: 2,00€ | Supplementi: salumi 2€; formaggi 2€; verdure 1,50€; pesce 3€.
  \*in mancanza di prodotti freschi verranno usati prodotti surgelati e abbattuti. sempre visibile sticky in pagina in basso

<!-- inserisci forno video forno vuoto -->
