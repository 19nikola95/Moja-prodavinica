              
import Link from "next/link"
export function MainLayoutHeader() {
  return <header className="MainLayout__header">
      <div className="HeaderPozadina">
      <div className="GlavniIzgledHedera">
      <Link href="/pocetna-strana"><div className="KontenjerLoga">
         <img className="IzgledLoga" src="/Logo sajta/Logo.png" alt=""/> 
        </div></Link>
        <div className="KontenjerdShearchBara">
          <input className="IzgledShearchBara" type="text" placeholder="Unesi naziv namernice"/>
        </div>
        <div className="KontenjerZaAplikaciju">
          <div className="LevaStranjaKontenjerZaAplikaciju">
            <img className="SimbolZaAplikaciju" src="/Slike za heder/simbol-za-aplikaciju.png" alt=""/>
          </div>
          <div className="DesnaStranjaKontenjerZaAplikaciju">
            <p>Preuzmi aplikaciju</p>
          </div>
        </div>
       <Link href="/moj-nalog/porizvodi-koji-mi-se-svidjaju"> <div className="KontenjerZaAkaunt">
          <div className="LevaStranaKontenjeraZaAkaunt">
            <img  className="SimbolZaKorisnika" src="/Slike za heder/simbol-za-korisnika.png" alt=""/>
          </div>
          <div className="DesnaStranaKontenjeraZaAkaunt">
            <p>Nikola Milojević</p>
          </div>
        </div> </Link>
        <Link href="/korpa"><div className="KontenjerZaKorpu">
          <div className="LevaStranaKontenjeraZaKorpu">
            <img  className="SimboliZaKorpu" src="/Slike za heder/simbol-za-korpu.png" alt=""/>
          <div className="DesnaStranjaKontenjeraZaKorpu">
            <p>110</p>
          </div>
          </div>
        </div> </Link>
      </div>


      </div>
      <nav className="MainLayout__navigation">
        
      </nav>
    </header>
}