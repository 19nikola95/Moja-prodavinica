import '../../../../styles/_istorijaKorpe.scss';
import Link from "next/link";
export default function pocetna() {
  return (
  <div>
 <div className="MojNalog">
        <div className="InicijalniPodatci">
          <div className="KontenjerSlikaProfila">
            <img  className="IzgledProfilneSlike" src="/Moj nalog/bred pit.jpg" alt=""/>
            <div className="KontenjerIme">
            <p className="IzgledSlovaProfila">Nikola Milojević</p>
            <img  className="SimbolIzmeni" src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className="KontenjerMesto">
            <p className="IzgledMestaProfila">Jasenička 2 Smederevsla Palanka Srbija</p>
            <img  className="SimbolIzmeni1" src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className="KontenjerEmail">
            <p className="IzgledEmailaProfila">nikolamilojevic78@gmail.com</p>
            <img  className="SimbolIzmeni2" src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
           <div className="KontenjerBroj">
            <p className="IzgledBrojaProfila">066001215</p>
            <img  className="SimbolIzmeni3" src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
            <button className="DugmeSacuvajIzmene">Sačuvaj izmene</button>
            <button className="DugmeOdjaviSe">Odjavi se</button>
            <div className="LinijaOdvajanja"></div>
          </div>
        </div>
    <div className="BarZaNavigaciju">
    <Link href="/moj-nalog/porizvodi-koji-mi-se-svidjaju"><button className="DugmeProizvodiKojiMiSeSvidjaju">Proizvodi koji mi se sviđaju</button> </Link>
        <Link href="/moj-nalog/moja-interesovanja"><button className="DugmeMojaInteresovanja">Moja interesovanja</button> </Link>
           <button className="DugmeIstorijaKorpe">Istorija korpe</button>
          <Link href="/moj-nalog/moje-prodavnice"><button className="MojeProdavnice">Moje prodavnice</button></Link>
      </div>
    <div className="LinijaNavigacije"></div>
  <p className="IzgledSlovaIstorijaKorpe">Istorija korpe</p>
<div className="KontenjerzaUstetuPrekoAplikacije">
<p className="izgledTekstaOpisa">Koristeci aplikaciju u ovoj godini ste ustedeli:</p>
<p className="IzgledCeneUstede">54.320,21 din</p>
<img className="IzgledSmajliUstede" src="/DodatniSmajlici/Smajli ustede.png" alt=""/>
</div>
<div className="KontenjerZaMesecnuKupovinu">
<div className="OpisniTekstMeseca">
<p className="IzgledTekstaObavestenja">Ukoliko ste kupili proizvode iz korpe pomocu aplikacije u mesecu</p>
<p className="IzgledTekstaObavestenja">Aprilu</p>
<p className="IzgledTekstaObavestenja">ustedeli ste:</p>
<p className="IzgledPromenljivogTeksta">2456 din</p>
</div>
<div className="KontenjerzaMesecneTroskove">
 
  <div className="KontenjerZaRacun">

<div className="PrvaParticija">
<p>KUPOVINA</p>
</div>
<div className="DrugaParticija">
<p>Datum:</p>
</div>
<div className="TrecaParticija">
<p>11.05.2024</p>
</div>
<div className="CetvrtaParticija">
<p>Cena:</p>
</div>
<div className="PetaParticija">
<p>112.025,20 din</p>
</div>
</div>
<div className="KontenjerZaRacun">
  <div className="PrvaParticija">
  <p>KUPOVINA</p>
  </div>
  <div className="DrugaParticija">
  <p>Datum:</p>
  </div>
  <div className="TrecaParticija">
  <p>11.05.2024</p>
  </div>
  <div className="CetvrtaParticija">
  <p>Cena:</p>
  </div>
  <div className="PetaParticija">
  <p>112.025,20 din</p>
  </div>
  </div>
  <div className="KontenjerZaRacun">
    <div className="PrvaParticija">
    <p>KUPOVINA</p>
    </div>
    <div className="DrugaParticija">
    <p>Datum:</p>
    </div>
    <div className="TrecaParticija">
    <p>11.05.2024</p>
    </div>
    <div className="CetvrtaParticija">
    <p>Cena:</p>
    </div>
    <div className="PetaParticija">
    <p>112.025,20 din</p>
    </div>
    </div>
    <div className="KontenjerZaRacun">
      <div className="PrvaParticija">
      <p>KUPOVINA</p>
      </div>
      <div className="DrugaParticija">
      <p>Datum:</p>
      </div>
      <div className="TrecaParticija">
      <p>11.05.2024</p>
      </div>
      <div className="CetvrtaParticija">
      <p>Cena:</p>
      </div>
      <div className="PetaParticija">
      <p>112.025,20 din</p>
      </div>
      </div>
      <div className="KontenjerZaRacun">
        <div className="PrvaParticija">
        <p>KUPOVINA</p>
        </div>
        <div className="DrugaParticija">
        <p>Datum:</p>
        </div>
        <div className="TrecaParticija">
        <p>11.05.2024</p>
        </div>
        <div className="CetvrtaParticija">
        <p>Cena:</p>
        </div>
        <div className="PetaParticija">
        <p>112.025,20 din</p>
        </div>
        </div>
        <div className="KontenjerZaRacun">
          <div className="PrvaParticija">
          <p>KUPOVINA</p>
          </div>
          <div className="DrugaParticija">
          <p>Datum:</p>
          </div>
          <div className="TrecaParticija">
          <p>11.05.2024</p>
          </div>
          <div className="CetvrtaParticija">
          <p>Cena:</p>
          </div>
          <div className="PetaParticija">
          <p>112.025,20 din</p>
          </div>
          </div>
          <div className="KontenjerZaRacun">
            <div className="PrvaParticija">
            <p>KUPOVINA</p>
            </div>
            <div className="DrugaParticija">
            <p>Datum:</p>
            </div>
            <div className="TrecaParticija">
            <p>11.05.2024</p>
            </div>
            <div className="CetvrtaParticija">
            <p>Cena:</p>
            </div>
            <div className="PetaParticija">
            <p>112.025,20 din</p>
            </div>
            </div>
            <div className="KontenjerZaRacun">
              <div className="PrvaParticija">
              <p>KUPOVINA</p>
              </div>
              <div className="DrugaParticija">
              <p>Datum:</p>
              </div>
              <div className="TrecaParticija">
              <p>11.05.2024</p>
              </div>
              <div className="CetvrtaParticija">
              <p>Cena:</p>
              </div>
              <div className="PetaParticija">
              <p>112.025,20 din</p>
              </div>
              </div>
              <div className="KontenjerZaRacun">
                <div className="PrvaParticija">
                <p>KUPOVINA</p>
                </div>
                <div className="DrugaParticija">
                <p>Datum:</p>
                </div>
                <div className="TrecaParticija">
                <p>11.05.2024 </p>
                </div>
                <div className="CetvrtaParticija">
                <p>Cena:</p>
                </div>
                <div className="PetaParticija">
                <p>112.025,20 din</p>
                </div>
                </div>
                <div className="KontenjerZaRacun">
                  <div className="PrvaParticija">
                  <p>KUPOVINA</p>
                  </div>
                  <div className="DrugaParticija">
                  <p>Datum:</p>
                  </div>
                  <div className="TrecaParticija">
                  <p>11.05.2024</p>
                  </div>
                  <div className="CetvrtaParticija">
                  <p>Cena:</p>
                  </div>
                  <div className="PetaParticija">
                  <p>112.025,20 din</p>
                  </div>
                  </div>
                  
                  
                     <div className="KontenjerZaRacun">

<div className="PrvaParticija">
<p>KUPOVINA</p>
</div>
<div className="DrugaParticija">
<p>Datum:</p>
</div>
<div className="TrecaParticija">
<p>11.05.2024</p>
</div>
<div className="CetvrtaParticija">
<p>Cena:</p>
</div>
<div className="PetaParticija">
<p>112.025,20 din</p>
</div>
</div>
<div className="KontenjerZaRacun">
  <div className="PrvaParticija">
  <p>KUPOVINA</p>
  </div>
  <div className="DrugaParticija">
  <p>Datum:</p>
  </div>
  <div className="TrecaParticija">
  <p>11.05.2024</p>
  </div>
  <div className="CetvrtaParticija">
  <p>Cena:</p>
  </div>
  <div className="PetaParticija">
  <p>112.025,20 din</p>
  </div>
  </div>
  <div className="KontenjerZaRacun">
    <div className="PrvaParticija">
    <p>KUPOVINA</p>
    </div>
    <div className="DrugaParticija">
    <p>Datum:</p>
    </div>
    <div className="TrecaParticija">
    <p>11.05.2024</p>
    </div>
    <div className="CetvrtaParticija">
    <p>Cena:</p>
    </div>
    <div className="PetaParticija">
    <p>112.025,20 din</p>
    </div>
    </div>
    <div className="KontenjerZaRacun">
      <div className="PrvaParticija">
      <p>KUPOVINA</p>
      </div>
      <div className="DrugaParticija">
      <p>Datum:</p>
      </div>
      <div className="TrecaParticija">
      <p>11.05.2024</p>
      </div>
      <div className="CetvrtaParticija">
      <p>Cena:</p>
      </div>
      <div className="PetaParticija">
      <p>112.025,20 din</p>
      </div>
      </div>
      <div className="KontenjerZaRacun">
        <div className="PrvaParticija">
        <p>KUPOVINA</p>
        </div>
        <div className="DrugaParticija">
        <p>Datum:</p>
        </div>
        <div className="TrecaParticija">
        <p>11.05.2024</p>
        </div>
        <div className="CetvrtaParticija">
        <p>Cena:</p>
        </div>
        <div className="PetaParticija">
        <p>112.025,20 din</p>
        </div>
        </div>
        <div className="KontenjerZaRacun">
          <div className="PrvaParticija">
          <p>KUPOVINA</p>
          </div>
          <div className="DrugaParticija">
          <p>Datum:</p>
          </div>
          <div className="TrecaParticija">
          <p>11.05.2024</p>
          </div>
          <div className="CetvrtaParticija">
          <p>Cena:</p>
          </div>
          <div className="PetaParticija">
          <p>112.025,20 din</p>
          </div>
          </div>
          <div className="KontenjerZaRacun">
            <div className="PrvaParticija">
            <p>KUPOVINA</p>
            </div>
            <div className="DrugaParticija">
            <p>Datum:</p>
            </div>
            <div className="TrecaParticija">
            <p>11.05.2024</p>
            </div>
            <div className="CetvrtaParticija">
            <p>Cena:</p>
            </div>
            <div className="PetaParticija">
            <p>112.025,20 din</p>
            </div>
            </div>
            <div className="KontenjerZaRacun">
              <div className="PrvaParticija">
              <p>KUPOVINA</p>
              </div>
              <div className="DrugaParticija">
              <p>Datum:</p>
              </div>
              <div className="TrecaParticija">
              <p>11.05.2024</p>
              </div>
              <div className="CetvrtaParticija">
              <p>Cena:</p>
              </div>
              <div className="PetaParticija">
              <p>112.025,20 din</p>
              </div>
              </div>
              <div className="KontenjerZaRacun">
                <div className="PrvaParticija">
                <p>KUPOVINA</p>
                </div>
                <div className="DrugaParticija">
                <p>Datum:</p>
                </div>
                <div className="TrecaParticija">
                <p>11.05.2024 </p>
                </div>
                <div className="CetvrtaParticija">
                <p>Cena:</p>
                </div>
                <div className="PetaParticija">
                <p>112.025,20 din</p>
                </div>
                </div>
                <div className="KontenjerZaRacun">
                  <div className="PrvaParticija">
                  <p>KUPOVINA</p>
                  </div>
                  <div className="DrugaParticija">
                  <p>Datum:</p>
                  </div>
                  <div className="TrecaParticija">
                  <p>11.05.2024</p>
                  </div>
                  <div className="CetvrtaParticija">
                  <p>Cena:</p>
                  </div>
                  <div className="PetaParticija">
                  <p>112.025,20 din</p>
                  </div>
                  </div>
                  
                        
                  </div>
                  <button className="DugmeVidiJos" >Vidi jos</button>

</div>
<div className="KontenjerZaMesecnuKupovinu">
  <div className="OpisniTekstMeseca">
  <p className="IzgledTekstaObavestenja">Ukoliko ste kupili proizvode iz korpe pomocu aplikacije u mesecu</p>
  <p className="IzgledTekstaObavestenja">Maju</p>
  <p className="IzgledTekstaObavestenja">ustedeli ste:</p>
  <p className="IzgledPromenljivogTeksta">5516 din</p>
  </div>
  <div className="KontenjerzaMesecneTroskove">
   
    <div className="KontenjerZaRacun">
  
  <div className="PrvaParticija">
  <p>KUPOVINA</p>
  </div>
  <div className="DrugaParticija">
  <p>Datum:</p>
  </div>
  <div className="TrecaParticija">
  <p>11.05.2024</p>
  </div>
  <div className="CetvrtaParticija">
  <p>Cena:</p>
  </div>
  <div className="PetaParticija">
  <p>112.025,20 din</p>
  </div>
  </div>
  <div className="KontenjerZaRacun">
    <div className="PrvaParticija">
    <p>KUPOVINA</p>
    </div>
    <div className="DrugaParticija">
    <p>Datum:</p>
    </div>
    <div className="TrecaParticija">
    <p>11.05.2024</p>
    </div>
    <div className="CetvrtaParticija">
    <p>Cena:</p>
    </div>
    <div className="PetaParticija">
    <p>112.025,20 din</p>
    </div>
    </div>
    <div className="KontenjerZaRacun">
      <div className="PrvaParticija">
      <p>KUPOVINA</p>
      </div>
      <div className="DrugaParticija">
      <p>Datum:</p>
      </div>
      <div className="TrecaParticija">
      <p>11.05.2024</p>
      </div>
      <div className="CetvrtaParticija">
      <p>Cena:</p>
      </div>
      <div className="PetaParticija">
      <p>112.025,20 din</p>
      </div>
      </div>
      <div className="KontenjerZaRacun">
        <div className="PrvaParticija">
        <p>KUPOVINA</p>
        </div>
        <div className="DrugaParticija">
        <p>Datum:</p>
        </div>
        <div className="TrecaParticija">
        <p>11.05.2024</p>
        </div>
        <div className="CetvrtaParticija">
        <p>Cena:</p>
        </div>
        <div className="PetaParticija">
        <p>112.025,20 din</p>
        </div>
        </div>
        <div className="KontenjerZaRacun">
          <div className="PrvaParticija">
          <p>KUPOVINA</p>
          </div>
          <div className="DrugaParticija">
          <p>Datum:</p>
          </div>
          <div className="TrecaParticija">
          <p>11.05.2024</p>
          </div>
          <div className="CetvrtaParticija">
          <p>Cena:</p>
          </div>
          <div className="PetaParticija">
          <p>112.025,20 din</p>
          </div>
          </div>
          <div className="KontenjerZaRacun">
            <div className="PrvaParticija">
            <p>KUPOVINA</p>
            </div>
            <div className="DrugaParticija">
            <p>Datum:</p>
            </div>
            <div className="TrecaParticija">
            <p>11.05.2024</p>
            </div>
            <div className="CetvrtaParticija">
            <p>Cena:</p>
            </div>
            <div className="PetaParticija">
            <p>112.025,20 din</p>
            </div>
            </div>
            <div className="KontenjerZaRacun">
              <div className="PrvaParticija">
              <p>KUPOVINA</p>
              </div>
              <div className="DrugaParticija">
              <p>Datum:</p>
              </div>
              <div className="TrecaParticija">
              <p>11.05.2024</p>
              </div>
              <div className="CetvrtaParticija">
              <p>Cena:</p>
              </div>
              <div className="PetaParticija">
              <p>112.025,20 din</p>
              </div>
              </div>
              <div className="KontenjerZaRacun">
                <div className="PrvaParticija">
                <p>KUPOVINA</p>
                </div>
                <div className="DrugaParticija">
                <p>Datum:</p>
                </div>
                <div className="TrecaParticija">
                <p>11.05.2024</p>
                </div>
                <div className="CetvrtaParticija">
                <p>Cena:</p>
                </div>
                <div className="PetaParticija">
                <p>112.025,20 din</p>
                </div>
                </div>
                <div className="KontenjerZaRacun">
                  <div className="PrvaParticija">
                  <p>KUPOVINA</p>
                  </div>
                  <div className="DrugaParticija">
                  <p>Datum:</p>
                  </div>
                  <div className="TrecaParticija">
                  <p>11.05.2024 </p>
                  </div>
                  <div className="CetvrtaParticija">
                  <p>Cena:</p>
                  </div>
                  <div className="PetaParticija">
                  <p>112.025,20 din</p>
                  </div>
                  </div>
                  <div className="KontenjerZaRacun">
                    <div className="PrvaParticija">
                    <p>KUPOVINA</p>
                    </div>
                    <div className="DrugaParticija">
                    <p>Datum:</p>
                    </div>
                    <div className="TrecaParticija">
                    <p>11.05.2024</p>
                    </div>
                    <div className="CetvrtaParticija">
                    <p>Cena:</p>
                    </div>
                    <div className="PetaParticija">
                    <p>112.025,20 din</p>
                    </div>
                    </div>
                    
                   
                       <div className="KontenjerZaRacun">
  
  <div className="PrvaParticija">
  <p>KUPOVINA</p>
  </div>
  <div className="DrugaParticija">
  <p>Datum:</p>
  </div>
  <div className="TrecaParticija">
  <p>11.05.2024</p>
  </div>
  <div className="CetvrtaParticija">
  <p>Cena:</p>
  </div>
  <div className="PetaParticija">
  <p>112.025,20 din</p>
  </div>
  </div>
  <div className="KontenjerZaRacun">
    <div className="PrvaParticija">
    <p>KUPOVINA</p>
    </div>
    <div className="DrugaParticija">
    <p>Datum:</p>
    </div>
    <div className="TrecaParticija">
    <p>11.05.2024</p>
    </div>
    <div className="CetvrtaParticija">
    <p>Cena:</p>
    </div>
    <div className="PetaParticija">
    <p>112.025,20 din</p>
    </div>
    </div>
    <div className="KontenjerZaRacun">
      <div className="PrvaParticija">
      <p>KUPOVINA</p>
      </div>
      <div className="DrugaParticija">
      <p>Datum:</p>
      </div>
      <div className="TrecaParticija">
      <p>11.05.2024</p>
      </div>
      <div className="CetvrtaParticija">
      <p>Cena:</p>
      </div>
      <div className="PetaParticija">
      <p>112.025,20 din</p>
      </div>
      </div>
      <div className="KontenjerZaRacun">
        <div className="PrvaParticija">
        <p>KUPOVINA</p>
        </div>
        <div className="DrugaParticija">
        <p>Datum:</p>
        </div>
        <div className="TrecaParticija">
        <p>11.05.2024</p>
        </div>
        <div className="CetvrtaParticija">
        <p>Cena:</p>
        </div>
        <div className="PetaParticija">
        <p>112.025,20 din</p>
        </div>
        </div>
        <div className="KontenjerZaRacun">
          <div className="PrvaParticija">
          <p>KUPOVINA</p>
          </div>
          <div className="DrugaParticija">
          <p>Datum:</p>
          </div>
          <div className="TrecaParticija">
          <p>11.05.2024</p>
          </div>
          <div className="CetvrtaParticija">
          <p>Cena:</p>
          </div>
          <div className="PetaParticija">
          <p>112.025,20 din</p>
          </div>
          </div>
          <div className="KontenjerZaRacun">
            <div className="PrvaParticija">
            <p>KUPOVINA</p>
            </div>
            <div className="DrugaParticija">
            <p>Datum:</p>
            </div>
            <div className="TrecaParticija">
            <p>11.05.2024</p>
            </div>
            <div className="CetvrtaParticija">
            <p>Cena:</p>
            </div>
            <div className="PetaParticija">
            <p>112.025,20 din</p>
            </div>
            </div>
            <div className="KontenjerZaRacun">
              <div className="PrvaParticija">
              <p>KUPOVINA</p>
              </div>
              <div className="DrugaParticija">
              <p>Datum:</p>
              </div>
              <div className="TrecaParticija">
              <p>11.05.2024</p>
              </div>
              <div className="CetvrtaParticija">
              <p>Cena:</p>
              </div>
              <div className="PetaParticija">
              <p>112.025,20 din</p>
              </div>
              </div>
              <div className="KontenjerZaRacun">
                <div className="PrvaParticija">
                <p>KUPOVINA</p>
                </div>
                <div className="DrugaParticija">
                <p>Datum:</p>
                </div>
                <div className="TrecaParticija">
                <p>11.05.2024</p>
                </div>
                <div className="CetvrtaParticija">
                <p>Cena:</p>
                </div>
                <div className="PetaParticija">
                <p>112.025,20 din</p>
                </div>
                </div>
                <div className="KontenjerZaRacun">
                  <div className="PrvaParticija">
                  <p>KUPOVINA</p>
                  </div>
                  <div className="DrugaParticija">
                  <p>Datum:</p>
                  </div>
                  <div className="TrecaParticija">
                  <p>11.05.2024 </p>
                  </div>
                  <div className="CetvrtaParticija">
                  <p>Cena:</p>
                  </div>
                  <div className="PetaParticija">
                  <p>112.025,20 din</p>
                  </div>
                  </div>
                  <div className="KontenjerZaRacun">
                    <div className="PrvaParticija">
                    <p>KUPOVINA</p>
                    </div>
                    <div className="DrugaParticija">
                    <p>Datum:</p>
                    </div>
                    <div className="TrecaParticija">
                    <p>11.05.2024</p>
                    </div>
                    <div className="CetvrtaParticija">
                    <p>Cena:</p>
                    </div>
                    <div className="PetaParticija">
                    <p>112.025,20 din</p>
                    </div>
                    </div>
                    
                          
                    </div>
                    <button className="DugmeVidiJos" >Vidi jos</button>
  
  </div>
  </div>
  
  </div>
  );
}