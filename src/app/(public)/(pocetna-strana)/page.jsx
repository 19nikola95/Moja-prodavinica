
import { KontenjerProizvoda } from '@/components/KomponentePocetneStrane/KontenjerProizvoda';
import styles from '../../../styles/pocetnastrana.module.scss';
import Link from "next/link";
import { proizvodi } from '@/mocks/pocetna-strana';
export default function PocetnaStrana() {
  return (
  <div>
   <div  className={styles.KontenjerPocetneStrane}>

<div className={styles.KontenjerZaDugmice}>
  <Link className={styles.LinkSviProizovi} href="/bar-sa-naslovne/svi-proizvodi/glavni-meni">
<button className={styles.DugmeIzbora}>Svi proizvodi</button> 
</Link>
<Link className={styles.LinkPredlogZaObroke} href="/bar-sa-naslovne/predlog-za-obroke/glavni-meni">
<button className={styles.DugmeIzbora}>Predlog za obroke</button>
</Link>
<Link className={styles.LinkPKakoTo} href="/bar-sa-naslovne/kako-to/glavni-meni">
<button className={styles.DugmeIzbora}>Kako to ?</button>
</Link>
<Link className={styles.LinkNagradnaIgra} href="/bar-sa-naslovne/nagradne-igre/glavni-meni">
<button className={styles.DugmeIzbora}>Nagradna igra</button>
</Link>
<Link className={styles.LinkProdavnice} href="/bar-sa-naslovne/prodavnice/sve-prodavnice">
<button className={styles.DugmeIzbora}>Prodavnice</button>
</Link>
</div>
<div className={styles.KontenjerZaNaslov}>
<p className={styles.IzgledSlovaObavestenja}>
  Samo za Vas preporučujemo:</p>
</div>
<div className={styles.KontenjerPreporuceniProizvodi}>
 {proizvodi.map((proizvod) => <KontenjerProizvoda slikaProizvoda={proizvod.slika} imeProizvoda={proizvod.naziv} tezinaProizvoda={proizvod.tezina} proizvodjacProizvoda={proizvod.proizvodjac} marketi={proizvod.marketi}/>)}

</div> {/* Ovo je samo za vas proizvodi */}
<div className={styles.KontenjerZaSledeceINazad}>
<button className={styles.DugmeZaStranice}>Nazad</button>
<button className={styles.DugmeZaStranice}>Sledeće</button>
</div>

<div className={styles.KontenjerZaNaslov}>
<p className={styles.IzgledSlovaObavestenja}>
  Proizvodi po Vašem ukusu:
</p>
</div>
<div className={styles.KontenjerPreporuceniProizvodi}>
{proizvodi.map((proizvod) => <KontenjerProizvoda slikaProizvoda={proizvod.slika} imeProizvoda={proizvod.naziv} tezinaProizvoda={proizvod.tezina} proizvodjacProizvoda={proizvod.proizvodjac} marketi={proizvod.marketi}/>)}

</div>
 {/* Ovo je preporučeni proizvodi */}
<div className={styles.KontenjerZaSledeceINazad}>
<button className={styles.DugmeZaStranice}>Nazad</button>
<button className={styles.DugmeZaStranice}>Sledeće</button>
</div>
<div className={styles.KontenjerZaNaslov}>
<p className={styles.IzgledSlovaObavestenja}>
  Najpopularniji proizvodi:
</p>
</div>
<div className={styles.KontenjerPreporuceniProizvodi}>
{proizvodi.map((proizvod) => <KontenjerProizvoda slikaProizvoda={proizvod.slika} imeProizvoda={proizvod.naziv} tezinaProizvoda={proizvod.tezina} proizvodjacProizvoda={proizvod.proizvodjac} marketi={proizvod.marketi}/>)}


</div> {/* Ovo je najpopularniji proizvodi */}
<div className={styles.KontenjerZaSledeceINazad}>
<button className={styles.DugmeZaStranice}>Nazad</button>
<button className={styles.DugmeZaStranice}>Sledeće</button>
</div>
</div>
</div>
  );
}