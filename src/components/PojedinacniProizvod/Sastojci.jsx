import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
export function Sastojci({sastojci}){
    return <div>
 <p className={styles.TekstOpisa}><b>Sastojci:</b> {sastojci} </p>
    </div>
}