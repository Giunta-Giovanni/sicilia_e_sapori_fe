# Sicilia e Sapori Front End

Questo progetto è il frontend di un’applicazione per una pizzeria, sviluppato con React e Vite. L’app offre un'esperienza utente **moderna** e **responsive**, **interattiva** e **multilingue**, con funzionalità di filtro, gestione degli allergeni e selezione di prodotti.

---

# Caratteristiche principali:

    •	Temi chiaro e scuro, con supporto alla modalità preferita dal browser.
    •	Gestione delle interne combinando una struttura modulare con il supporto multi-lingua
    •	Menu interattivo con categorie e filtri per allergeni, piccantezza e vegetarianità.
    •	Chiamata API al backend tramite Axios.
    •	Loader Personalizzato mostrato solo al primo caricamento, per una UX fluida.
    •	Gestione dei cookie con cookie-yes, conforme al GDPR.
    •	Pagine aggiuntive: Privacy Policy, Cookies Policy e pagina 404.
    •	Deploy automatico su VPS tramite script dedicato.

# Tecnologie e Dipendenze [apri](/package.json)

    •	React e Vite per lo sviluppo front-end.
    •	react-router-dom per la gestione delle rotte.
    •	react-world-flags per la selezione della lingua.
    •	Swiper per slider e caroselli.
    •	CSS modulare per ciascuna pagina.
    •	Contesti globali e custom hooks per gestione globale dello stato.

# Funzionalità aggiuntive

    •	Multi-lingua: Italiano e Inglese, con switch tramite react-world-flags.
    •	Tema: Light e Dark mode, con rilevamento automatico del browser.
    •	Utility: Funzioni di formattazione numeri, filtri per categorie e contatori dinamici.
    •	Loader: Mostrato solo al primo caricamento durante le chiamate API, evitando rallentamenti successivi.

# Custom Hooks

- [useMenuSection]: Salva tutte le reference useRef delle singole categorie del menu.
- [useTypeWriter]: Crea un effetto di scrittura automatica, visualizzando il testo lettera per lettera.
- [useViewPort]: Determina se lo schermo è in modalità mobile o tablet.
- [useLang]: Estrae e salva la lingua dall’URL (italiano o inglese).
- [useDarkMode]: Rileva se il browser è in modalità dark o light.
- [useActiveSection]: Tiene traccia della sezione attiva in quel momento.

# Contesti

- [GlobalContextProvider]: Contiene informazioni globali accessibili da tutti i componenti.
- [MenuContextProvider]: Contiene informazioni specifiche per la pagina del menu.

# Gestione delle Immagini

Per semplificare il caricamento e l’uso delle immagini, sono stati creati diversi file JavaScript dedicati:

- [allergens]: contiene tutte le immagini relative agli allergeni.
- [icons]: raccoglie icone in formato SVG utilizzate in varie parti dell’app.
- [image]: include le immagini in formato JPG utilizzate in varie parti dell’app

# Stili Globali

Nel file [index] sono stati inseriti gli stili di default dell’app, inclusa la palette di colori utilizzata in tutta la web app. Questo approccio garantisce coerenza visiva e facilita la gestione degli stili a livello globale.

# Struttura delle pagine

- [HomePage]: Video introduttivo, presentazione della pizzeria.
- [MenuPage]: Sezione interattiva con filtri, popup per allergeni e contatori per quantità.
- [AboutPage]: Informazioni sull’attività.
- [NotFoundPage]: redirect con video simpatico che rimanda alla homepage.
- [PrivacyPolicyPage]: Privacy Policy per trasparenza utente.
- [CookiePolicyPage]: Cookie Policy per trasparenza utente.

---

[useMenuSection]: /src/hooks/useMenuSections.js
[useTypeWriter]: /src/hooks/useTypewriter.js
[useViewPort]: /src/hooks/useViewport.js
[useLang]: /src/hooks/useLang.js
[useDarkMode]: /src/hooks/useDarkMode.js
[useActiveSection]: /src/hooks/useActiveSection.js
[GlobalContextProvider]: /src/context/GlobalContextProvider.jsx
[MenuContextProvider]: /src/context/MenuContextProvider.jsx
[allergens]: /src/assets/svg/allergens/allergens.js
[icons]: /src/assets/svg/general/icons.js
[image]: /src/assets/jpg/image.js
[index]: /src/index.css
[HomePage]: /src/pages/homePage/HomePage.jsx
[MenuPage]: /src/pages/menuPage/MenuPage.jsx
[AboutPage]: /src/pages/aboutPage/AboutPage.jsx
[NotFoundPage]: /src/pages/notFoundPage/NotFoundPage.jsx
[PrivacyPolicyPage]: /src/pages/privacyPolicyPage/PrivacyPolicyPage.jsx
[CookiePolicyPage]: /src/pages/cookiePolicyPage/CookiePolicyPage.jsx
