import styles from '../../../../../styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
import { NaslovRecepta } from '@/components/PredlogZaObroke/Pojedinacni/Naslov';
import { PostupakZaRecepte } from '@/components/PredlogZaObroke/Pojedinacni/PostupakRecept';
import { PojeidnacniReceptDodatno } from '@/components/PredlogZaObroke/Pojedinacni/DodatniRecept';
import { SastojciRecepta} from '@/components/PredlogZaObroke/Pojedinacni/SastojciRecepta';
import { VideoJela } from '@/components/PredlogZaObroke/Pojedinacni/Video';
import { SlikaJela } from '@/components/PredlogZaObroke/Pojedinacni/SlikaJela';
import { uopstenooObrocima } from '@/mocks/pojedinacni-obrok-uopstene-informacije';
import { sastojciObroci } from '@/mocks/pojedinacni-obrok-sastojci';
import { Postupci } from '@/mocks/pojedinacan-obrok-postupak';
import { Ostali } from '@/mocks/pojedinacni-obrok-ostalo';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
        {uopstenooObrocima.map((uopstenooObroku) => <NaslovRecepta naslov={uopstenooObroku.naslovObroka} />)}   
        <div className={styles.KontenjerStranice}>
          <div className={styles.LevaStranaKontenjeraStranice}>
          {uopstenooObrocima.map((uopstenooObroku) => <SlikaJela slika={uopstenooObroku.slikaObroka} />)}  
           <p className={styles.RedULevomKontenjeruNaslov}>Potrebne stvari</p>
            <ul className={styles.ULKlasa}>
            {sastojciObroci.map((sastojciObroka) => <SastojciRecepta sastojci1={sastojciObroka.Sastojci} />)} 
            </ul>
            <div className={styles.KontenjerIzgledDUgmetaKorpe}>
            <img className={styles.IzgledDUgmetaKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
          <div className={styles.DesnaStranaKontenjeraStranice}>
              <p className={styles.RedUDesnomKontenjeruNaslov}>Postupak kako napraviti</p>
              <div className={styles.KontenjerZaPostupke}>
             <ol>
             {Postupci.map((Postupak) => <PostupakZaRecepte postupak1={Postupak.PoStupak} />)} 
          
            </ol>
            </div>
            {uopstenooObrocima.map((uopstenooObroku) => <VideoJela video={uopstenooObroku.videoObroka} />)}  
          </div>
          <div className={styles.KontenjerZaJosRecepta}>
          {Ostali.map((Ostalo) => <PojeidnacniReceptDodatno slika={Ostalo.Slika} naslovRecepta={Ostalo.NaslovRecepta}/>)} 

          </div>
        </div>
      </div>
  </div>
  );
}