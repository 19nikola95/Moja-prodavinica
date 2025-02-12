import styles from '@/styles/proizvodiKojiMiSeSvidjaju.module.scss';
export function SlikaProfila({slika}){
    return <div>
  <div className={styles.KontenjerSlike}>
            <img  className={styles.IzgledProfilneSlike} src={slika} alt=""/>
            </div>
    </div>
}