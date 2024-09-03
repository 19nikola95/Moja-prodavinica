import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/glavnimenipredlogzaobroke.module.scss';
export function SlikaGlavnogJela({slika}){
    return <div>
 <div className={styles.KontenjerZaSliku}>
            <img className={styles.IzgledSlike} src={slika} alt=""/>
          </div>
    </div>
}