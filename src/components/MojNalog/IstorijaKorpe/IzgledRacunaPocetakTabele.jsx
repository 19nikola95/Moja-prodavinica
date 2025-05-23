import styles from '../../../styles/Racun.module.scss';
export function IzgledRacunaNaPocetku({imeProizvoda, brojProizvoda,cenaProizvoda, slikaRacuna}){
    return    <div className={styles.RedUGornjemKontenjeru}>
     <p className={styles.ImeProizvoda}>{slikaRacuna}</p>
     <p className={styles.ImeProizvoda}>{imeProizvoda}</p>
     <p className={styles.ImeProizvoda}>{brojProizvoda}</p>
     <p className={styles.ImeProizvoda}>{cenaProizvoda} </p>
        </div>
}