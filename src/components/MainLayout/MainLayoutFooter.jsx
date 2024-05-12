export function MainLayoutFooter() {
  return <footer className="MainLayout__footer GlavniIzgledFootera">
    <div className="GlavniIzgledFootera">
        <div className="KontenjerZapratiNas">
          <div className="GornjiDeoKontenjeraZapratiNas">
            <p>Zaprati nas na mrezama</p>
          </div>
          <div className="DonjiDeoKontenjeraZapratiNas">
            <div className="KontenjerZaFacebook">
              <img className="IzgledSimbolaFacebook" src="/Slike za footer/simbol-za-facebook.png" alt=""/>
              <p className="IzgledSlovFacebooka">Facebook</p>
            </div>
            <div className="KontenjerZaTikTok">
              <img className="IzgledSimbolaTiktoka" src="/Slike za footer/simbol-za-tiktok.png" alt=""/>
              <p className="IzgledSlovaTiktoka">TikTok</p>
            </div>
            <div className="KontenjerZaYoutube">
              <img className="IzgledSimbolaYoutube" src="/Slike za footer/simbol-za-youtube.png" alt=""/>
              <p className="IzgledSlovaYoutube">Youtube</p>
            </div>
            </div>
        </div>
        <div className="KontenjerSaznajONama">
          <div className="GornjiDeoKontenjeraSaznajONama">
            <p>Saznaj o nama</p>
          </div>
          <p className="IzgleSlovaOpcijeONama">O mojoj prodavnici</p>
          <p className="IzgleSlovaOpcijeONama">Blog</p>
          <p className="IzgleSlovaOpcijeONama">Registracija prodavnice</p>
          <p className="IzgleSlovaOpcijeONama">Kontaktiraj nas</p>
        </div>
        <div className="KontenjerUsloviKoriscenjaIPolitikaPrivatnosti">
          <div className="GornjiDeoKontenjerUsloviKoriscenjaIPolitikaPrivatnosti">
            <p>Uslovi koriscenja i politika privatnosti</p>
          </div>
          <p className="IzgledSlovaUslovaKoriscenjaIPolitikaPrivatnosti">Uslovi koriscenja</p>
          <p className="IzgledSlovaUslovaKoriscenjaIPolitikaPrivatnosti">Politika privatnosti</p>
        </div>
      </div>
  </footer>
}