import styles from '../../../../../styles/bar-za-naslovnu/kako-to/glavnimenikakoto.module.scss';
import Link from "next/link"
export default function kontaktirajnas() {
  return (
  <div>
<div className={styles.KontenjerSaSadrzajem}>
<div className={styles.VideoReklame}></div>
    <div className={styles.PozicijaNaslova}>
    <p className={styles.SlovaNaslova}>Kako to ?</p>
    </div>
    <div className={styles.PozicijaOpisa}>
    <p className={styles.SlovaOpisa}>(U sekciji kako to naćićete odgovore na većinu svakodnevnih problema sa kojima se suočavate)</p>
    </div>
        <div className={styles.KontenjerZaPretragu}>
          <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Kako to ?"/>
        </div>
        <div className={styles.KontenjerSaResenjima}>
        <Link href="/bar-sa-naslovne/kako-to/pojedinacni-tab">
        <div className={styles.KontenjerSaIzgledom}>
          <div className={styles.KontenjerSaIzgledomGornji}>
            <img className={styles.IzgledSlikeLoga} src="/bar-za-navigaciju/kako-to/pranjevesa.jpg" alt=""/>
          </div>
          <div className={styles.KontenjerSaIzgledomDonji}>
            <p>Kako oprati stvari</p>
          </div>
        </div>
        </Link>
        <div className={styles.KontenjerSaIzgledom}>
          <div className={styles.KontenjerSaIzgledomGornji}>
            <img className={styles.IzgledSlikeLoga} src="/bar-za-navigaciju/kako-to/pranjevesa.jpg" alt=""/>
          </div>
          <div className={styles.KontenjerSaIzgledomDonji}>
            <p>Kako oprati stvari</p>
          </div>
        </div>
        <div className={styles.KontenjerSaIzgledom}>
          <div className={styles.KontenjerSaIzgledomGornji}>
            <img className={styles.IzgledSlikeLoga} src="/bar-za-navigaciju/kako-to/pranjevesa.jpg" alt=""/>
          </div>
          <div className={styles.KontenjerSaIzgledomDonji}>
            <p>Kako oprati stvari</p>
          </div>
        </div>
        <div className={styles.KontenjerSaIzgledom}>
          <div className={styles.KontenjerSaIzgledomGornji}>
            <img className={styles.IzgledSlikeLoga} src="/bar-za-navigaciju/kako-to/pranjevesa.jpg" alt=""/>
          </div>
          <div className={styles.KontenjerSaIzgledomDonji}>
            <p>Kako oprati stvari</p>
          </div>
        </div>
        <div className={styles.KontenjerSaIzgledom}>
          <div className={styles.KontenjerSaIzgledomGornji}>
            <img className={styles.IzgledSlikeLoga} src="/bar-za-navigaciju/kako-to/pranjevesa.jpg" alt=""/>
          </div>
          <div className={styles.KontenjerSaIzgledomDonji}>
            <p>Kako oprati stvari</p>
          </div>
        </div>
        <div className={styles.KontenjerSaIzgledom}>
          <div className={styles.KontenjerSaIzgledomGornji}>
            <img className={styles.IzgledSlikeLoga} src="/bar-za-navigaciju/kako-to/pranjevesa.jpg" alt=""/>
          </div>
          <div className={styles.KontenjerSaIzgledomDonji}>
            <p>Kako oprati stvari</p>
          </div>
        </div>
        <div className={styles.KontenjerSaIzgledom}>
          <div className={styles.KontenjerSaIzgledomGornji}>
            <img className={styles.IzgledSlikeLoga} src="/bar-za-navigaciju/kako-to/pranjevesa.jpg" alt=""/>
          </div>
          <div className={styles.KontenjerSaIzgledomDonji}>
            <p>Kako oprati stvari</p>
          </div>
        </div>
      </div>
        <div className={styles.KontenjerZaDugmice}>
      <button className={styles.DugmrStrane}>1</button>
      <button className={styles.DugmrStrane}>2</button>
      <button className={styles.DugmrStrane}>3</button>
      <button className={styles.DugmrStrane}>4</button>
      <button className={styles.DugmrStrane}>5</button>
    </div>
      </div>
  </div>
  );
}
