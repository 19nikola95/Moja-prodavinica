import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
export function KolicinaProizvoda({kolicina}){
    return <div>
 <p className={styles.TekstOpisa}><b>Količina:</b>{kolicina}</p>
    </div>
}