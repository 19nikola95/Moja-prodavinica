import styles from '../../../../../../styles/bar-za-naslovnu/predlog-za-obroke/glavnimenipredjela.module.scss';
import Link from "next/link"
export default function GlavniMeniPredjela() {
  return (
  <div>
 <div className={styles.GlavniKontenjerZaSadrzaj}>
      <div className={styles.VideoReklame}></div>
      <p className={styles.IzgledSlovaNaslova}>Predjelo</p>
      <div className={styles.KontenjerSaIzboromObroka}>
      <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/topla-predjela">
        <button className={styles.IzgledDugmetaZaObroke}>Topla predjela</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/hladna-predjela-i-salate-torte">
        <button className={styles.IzgledDugmetaZaObroke}>Hladna predjela i slane torete</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/peciva">
        <button className={styles.IzgledDugmetaZaObroke}>Peciva</button>
        </Link>
        <Link href="/bar-sa-naslovne/predlog-za-obroke/predjelo/umaci">
        <button className={styles.IzgledDugmetaZaObroke}>Umaci</button>
        </Link>
      </div>
      <div className={styles.KontenjerSaObrocima}>
        <div className={styles.KontenjerSaPojedinacnimObrokom}>
          <div className={styles.KontenjerZaSliku}>
            <img className={styles.IzgledSlike} src="/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg" alt=""/>
          </div>
          <div className={styles.KonjtenjerZaTekst}>
            <p>Musaka</p>
          </div>
        </div>
        </div>
    </div>
  </div>
    );
  }