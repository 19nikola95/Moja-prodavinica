import styles from '@/styles/bar-za-naslovnu/svi-proizvodi/pojedinacniproizvodi.module.scss';
export function UpustvoZaUpotrebu({upustvo}){
    return <div>
  <p className={styles.TekstOpisa}><b>Upustvo za upotrebu:</b> {upustvo}</p>
    </div>
}