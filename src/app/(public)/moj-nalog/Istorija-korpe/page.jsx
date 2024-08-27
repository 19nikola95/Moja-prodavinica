
import styles from '../../../../styles/istorijaKorpe.module.scss';
import Link from "next/link";
export default function pocetna() {
  return (
  <div>
 <div>
    <div className={styles.MojNalog}>
        <div className={styles.InicijalniPodatci}>
          <div className={styles.KontenjerSlikaProfilaiOpisa}>
            <div className={styles.KontenjerSlike}>
            <img  className={styles.IzgledProfilneSlike} src="/Moj nalog/bred pit.jpg" alt=""/>
            </div>
            <div className={styles.KontenjerIme}>
            <p className={styles.IzgledSlovaProfila}>Nikola Milojević</p>
            <img  className={styles.SimbolIzmeni} src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className={styles.KontenjerMesto}>
            <p className={styles.IzgledMestaProfila}>Jasenička 2 Smederevsla Palanka Srbija</p>
            <img  className={styles.SimbolIzmeni1} src="/SlikeZnakova/zamena.png" alt=""/>
            </div>
            <div className={styles.KontenjerEmail}>
            <p className={styles.IzgledEmailaProfila}>nikolamilojevic78@gmail.com</p>
            <img  className={styles.SimbolIzmeni2} src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
           <div className={styles.KontenjerBroj}>
            <p className={styles.IzgledBrojaProfila}>066001215</p>
            <img  className={styles.SimbolIzmeni3} src="/SlikeZnakova/zamena.png" alt=""/>
          </div>
          <div className={styles.KontenjerZaDugmeZaSacuvati}>
            <button className={styles.DugmeSacuvajIzmene}>Sačuvaj izmene</button>
            </div>
            <div className={styles.KontenjerOdjaviSe}>
            <button className={styles.DugmeOdjaviSe}>Odjavi se</button>
            </div>
          </div>
        </div>
        <div className={styles.KontenjerSaCelimSadrzajem}>
        <div className={styles.BarZaNavigaciju}>
    <Link href="/moj-nalog/porizvodi-koji-mi-se-svidjaju"><button className={styles.DugmeProizvodiKojiMiSeSvidjaju}>Proizvodi koji mi se sviđaju</button> </Link>
        <Link href="/moj-nalog/moja-interesovanja"><button className={styles.DugmeMojaInteresovanja}>Moja interesovanja</button> </Link>
           <button className={styles.DugmeIstorijaKorpe}>Istorija korpe</button>
          <Link href="/moj-nalog/moje-prodavnice"><button className={styles.MojeProdavnice}>Moje prodavnice</button></Link>
      </div>
 <div className={styles.KontenjerNaslova}>
 <p className={styles.IzgledSlovaIstorijaKorpe}>Istorija korpe</p>
 </div>
 <div className={styles.PozicijaKontenjeraZaUsteduPrekoAplikaciju}>
<div className={styles.KontenjerzaUstetuPrekoAplikacije}>
<p className={styles.izgledTekstaOpisa}>Koristeci aplikaciju u ovoj godini ste ustedeli:</p>
<p className={styles.IzgledCeneUstede}>54.320,21 din</p>
<img className={styles.IzgledSmajliUstede} src="/DodatniSmajlici/Smajli ustede.png" alt=""/>
</div>
</div>
<div className={styles.KontenjerZaMesecnuKupovinu}>
<div className={styles.OpisniTekstMeseca}>
<p className={styles.IzgledTekstaObavestenja}>Ukoliko ste kupili proizvode iz korpe pomocu aplikacije u mesecu</p>
<p className={styles.IzgledTekstaObavestenja}> Aprilu</p>
<p className={styles.IzgledTekstaObavestenja}> ustedeli ste:</p>
<p className={styles.IzgledPromenljivogTeksta}>2456 din</p>
</div>
<div className={styles.KontenjerzaMesecneTroskove}>
 
  <div className={styles.KontenjerZaRacun}>

<div className={styles.PrvaParticija}>
<p>KUPOVINA</p>
</div>
<div className={styles.DrugaParticija}>
<p>Datum:</p>
</div>
<div className={styles.TrecaParticija}>
<p>11.05.2024</p>
</div>
<div className={styles.CetvrtaParticija}>
<p>Cena:</p>
</div>
<div className={styles.PetaParticija}>
<p>112.025,20 din</p>
</div>
</div>
<div className={styles.KontenjerZaRacun}>
  <div className={styles.PrvaParticija}>
  <p>KUPOVINA</p>
  </div>
  <div className={styles.DrugaParticija}>
  <p>Datum:</p>
  </div>
  <div className={styles.TrecaParticija}>
  <p>11.05.2024</p>
  </div>
  <div className={styles.CetvrtaParticija}>
  <p>Cena:</p>
  </div>
  <div className={styles.PetaParticija}>
  <p>112.025,20 din</p>
  </div>
  </div>
  <div className={styles.KontenjerZaRacun}>
    <div className={styles.PrvaParticija}>
    <p>KUPOVINA</p>
    </div>
    <div className={styles.DrugaParticija}>
    <p>Datum:</p>
    </div>
    <div className={styles.TrecaParticija}>
    <p>11.05.2024</p>
    </div>
    <div className={styles.CetvrtaParticija}>
    <p>Cena:</p>
    </div>
    <div className={styles.PetaParticija}>
    <p>112.025,20 din</p>
    </div>
    </div>
    <div className={styles.KontenjerZaRacun}>
      <div className={styles.PrvaParticija}>
      <p>KUPOVINA</p>
      </div>
      <div className={styles.DrugaParticija}>
      <p>Datum:</p>
      </div>
      <div className={styles.TrecaParticija}>
      <p>11.05.2024</p>
      </div>
      <div className={styles.CetvrtaParticija}>
      <p>Cena:</p>
      </div>
      <div className={styles.PetaParticija}>
      <p>112.025,20 din</p>
      </div>
      </div>
      <div className={styles.KontenjerZaRacun}>
        <div className={styles.PrvaParticija}>
        <p>KUPOVINA</p>
        </div>
        <div className={styles.DrugaParticija}>
        <p>Datum:</p>
        </div>
        <div className={styles.TrecaParticija}>
        <p>11.05.2024</p>
        </div>
        <div className={styles.CetvrtaParticija}>
        <p>Cena:</p>
        </div>
        <div className={styles.PetaParticija}>
        <p>112.025,20 din</p>
        </div>
        </div>
        <div className={styles.KontenjerZaRacun}>
          <div className={styles.PrvaParticija}>
          <p>KUPOVINA</p>
          </div>
          <div className={styles.DrugaParticija}>
          <p>Datum:</p>
          </div>
          <div className={styles.TrecaParticija}>
          <p>11.05.2024</p>
          </div>
          <div className={styles.CetvrtaParticija}>
          <p>Cena:</p>
          </div>
          <div className={styles.PetaParticija}>
          <p>112.025,20 din</p>
          </div>
          </div>
          <div className={styles.KontenjerZaRacun}>
            <div className={styles.PrvaParticija}>
            <p>KUPOVINA</p>
            </div>
            <div className={styles.DrugaParticija}>
            <p>Datum:</p>
            </div>
            <div className={styles.TrecaParticija}>
            <p>11.05.2024</p>
            </div>
            <div className={styles.CetvrtaParticija}>
            <p>Cena:</p>
            </div>
            <div className={styles.PetaParticija}>
            <p>112.025,20 din</p>
            </div>
            </div>
            <div className={styles.KontenjerZaRacun}>
              <div className={styles.PrvaParticija}>
              <p>KUPOVINA</p>
              </div>
              <div className={styles.DrugaParticija}>
              <p>Datum:</p>
              </div>
              <div className={styles.TrecaParticija}>
              <p>11.05.2024</p>
              </div>
              <div className={styles.CetvrtaParticija}>
              <p>Cena:</p>
              </div>
              <div className={styles.PetaParticija}>
              <p>112.025,20 din</p>
              </div>
              </div>
              <div className={styles.KontenjerZaRacun}>
                <div className={styles.PrvaParticija}>
                <p>KUPOVINA</p>
                </div>
                <div className={styles.DrugaParticija}>
                <p>Datum:</p>
                </div>
                <div className={styles.TrecaParticija}>
                <p>11.05.2024 </p>
                </div>
                <div className={styles.CetvrtaParticija}>
                <p>Cena:</p>
                </div>
                <div className={styles.PetaParticija}>
                <p>112.025,20 din</p>
                </div>
                </div>
                <div className={styles.KontenjerZaRacun}>
                  <div className={styles.PrvaParticija}>
                  <p>KUPOVINA</p>
                  </div>
                  <div className={styles.DrugaParticija}>
                  <p>Datum:</p>
                  </div>
                  <div className={styles.TrecaParticija}>
                  <p>11.05.2024</p>
                  </div>
                  <div className={styles.CetvrtaParticija}>
                  <p>Cena:</p>
                  </div>
                  <div className={styles.PetaParticija}>
                  <p>112.025,20 din</p>
                  </div>
                  </div>
                  
                  
                     <div className={styles.KontenjerZaRacun}>

<div className={styles.PrvaParticija}>
<p>KUPOVINA</p>
</div>
<div className={styles.DrugaParticija}>
<p>Datum:</p>
</div>
<div className={styles.TrecaParticija}>
<p>11.05.2024</p>
</div>
<div className={styles.CetvrtaParticija}>
<p>Cena:</p>
</div>
<div className={styles.PetaParticija}>
<p>112.025,20 din</p>
</div>
</div>
<div className={styles.KontenjerZaRacun}>
  <div className={styles.PrvaParticija}>
  <p>KUPOVINA</p>
  </div>
  <div className={styles.DrugaParticija}>
  <p>Datum:</p>
  </div>
  <div className={styles.TrecaParticija}>
  <p>11.05.2024</p>
  </div>
  <div className={styles.CetvrtaParticija}>
  <p>Cena:</p>
  </div>
  <div className={styles.PetaParticija}>
  <p>112.025,20 din</p>
  </div>
  </div>
  <div className={styles.KontenjerZaRacun}>
    <div className={styles.PrvaParticija}>
    <p>KUPOVINA</p>
    </div>
    <div className={styles.DrugaParticija}>
    <p>Datum:</p>
    </div>
    <div className={styles.TrecaParticija}>
    <p>11.05.2024</p>
    </div>
    <div className={styles.CetvrtaParticija}>
    <p>Cena:</p>
    </div>
    <div className={styles.PetaParticija}>
    <p>112.025,20 din</p>
    </div>
    </div>
    <div className={styles.KontenjerZaRacun}>
      <div className={styles.PrvaParticija}>
      <p>KUPOVINA</p>
      </div>
      <div className={styles.DrugaParticija}>
      <p>Datum:</p>
      </div>
      <div className={styles.TrecaParticija}>
      <p>11.05.2024</p>
      </div>
      <div className={styles.CetvrtaParticija}>
      <p>Cena:</p>
      </div>
      <div className={styles.PetaParticija}>
      <p>112.025,20 din</p>
      </div>
      </div>
      <div className={styles.KontenjerZaRacun}>
        <div className={styles.PrvaParticija}>
        <p>KUPOVINA</p>
        </div>
        <div className={styles.DrugaParticija}>
        <p>Datum:</p>
        </div>
        <div className={styles.TrecaParticija}>
        <p>11.05.2024</p>
        </div>
        <div className={styles.CetvrtaParticija}>
        <p>Cena:</p>
        </div>
        <div className={styles.PetaParticija}>
        <p>112.025,20 din</p>
        </div>
        </div>
        <div className={styles.KontenjerZaRacun}>
          <div className={styles.PrvaParticija}>
          <p>KUPOVINA</p>
          </div>
          <div className={styles.DrugaParticija}>
          <p>Datum:</p>
          </div>
          <div className={styles.TrecaParticija}>
          <p>11.05.2024</p>
          </div>
          <div className={styles.CetvrtaParticija}>
          <p>Cena:</p>
          </div>
          <div className={styles.PetaParticija}>
          <p>112.025,20 din</p>
          </div>
          </div>
          <div className={styles.KontenjerZaRacun}>
            <div className={styles.PrvaParticija}>
            <p>KUPOVINA</p>
            </div>
            <div className={styles.DrugaParticija}>
            <p>Datum:</p>
            </div>
            <div className={styles.TrecaParticija}>
            <p>11.05.2024</p>
            </div>
            <div className={styles.CetvrtaParticija}>
            <p>Cena:</p>
            </div>
            <div className={styles.PetaParticija}>
            <p>112.025,20 din</p>
            </div>
            </div>
            <div className={styles.KontenjerZaRacun}>
              <div className={styles.PrvaParticija}>
              <p>KUPOVINA</p>
              </div>
              <div className={styles.DrugaParticija}>
              <p>Datum:</p>
              </div>
              <div className={styles.TrecaParticija}>
              <p>11.05.2024</p>
              </div>
              <div className={styles.CetvrtaParticija}>
              <p>Cena:</p>
              </div>
              <div className={styles.PetaParticija}>
              <p>112.025,20 din</p>
              </div>
              </div>
              <div className={styles.KontenjerZaRacun}>
                <div className={styles.PrvaParticija}>
                <p>KUPOVINA</p>
                </div>
                <div className={styles.DrugaParticija}>
                <p>Datum:</p>
                </div>
                <div className={styles.TrecaParticija}>
                <p>11.05.2024 </p>
                </div>
                <div className={styles.CetvrtaParticija}>
                <p>Cena:</p>
                </div>
                <div className={styles.PetaParticija}>
                <p>112.025,20 din</p>
                </div>
                </div>
                <div className={styles.KontenjerZaRacun}>
                  <div className={styles.PrvaParticija}>
                  <p>KUPOVINA</p>
                  </div>
                  <div className={styles.DrugaParticija}>
                  <p>Datum:</p>
                  </div>
                  <div className={styles.TrecaParticija}>
                  <p>11.05.2024</p>
                  </div>
                  <div className={styles.CetvrtaParticija}>
                  <p>Cena:</p>
                  </div>
                  <div className={styles.PetaParticija}>
                  <p>112.025,20 din</p>
                  </div>
                  </div>                       
                  </div>
                  <div className={styles.KontenjerZaDugme}>
                  <button className={styles.DugmeVidiJos} >Vidi još</button>
                  </div>

</div>
<div className={styles.KontenjerZaMesecnuKupovinu}>
  <div className={styles.OpisniTekstMeseca}>
  <p className={styles.IzgledTekstaObavestenja}>Ukoliko ste kupili proizvode iz korpe pomocu aplikacije u mesecu</p>
  <p className={styles.IzgledTekstaObavestenja}>Maju</p>
  <p className={styles.IzgledTekstaObavestenja}>ustedeli ste:</p>
  <p className={styles.IzgledPromenljivogTeksta}>5516 din</p>
  </div>
  <div className={styles.KontenjerzaMesecneTroskove}>
   
    <div className={styles.KontenjerZaRacun}>
  
  <div className={styles.PrvaParticija}>
  <p>KUPOVINA</p>
  </div>
  <div className={styles.DrugaParticija}>
  <p>Datum:</p>
  </div>
  <div className={styles.TrecaParticija}>
  <p>11.05.2024</p>
  </div>
  <div className={styles.CetvrtaParticija}>
  <p>Cena:</p>
  </div>
  <div className={styles.PetaParticija}>
  <p>112.025,20 din</p>
  </div>
  </div>
  <div className={styles.KontenjerZaRacun}>
    <div className={styles.PrvaParticija}>
    <p>KUPOVINA</p>
    </div>
    <div className={styles.DrugaParticija}>
    <p>Datum:</p>
    </div>
    <div className={styles.TrecaParticija}>
    <p>11.05.2024</p>
    </div>
    <div className={styles.CetvrtaParticija}>
    <p>Cena:</p>
    </div>
    <div className={styles.PetaParticija}>
    <p>112.025,20 din</p>
    </div>
    </div>
    <div className={styles.KontenjerZaRacun}>
      <div className={styles.PrvaParticija}>
      <p>KUPOVINA</p>
      </div>
      <div className={styles.DrugaParticija}>
      <p>Datum:</p>
      </div>
      <div className={styles.TrecaParticija}>
      <p>11.05.2024</p>
      </div>
      <div className={styles.CetvrtaParticija}>
      <p>Cena:</p>
      </div>
      <div className={styles.PetaParticija}>
      <p>112.025,20 din</p>
      </div>
      </div>
      <div className={styles.KontenjerZaRacun}>
        <div className={styles.PrvaParticija}>
        <p>KUPOVINA</p>
        </div>
        <div className={styles.DrugaParticija}>
        <p>Datum:</p>
        </div>
        <div className={styles.TrecaParticija}>
        <p>11.05.2024</p>
        </div>
        <div className={styles.CetvrtaParticija}>
        <p>Cena:</p>
        </div>
        <div className={styles.PetaParticija}>
        <p>112.025,20 din</p>
        </div>
        </div>
        <div className={styles.KontenjerZaRacun}>
          <div className={styles.PrvaParticija}>
          <p>KUPOVINA</p>
          </div>
          <div className={styles.DrugaParticija}>
          <p>Datum:</p>
          </div>
          <div className={styles.TrecaParticija}>
          <p>11.05.2024</p>
          </div>
          <div className={styles.CetvrtaParticija}>
          <p>Cena:</p>
          </div>
          <div className={styles.PetaParticija}>
          <p>112.025,20 din</p>
          </div>
          </div>
          <div className={styles.KontenjerZaRacun}>
            <div className={styles.PrvaParticija}>
            <p>KUPOVINA</p>
            </div>
            <div className={styles.DrugaParticija}>
            <p>Datum:</p>
            </div>
            <div className={styles.TrecaParticija}>
            <p>11.05.2024</p>
            </div>
            <div className={styles.CetvrtaParticija}>
            <p>Cena:</p>
            </div>
            <div className={styles.PetaParticija}>
            <p>112.025,20 din</p>
            </div>
            </div>
            <div className={styles.KontenjerZaRacun}>
              <div className={styles.PrvaParticija}>
              <p>KUPOVINA</p>
              </div>
              <div className={styles.DrugaParticija}>
              <p>Datum:</p>
              </div>
              <div className={styles.TrecaParticija}>
              <p>11.05.2024</p>
              </div>
              <div className={styles.CetvrtaParticija}>
              <p>Cena:</p>
              </div>
              <div className={styles.PetaParticija}>
              <p>112.025,20 din</p>
              </div>
              </div>
              <div className={styles.KontenjerZaRacun}>
                <div className={styles.PrvaParticija}>
                <p>KUPOVINA</p>
                </div>
                <div className={styles.DrugaParticija}>
                <p>Datum:</p>
                </div>
                <div className={styles.TrecaParticija}>
                <p>11.05.2024</p>
                </div>
                <div className={styles.CetvrtaParticija}>
                <p>Cena:</p>
                </div>
                <div className={styles.PetaParticija}>
                <p>112.025,20 din</p>
                </div>
                </div>
                <div className={styles.KontenjerZaRacun}>
                  <div className={styles.PrvaParticija}>
                  <p>KUPOVINA</p>
                  </div>
                  <div className={styles.DrugaParticija}>
                  <p>Datum:</p>
                  </div>
                  <div className={styles.TrecaParticija}>
                  <p>11.05.2024 </p>
                  </div>
                  <div className={styles.CetvrtaParticija}>
                  <p>Cena:</p>
                  </div>
                  <div className={styles.PetaParticija}>
                  <p>112.025,20 din</p>
                  </div>
                  </div>
                  <div className={styles.KontenjerZaRacun}>
                    <div className={styles.PrvaParticija}>
                    <p>KUPOVINA</p>
                    </div>
                    <div className={styles.DrugaParticija}>
                    <p>Datum:</p>
                    </div>
                    <div className={styles.TrecaParticija}>
                    <p>11.05.2024</p>
                    </div>
                    <div className={styles.CetvrtaParticija}>
                    <p>Cena:</p>
                    </div>
                    <div className={styles.PetaParticija}>
                    <p>112.025,20 din</p>
                    </div>
                    </div>
                    
                   
                       <div className={styles.KontenjerZaRacun}>
  
  <div className={styles.PrvaParticija}>
  <p>KUPOVINA</p>
  </div>
  <div className={styles.DrugaParticija}>
  <p>Datum:</p>
  </div>
  <div className={styles.TrecaParticija}>
  <p>11.05.2024</p>
  </div>
  <div className={styles.CetvrtaParticija}>
  <p>Cena:</p>
  </div>
  <div className={styles.PetaParticija}>
  <p>112.025,20 din</p>
  </div>
  </div>
  <div className={styles.KontenjerZaRacun}>
    <div className={styles.PrvaParticija}>
    <p>KUPOVINA</p>
    </div>
    <div className={styles.DrugaParticija}>
    <p>Datum:</p>
    </div>
    <div className={styles.TrecaParticija}>
    <p>11.05.2024</p>
    </div>
    <div className={styles.CetvrtaParticija}>
    <p>Cena:</p>
    </div>
    <div className={styles.PetaParticija}>
    <p>112.025,20 din</p>
    </div>
    </div>
    <div className={styles.KontenjerZaRacun}>
      <div className={styles.PrvaParticija}>
      <p>KUPOVINA</p>
      </div>
      <div className={styles.DrugaParticija}>
      <p>Datum:</p>
      </div>
      <div className={styles.TrecaParticija}>
      <p>11.05.2024</p>
      </div>
      <div className={styles.CetvrtaParticija}>
      <p>Cena:</p>
      </div>
      <div className={styles.PetaParticija}>
      <p>112.025,20 din</p>
      </div>
      </div>
      <div className={styles.KontenjerZaRacun}>
        <div className={styles.PrvaParticija}>
        <p>KUPOVINA</p>
        </div>
        <div className={styles.DrugaParticija}>
        <p>Datum:</p>
        </div>
        <div className={styles.TrecaParticija}>
        <p>11.05.2024</p>
        </div>
        <div className={styles.CetvrtaParticija}>
        <p>Cena:</p>
        </div>
        <div className={styles.PetaParticija}>
        <p>112.025,20 din</p>
        </div>
        </div>
        <div className={styles.KontenjerZaRacun}>
          <div className={styles.PrvaParticija}>
          <p>KUPOVINA</p>
          </div>
          <div className={styles.DrugaParticija}>
          <p>Datum:</p>
          </div>
          <div className={styles.TrecaParticija}>
          <p>11.05.2024</p>
          </div>
          <div className={styles.CetvrtaParticija}>
          <p>Cena:</p>
          </div>
          <div className={styles.PetaParticija}>
          <p>112.025,20 din</p>
          </div>
          </div>
          <div className={styles.KontenjerZaRacun}>
            <div className={styles.PrvaParticija}>
            <p>KUPOVINA</p>
            </div>
            <div className={styles.DrugaParticija}>
            <p>Datum:</p>
            </div>
            <div className={styles.TrecaParticija}>
            <p>11.05.2024</p>
            </div>
            <div className={styles.CetvrtaParticija}>
            <p>Cena:</p>
            </div>
            <div className={styles.PetaParticija}>
            <p>112.025,20 din</p>
            </div>
            </div>
            <div className={styles.KontenjerZaRacun}>
              <div className={styles.PrvaParticija}>
              <p>KUPOVINA</p>
              </div>
              <div className={styles.DrugaParticija}>
              <p>Datum:</p>
              </div>
              <div className={styles.TrecaParticija}>
              <p>11.05.2024</p>
              </div>
              <div className={styles.CetvrtaParticija}>
              <p>Cena:</p>
              </div>
              <div className={styles.PetaParticija}>
              <p>112.025,20 din</p>
              </div>
              </div>
              <div className={styles.KontenjerZaRacun}>
                <div className={styles.PrvaParticija}>
                <p>KUPOVINA</p>
                </div>
                <div className={styles.DrugaParticija}>
                <p>Datum:</p>
                </div>
                <div className={styles.TrecaParticija}>
                <p>11.05.2024</p>
                </div>
                <div className={styles.CetvrtaParticija}>
                <p>Cena:</p>
                </div>
                <div className={styles.PetaParticija}>
                <p>112.025,20 din</p>
                </div>
                </div>
                <div className={styles.KontenjerZaRacun}>
                  <div className={styles.PrvaParticija}>
                  <p>KUPOVINA</p>
                  </div>
                  <div className={styles.DrugaParticija}>
                  <p>Datum:</p>
                  </div>
                  <div className={styles.TrecaParticija}>
                  <p>11.05.2024 </p>
                  </div>
                  <div className={styles.CetvrtaParticija}>
                  <p>Cena:</p>
                  </div>
                  <div className={styles.PetaParticija}>
                  <p>112.025,20 din</p>
                  </div>
                  </div>
                  <div className={styles.KontenjerZaRacun}>
                    <div className={styles.PrvaParticija}>
                    <p>KUPOVINA</p>
                    </div>
                    <div className={styles.DrugaParticija}>
                    <p>Datum:</p>
                    </div>
                    <div className={styles.TrecaParticija}>
                    <p>11.05.2024</p>
                    </div>
                    <div className={styles.CetvrtaParticija}>
                    <p>Cena:</p>
                    </div>
                    <div className={styles.PetaParticija}>
                    <p>112.025,20 din</p>
                    </div>
                    </div>
                    </div>
                    <div className={styles.KontenjerZaDugme}>
                    <button className={styles.DugmeVidiJos} >Vidi još</button>
                    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}