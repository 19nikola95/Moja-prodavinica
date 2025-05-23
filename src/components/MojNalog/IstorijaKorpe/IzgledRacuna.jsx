import styles from '../../../styles/Racun.module.scss';
export function KoncePtRacuna({imeProizvoda, brojProizvoda,cenaProizvoda, slikaRacuna}){
    return    <div className={styles.RedUGornjemKontenjeru}>
     <img className={styles.SlikaProizvoda} src={slikaRacuna} alt=""/>
     <p className={styles.ImeProizvoda}>{imeProizvoda}</p>
     <p className={styles.ImeProizvoda}>{brojProizvoda}</p>
     <p className={styles.ImeProizvoda}>{cenaProizvoda} din</p>
        </div>
}