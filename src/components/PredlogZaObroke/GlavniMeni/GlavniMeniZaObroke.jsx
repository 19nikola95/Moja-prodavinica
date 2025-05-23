import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/glavnimenipredlogzaobroke.module.scss';
import { SlikaGlavnogJela } from './SlikaGlavnogJela';
import Link from 'next/link';
export function GlavniMeniPredlogZaObroke({nazivObroka, slikaObroka,PojedinacniObrok}){
    return <div>
           <Link href={`/bar-sa-naslovne/predlog-za-obroke/${PojedinacniObrok.id}`}>
        <div className={styles.KontenjerSaPojedinacnimObrokom}>
          <SlikaGlavnogJela slika={PojedinacniObrok.slikaObroka}/>
          <div className={styles.KonjtenjerZaTekst}>
            <p className={styles.IzgledSlovaObroka}>{PojedinacniObrok.naslovObroka}</p>
          </div>
        </div>
        </Link>
    </div>
}