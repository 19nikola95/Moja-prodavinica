export function MainLayoutHeader() {
  return <header className="MainLayout__header">
      <div className="HeaderPozadina">
      <div className="GlavniIzgledHedera">
        <div className="KontenjerLoga">
         
          <img className="IzgledLoga" src="/Logo sajta/Logo.png" alt=""/>
        </div>
        <div className="KontenjerdShearchBara">
          <input className="IzgledShearchBara" type="text" placeholder="Unesi naziv namernice"/>
        </div>
        <div className="KontenjerZaLupu">
          <img className="IzgledLupe" src="/Slike za heder/simbol-za-lupu.png" alt=""/>
        </div>
        <div className="KontenjerZaAplikaciju">
          <div className="LevaStranjaKontenjerZaAplikaciju">
            <img className="SimbolZaAplikaciju" src="/Slike za heder/simbol-za-aplikaciju.png" alt=""/>
          </div>
          <div className="DesnaStranjaKontenjerZaAplikaciju">
            <p>Preuzmi aplikaciju Moja prodavnica</p>
          </div>
        </div>
        <div className="KontenjerZaAkaunt">
          <div className="LevaStranaKontenjeraZaAkaunt">
            <img  className="SimbolZaKorisnika" src="/Slike za heder/simbol-za-korisnika.png" alt=""/>
          </div>
          <div className="DesnaStranaKontenjeraZaAkaunt">
            <p>Nikola Milojević</p>
          </div>
        </div>
        <div className="KontenjerZaKorpu">
          <div className="LevaStranaKontenjeraZaKorpu">
            <img  className="SimboliZaKorpu" src="/Slike za heder/simbol-za-korpu.png" alt=""/>
          </div>
          <div className="DesnaStranjaKontenjeraZaKorpu">
            <p>0</p>
          </div>
        </div>
      </div>


      </div>
      <nav className="MainLayout__navigation">
        
      </nav>
    </header>
}