import styles from '../../../../../styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
        <div className={styles.VideoReklame}></div>
        <div className={styles.KontenjerZaNaslov}>
        <p className={styles.IzgledSlovaNaslova}>Torta od višanja</p>
        </div>
        <div className={styles.KontenjerStranice}>
          <div className={styles.LevaStranaKontenjeraStranice}>
            <img className={styles.IzgledSlike} src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
            <p className={styles.RedULevomKontenjeruNaslov}>Potrebne stvari</p>
            <ul className={styles.ULKlasa}>
            <div className={styles.RedULevomKontenjeru}>
              <li>Silan Fresh Skz 2.850 l</li>
            </div>
            <div className={styles.RedULevomKontenjeru}>
              <li> Ariel prasak 2kg</li>
            </div>
            </ul>
            <div className={styles.KontenjerIzgledDUgmetaKorpe}>
            <img className={styles.IzgledDUgmetaKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
          <div className={styles.DesnaStranaKontenjeraStranice}>
              <p className={styles.RedUDesnomKontenjeruNaslov}>Postupak kako oprati stvari</p>
              <div className={styles.KontenjerZaPostupke}>
             <ol>
            <div className={styles.RedUDesnomKontenjeru}>
              <li>Razdvojiti bele i stvari u boji</li>
            </div>
            <div className={styles.RedUDesnomKontenjeru}>
              <li>Ubaciti stvari u ves masinu 
              </li>
            </div>
            <div className={styles.RedUDesnomKontenjeru}>
              <li>U kevu kadicu sipati prasak a u srednju omeksivac
              </li>
            </div>
            <div className={styles.RedUDesnomKontenjeru}>
              <li>Podesiti na 90 stepeni masinu
              </li>
            </div>
            <div className={styles.RedUDesnomKontenjeru}>
              <li>Ukljuciti ciklus
              </li>
            </div>
            </ol>
            </div>
            <div className={styles.VideoKlip}></div>
          </div>
          <div className={styles.KontenjerZaJosRecepta}>
            <div className={styles.RedZaJosRecepata}>
              <img className={styles.IzgledSlikeZaJos} src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
              <div className={styles.DesnaStranaZaJos}>
                <p className={styles.SlovaZaJos}>Musaka sa mesom zeljem i kiselim mlekom</p>
              </div>
             </div>
             <div className={styles.RedZaJosRecepata}>
              <img className={styles.IzgledSlikeZaJos} src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
              <div className={styles.DesnaStranaZaJos}>
                <p className={styles.SlovaZaJos}>Musaka sa mesom zeljem i kiselim mlekom</p>
              </div>
             </div>
          </div>
        </div>
      </div>
  </div>
  );
}