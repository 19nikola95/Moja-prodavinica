import styles from '@/styles/pocetnastrana.module.scss';
export function KontenjerProizvodaImeICena({ime, cena}){
    return  <div>
         <div className={styles.IzgledNaslovaMarketa}>
      <span>{ime}</span>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <span>{cena} din</span>
       </div>
    </div>
}