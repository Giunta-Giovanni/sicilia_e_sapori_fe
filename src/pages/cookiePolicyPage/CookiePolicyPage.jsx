import style from "./CookiePolicyPage.module.css"
import useLang from "../../hooks/useLang"

export default function CookiePolicyPage() {
  const lang = useLang()

  return (
    <div className={style.container}>
      <h1 className={style.cookiePolicyH1}>
        {lang === "it" ? "Cookie Policy" : "Cookie Policy"}
      </h1>

      <div className={style.date}>
        <span>
          {lang === "it" ? "Ultimo aggiornamento: 18-Agosto-2025" : "Last Updated: 18-Aug-2025"}
        </span>
        <span>
          {lang === "it" ? "Data di entrata in vigore: 18-Agosto-2025" : "Effective Date: 18-Aug-2025"}
        </span>
      </div>

      <h5 className={style.title}>
        {lang === "it" ? "Cosa sono i cookie?" : "What are cookies?"}
      </h5>
      <div className={style.cookiePolicyP}>
        {lang === "it" ? (
          <>
            <p>
              Questa Cookie Policy spiega cosa sono i cookie e come li utilizziamo, 
              i tipi di cookie che usiamo, le informazioni che raccogliamo tramite essi 
              e come tali informazioni vengono utilizzate, oltre a come gestire le 
              impostazioni relative ai cookie.
            </p>
            <p>
              I cookie sono piccoli file di testo utilizzati per memorizzare brevi 
              informazioni. Vengono salvati sul tuo dispositivo quando il sito web 
              viene caricato nel browser. Questi cookie ci aiutano a far funzionare 
              correttamente il sito, a renderlo più sicuro, a migliorare l’esperienza 
              utente e a comprendere le prestazioni del sito analizzando cosa funziona 
              e cosa necessita miglioramenti.
            </p>
          </>
        ) : (
          <>
            <p>
              This Cookie Policy explains what cookies are and how we use them, 
              the types of cookies we use, the information we collect using cookies 
              and how that information is used, and how to manage the cookie settings.
            </p>
            <p>
              Cookies are small text files that are used to store small pieces of 
              information. They are stored on your device when the website is loaded 
              on your browser. These cookies help us make the website function properly, 
              make it more secure, provide better user experience, and understand how 
              the website performs and to analyze what works and where it needs improvement.
            </p>
          </>
        )}
      </div>

      <h5 className={style.title}>
        {lang === "it" ? "Come utilizziamo i cookie?" : "How do we use cookies?"}
      </h5>
      <div className={style.cookiePolicyP}>
        {lang === "it" ? (
          <>
            <p>
              Come la maggior parte dei servizi online, il nostro sito utilizza 
              cookie di prima parte e di terze parti per vari scopi. 
              I cookie di prima parte sono principalmente necessari al corretto 
              funzionamento del sito e non raccolgono dati personali identificabili.
            </p>
            <p>
              I cookie di terze parti servono invece a comprendere come il sito 
              viene utilizzato, come interagisci con esso, a mantenere sicuri i 
              nostri servizi, a mostrarti pubblicità pertinenti e, in generale, 
              a offrirti un’esperienza migliore e più rapida nelle interazioni future.
            </p>
          </>
        ) : (
          <>
            <p>
              As most of the online services, our website uses first-party and 
              third-party cookies for several purposes. First-party cookies are 
              mostly necessary for the website to function the right way, and 
              they do not collect any of your personally identifiable data.
            </p>
            <p>
              The third-party cookies used on our website are mainly for 
              understanding how the website performs, how you interact with our 
              website, keeping our services secure, providing advertisements that 
              are relevant to you, and all in all providing you with a better and 
              improved user experience and help speed up your future interactions 
              with our website.
            </p>
          </>
        )}
      </div>

      <h5 className={style.title}>
        {lang === "it" ? "Tipi di cookie che utilizziamo" : "Types of Cookies we use"}
      </h5>
      <div className={style.ckyAuditTableElement}></div>

      <h5 className={style.title} style={{ marginBottom: "20px" }}>
        {lang === "it" ? "Gestisci le preferenze sui cookie" : "Manage cookie preferences"}
      </h5>

      <a className={style.ckyBannerElement}>
        {lang === "it" ? "Impostazioni Cookie" : "Cookie Settings"}
      </a>
      <br />

      <div className={style.cookiePolicyP}>
        {lang === "it" ? (
          <>
            <p>
              Puoi modificare le tue preferenze sui cookie in qualsiasi momento 
              cliccando sul pulsante qui sopra. Questo ti permetterà di rivedere 
              il banner del consenso e modificare le scelte o revocare il consenso 
              in qualsiasi momento.
            </p>
            <p>
              Inoltre, i vari browser offrono metodi differenti per bloccare o 
              eliminare i cookie. Qui sotto trovi i link alle guide ufficiali dei 
              principali browser.
            </p>
          </>
        ) : (
          <>
            <p>
              You can change your cookie preferences any time by clicking the above 
              button. This will let you revisit the cookie consent banner and change 
              your preferences or withdraw your consent right away.
            </p>
            <p>
              In addition to this, different browsers provide different methods to 
              block and delete cookies used by websites. Listed below are the links 
              to the support documents on how to manage and delete cookies from the 
              major web browsers.
            </p>
          </>
        )}

        <p>
          Chrome:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.google.com/accounts/answer/32050"
          >
            https://support.google.com/accounts/answer/32050
          </a>
        </p>
        <p>
          Safari:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
          >
            https://support.apple.com/en-in/guide/safari/sfri11471/mac
          </a>
        </p>
        <p>
          Firefox:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
          >
            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
          </a>
        </p>
        <p>
          Internet Explorer:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
          >
            https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer
          </a>
        </p>
      </div>

      <p className={style.cookiePolicyP}>
        {lang === "it" ? "Cookie Policy generata da " : "Cookie Policy generated by "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW"
        >
          CookieYes - Cookie Policy Generator
        </a>
        .
      </p>
    </div>
  )
}