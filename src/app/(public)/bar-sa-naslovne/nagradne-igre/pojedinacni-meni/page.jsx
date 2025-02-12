import styles from '../../../../../styles/bar-za-naslovnu/nagradne-igre/pojedinacniMeni.module.scss';
import { VremeTrajanja } from '@/components/PojedinacneNagradneIgre/VremeTrajanjaNagradneIgre';
import { NagradeZaOsvanjanje } from '@/components/PojedinacneNagradneIgre/NagradneIgreKojeSeOsvajaju';
import { KakoUcestovati } from '@/components/PojedinacneNagradneIgre/KakoUcestvovati';
import { IzvlacenjeNagradnihIgra } from '@/components/PojedinacneNagradneIgre/IzvlacenjeNagradnihIgra';
import { LinkSajta } from '@/components/PojedinacneNagradneIgre/LinkNagradneIgre';
import { SlikaNagradneIgre } from '@/components/PojedinacneNagradneIgre/SlikaNagradneIgre';
import { TekstNaslova } from '@/components/PojedinacneNagradneIgre/TekstZaNaslov';
import { DodatneIgre } from '@/components/PojedinacneNagradneIgre/DodatneNagradneIgre';
import { uopsteno } from '@/mocks/nagradna-igra-pojedinacna-uopsteno';
import { trajanje } from '@/mocks/nagradna-igra-pojedinacni-trajanje';
import { nagrade } from '@/mocks/nagradne-igre-pojedinacni-nagrade';
import { ucestvovanja } from '@/mocks/nagradne-igre-pojedinacne-kako-ucestvovati';
import { izvlacenje } from '@/mocks/nagradna-igra-pojedinacni-izvlacenje';
import { ostalo } from '@/mocks/nagradna-igra-pojedinacni-ostalo';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function kontaktirajnas() {
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
        <div className={styles.VideoReklame}>
        {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
        </div>
        {uopsteno.map((uopsteni) => <TekstNaslova naslov={uopsteni.Naslov} />)}  
        <div className={styles.KontenjerSaSadrzajom}>
          <div className={styles.LevaStranjaKontenjeraSaSadrzajom}>
          {uopsteno.map((uopsteni) => <SlikaNagradneIgre slika={uopsteni.Slika} />)} 
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Trajanje nagradne igre: </p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
            {trajanje.map((trajanji) => <VremeTrajanja vremeTrajanja1={trajanji.VREMETRAJANJA} />)} 
            </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Nagradne igre koje se mogu osvojiti: </p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
            {nagrade.map((nagradA) => <NagradeZaOsvanjanje nagrade1={nagradA.NAGRADA} />)} 
              </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Kako učestvovati:</p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
            {ucestvovanja.map((ucestvovanje) => <KakoUcestovati ucestvovanje1={ucestvovanje.UCESTVOVANJE} />)} 
              </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Izvlačenje nagradnih igra:</p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
            {izvlacenje.map((izvlacenja) => <IzvlacenjeNagradnihIgra izvlacenje1={izvlacenja.IZVLACENJA} />)} 
            </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Za sve dodatne infromacije posetite sajt:</p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
            {uopsteno.map((uopsteni) => <LinkSajta link1={uopsteni.LINK} />)}  
            </div>
          </div>
          <div className={styles.DesnaStranjaKontenjeraSaSadrzajom}>
            <p className={styles.NaslovZaSveNagradneIgre}>Sve nagradne igre</p>
            {ostalo.map((ostalI) => <DodatneIgre linkdodanto={ostalI.LINK} tekstDodatno={ostalI.TEKST} slika={ostalI.SLIKA} />)}  
          </div>
        </div>
      </div>
      </div>
  );
}