export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: 'Makanan' | 'Minuman';
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Nasi Goreng',
    description: 'Ini adalah Menu Andalan Kami',
    price: 12000,
    image: 'https://assets.radarcirebon.id/main/2023/07/nasi-goreng-jawa.jpg',
    category: 'Makanan',
  },
  {
    id: '2',
    name: 'Mie Goreng',
    description: 'Super spicy fried rice with meatball, sausage, and egg.',
    price: 12000,
    image: 'https://tse1.mm.bing.net/th/id/OIP.cipjDrYL1uE5cNc4P-rRDQHaEK?pid=Api&P=0&h=180',
    category: 'Makanan',
  },
  {
    id : '3',
    name : 'Teh Manis', 
    description : 'Teh Manis Hangat / Teh Manis Dingin',
    price : 5000,
    image : 'https://asset.kompas.com/crops/GRGOpdUcySMF4sTvMlSEpJpFcTM=/0x0:4939x3293/750x500/data/photo/2022/09/25/63300cfd403f0.jpg',
    category : 'Minuman'
  }
];
