import styles from '@/styles/bar-za-naslovnu/nagradne-igre/pojedinacniMeni.module.scss';
export function TekstNaslova({naslov}){
    return <div>
      <div className={styles.PozicijaNaslova}>
        <p className={styles.IzgledSlovaNaslova}>{naslov}</p>
        </div>
    </div>
}