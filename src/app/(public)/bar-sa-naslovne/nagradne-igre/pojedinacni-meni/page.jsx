import styles from '../../../../../styles/bar-za-naslovnu/nagradne-igre/pojedinacniMeni.module.scss';
import { VremeTrajanja } from '@/components/PojedinacneNagradneIgre/VremeTrajanjaNagradneIgre';
import { NagradeZaOsvanjanje } from '@/components/PojedinacneNagradneIgre/NagradneIgreKojeSeOsvajaju';
import { KakoUcestovati } from '@/components/PojedinacneNagradneIgre/KakoUcestvovati';
import { IzvlacenjeNagradnihIgra } from '@/components/PojedinacneNagradneIgre/IzvlacenjeNagradnihIgra';
import { LinkSajta } from '@/components/PojedinacneNagradneIgre/LinkNagradneIgre';
import { SlikaNagradneIgre } from '@/components/PojedinacneNagradneIgre/SlikaNagradneIgre';
import { TekstNaslova } from '@/components/PojedinacneNagradneIgre/TekstZaNaslov';
import { DodatneIgre } from '@/components/PojedinacneNagradneIgre/DodatneNagradneIgre';
export default function kontaktirajnas() {
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
        <div className={styles.VideoReklame}></div>
        <TekstNaslova naslov={"Lav nagradna igra 2024: Osvoji auto uz Lav pivo"}/>
        <div className={styles.KontenjerSaSadrzajom}>
          <div className={styles.LevaStranjaKontenjeraSaSadrzajom}>
          <SlikaNagradneIgre slika={"/bar-za-navigaciju/nagradne-igre/SlikaLavNagradneIgre.jpg"}/>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Trajanje nagradne igre: </p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
              <VremeTrajanja vremeTrajanja1={"26.04.2024 do 22.06.2025"}/> 
            </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Nagradne igre koje se mogu osvojiti: </p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
             <NagradeZaOsvanjanje nagrade1={"1 x Automibl Peugeot 308 Active 1.2E 130"}/>
             <NagradeZaOsvanjanje nagrade1={"6 x Skuter Peugeot kisbee 51"}/>
             <NagradeZaOsvanjanje nagrade1={"6 x Gift On Cart poklon kartice u iznostu od 100.000 RSD"}/>
             <NagradeZaOsvanjanje nagrade1={"210 x Gift On Cart poklon kartice u iznostu od 15.000 RSD"}/>
             <NagradeZaOsvanjanje nagrade1={"420 x LAV poklon paketa"}/>
              </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Kako učestvovati:</p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
              <KakoUcestovati ucestvovanje1={"1. Tokom perioda nagradne igre bilo koja 3 ili više bilo koja LAV ili LAV Premium proizvoda u bilo kom maloprodajnom ili ugostiteljskom objektu na teritoriji Republike Srbije (bez teritorije Autonomne pokrajine Kosovo i Metohija)"}/>
              <KakoUcestovati ucestvovanje1={"2. Pošalji SMS poruku sa PFR brojem fiskalnog računa na četvorocifreni broj 4488 najkasnije do 26.5.2024. u 23.59 časova"}/>
              <KakoUcestovati ucestvovanje1={"3. Obavezno sačuvajte račun do kraja nagradne igre i dodele nagrada"}/>
              </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Izvlačenje nagradnih igra:</p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
              <IzvlacenjeNagradnihIgra izvlacenje1={"Biće izvučen 1 dobitnik glavne nagrade"}/>
              <IzvlacenjeNagradnihIgra izvlacenje1={"Dobitnik DNEVNE nagrade može biti dobitnik GLAVNE nagrade."}/>
              <IzvlacenjeNagradnihIgra izvlacenje1={"Dobitnik NEDELjNE nagrade može biti dobitnik GLAVNE nagrade."}/>
            </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Za sve dodatne infromacije posetite sajt:</p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
              <LinkSajta link1={"https://www.lavovskenagrade.rs/dobitnici"}/>
            </div>
          </div>
          <div className={styles.DesnaStranjaKontenjeraSaSadrzajom}>
            <p className={styles.NaslovZaSveNagradneIgre}>Sve nagradne igre</p>
            <DodatneIgre linkdodanto={"https://www.lavovskenagrade.rs/dobitnici"} tekstDodatno={"Lav nagradna igra 2024: Osvoji auto uz Lav pivo"}/>
            <DodatneIgre linkdodanto={"https://www.lavovskenagrade.rs/dobitnici"} tekstDodatno={"Lav nagradna igra 2024: Osvoji auto uz Lav pivo1"}/>
            <DodatneIgre linkdodanto={"https://www.lavovskenagrade.rs/dobitnici"} tekstDodatno={"Lav nagradna igra 2024: Osvoji auto uz Lav pivo2"}/>
          </div>
        </div>
      </div>
      </div>
  );
}