import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/sviproizvodiglavnimeni.module.scss';
export function GlavniMeniCenaiNaziv({ime, cena}){
    return  <div>
    <div className={styles.IzgledNaslovaMarketa}>
    <span>{ime}</span>
</div>
<div className={styles.IzgledSlovaCena}>
<span> {cena}din</span>
</div>
</div>
}