import styles from '../../../styles/onama.module.scss';
export default function oNama() {
  return (
    <div className={styles.GlavniKontenjerZaSadrzaj}>
   <div className={styles.PozicijaNaslova}>
      <p className={styles.IzgledSlovaNaslova}>O nama</p>
      </div>
      <div className={styles.KontenjerZaOpis}>
        <p className={styles.UvodOpisa}>Moja prodavnica je aplikacija koja služi u rešavanju svakodnevnih problema prilikom kupovine. Cilj aplikacije je jako jednostavan, pomoći svakom korisniku da uštedi vreme i novac. Informacije o aktuelnim nagradnim igrama, besplatne kuhinjske recepte i savete za rešavanje nekih uobičajenih problema.</p>
        <p className={styles.OpisONama}>Prosečan čovek izdvaja oko 40%  ili 24.800,00 din od svoje plate za prehranu i potrebe domaćinstva. Kako bi smanjili mesečne troškove svakog domaćinstva napravili smo aplikaciju Moja prodavnica. Aplikacija koja omogućava realno sagledavanje svih trenutnih cena po marketima i prodavnicama i nudi Vam najbolju opciju kako biste uštedeli novac pri kupovini. Pored uštede novca štedi Vam i vreme jer takođe nudi opciju u kojoj najbližoj prodavnici ili marketu možete uzeti sve namirnice koje Vam trebaju. Sve što stavite u korpu od namirnica možete poslati porukom gde se tačno vidi izgled i količina, tako da ko god ide u kupovinu tačno zna šta treba kupiti i kako to izgleda. Pored uštede novca i vremena nudi i besplatne recepte hrane i savete kako rešiti svakodnevne probleme. Aplikacija prati nagradne igre svih proizvoda, marketa i prodavnica tako da ćete uvek biti u toku za nagrade koje se nude.
        </p>
        </div>
        <div className={styles.ZaglavljeZaKontenjerReklame}>
        <div className={styles.KontenjerZaVideoReklamu}>
        </div>
        </div>
      </div>
  );
}
