export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  slug: string
  description: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Pametni telefon XYZ',
    price: 599.99,
    image: '/SlikaProizvoda/Mleko.jpeg',
    category: 'Elektronika',
    slug: 'pametni-telefon-xyz',
    description: 'Najnoviji pametni telefon s vrhunskom kamerom i dugotrajnom baterijom.',
  },
  {
    id: '2',
    name: 'Laptop Pro',
    price: 1299.99,
    image: '/SlikaProizvoda/Mleko.jpeg',
    category: 'Elektronika',
    slug: 'laptop-pro',
    description: 'Profesionalni laptop za sve vaše potrebe.',
  },
  {
    id: '3',
    name: 'Bežične slušalice',
    price: 149.99,
    image: '/SlikaProizvoda/Mleko.jpeg',
    category: 'Audio',
    slug: 'bezicne-slusalice',
    description: 'Bežične slušalice s aktivnim poništavanjem buke.',
  },
  {
    id: '4',
    name: 'Pametni sat',
    price: 299.99,
    image: '/SlikaProizvoda/Mleko.jpeg',
    category: 'Pametni uređaji',
    slug: 'pametni-sat',
    description: 'Pratite svoje zdravlje i fitness s ovim pametnim satom.',
  },
  {
    id: '5',
    name: 'Bežični zvučnik',
    price: 89.99,
    image: '/SlikaProizvoda/Mleko.jpeg',
    category: 'Audio',
    slug: 'bezicni-zvucnik',
    description: 'Prijenosni bežični zvučnik s odličnim zvukom.',
  },
  {
    id: '6',
    name: 'Tablet Ultra',
    price: 499.99,
    image: '/SlikaProizvoda/Mleko.jpeg',
    category: 'Elektronika',
    slug: 'tablet-ultra',
    description: 'Snažan tablet za produktivnost i zabavu.',
  },
] 