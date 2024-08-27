import styles from '../../../../../styles/bar-za-naslovnu/kako-to/pojedinacniMeni.module.scss';
import { PojedinacniMeniSastojci } from '@/components/KakoTo/PojedinacniMeni/Sastojci';
import { PojedinacniMeniPostupak } from '@/components/KakoTo/PojedinacniMeni/Postupak';
import { PojedinacniMeniDodatniRecepti } from '@/components/KakoTo/PojedinacniMeni/DodatniRecepti';
export default function kontaktirajnas() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
<div className={styles.VideoReklame}></div>
        <div className={styles.KontenjerZaNaslov}>
        <p className={styles.IzgledSlovaNaslova}>Kako oprati veš</p>
        </div>
        <div className={styles.KontenjerStranice}>
          <div className={styles.LevaStranaKontenjeraStranice}>
            <img className={styles.IzgledSlike} src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
            <p className={styles.RedULevomKontenjeruNaslov}>Potrebne stvari</p>
            <ul className={styles.ULKlasa}> 
            <PojedinacniMeniSastojci sastojci1 ={"Ariel prasak 2kg"}/>
            <PojedinacniMeniSastojci sastojci1 ={"Persil prasak 2kg"}/>
            </ul>
            <div className={styles.KontenjerIzgledDUgmetaKorpe}>
            <img className={styles.IzgledDUgmetaKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
          <div className={styles.DesnaStranaKontenjeraStranice}>
              <p className={styles.RedUDesnomKontenjeruNaslov}>Postupak kako oprati stvari</p>
              <div className={styles.KontenjerZaPostupke}>
             <ol>
              <PojedinacniMeniPostupak postupak1={"Razdvojiti bele i stvari u boj"}/>
              <PojedinacniMeniPostupak postupak1={"Ubaciti stvari u ves masinu "}/>
              <PojedinacniMeniPostupak postupak1={"U kevu kadicu sipati prasak a u srednju omeksivac"}/>
              <PojedinacniMeniPostupak postupak1={"Podesiti na 90 stepeni masinu "}/>
              <PojedinacniMeniPostupak postupak1={"Ukljuciti ciklus "}/>        
            </ol>
            </div>
            <div className={styles.VideoKlip}></div>
          </div>
          <div className={styles.KontenjerZaJosRecepta}>
            <PojedinacniMeniDodatniRecepti receptDodatan={"Kako oprati veš"}/>
            <PojedinacniMeniDodatniRecepti receptDodatan={"Kako oprati veš1"}/>
            <PojedinacniMeniDodatniRecepti receptDodatan={"Kako oprati veš2"}/>
            <PojedinacniMeniDodatniRecepti receptDodatan={"Kako oprati veš3"}/>
                     
          </div>
        </div>
      </div>
  </div>
  );
}