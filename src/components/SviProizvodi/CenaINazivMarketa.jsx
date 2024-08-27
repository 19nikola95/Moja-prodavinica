import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/sviproizvodiglavnimeni.module.scss';
export function GlavniMeniCenaiNaziv({NazivMarketa, cenaMarketa}){
    return  <div>
    <div className={styles.IzgledNaslovaMarketa}>
    <span>{NazivMarketa}</span>
</div>
<div className={styles.IzgledSlovaCena}>
<span> {cenaMarketa}din</span>
</div>
</div>
}