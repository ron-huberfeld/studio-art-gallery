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
  },
  {
    id: 'dot-painted-hanging-mirror',
    slug: 'dot-painted-hanging-mirror',
    category: 'mirrors',
    status: 'available',
    purchaseMode: 'inquire',
    images: ['/artworks/dot-painted-hanging-mirror.jpg'],
    title: {
      he: 'מראה לתליה מצויירת בנקודות',
      en: 'Dot-Painted Hanging Mirror'
    },
    description: {
      he: 'מראה עגולה לתליה, 25 ס״מ, מצויירת בנקודות סביב המסגרת בדוגמה סימטרית בגווני שחור, ירוק, זהב וחום.',
      en: 'A 25 cm round hanging mirror with dot-painted decoration around the frame, featuring a symmetrical pattern in black, green, gold, and brown tones.'
    },
    colors: ['black', 'green', 'gold', 'brown'],
    price: {
      amount: 50,
      currency: 'ILS',
      showPublicly: true
    }
  }
];
