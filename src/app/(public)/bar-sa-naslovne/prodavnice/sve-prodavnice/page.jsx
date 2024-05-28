import styles from '../../../../../styles/bar-za-naslovnu/prodavnice/sveprodavnice.module.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerPocetneStrane}>
  <div className={styles.PozicijaNaslova}>
  <p className={styles.IzgledNaslova}>Sve prodavnice</p>
  </div>
        <div className={styles.KontenjerZaPretragu}>
          <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Unesi naziv prodavnice"/>
        </div>
        <div className={styles.KontenjerSaProdavnicama}>
        <Link href="/bar-sa-naslovne/prodavnice/pojedinacna-prodavnica">
          <div className={styles.KontenjerSaIzgledom}>
            <div className={styles.KontenjerSaIzgledomGornji}>
              <img className={styles.IzgledSlikeLoga} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.KontenjerSaIzgledomDonji}>
              <p className={styles.ImeMarketa}>DIS</p>
              <p className={styles.UlicaIbroj}>(Smederevska Palanka, Trgovačka 26)</p>
            </div>
          </div>
          </Link>
          <div className={styles.KontenjerSaIzgledom}>
            <div className={styles.KontenjerSaIzgledomGornji}>
              <img className={styles.IzgledSlikeLoga} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.KontenjerSaIzgledomDonji}>
              <p className={styles.ImeMarketa}>DIS</p>
            </div>
          </div>
          <div className={styles.KontenjerSaIzgledom}>
            <div className={styles.KontenjerSaIzgledomGornji}>
              <img className={styles.IzgledSlikeLoga} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.KontenjerSaIzgledomDonji}>
              <p className={styles.ImeMarketa}>DIS</p>
            </div>
          </div>
          <div className={styles.KontenjerSaIzgledom}>
            <div className={styles.KontenjerSaIzgledomGornji}>
              <img className={styles.IzgledSlikeLoga} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.KontenjerSaIzgledomDonji}>
              <p className={styles.ImeMarketa}>DIS</p>
            </div>
          </div>
          <div className={styles.KontenjerSaIzgledom}>
            <div className={styles.KontenjerSaIzgledomGornji}>
              <img className={styles.IzgledSlikeLoga} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.KontenjerSaIzgledomDonji}>
              <p>DIS</p>
            </div>
          </div>
          <div className={styles.KontenjerSaIzgledom}>
            <div className={styles.KontenjerSaIzgledomGornji}>
              <img className={styles.IzgledSlikeLoga} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
            </div>
            <div className={styles.KontenjerSaIzgledomDonji}>
              <p>DIS</p>
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