import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/pojedinacniobrok.module.scss';
export function PostupakZaRecepte({postupak1}){
    return <div>
<div className={styles.RedUDesnomKontenjeru}>
              <li>{postupak1}</li>
            </div>
    </div>
}