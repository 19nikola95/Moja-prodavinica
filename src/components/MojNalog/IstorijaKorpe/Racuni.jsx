import styles from '@/styles/istorijaKorpe.module.scss';
import Link from 'next/link';
export function ZaSveRacune({Racun}){
    return <Link href={`/moj-nalog//${Racun.id}`}>
 <div className={styles.KontenjerZaRacun}>
<div className={styles.PrvaParticija}>
<p>RAČUN</p>
</div>
<div className={styles.DrugaParticija}>
<p>Datum:</p>
</div>
<div className={styles.TrecaParticija}>
<p>{Racun.datum}</p>
</div>
<div className={styles.CetvrtaParticija}>
<p>Cena:</p>
</div>
<div className={styles.PetaParticija}>
<p>{Racun.UkupnaCena}din</p>
</div>
</div>
    </Link>
}