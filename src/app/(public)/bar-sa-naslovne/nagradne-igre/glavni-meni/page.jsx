import { NagradnaIgra } from '@/components/KomponenteGlavnogMeniaNagradneIgre/NagradnaIgra';
import styles from '../../../../../styles/bar-za-naslovnu/nagradne-igre/glavnimeniNagradneigre.module.scss';
export default function GlavniMeniNagradneIgre() {
  return (
  <div>
<div className={styles.GlavniKontenjerZaSadrzaj}>
  <div className={styles.VideoReklame}></div>
<div className={styles.PozicijaNaslova}>
      <p className={styles.IzgledSlovaNaslova}>Sve nagradne igre</p>
      </div>
      <div className={styles.ProstorZaKontenjereNagradneIgre}>
    <NagradnaIgra ime="Nagrada igra Mercedes 1" datumOd={"15.3.2024"} datumDo={"15.8.2024"} slikaUrl={"/bar-za-navigaciju/nagradne-igre/SlikaLavNagradneIgre.jpg"}/>
    <NagradnaIgra ime="Nagrada igra Mercedes 2"datumOd={"15.3.2024"} datumDo={"15.8.2024"} slikaUrl={"/bar-za-navigaciju/nagradne-igre/SlikaLavNagradneIgre.jpg"}/>
    <NagradnaIgra ime="Nagrada igra Mercedes 3" datumDo={"15.8.2024"} slikaUrl={"/bar-za-navigaciju/nagradne-igre/SlikaLavNagradneIgre.jpg"}/>
    <NagradnaIgra ime="Nagrada igra Mercedes 4"datumDo={"15.8.2024"} slikaUrl={"/bar-za-navigaciju/nagradne-igre/SlikaLavNagradneIgre.jpg"}/>
    <NagradnaIgra ime="Nagrada igra Mercedes 5"datumDo={"15.8.2024"} slikaUrl={"/bar-za-navigaciju/nagradne-igre/SlikaLavNagradneIgre.jpg"}/>
    <NagradnaIgra ime="Nagrada igra Mercedes 6"datumDo={"15.8.2024"} slikaUrl={"/bar-za-navigaciju/nagradne-igre/SlikaLavNagradneIgre.jpg"}/>
    <NagradnaIgra ime="Nagrada igra Mercedes 7"datumDo={"15.8.2024"} slikaUrl={"/bar-za-navigaciju/nagradne-igre/SlikaLavNagradneIgre.jpg"}/>
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