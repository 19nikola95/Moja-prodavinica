import styles from '@/styles/bar-za-naslovnu/nagradne-igre/pojedinacniMeni.module.scss';
export function LinkSajta({link1}){
    return  <p className={styles.IzgledSlovaOpisa}><a href= {link1}>{link1}</a></p>
}