import styles from '../../../../../styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
        <div className={styles.VideoReklame}></div>
        <p className={styles.IzgledSlovaNaslova}>Torta od višanja</p>
        <div className={styles.KontenjerStranice}>
          <div className={styles.LevaStranaKontenjeraStranice}>
            <img className={styles.IzgledSlike} src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
            <div className={styles.RedULevomKontenjeru}>
              <p className={styles.RedULevomKontenjeruNaslov}>Potrebne stvari</p>
            </div>
            <div className={styles.RedULevomKontenjeru}>
              <p>- Silan Fresh Skz 2.850 l</p>
            </div>
            <div className={styles.RedULevomKontenjeru}>
              <p>- Ariel prasak 2kg</p>
            </div>
            <div className={styles.KontenjerIzgledDUgmetaKorpe}>
            <img className={styles.IzgledDUgmetaKorpe} src="/Slike za heder/simbol-za-korpu.png" alt=""/>
            </div>
          </div>
          <div className={styles.DesnaStranaKontenjeraStranice}>
            <div className={styles.RedUDesnomKontenjeru}>
              <p className={styles.RedUDesnomKontenjeruNaslov}>Postupak kako oprati stvari</p>
            </div>
            <div className={styles.RedUDesnomKontenjeru}>
              <p>1. Razdvojiti bele i stvari u boji</p>
            </div>
            <div className={styles.RedUDesnomKontenjeru}>
              <p>2. Ubaciti stvari u ves masinu 
              </p>
            </div>
            <div className={styles.RedUDesnomKontenjeru}>
              <p>3. U kevu kadicu sipati prasak a u srednju omeksivac
              </p>
            </div>
            <div className={styles.RedUDesnomKontenjeru}>
              <p>4. Podesiti na 90 stepeni masinu
              </p>
            </div>
            <div className={styles.RedUDesnomKontenjeru}>
              <p>5. Ukljuciti ciklus
              </p>
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