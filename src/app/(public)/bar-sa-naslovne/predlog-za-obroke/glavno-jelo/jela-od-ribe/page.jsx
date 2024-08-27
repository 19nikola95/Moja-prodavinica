import styles from '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/jelaodribe.module.scss';
import { GlavniMeniPredlogZaObroke } from "@/components/PredlogZaObroke/GlavniMeni/GlavniMeniZaObroke";
export default function pocetna() {
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
      <div className={styles.VideoReklame}></div>
      <div className={styles.KontenjerZaNaslov}>
      <p className={styles.IzgledSlovaNaslova}>Jela od ribe</p>
      </div>
      <div className={styles.KontenjerSaObrocima}>
      <GlavniMeniPredlogZaObroke nazivObroka={"Musaka1"}/>
        <GlavniMeniPredlogZaObroke nazivObroka={"Musaka2"}/>
        <GlavniMeniPredlogZaObroke nazivObroka={"Musaka3"}/>
        <GlavniMeniPredlogZaObroke nazivObroka={"Musaka4"}/>
        <GlavniMeniPredlogZaObroke nazivObroka={"Musaka5"}/>
        <GlavniMeniPredlogZaObroke nazivObroka={"Musaka6"}/>
        <GlavniMeniPredlogZaObroke nazivObroka={"Musaka7"}/> 
        </div>
        <div className={styles.KontenjerZaDruguStranicu}>
         <button className={styles.DugmeZaSledecuStranu}>1</button>
         <button className={styles.DugmeZaSledecuStranu}>2</button>
         <button className={styles.DugmeZaSledecuStranu}>3</button>
         <button className={styles.DugmeZaSledecuStranu}>4</button>
         <button className={styles.DugmeZaSledecuStranu}>5</button>
         <button className={styles.DugmeZaSledecuStranu}>6</button>
         <button className={styles.DugmeZaSledecuStranu}>7</button>
         <button className={styles.DugmeZaSledecuStranu}>8</button>
         <button className={styles.DugmeZaSledecuStranu}>9</button>
       </div>
    </div>
  </div>
    );
  }