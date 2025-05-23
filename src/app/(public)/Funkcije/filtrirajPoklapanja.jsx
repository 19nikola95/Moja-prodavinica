function filtrirajPoklapanja(infromacije, prodavnice) {
  return infromacije.filter(info =>
      prodavnice.some(prod =>
          prod.IME.toLowerCase() === info.NAZIVUTEKSTU.toLowerCase() &&
          prod.ULICA.toLowerCase() === info.ULICA.toLowerCase()
      )
  );
}