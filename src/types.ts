export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'tops' | 'bottoms' | 'outerwear';
  brand: string;
  size: string;
  condition: 'Excellent' | 'Good' | 'Fair';
  image: string;
  description: string;
}

export interface Moodboard {
  id: string;
  title: string;
  description: string;
  images: string[];
  relatedProductIds: string[];
}
