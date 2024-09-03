import styles from '@/styles/bar-za-naslovnu/predlog-za-obroke/glavnimenipredlogzaobroke.module.scss';
import { SlikaGlavnogJela } from './SlikaGlavnogJela';
import Link from 'next/link';
export function GlavniMeniPredlogZaObroke({nazivObroka}){
    return <div>
           <Link href="/bar-sa-naslovne/predlog-za-obroke/pojedinacni-obrok">
        <div className={styles.KontenjerSaPojedinacnimObrokom}>
          <SlikaGlavnogJela slika={"/bar-za-navigaciju/predlog-za-obroke/Musaka.jpg"}/>
          <div className={styles.KonjtenjerZaTekst}>
            <p className={styles.IzgledSlovaObroka}>{nazivObroka}</p>
          </div>
        </div>
        </Link>
    </div>
}