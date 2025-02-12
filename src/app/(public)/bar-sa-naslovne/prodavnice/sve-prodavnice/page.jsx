import styles from '@/styles/bar-za-naslovnu/prodavnice/sveprodavnice.module.scss';
import { GlaniMeniProdavnica } from '@/components/KomponenteMojeProdavnice/IzgledGlavnogMenijaProdanice';
import { SveProdavnice } from '@/mocks/prodavnice-glavni-meni';
import { FunkcijaReklama } from '@/components/VideoReklame/ReklamniMaterijal';
import { ReklamneSlike } from '@/mocks/reklame';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerPocetneStrane}>
  <div className={styles.VideoReklame}>
  {ReklamneSlike.map((ReklamneSlika) => <FunkcijaReklama slika={ReklamneSlika.SLIKA} link={ReklamneSlika.LINK} />)}
  </div>
  <div className={styles.PozicijaNaslova}>
  <p className={styles.IzgledNaslova}>Sve prodavnice</p>
  </div>
  <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga prodavnica"/>
      </div>
        <div className={styles.KontenjerSaProdavnicama}>
        {SveProdavnice.map((SveProdavnicA) => <GlaniMeniProdavnica imeMarketa={SveProdavnicA.NAZIV} ulicaMarekta={SveProdavnicA.ULICA} logoProdavnice={SveProdavnicA.LOGO} />)}  
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