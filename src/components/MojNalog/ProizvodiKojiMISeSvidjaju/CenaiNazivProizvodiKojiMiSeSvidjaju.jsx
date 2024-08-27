import styles from '@/styles/proizvodiKojiMiSeSvidjaju.module.scss';
export function CenaiNazivProizvodiKojiMiSeSvidjaju({cenaProizvodiKojiMiseSvidjaju,nazivProizvodiKojiMiSeSvidjaju}){
    return <div>
    <div className={styles.IzgledNaslovaMarketa}>
    <span>{nazivProizvodiKojiMiSeSvidjaju}</span>
</div>
<div className={styles.IzgledSlovaCena}>
<span>{cenaProizvodiKojiMiseSvidjaju} din</span>
</div>
    </div>
}