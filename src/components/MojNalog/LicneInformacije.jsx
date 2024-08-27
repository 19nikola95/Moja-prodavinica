import styles from '@/styles/proizvodiKojiMiSeSvidjaju.module.scss';
export function ProizvodiKojiMiSeSvidjajuKomponente({imeiPrezime,adresaiMesto,email,brojMobilnog }){
    return <div>
    <div className={styles.KontenjerIme}>
    <p className={styles.IzgledSlovaProfila}>{imeiPrezime}</p>
    <img  className={styles.SimbolIzmeni} src="/SlikeZnakova/zamena.png" alt=""/>
    </div>
      <div className={styles.KontenjerMesto}>
      <p className={styles.IzgledMestaProfila}>{adresaiMesto}</p>
      <img  className={styles.SimbolIzmeni1} src="/SlikeZnakova/zamena.png" alt=""/>
      </div>
      <div className={styles.KontenjerEmail}>
            <p className={styles.IzgledEmailaProfila}>{email}</p>
            <img  className={styles.SimbolIzmeni2} src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
          <div className={styles.KontenjerBroj}>
            <p className={styles.IzgledBrojaProfila}>{brojMobilnog}</p>
            <img  className={styles.SimbolIzmeni3} src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
</div>
}