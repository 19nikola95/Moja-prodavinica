import styles from '@/styles/pocetnastrana.module.scss';
export function KontenjerOpisNamernica({imeProizvoda,TezinaProizvoda,ProizvodjacProizvoda}){
    return <div>
    <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <span>{imeProizvoda}</span>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
        <span>{TezinaProizvoda}</span>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
        <span>{ProizvodjacProizvoda}</span>
        </div>
      </div>
}