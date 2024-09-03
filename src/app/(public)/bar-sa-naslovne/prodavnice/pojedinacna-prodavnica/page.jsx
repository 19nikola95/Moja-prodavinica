import styles from '../../../../../styles/bar-za-naslovnu/prodavnice/pojedinacneProdavnice.module.scss';
import { PojedinacnaProdavnica } from '@/components/KomponenteMojeProdavnice/IzgledPojedinacneProdavnice';
import { PojedinacnaProdavnicaOpis } from '@/components/KomponenteMojeProdavnice/PojedinacnaProdavnicaObavestenje';
export default function pocetna() {
  return (
  <div>
<div className={styles.KontenjerSadrzaja}>
  <div className={styles.VideoReklame}></div>
<PojedinacnaProdavnicaOpis logoProdavnice={"/LogoProdavnica/DIS LOGO.jpg"} nazivProdavnice={"DIS"} nazivProdavniceUOPis={"Dis"} linSajta={"https://www.nasakartica.rs/"}/>
        <div className={styles.KontenjerSaSvimProizvodima}>
         <PojedinacnaProdavnica imeProizvoda={"DIS"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"} slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"}/>
         <PojedinacnaProdavnica imeProizvoda={"IDEA"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"} slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"}/>
         <PojedinacnaProdavnica imeProizvoda={"AMAN"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"} slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"}/>
         <PojedinacnaProdavnica imeProizvoda={"STRELAC"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"} slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"}/>
         <PojedinacnaProdavnica imeProizvoda={"TEMPO"} tezinaProizvoda={"350"} proizvodjacProizvoda={"Doktor Etker"} cenaProizvoda={"340,45"} slikaProizvoda={"/SlikaProizvoda/Mleko.jpeg"}/>
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