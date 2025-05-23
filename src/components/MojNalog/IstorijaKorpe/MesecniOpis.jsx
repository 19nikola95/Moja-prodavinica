import styles from '@/styles/istorijaKorpe.module.scss';
export function MesecniOpis({mesec, cena,racun}){
    return <div>
      <div className={styles.OpisniTekstMeseca}>
<p className={styles.IzgledTekstaObavestenja}>Ukoliko ste kupili proizvode iz korpe pomocu aplikacije u mesecu {mesec} uštedeli ste: {cena} din</p>
</div>
    </div>
}