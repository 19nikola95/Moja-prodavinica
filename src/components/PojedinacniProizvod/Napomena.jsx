import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
export function Napomena({napomena}){
    return <div>
  <p className={styles.TekstOpisa}><b>Napomena:</b> {napomena}</p>
    </div>
}