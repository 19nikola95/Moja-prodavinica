import styles from '@/styles/bar-za-naslovnu/nagradne-igre/pojedinacniMeni.module.scss';
export function NagradeZaOsvanjanje({nagrade1}){
    return <p className={styles.IzgledSlovaOpisa}> {nagrade1}</p>
}