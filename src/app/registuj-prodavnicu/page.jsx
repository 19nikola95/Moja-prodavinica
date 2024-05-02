export default function registrujprodavnicu() {
  return (
  <div>
    <div className="KontenjerZaKontaktirajNas">
   <div className="KontenjerGornjegObaveštenja">
        <p className="IzgledSlovaObavestenja">Ukoliko imate prodavnicu i želite da bude vidljiva sivma preko aplikacije popunite formular ispod</p>
        </div>
        <p className="IzgledSlovaNaslovaOProdavnici">Podaci o prodavnici:</p>
        <div className="KontenjerNazivProdavnice">
          <p className="IzgledSvihTekstovaZaKontaktirajNas">Naziv prodavnice:</p>
          <input className="IzgledSvihInputaZaKontaktirajNas" type="text"/>
        </div>
        <div className="KontenjerMestoProdavnice">
          <p className="IzgledSvihTekstovaZaKontaktirajNas">Mesto:</p>
          <input className="IzgledMestoInputaZaKontaktirajNas" type="text"/>
        </div>
        <div className="KontenjerUlicaProdavnice">
          <p className="IzgledSvihTekstovaZaKontaktirajNas">Ulica:</p>
          <input className="IzgledSvihInputaZaKontaktirajNas" type="text"/>
        </div>
        <div className="KontenjerBrojProdavnice">
          <p className="IzgledSvihTekstovaZaKontaktirajNas">Broj:</p>
          <input className="IzgledBrojInputaZaKontaktirajNas" type="text"/>
        </div>
        <p  className="IzgledSlovaNaslovaOvlasniku">Podaci o vlasniku prodavnice:</p>
        <div className="KontenjerImeVlasnika">
          <p className="IzgledSvihTekstovaZaKontaktirajNas">Ime:</p>
          <input className="IzgledImeInputaZaKontaktirajNas" type="text"/>
        </div>
        <div className="KontenjerPrezime">
          <p className="IzgledSvihTekstovaZaKontaktirajNas">Prezime:</p>
          <input className="IzgledImeInputaZaKontaktirajNas" type="text"/>
        </div>
        <div className="KontenjerBrojTelefona">
        <p className="IzgledSvihTekstovaZaKontaktirajNas">Broj telefona:</p> 
        <input className="IzgledImeInputaZaKontaktirajNas" type="text"/>
      </div>
      <div className="KontenjeEmail">
        <p className="IzgledSvihTekstovaZaKontaktirajNas">Email:</p>
        <input className="IzgledEmailInputaZaKontaktirajNas" type="text"/>
      </div>
      <button className="IzgledDugmetaZaRegistraciju">Registracija</button>
      <div className="Okvir1">
      </div>
      
      <div className="KontenjerDodatneInfromacije">
      <p className="DodatneInfromacije">Za sve dodatne infromacije kontaktirajte nas</p>
      </div>
    <div className="Informacije">
    <div className="KontenjeEmailObavestenja">
      <p className="IzgledSvihTekstovaZaKontaktirajNas">Email:</p>
      <input className="IzgledEmailInputaZaKontaktirajNas1" type="text" placeholder="Unesite vaš email"/>
    </div>
    <div className="KontenjeBrojlObavestenja">
      <p className="IzgledSvihTekstovaZaKontaktirajNas">Broj telefona:</p>
      <input className="IzgledImeInputaZaKontaktirajNas" type="text" placeholder="Unesite vaš broj"/>
    </div>
    </div>
     <div className="KontenjerTekstUputa">
      <p className="IzgledObavestenjaTekstovaZaKontaktirajNas">Ukoliko imate dodatne zahteve, pitanja ili nekih nejasnoća ovde slobodno pitajte:</p>
      </div>
      <div className="PostaviPitanje">
      <textarea rows="10" className="IzgledBoxObavestenjaInputaZaKontaktirajNas" type="text" placeholder="Šta god vas zanima ovde napišite"></textarea>
      </div>

    <div className="KontenjerZaDugme">
    <button className="DugmeUpit">Pošalji upit</button>
    </div>
  </div>
  </div>
  );
}