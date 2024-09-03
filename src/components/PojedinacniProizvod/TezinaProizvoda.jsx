import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
export function Tezinaroizvoda({tezina}){
    return <div>
 <p className={styles.TekstOpisa}><b>Težina:</b> {tezina}</p>
    </div>
}