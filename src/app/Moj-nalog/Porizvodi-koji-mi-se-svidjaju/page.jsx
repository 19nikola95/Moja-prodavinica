export default function proizvodiKojiMiSeSvidjaju() {
  return (
  <div>
    <div className="MojNalog">
        <div className="InicijalniPodatci">
          <div className="KontenjerSlikaProfila">
            <img  className="IzgledProfilneSlike" src="../../../../public/Moj nalog/bred pit.jpg" alt=""/>
            <p className="IzgledSlovaProfila">Nikola Milojević</p>
            <p className="IzgledMestaProfila">Jasenička 2 Smederevsla Palanka Srbija</p>
            <p className="IzgledEmailaProfila">nikolamilojevic78@gmail.com</p>
            <p className="IzgledBrojaProfila">066001215</p>
            <img  className="SimbolIzmeni" src="Moj nalog/Simbol izmeni.jpg" alt="Nema"/>
            <img  className="SimbolIzmeni1" src="Moj nalog/ProizvodiKojiMiSeSvidjaju/Simbol izmeni.jpg" alt=""/>
            <img  className="SimbolIzmeni2" src="../../../../public/Moj nalog/Simbol izmeni.jpg" alt=""/>
            <img  className="SimbolIzmeni3" src="../../../../public/Moj nalog/Simbol izmeni.jpg" alt=""/>
            <button className="DugmeSacuvajIzmene">Sačuvaj izmene</button>
            <button className="DugmeOdjaviSe">Odjavi se</button>
            <div className="LinijaOdvajanja"></div>
          </div>
        </div>
        <div className="BarZaNavigaciju">
          <button className="DugmeProizvodiKojiMiSeSvidjaju">Proizvodi koji mi se sviđaju</button>
          <button className="DugmeMojaInteresovanja">Moja interesovanja</button>
          <button className="DugmeIstorijaKorpe">Istorija korpe</button>
          <button className="MojeProdavnice">Moje prodavnice</button>
          <div className="LinijaNavigacije"></div>
        </div>
        <div className="ProizvodiKojiSeSvidjaju">

        </div>
      </div>
  </div>
  );
}
