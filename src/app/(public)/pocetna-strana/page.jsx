import '../../../styles/_pocetnastrana.scss';
import Link from "next/link"
export default function pocetna() {
  return (
  <div>
   <div  className="KontenjerPocetneStrane">
<div className="VideoReklame"></div>
<div className="KontenjerZaDugmice">
  <Link href="/bar-sa-naslovne/svi-proizvodi/glavni-meni">
<button className="DugmeIzbora">Svi proizvodi</button> 
</Link>
<Link href="/bar-sa-naslovne/predlog-za-obroke/glavni-meni">
<button className="DugmeIzbora">Predlog za obroke</button>
</Link>
<Link href="/bar-sa-naslovne/kako-to/glavni-meni">
<button className="DugmeIzbora">Kako to ?</button>
</Link>
<Link href="/bar-sa-naslovne/nagradne-igre/glavni-meni">
<button className="DugmeIzbora">Nagradna igra</button>
</Link>
<Link href="/bar-sa-naslovne/prodavnice/sve-prodavnice">
<button className="DugmeIzbora">Prodavnice</button>
</Link>
</div>
<p className="IzgledSlovaObavestenja">
  Samo za vas preporučujemo:
</p>
<div className="KontenjerPreporuceniProizvodi">
<Link href="/bar-sa-naslovne/svi-proizvodi/pojedinacni-proizvodi">
  <div className="KontenjerProizvoda">
    <div className="GornjiDeoKontenjeraProizvoda">
      <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className="KontenjerZaTekstProizvoda">
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Mleko od badema</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>350g</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className="DonjiDeoKontenjeraProizvoda">
      <div className="IzgledNaslovaMarketa">
      <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
    </div>
  </div>
</Link>
  <div className="KontenjerProizvoda">
  <div className="GornjiDeoKontenjeraProizvoda">
      <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className="KontenjerZaTekstProizvoda">
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Mleko od badema</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>350g</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className="DonjiDeoKontenjeraProizvoda">
      <div className="IzgledNaslovaMarketa">
      <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
    </div>
  </div>

</div> {/* Ovo je samo za vas proizvodi */}
<div className="KontenjerZaSledeceINazad">
<button className="DugmeZaStranice">Nazad</button>
<button className="DugmeZaStranice">Sledeće</button>
</div>
<p className="IzgledSlovaObavestenja">
  Proizvodi po vašem ukusu:
</p>
<div className="KontenjerPreporuceniProizvodi">
 
  <div className="KontenjerProizvoda">
 < div className="GornjiDeoKontenjeraProizvoda">
      <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className="KontenjerZaTekstProizvoda">
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Mleko od badema</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>350g</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className="DonjiDeoKontenjeraProizvoda">
      <div className="IzgledNaslovaMarketa">
      <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
    </div>
</div>

  <div className="KontenjerProizvoda">
  <div className="GornjiDeoKontenjeraProizvoda">
      <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className="KontenjerZaTekstProizvoda">
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Mleko od badema</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>350g</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className="DonjiDeoKontenjeraProizvoda">
      <div className="IzgledNaslovaMarketa">
      <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
    </div>
  </div>
</div>
 {/* Ovo je preporučeni proizvodi */}
<div className="KontenjerZaSledeceINazad">
<button className="DugmeZaStranice">Nazad</button>
<button className="DugmeZaStranice">Sledeće</button>
</div>
<p className="IzgledSlovaObavestenja">
  Najpopularniji proizvodi:
</p>
<div className="KontenjerPreporuceniProizvodi">
   <div className="KontenjerProizvoda">
    <div className="GornjiDeoKontenjeraProizvoda">
      <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className="KontenjerZaTekstProizvoda">
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Mleko od badema</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>350g</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className="DonjiDeoKontenjeraProizvoda">
      <div className="IzgledNaslovaMarketa">
      <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
    </div>
    
  </div>


  <div className="KontenjerProizvoda">
    <div className="GornjiDeoKontenjeraProizvoda">
      <img className="IzgledSlikaProizvoda" src="/SlikaProizvoda/Mleko.jpeg" alt=""/>
      <div className="KontenjerZaTekstProizvoda">
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Mleko od badema</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>350g</p>
        </div>
        <div className="RedUKontenjeruZaTekstProizvoda">
          <p>Doktor etker</p>
        </div>
      </div>
    </div>
    <div className="DonjiDeoKontenjeraProizvoda">
      <div className="IzgledNaslovaMarketa">
      <p>Univerexport</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>DIS</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Aman</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Idea</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>Mega Market</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Gomex</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledNaslovaMarketa">
      <p>STR MAJA</p>
      </div>
      <div className="IzgledNaslovaMarketa">
      <p>Tempo</p>
      </div>
      <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
       <div className="IzgledSlovaCena">
       <p>211.300 din</p>
       </div>
    </div>
  </div>

</div> {/* Ovo je najpopularniji proizvodi */}
<div className="KontenjerZaSledeceINazad">
<button className="DugmeZaStranice">Nazad</button>
<button className="DugmeZaStranice">Sledeće</button>
</div>
</div>
</div>
  );
}