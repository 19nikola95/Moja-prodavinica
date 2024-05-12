export default function kontaktirajnas() {
  return (
  <div>
    <div className="KontenjerZaKontaktirajNasPravi">
      <p className="IzgledNaslova">Kontektirajte nas</p>
      <div className="KontenjerOpisa">
      <p className="Opis">Aplikacija Moja prodavnica je napravljena kako bi pomogla svim korisnicima prilikom kupovine. Cilj nam je da aplikacija bude korisna i efikasna. Ukoliko imate predlog za poboljšanje slobodno podelite to sa nama jer cenimo Vaše mišljenje i uzećemo u obzir za nova poboljšanja. Takođe ukoliko Vas nešto zanima ili imate zanimljivu temu posetite naš blog.</p>
      </div>
      <div className="KontenjeEmailObavestenja">
        <p className="IzgledSvihTekstovaZaKontaktirajNas">Email:</p>
        <input className="IzgledEmailInputaZaKontaktirajNas" type="text" placeholder="Unesite vaš email"/>
      </div>
      <textarea rows="10" className="IzgledBoxObavestenjaInputaZaKontaktirajNas" type="text" placeholder="Napišite poruku"></textarea>
      </div>
      <div className="KontenjerZaDugme">
      <button className="DugmeZaPoruku">Pošalji poruku</button>
      </div>
  </div>
  );
}
