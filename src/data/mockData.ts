import { Product, Moodboard } from '../types';

export const products: Product[] = [
  // Tops
  {
    id: '1',
    name: 'Vintage Silk Slip',
    price: 85,
    category: 'tops',
    brand: 'Reformation (pre-loved)',
    size: 'S',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1qmMWFQY99SJUZ_iX5iVGK0DxkxdKu8HY',
    description: 'A beautiful 90s inspired silk slip top with delicate detailing.'
  },
  {
    id: '2',
    name: 'Cherry Red Top',
    price: 45,
    category: 'tops',
    brand: 'Vintage',
    size: 'M',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1Yfl96O9mCUE4It7MeJPq2Jd00dPGNHQW',
    description: 'Essential cherry red top in soft cotton.'
  },
  {
    id: '3',
    name: 'Floral Romantic Blouse',
    price: 55,
    category: 'tops',
    brand: 'Vintage',
    size: 'S',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1jfRZVgM9r9HPJ_XwUGlti-LavM4cFDzx',
    description: 'Breathable floral blouse for sunny days.'
  },
  {
    id: '4',
    name: 'Striped Summer Knit',
    price: 65,
    category: 'tops',
    brand: 'Handmade Vintage',
    size: 'M',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1Avb3oElGC3bxgfVHcedm9NSdAjhz26B4',
    description: 'Cozy and light striped knit.'
  },
  {
    id: '5',
    name: 'Lace Accent Camisole',
    price: 40,
    category: 'tops',
    brand: 'Vintage',
    size: 'XS',
    condition: 'Good',
    image: 'https://lh3.googleusercontent.com/u/0/d/1Gc-d_Y01_LVPBQrJW2N14em0TUkU75Gk',
    description: 'Delicate lace camisole, perfect for layering.'
  },
  {
    id: '6',
    name: 'Sheer Evening Shirt',
    price: 50,
    category: 'tops',
    brand: 'Vintage',
    size: 'L',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1a7wtQMmTx7p-B5h-IwgsIoPx1kd_N-__',
    description: 'Elegant sheer shirt for evening looks.'
  },
  {
    id: '7',
    name: 'Satin Minimalist Tank',
    price: 45,
    category: 'tops',
    brand: 'Vintage',
    size: 'M',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1TAV52hNR2KMQVlybq0SefLA8sl_OPbSu',
    description: 'Minimalist satin tank in a neutral shade.'
  },
  {
    id: '16',
    name: 'Vintage Silk Camisole',
    price: 48,
    category: 'tops',
    brand: 'Lucia Vintage',
    size: 'S',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1ZImV-ujDTjenkpHzMyCw8XuXOF5ZrDwi',
    description: 'A delicate silk camisole with vintage lace trim.'
  },
  {
    id: '17',
    name: 'Minimalist Button Down',
    price: 52,
    category: 'tops',
    brand: 'Vintage',
    size: 'M',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1Hx4WwL5AsMR1EjtHoHLsvay_xgbHr23p',
    description: 'Essential white button down for a minimal wardrobe.'
  },

  // Bottoms
  {
    id: '8',
    name: 'High-Waisted Denim',
    price: 75,
    category: 'bottoms',
    brand: "Levi's",
    size: '28',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1jm2CRgbmX-mz1qUzitIGyK8PZdpVIB1J',
    description: 'Classic high-waisted denim jeans.'
  },
  {
    id: '9',
    name: 'Vintage 501 Jeans',
    price: 80,
    category: 'bottoms',
    brand: "Levi's",
    size: '30',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1ZQc9_KKm5-1FI8luxAIjot7w6xfpwZmK',
    description: 'Timeless vintage Levi\'s 501s.'
  },
  {
    id: '10',
    name: 'Plaid Wool Trousers',
    price: 60,
    category: 'bottoms',
    brand: 'Unknown Vintage',
    size: 'M',
    condition: 'Good',
    image: 'https://lh3.googleusercontent.com/u/0/d/1yP7JQ-XF9y0fznPT1BU4GdF3v5MZEpds',
    description: 'Preppy plaid trousers in warm wool blend.'
  },
  {
    id: '11',
    name: 'Silk Midi Skirt',
    price: 55,
    category: 'bottoms',
    brand: 'Vintage',
    size: 'S',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1qbAatK5a6AiIcqvJU47pDnqWWnvPa5H-',
    description: 'Flowing silk skirt for an effortless silhouette.'
  },
  {
    id: '12',
    name: 'Vintage Leather Pants',
    price: 120,
    category: 'bottoms',
    brand: 'Vintage',
    size: 'M',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1owYDV0qNR4aZIalwoxAOGDXYwFly_UfP',
    description: 'Supple black leather trousers.'
  },

  // Outerwear
  {
    id: '13',
    name: 'Structured Wool Blazer',
    price: 110,
    category: 'outerwear',
    brand: 'Vintage Celine',
    size: 'L',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/10eENpEymSr1NlUc4ELPm30e7IahUcHQn',
    description: 'Timeless structured blazer in wool.'
  },
  {
    id: '14',
    name: 'Classic Trench Coat',
    price: 140,
    category: 'outerwear',
    brand: 'Vintage',
    size: 'M',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1NS14g-bvjQ5h4TLVjIZbSb1b-r7QobVH',
    description: 'The perfect trench for Parisian style.'
  },
  {
    id: '15',
    name: 'Distressed Leather Jacket',
    price: 160,
    category: 'outerwear',
    brand: 'Vintage',
    size: 'S',
    condition: 'Excellent',
    image: 'https://lh3.googleusercontent.com/u/0/d/1XkQkVLE6xEBJGwWWnRW7JGnd6-e_m-Q4',
    description: 'Authentic vintage leather biker jacket.'
  }
];

export const moodboards: Moodboard[] = [
  {
    id: 'm1',
    title: 'Autumn in Paris',
    description: 'Think cozy knits, structured blazers, and long walks by the Seine.',
    images: [
      'https://lh3.googleusercontent.com/u/0/d/1cdBx0L0gYd4xdQg7MyPLEV_e_DReG4YJ',
      'https://lh3.googleusercontent.com/u/0/d/1Hklyyxfva31j2gu0aSpV4wcIqoIKJL4D',
      'https://lh3.googleusercontent.com/u/0/d/1XAik-oAbFjA1WOzOULKiDWg3-7qu7rGK'
    ],
    relatedProductIds: ['13', '4']
  },
  {
    id: 'm2',
    title: '90s Minimalism',
    description: 'Clean lines, neutral palette, and effortless silhouettes.',
    images: [
      'https://lh3.googleusercontent.com/u/0/d/1kcB12juOuVhCth_n2hexdO3rBaPKXy0P',
      'https://lh3.googleusercontent.com/u/0/d/14oXU6gv6_zDK4fobw2H8MY_h5pjMQ6b4',
      'https://lh3.googleusercontent.com/u/0/d/1MbPEDljOUFtnFzrBF74KKpPkv-GCyZk4'
    ],
    relatedProductIds: ['1', '9']
  }
];
