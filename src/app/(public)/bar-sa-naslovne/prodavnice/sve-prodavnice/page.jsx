import styles from '@/styles/bar-za-naslovnu/prodavnice/sveprodavnice.module.scss';
import { GlaniMeniProdavnica } from '@/components/KomponenteMojeProdavnice/IzgledGlavnogMenijaProdanice';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerPocetneStrane}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.PozicijaNaslova}>
  <p className={styles.IzgledNaslova}>Sve prodavnice</p>
  </div>
  <div className={styles.KontenjerZaPretragu}>
        <input className={styles.IzgledInputaZaProdavnice} type="text" name="" id="" placeholder="Pretraga obroka"/>
      </div>
        <div className={styles.KontenjerSaProdavnicama}>
        <GlaniMeniProdavnica imeMarketa= {"DIS"} ulicaMarekta={"Smederevska Palanka, Trgovacka 24"}/>
        <GlaniMeniProdavnica imeMarketa= {"DIS"} ulicaMarekta={"Smederevska Palanka, Trgovacka 25"}/>
        <GlaniMeniProdavnica imeMarketa= {"DIS"} ulicaMarekta={"Smederevska Palanka, Trgovacka 26"}/>
        <GlaniMeniProdavnica imeMarketa= {"DIS"} ulicaMarekta={"Smederevska Palanka, Trgovacka 27"}/>
        <GlaniMeniProdavnica imeMarketa= {"DIS"} ulicaMarekta={"Smederevska Palanka, Trgovacka 28"}/>
        <GlaniMeniProdavnica imeMarketa= {"DIS"} ulicaMarekta={"Smederevska Palanka, Trgovacka 29"}/>
        <GlaniMeniProdavnica imeMarketa= {"DIS"} ulicaMarekta={"Smederevska Palanka, Trgovacka 30"}/>
        <GlaniMeniProdavnica imeMarketa= {"DIS"} ulicaMarekta={"Smederevska Palanka, Trgovacka 31"}/>
        <GlaniMeniProdavnica imeMarketa= {"DIS"} ulicaMarekta={"Smederevska Palanka, Trgovacka 32"}/>
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