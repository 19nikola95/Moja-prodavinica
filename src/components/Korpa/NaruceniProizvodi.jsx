import styles from '@/styles/korpa.module.scss';
export function NaruceniProizvodi({slikaProizvoda, imeProizvoda}){
    return <div>
         <div className={styles.RedZaProizvode}>
              <img className={styles.SlikaProizvodaIzKorpe} src={slikaProizvoda} alt=""/>
              <p>{imeProizvoda}</p>
              <input className={styles.BrojProizvoda} type="number"/>
              <img className={styles.IzgledZamene} src="/SlikeZnakova/zamena.png" alt=""/>
              <img className={styles.IzgledX} src="/SlikeZnakova/izgled x.jpg" alt=""/>
            </div>
    </div>
}