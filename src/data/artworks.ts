import type { Artwork } from '../lib/artwork';

export const artworks: Artwork[] = [
  {
    id: 'mosaic-covered-guitar',
    slug: 'mosaic-covered-guitar',
    category: 'other',
    status: 'available',
    purchaseMode: 'inquire',
    images: ['/artworks/mosaic-covered-guitar.jpg'],
    title: {
      he: 'גיטרה מצופה פסיפס',
      en: 'Mosaic-Covered Guitar'
    },
    description: {
      he: 'גיטרה דקורטיבית מצופה פסיפס בעבודת יד, עם שילוב אריחים צבעוניים ודוגמאות פרחוניות. פרטים כמו מידות וחומרים יושלמו לאחר איסוף המידע מהאמנית.',
      en: 'A decorative guitar covered with handmade mosaic work, combining colorful tiles and floral motifs. Details such as dimensions and materials will be completed after artist intake.'
    },
    colors: ['white', 'orange', 'blue', 'green', 'brown'],
    price: {
      amount: 1200,
      currency: 'ILS',
      showPublicly: true
    }
  },
  {
    id: 'decorated-dot-pan',
    slug: 'decorated-dot-pan',
    category: 'other',
    status: 'available',
    purchaseMode: 'inquire',
    images: ['/artworks/decorated-dot-pan.jpg'],
    title: {
      he: 'מחבת מעוטרת בנקודות',
      en: 'Decorated Dot Pan'
    },
    description: {
      he: 'מחבת דקורטיבית בעבודת נקודות על רקע זהוב, עם דוגמה סימטרית בגווני טורקיז, ירוק כהה, לבן וחום. פרטים כמו מידות וחומרים יושלמו לאחר איסוף המידע מהאמנית.',
      en: 'A decorative pan with dot-art ornamentation on a gold-toned background, featuring a symmetrical pattern in turquoise, deep green, white, and brown. Details such as dimensions and materials will be completed after artist intake.'
    },
    colors: ['gold', 'turquoise', 'green', 'white', 'brown'],
    price: {
      amount: 60,
      currency: 'ILS',
      showPublicly: true
    }
  }
];
