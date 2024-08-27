import styles from '../../../styles/onama.module.scss';
export default function pocetna() {
  return (
    <div className={styles.GlavniKontenjerZaSadrzaj}>
   <div className={styles.PozicijaNaslova}>
      <p className={styles.IzgledSlovaNaslova}>O nama</p>
      </div>
      <div className={styles.KontenjerZaOpis}>
        <p className={styles.UvodOpisa}>Moja prodavnica je aplikacija koja sluzi u rešavanju svakodnevnih problema prilikom kupovine. Cilj aplikacije je jako jednostavan pomoći svakom korisniku da uštedi vreme i novac. Informacije o aktuelnim nagradnim igrama, besplatne kuhinjske recepte i savete za rešavanje nekih uobičajnih problema.</p>
        <p className={styles.OpisONama}>Prosečna čovek izdvaja oko 40%  ili 24.800,00 din od svoje plate za prehranu i potrebe domaćinstva. Kako bi smanjili mesečne troškove svakog domaćinstva napravili smo aplikaciju Moja prodavnica. Aplikacija koja omogućava realno sagledavanje svih trenutnih cena po marketima i prodavnicama i nudi vam najbolju opciju kako biste uštedeli novac pri kupovini. Pored uštede novca štedi vam i vreme jer takođe nudi opciju u kojoj najbližoj prodavnici ili marketu možete uzeti sve namernice koje vam trebaju. Sve što stavite u korpu možete poslati porukom gde se tačno vidi izgled namernice i količina tako da ko god ideu kupovinu tačno zna šta treba kupiti i kako to izgleda. Poret uštede novca i vremena nudi i besplatne recepte hrane i savete kako rešiti svakodnevne probleme. Prati nagradne igre svih proizvoda, marketa i prodavnica tako da ćete uvek biti u toku za nagrade koje se nude.
        </p>
        </div>
        <div className={styles.ZaglavljeZaKontenjerReklame}>
        <div className={styles.KontenjerZaVideoReklamu}>
        </div>
        </div>
      </div>
  );
}
