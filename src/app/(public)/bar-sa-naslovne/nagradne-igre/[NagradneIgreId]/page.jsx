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
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default async function NagradneIgreIdPage({params}) {
    const { NagradneIgreId } = await params;
  
    const NagradneIgre = uopsteno.find((NagradneIgre) => NagradneIgre.id == NagradneIgreId);
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
        <div className={styles.VideoReklame}>
        {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
        </div>
        <TekstNaslova naslov={NagradneIgre.Naslov} />
        <div className={styles.KontenjerSaSadrzajom}>
          <div className={styles.LevaStranjaKontenjeraSaSadrzajom}>
           <SlikaNagradneIgre slika={NagradneIgre.Slika} />
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Trajanje nagradne igre: </p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
            <VremeTrajanja vremeTrajanja1={NagradneIgre.VREMETRAJANJA} />
            </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Nagradne igre koje se mogu osvojiti: </p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
             <NagradeZaOsvanjanje nagrade1={NagradneIgre.NAGRADA} />
              </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Kako učestvovati:</p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
            <KakoUcestovati ucestvovanje1={NagradneIgre.UCESTVOVANJE} />
              </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Izvlačenje nagradnih igra:</p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
            <IzvlacenjeNagradnihIgra izvlacenje1={NagradneIgre.IZVLACENJA} /> 
            </div>
            <div className={styles.KontenjerSaSadrzajem}>
              <p className={styles.IzgledSlovaSadrzaja}>Za sve dodatne infromacije posetite sajt:</p>
            </div>
            <div className={styles.KontenjerSaOpisom}>
           <LinkSajta link1={NagradneIgre.LINK} />
            </div>
          </div>
          <div className={styles.DesnaStranjaKontenjeraSaSadrzajom}>
            <p className={styles.NaslovZaSveNagradneIgre}>Sve nagradne igre</p>
            {NagradneIgre.Ostalo?.map((Ostalo) => <DodatneIgre key={Ostalo.id} linkdodanto={Ostalo.LINK} tekstDodatno={Ostalo.TEKST} slika={Ostalo.SLIKA} />)}  
          </div>
        </div>
      </div>
      </div>
  );
}