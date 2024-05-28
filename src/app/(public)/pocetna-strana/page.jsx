
import styles from '../../../styles/pocetnastrana.module.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
   <div  className={styles.KontenjerPocetneStrane}>
<div className={styles.VideoReklame}></div>
<div className={styles.KontenjerZaDugmice}>
  <Link href="/bar-sa-naslovne/svi-proizvodi/glavni-meni">
<button className={styles.DugmeIzbora}>Svi proizvodi</button> 
</Link>
<Link href="/bar-sa-naslovne/predlog-za-obroke/glavni-meni">
<button className={styles.DugmeIzbora}>Predlog za obroke</button>
</Link>
<Link href="/bar-sa-naslovne/kako-to/glavni-meni">
<button className={styles.DugmeIzbora}>Kako to ?</button>
</Link>
<Link href="/bar-sa-naslovne/nagradne-igre/glavni-meni">
<button className={styles.DugmeIzbora}>Nagradna igra</button>
</Link>
<Link href="/bar-sa-naslovne/prodavnice/sve-prodavnice">
<button className={styles.DugmeIzbora}>Prodavnice</button>
</Link>
</div>
<p className={styles.IzgledSlovaObavestenja}>
  Samo za vas preporučujemo:
</p>
<div className={styles.KontenjerPreporuceniProizvodi}>
<Link href="bar-sa-naslovne/svi-proizvodi/pojedinacni-proizvodi">
  <div className={styles.KontenjerProizvoda}>
    <div className={styles.GornjiDeoKontenjeraProizvoda}>
    <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className={styles.KontenjerZaTekstProizvoda}>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Mleko od badema</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>350g</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className={styles.DonjiDeoKontenjeraProizvoda}>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Univerexport</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>DIS</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Aman</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Idea</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Mega Market</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Gomex</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>STR MAJA</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Tempo</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
    </div>
  </div>
</Link>
  <div className={styles.KontenjerProizvoda}>
  <div className={styles.GornjiDeoKontenjeraProizvoda}>
      <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className={styles.KontenjerZaTekstProizvoda}>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Mleko od badema</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>350g</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className={styles.DonjiDeoKontenjeraProizvoda}>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Univerexport</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>DIS</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Aman</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Idea</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Mega Market</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Gomex</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>STR MAJA</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Tempo</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
    </div>
  </div>

</div> {/* Ovo je samo za vas proizvodi */}
<div className={styles.KontenjerZaSledeceINazad}>
<button className={styles.DugmeZaStranice}>Nazad</button>
<button className={styles.DugmeZaStranice}>Sledeće</button>
</div>
<p className={styles.IzgledSlovaObavestenja}>
  Proizvodi po vašem ukusu:
</p>
<div className={styles.KontenjerPreporuceniProizvodi}>
 
  <div className={styles.KontenjerProizvoda}>
 < div className={styles.GornjiDeoKontenjeraProizvoda}>
      <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className={styles.KontenjerZaTekstProizvoda}>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Mleko od badema</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>350g</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className={styles.DonjiDeoKontenjeraProizvoda}>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Univerexport</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>DIS</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Aman</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Idea</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Mega Market</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Gomex</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>STR MAJA</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Tempo</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
    </div>
</div>

  <div className={styles.KontenjerProizvoda}>
  <div className={styles.GornjiDeoKontenjeraProizvoda}>
  <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>  
      <div className={styles.KontenjerZaTekstProizvoda}>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Mleko od badema</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>350g</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className={styles.DonjiDeoKontenjeraProizvoda}>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Univerexport</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>DIS</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Aman</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Idea</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Mega Market</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Gomex</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>STR MAJA</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Tempo</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
    </div>
  </div>
</div>
 {/* Ovo je preporučeni proizvodi */}
<div className={styles.KontenjerZaSledeceINazad}>
<button className={styles.DugmeZaStranice}>Nazad</button>
<button className={styles.DugmeZaStranice}>Sledeće</button>
</div>
<p className={styles.IzgledSlovaObavestenja}>
  Najpopularniji proizvodi:
</p>
<div className={styles.KontenjerPreporuceniProizvodi}>
   <div className={styles.KontenjerProizvoda}>
    <div className={styles.GornjiDeoKontenjeraProizvoda}>
    <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className={styles.KontenjerZaTekstProizvoda}>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Mleko od badema</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>350g</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className={styles.DonjiDeoKontenjeraProizvoda}>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Univerexport</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>DIS</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Aman</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Idea</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Mega Market</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Gomex</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>STR MAJA</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Tempo</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
    </div>
    
  </div>


  <div className={styles.KontenjerProizvoda}>
    <div className={styles.GornjiDeoKontenjeraProizvoda}>
    <img className={styles.IzgledSlikaProizvoda} src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className={styles.KontenjerZaTekstProizvoda}>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Mleko od badema</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>350g</p>
        </div>
        <div className={styles.RedUKontenjeruZaTekstProizvoda}>
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className={styles.DonjiDeoKontenjeraProizvoda}>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Univerexport</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>DIS</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Aman</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Idea</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>Mega Market</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Gomex</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledNaslovaMarketa}>
      <p>STR MAJA</p>
      </div>
      <div className={styles.IzgledNaslovaMarketa}>
      <p>Tempo</p>
      </div>
      <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
       <div className={styles.IzgledSlovaCena}>
       <p>211.300 din</p>
       </div>
    </div>
  </div>

</div> {/* Ovo je najpopularniji proizvodi */}
<div className={styles.KontenjerZaSledeceINazad}>
<button className={styles.DugmeZaStranice}>Nazad</button>
<button className={styles.DugmeZaStranice}>Sledeće</button>
</div>
</div>
</div>
  );
}