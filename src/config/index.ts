export const PRODUCT_CATEGORIES = [
  {
    label: 'Ebooks',
    value: 'e_books' as const,
    featured: [
      {
        name: 'Price',
        href: '/products?category=e_books&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Dragon Ball',
        href: `/products?category=e_books&name=DragonBall`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'Doraemon',
        href: '/products?category=e_books&name=doraemon',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },

    ],
  },
  {
    label: 'Courses',
    value: 'courses' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=courses`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=courses&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=courses',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]
