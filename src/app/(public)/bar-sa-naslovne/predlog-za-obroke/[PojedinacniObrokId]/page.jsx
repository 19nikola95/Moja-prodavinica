import styles from '../../../../../styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
import { NaslovRecepta } from '@/components/PredlogZaObroke/Pojedinacni/Naslov';
import { PostupakZaRecepte } from '@/components/PredlogZaObroke/Pojedinacni/PostupakRecept';
import { PojeidnacniReceptDodatno } from '@/components/PredlogZaObroke/Pojedinacni/DodatniRecept';
import { SastojciRecepta} from '@/components/PredlogZaObroke/Pojedinacni/SastojciRecepta';
import { VideoJela } from '@/components/PredlogZaObroke/Pojedinacni/Video';
import { SlikaJela } from '@/components/PredlogZaObroke/Pojedinacni/SlikaJela';
import { uopstenooObrocima } from '@/mocks/pojedinacni-obrok-uopstene-informacije';
export default async function PojedinacniObrokIdPage({params}) {
  const { PojedinacniObrokId } = await params;

  const PojedinacniObrok = uopstenooObrocima.find((PojedinacniObrok) => PojedinacniObrok.id == PojedinacniObrokId);
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
         <NaslovRecepta naslov={PojedinacniObrok.naslovObroka} />
        <div className={styles.KontenjerStranice}>
          <div className={styles.LevaStranaKontenjeraStranice}>
          <SlikaJela slika={PojedinacniObrok.slikaObroka} />
           <p className={styles.RedULevomKontenjeruNaslov}>Potrebne stvari</p>
            <ul className={styles.ULKlasa}>
             <SastojciRecepta sastojci1={PojedinacniObrok.Sastojci} /> 
            </ul>
            <div className={styles.KontenjerIzgledDUgmetaKorpe}>
            <img className={styles.IzgledDUgmetaKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
          <div className={styles.DesnaStranaKontenjeraStranice}>
              <p className={styles.RedUDesnomKontenjeruNaslov}>Postupak kako napraviti</p>
              <div className={styles.KontenjerZaPostupke}>
             <ol>
             <PostupakZaRecepte postupak1={PojedinacniObrok.PoStupak} />
            </ol>
            </div>
            <VideoJela video={PojedinacniObrok.videoObroka} />
          </div>
          <div className={styles.KontenjerZaJosRecepta}>
          {PojedinacniObrok.Ostali?.map((Ostali) => <PojeidnacniReceptDodatno slika={Ostali.Slika} naslovRecepta={Ostali.NaslovRecepta}/>)} 

          </div>
        </div>
      </div>
  </div>
  );
}