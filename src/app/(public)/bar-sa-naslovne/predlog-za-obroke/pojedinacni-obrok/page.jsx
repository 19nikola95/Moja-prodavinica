import styles from '../../../../../styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
import { NaslovRecepta } from '@/components/PredlogZaObroke/Pojedinacni/Naslov';
import { PostupakZaRecepte } from '@/components/PredlogZaObroke/Pojedinacni/PostupakRecept';
import { PojeidnacniReceptDodatno } from '@/components/PredlogZaObroke/Pojedinacni/DodatniRecept';
import { SastojciRecepta} from '@/components/PredlogZaObroke/Pojedinacni/SastojciRecepta';
import { SlikaJela } from '@/components/PredlogZaObroke/Pojedinacni/SlikaJela';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
        <div className={styles.VideoReklame}></div>
        <NaslovRecepta naslov={"Torta od višanja"}/>
        <div className={styles.KontenjerStranice}>
          <div className={styles.LevaStranaKontenjeraStranice}>
            <SlikaJela slika={"/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg"}/>
           <p className={styles.RedULevomKontenjeruNaslov}>Potrebne stvari</p>
            <ul className={styles.ULKlasa}>
              <SastojciRecepta sastojci1={"Silan Fresh Skz 2.850 l"}/>
              <SastojciRecepta sastojci1={"Ariel prasak 2kg"}/>
              <SastojciRecepta sastojci1={"Silan Fresh Skz 2.850 l"}/>
            </ul>
            <div className={styles.KontenjerIzgledDUgmetaKorpe}>
            <img className={styles.IzgledDUgmetaKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
          <div className={styles.DesnaStranaKontenjeraStranice}>
              <p className={styles.RedUDesnomKontenjeruNaslov}>Postupak kako oprati stvari</p>
              <div className={styles.KontenjerZaPostupke}>
             <ol>
              <PostupakZaRecepte postupak1={"Razdvojiti bele i stvari u boji"}/>
              <PostupakZaRecepte postupak1={"Ubaciti stvari u ves masinu "}/>
              <PostupakZaRecepte postupak1={"U kevu kadicu sipati prasak a u srednju omeksivac"}/>
              <PostupakZaRecepte postupak1={"Podesiti na 90 stepeni masinu"}/>
              <PostupakZaRecepte postupak1={"Ukljuciti ciklus"}/>
              <PostupakZaRecepte postupak1={"Sacekatiu da zavrsi ciklus"}/>
            </ol>
            </div>
            <div className={styles.VideoKlip}></div>
          </div>
          <div className={styles.KontenjerZaJosRecepta}>
            <PojeidnacniReceptDodatno slika={"/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg"} naslovRecepta={"Musaka sa mesom zeljem i kiselim mlekom1"}/>
            <PojeidnacniReceptDodatno slika={"/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg"} naslovRecepta={"Musaka sa mesom zeljem i kiselim mlekom2"}/>
            <PojeidnacniReceptDodatno slika={"/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg"} naslovRecepta={"Musaka sa mesom zeljem i kiselim mlekom3"}/>
          </div>
        </div>
      </div>
  </div>
  );
}