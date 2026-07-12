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
  },
  {
    id: 'floral-tissue-box',
    slug: 'floral-tissue-box',
    category: 'boxes',
    status: 'available',
    purchaseMode: 'inquire',
    images: ['/artworks/floral-tissue-box.jpg'],
    title: {
      he: 'קופסא לממחטות נייר פרחונית',
      en: 'Floral Tissue Box'
    },
    description: {
      he: 'קופסא לממחטות נייר פרחונית בעיטור נקודות על רקע כהה, עם פרחים בגווני טורקיז, כתום, לבן וחום.',
      en: 'A floral tissue box decorated with dot-art patterns on a dark background, featuring turquoise, orange, white, and brown flower details.'
    },
    colors: ['black', 'turquoise', 'orange', 'white', 'brown'],
    price: {
      amount: 50,
      currency: 'ILS',
      showPublicly: true
    }
  },
  {
    id: 'hand-paper-towel-holder',
    slug: 'hand-paper-towel-holder',
    category: 'other',
    status: 'available',
    purchaseMode: 'inquire',
    images: ['/artworks/hand-paper-towel-holder.jpg'],
    title: {
      he: 'מתקן לנייר ידיים',
      en: 'Hand Paper Towel Holder'
    },
    description: {
      he: 'מתקן לנייר ידיים עם בסיס עגול כהה, מעוטר בדוגמת נקודות צבעונית סביב המרכז בגווני טורקיז, כתום, צהוב, לבן ואדום.',
      en: 'A hand paper towel holder with a dark round base, decorated with colorful dot-art patterns around the center in turquoise, orange, yellow, white, and red tones.'
    },
    colors: ['black', 'turquoise', 'orange', 'yellow', 'white', 'red'],
    price: {
      amount: 40,
      currency: 'ILS',
      showPublicly: true
    }
  }
];
