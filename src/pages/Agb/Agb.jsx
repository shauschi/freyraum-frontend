'use react';
import React from 'react';
import SimplePage from '../SimplePage';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './style.less';

const agbs = <ol className='intended'>
  <li><Typography variant='h5'>Allgemeine Informationen, Vertragspartner, Veranstaltungsort, Teilnehmer,
    Sporttauglichkeit</Typography>
    <ol>
      <li><Typography>Vertragspartner der hier angebotenen Dienstleistung ist:
        Freya Constanze Heine, Rehstieg 1, 21442 Toppenstedt</Typography></li>
      <li><Typography>Soweit das Trainingsprogramm keine Abweichungen vorsieht,
        ist der Veranstaltungsort das FreyRaum Studio Tangendorfer Straße 2a, 21442 Toppenstedt,
        betrieben von Freya Heine. Die Trainingseinheiten werden grundsätzlich in der oben genannten
        Trainingsstätte durchgeführt. Änderungen des Veranstaltungsortes bleiben vorbehalten und werden
        rechtzeitig auf der Webseite (www.freya.fitness) oder per Aushang am Veranstaltungsort bekannt
        gegeben. Die jeweiligen Öffnungs- bzw. Trainingszeiten finden sich ebenfalls auf der Webseite.
        Des Weiteren ist die jeweilige Hausordnung zu beachten.</Typography></li>
      <li><Typography>Die vereinbarte Kursbetreuung versteht sich als zeitbestimmte,
        dienstvertragliche Verpflichtung gemäß § 611 BGB.</Typography></li>
      <li><Typography>Teilnehmer müssen grundsätzlich 18 Jahre alt sein.
        Freya Heine behält sich jedoch die Entscheidung im Einzelfall vor,
        Minderjährigen das Training zu ermöglichen. In diesem Fall ist bei Abschluss
        des Vertrages/ dem Anmelden beim Probetraining/ dem Kauf einer „10er Karte“
        unbedingt die Einverständniserklärung der Erziehungsberechtigten beizufügen bzw. vorzulegen.</Typography></li>
      <li><Typography>Der Teilnehmer versichert gegenüber Freya Heine, sportgesund zu sein und ist verpflichtet,
        sich selbst darüber zu informieren, ob die Teilnahme am Trainingsbetrieb mit
        gesundheitlichen Risiken verbunden ist. Freya Heine empfiehlt eine ärztliche
        Sporttauglichkeitsuntersuchung vor und während der jeweiligen Vertragslaufzeit</Typography></li>
    </ol>
  </li>

  <li><Typography variant='h5'>Training</Typography>
    <ol>
      <li><Typography>Die Dauer eines Kurses beträgt i. d. R. 60 Minuten.</Typography></li>
      <li><Typography>Die Anmeldung zu den Trainingseinheiten erfolgt online auf Basis eines Anmeldesystems,
        welches den Teilnehmern auf der oben genannten Webseite zur Verfügung steht.
        Sollte ein Training bereits ausgebucht sein, muss der Teilnehmer auf eine andere Trainingszeit
        ausweichen. Es gelten die jeweiligen Buchungsregeln des Kurses, welche auf der Website
        einzusehen sind.</Typography></li>
      <li><Typography>Eine ordentliche Abmeldung des Teilnehmers kann bis 3 Stunden vor Kursbeginn erfolgen.
        Eine außerordentliche Abmeldung ist bei Nachweis eines wichtigen Grundes (Krankheit,
        Sportuntauglichkeit) möglich. Dem jeweiligen Trainer bleibt die Möglichkeit offen, einen
        entsprechenden Nachweis einzufordern.</Typography></li>
      <li><Typography>Bei Nichteinhaltung der ordentlichen Abmeldefrist von 3 Stunden (s. 2.3) wird der Kurs von
        dem jeweiligen Buchungskontingent (bei 10er Karten) abgezogen. Zusätzlich fällt eine Stornogebühr von 4 Euro an.
        Freya Heine behält sich vor, diese bei Nichtzahlung per Lastschrift einzuziehen.
        Eine ordentliche Abmeldung im Bereich „Personaltraining“, „Food Coaching“ und „Team
        Training“ kann bis 6 Stunden vor Kursbeginn erfolgen. Eine außerordentliche Abmeldung ist
        bei Nachweis eines wichtigen Grundes (Krankheit, Sportuntauglichkeit) möglich. Dem
        jeweiligen Trainer bleibt die Möglichkeit offen, einen entsprechenden Nachweis einzufordern.
        Art, Umfang und Ort der jeweiligen Trainingseinheit bestimmt der Trainer, wobei den
        Teilnehmern der jeweilige Trainingsinhalt vor Trainingsbeginn erläutert und mit ihnen
        einvernehmlich abgestimmt wird.</Typography></li>
      <li><Typography>Der Teilnehmer ist für eine entsprechende Sportbekleidung/Wetterbekleidung selbst
        verantwortlich.</Typography></li>
      <li><Typography>Den Anweisungen des Trainers ist Folge zu leisten.</Typography></li>
      <li><Typography>Der Trainer ist berechtigt, den Teilnehmer vom weiteren Training auszuschließen, sofern
        dieser den Trainingsbetrieb umfassend stört oder dieses aus gesundheitlichen Gründen
        erforderlich erscheint.</Typography></li>
      <li><Typography>Außerhalb der Trainingszeiten kann Freya Heine Mo-Fr zwischen 8:00 und 20:00 Uhr
        per Telefon, E-Mail und anderen Medien kontaktiert werden. Hieraus ergibt sich jedoch kein
        Anspruch auf ständige Erreichbarkeit der jeweiligen Trainer.</Typography></li>
    </ol>
  </li>

  <li><Typography variant='h5'>Mindestvertragslaufzeit, Kündigung</Typography>
    <ol>
      <li><Typography>Eine „10er Karte“ verliert 10 Monate nach Vertragsabschluss seine Gültigkeit und verlängert
        sich nicht.</Typography></li>
      <li><Typography>„Drop-In“-Tickets (Day) gestatten dem Teilnehmer eine einmalige Teilnahme an einem Kurs
        bzw. Gruppentraining.</Typography></li>
      <li><Typography>Die angebotenen Verträge (mit Ausnahme der „10er Karte“) haben eine Mindestlaufzeit von 3 Monaten.
        Die Mitgliedschaft kann immer mit einer Frist von 3 Monaten zum Monatsende gekündigt werden.</Typography></li>
      <li><Typography>Im Fall von Preiserhöhungen hat das Mitglied ein Sonderkündigungsrecht nach Ziff.
        5.2.</Typography></li>
      <li><Typography>Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt beiderseitig bestehen. Bei
        fristloser Kündigung, obliegt diesem der Nachweis des wichtigen Grundes: bei Krankheit oder
        Schwangerschaft ist die Vorlage eines ärztlichen Attests über die langfristige
        Sportuntauglichkeit erforderlich, bei Umzug in eine andere Stadt die Vorlage der
        Meldebescheinigung, bei sonstigen Gründen muss das Mitglied/Teilnehmer einen
        entsprechend geeigneten Nachweis erbringen. Die Kündigungsfrist bei Inanspruchnahme des
        Sonderkündigungsrechts beträgt 4 Wochen zum Monatsende.</Typography></li>
      <li><Typography>Während der Vertragslaufzeit (Ausschluss „10er Karten“) besteht die Möglichkeit eines
        „Ruhemonats“. Dieser muss 14 Tage vor Beginn schriftlich angekündigt werden und kann innerhalb eines
        Jahres nur einmal in Anspruch genommen werden. Bei Inanspruchnahme wird die Vertragslaufzeit um den
        jeweiligen Monat verlängert.</Typography></li>
      <li><Typography>Eine Vertragsübernahme ist nicht möglich.</Typography></li>
    </ol>
  </li>

  <li><Typography variant='h5'>Geltungsbereich</Typography>
    <ol>
      <li><Typography>Die AGB gelten für sämtliche Vertragsbeziehungen zwischen Freya Heine und dem
        Teilnehmer in der zum Zeitpunkt des Vertragsschlusses aktuellen Fassung. Jeder Teilnehmer,
        der an den FreyRaum-Trainingseinheiten teilnehmen möchte, schließt in den Räumlichkeiten
        des Veranstaltungsortes einen Vertrag ab oder erwirbt eine „10er Karte“. Darüber hinaus
        besteht die Möglichkeit, ein einmaliges kostenloses Probetraining nach vorheriger Anmeldung
        zu absolvieren.</Typography></li>
      <li><Typography>Im Rahmen des Vertrages werden die persönlichen Kontaktdaten des Teilnehmers erfragt.
        Eventuelle Zahlungen werden direkt vor Ort getätigt oder mit einer vorort bestimmten Frist
        im Anschluss des Gespräches.</Typography></li>
      <li><Typography>Mit dem Erwerb einer „10er Karte“, dem Abschluss eines Vertrages oder der
        Teilnahme am kostenfreien Probetraining, akzeptiert der Teilnehmer die allgemeinen
        Geschäftsbedingungen. Die AGB liegen in den Räumlichkeiten des Veranstaltungsortes aus.</Typography></li>
      <li><Typography>Die Darstellung des Trainingsprogramms stellt kein Angebot i.S.d. § 145 BGB dar, sondern
        stellt lediglich die Aufforderung zur Abgabe eines Angebots dar. Es ist freibleibend sowie
        unverbindlich und ist insbesondere vom aktuellen Kursangebot und der Teilnehmeranzahl
        abhängig. Mit Unterschrift unter dem Vertrag/ dem Kauf einer „10er Karte“, „Drop-In“ bzw.
        dem Anmelden zum ersten kostenfreien Probetraining, meldet sich der Teilnehmer verbindlich
        an. Freya Heine kann ohne Angabe von Gründen das Angebot ablehnen.
        Eine Stornierung der gebuchten Leistung ist nur bedingt möglich (s. Ziff. 2.3).</Typography></li>
    </ol>
  </li>

  <li><Typography variant='h5'>Preise</Typography>
    <ol>
      <li><Typography>Alle vereinbarten Preise enthalten die gesetzliche Umsatzsteuer von 19%. Bei Änderung der
        gesetzlichen Umsatzsteuer, ist der Teilnehmer/ das Mitglied zur Zahlung des entsprechend
        erhöhten Beitrages verpflichtet. Nach Ablauf der 3-monatigen Mindestvertragslaufzeit behält sich
        Freya Heine vor, unter Einhaltung einer Vorankündigungsfrist von mindestens einem Monat
        zum Monatsende, die Beiträge zu erhöhen. In diesem Fall steht dem Mitglied ein
        Sonderkündigungsrecht zum Zeitpunkt des Inkrafttretens der Beitragserhöhung zu.</Typography></li>
    </ol>
  </li>

  <li><Typography variant='h5'>Zahlungsbedingungen</Typography>
    <ol>
      <li><Typography>Die Zahlung der Gebühr der „10er Karte“ ist bis spätestens zum 1. des auf den Vertragsabschluss
        folgenden Monats auf das Konto von Freya Heine zu leisten.</Typography></li>
      <li><Typography>Die Zahlung der Mitgliedschaft ist je nach Absprache bei Vertragsabschluss bis spätestens zum 1.
        oder
        zum 15. Eines jeden Monats auf das Konto von Freya Heine zu leisten.</Typography></li>
      <li><Typography>Die vertraglich fest gelegte Anmeldegebühr muss spätestens mit dem ersten Monats des
        Mitgliedschaftsbeitrags
        überwiesen werden.</Typography></li>
    </ol>
  </li>

  <li><Typography variant='h5'>Haftung</Typography>
    <ol>
      <li><Typography>Freya Heine haftet nicht für etwaige Nichterreichung des vom Teilnehmer/ Mitglied mit der
        Eingehung des Vertrages verfolgten Zwecks.</Typography></li>
      <li><Typography>Freya Heine haftet nicht für die vom Teilnehmer/ Mitglied selbst verursachten Schäden aus
        der Verletzung des Lebens, des Körpers oder der Gesundheit, es sei denn, diese beruhen auf
        fahrlässiger oder vorsätzlicher Pflichtverletzung von Freya Heine, seiner Vertreter bzw. seiner
        Erfüllungsgehilfen, insbesondere der Trainer.</Typography></li>
      <li><Typography>Freya Heine haftet nicht für Sachschäden oder den Verlust von Sachen des Teilnehmers/
        Mitglieds, es sei denn Freya Heine, ihre Vertreter bzw. ihre Erfüllungsgehilfen oder
        Trainer haben diese Schäden grob fahrlässig oder vorsätzlich verursacht.</Typography></li>
      <li><Typography>Freya Heine empfiehlt den Teilnehmern/ Mitgliedern sich eigenverantwortlich gegen Unfälle
        und Verletzungen, die beim Training oder auf dem Weg von und zum Training entstehen
        können, zu versichern.</Typography></li>
      <li><Typography>Soweit eine Haftung für Schäden, die nicht auf der Verletzung des Lebens, Körpers oder der
        Gesundheit des Teilnehmers/ Mitglieds beruhen, für leichte Fahrlässigkeit nicht
        ausgeschlossen sind, verjähren diese Ansprüche innerhalb eines Jahres beginnend mit der
        Entstehung des Anspruchs.</Typography></li>
      <li><Typography>Sofern Freya Heine aufgrund einer Vereinbarung im Einzelfall Sachen verkauft (z.B.
        Sportbekleidung, -geräte, etc.) oder den Verkauf solcher Sachen vermittelt, so verjähren
        etwaige Mängelansprüche des kaufenden Teilnehmers/Mitglieds gegen Freya Heine
        abweichend von der gesetzlichen Regelung nach einem Jahr, es sei denn, der Mangel wurde
        arglistig verschwiegen.</Typography></li>
      <li><Typography>Muss Freya Heine eine Veranstaltung bzw. einen Kurs aufgrund unverschuldeter und
        unvorhergesehener Umstände (z.B. Wetter, kurzfristige Trainererkrankung, etc.) verlegen
        oder absagen, stehen dem Mitglied keine Ersatzansprüche zu.</Typography></li>
    </ol>
  </li>

  <li><Typography variant='h5'>Datenschutz</Typography>
    <ol>
      <li><Typography>Im Zuge der Vertragsunterzeichnung erklärt der Teilnehmer/ das Mitglied sein Einverständnis
        zur Speicherung der personenbezogenen Daten. Die erhobenen Daten werden ausschließlich
        zur Erfüllung des Vertrages verwendet und nicht an Dritte weitergegeben.</Typography></li>
      <li><Typography>Der Teilnehmer/ das Mitglied erklärt sich damit einverstanden, dass Freya Heine das
        entstandene Foto- und Videomaterial im Rahmen der Öffentlichkeitsarbeit nutzen darf.</Typography></li>
      <li><Typography>Zum Zwecke der Kredit- und Bonitätsprüfung wird von Freya Heine ggf. ein Datenaustausch
        mit dem jeweiligen Kreditdienstleistungsunternehmen vorgenommen.</Typography></li>
      <li><Typography>Der Teilnehmer/ das Mitglied ist damit einverstanden, dass Freya Heine bei Bedarf
        entsprechende Daten per E-Mail an diesen heranträgt.</Typography></li>
      <li><Typography>Jeder Teilnehmer/ Jedes Mitglied hat das Recht, jederzeit über
        die gespeicherten Daten Auskunft zu verlangen und gegebenenfalls löschen zu lassen.</Typography></li>
    </ol>
  </li>

  <li><Typography variant='h5'>Schlussbestimmungen</Typography>
    <ol>
      <li><Typography>Änderungen, Ergänzungen oder Nebenabreden bedürfen zu ihrer Wirksamkeit der
        Schriftform. Dies gilt auch für das Schriftformerfordernis selbst.</Typography></li>
      <li><Typography>Sollte eine der Bestimmungen der AGB unwirksam oder undurchführbar sein bzw. werden,
        bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.</Typography></li>
      <li><Typography>Beide Vertragsparteien sind zu gegenseitiger Loyalität verpflichtet und werden sich nicht
        herabwürdigend über die Person bzw. Dienstleistungen äußern, auch nicht gegenüber Dritten.</Typography></li>
      <li><Typography>Es gilt das Recht der Bundesrepublik Deutschland.</Typography></li>
    </ol>
  </li>
</ol>;

class Agb extends SimplePage {

  render() {
    return (
      <SimplePage>
        <Grid container spacing={0} justify='center' style={{width: '100%', margin: '0px'}}>
          <Grid item xs={12} sm={10} md={8} className='agb-textarea'>
            <Typography variant='h5' gutterBottom>
              Allgemeine Geschäftsbedingungen
            </Typography>
            <div style={{margin: '16px 0'}}>
              <Typography>Freya Heine</Typography>
              <Typography>Tangendorfer Straße 2a</Typography>
              <Typography>21442 Toppenstedt</Typography>
            </div>
            <div style={{margin: '16px 0'}}>
              <Typography>0151 20712506</Typography>
              <Typography>https://freya.fitness</Typography>
              <Typography>freyraum@freya.fitness</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={10} md={8} className='agb-textarea'>
            {agbs}
          </Grid>
        </Grid>
      </SimplePage>
    );
  }
}

export default Agb;