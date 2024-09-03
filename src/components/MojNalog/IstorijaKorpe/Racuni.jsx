import styles from '@/styles/istorijaKorpe.module.scss';
export function Racun({datum, cena}){
    return <div>
 <div className={styles.KontenjerZaRacun}>
<div className={styles.PrvaParticija}>
<p>RAČUN</p>
</div>
<div className={styles.DrugaParticija}>
<p>Datum:</p>
</div>
<div className={styles.TrecaParticija}>
<p>{datum}</p>
</div>
<div className={styles.CetvrtaParticija}>
<p>Cena:</p>
</div>
<div className={styles.PetaParticija}>
<p>{cena} din</p>
</div>
</div>
    </div>
}