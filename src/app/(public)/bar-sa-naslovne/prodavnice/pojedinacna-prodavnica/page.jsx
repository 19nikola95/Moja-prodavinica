import styles from '../../../../../styles/bar-za-naslovnu/prodavnice/pojedinacneProdavnice.module.scss';
import { PojedinacnaProdavnica } from '@/components/KomponenteMojeProdavnice/IzgledPojedinacneProdavnice';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
  <div className={styles.VideoReklame}></div>
  <div className={styles.KontenjerNaslovILogo}>
    <img className={styles.LogoZaNaslov} src="/LogoProdavnica/DIS LOGO.jpg" alt=""/>
    <p className={styles.IzgledSlovaNaslova}>DIS</p>
  </div>
  <div className={styles.KontenjerZaOpis}>
   <p className={styles.IzgledOpisa}>Dis je market koji ima svoju aplikaciju kako bi ste uštedeli još više ili dobili neku povoljnost preuzmite aplikaciju <a href="https://www.nasakartica.rs/">Naša kartica</a></p>
   </div>
        <div className={styles.KontenjerSaSvimProizvodima}>
         <PojedinacnaProdavnica imeProizvoda={"DIS"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"}/>
         <PojedinacnaProdavnica imeProizvoda={"IDEA"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"}/>
         <PojedinacnaProdavnica imeProizvoda={"AMAN"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"}/>
         <PojedinacnaProdavnica imeProizvoda={"STRELAC"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"}/>
         <PojedinacnaProdavnica imeProizvoda={"TEMPO"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"}/>
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