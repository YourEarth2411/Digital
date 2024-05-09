export const PRODUCT_CATEGORIES = [
  {
    label: "Ebooks",
    value: "e_books" as const,
    featured: [
      {
        name: "All ",
        href: "/products?category=e_books&sort=desc",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Dragon Ball",
        href: `/products?category=e_books&name=DragonBall`,
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "Doraemon",
        href: "/products?category=e_books&name=doraemon",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Conan",
        href: "/products?category=e_books&name=conan",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
    ],
  },
  {
    label: "Courses",
    value: "courses" as const,
    featured: [
      {
        name: "Favorite Icon Picks",
        href: `/products?category=courses`,
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=courses&sort=desc",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Icons",
        href: "/products?category=courses",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
  {
    label: "Musics",
    value: "musics" as const,
    featured: [
      {
        name: "Favorite Icon Picks",
        href: `/products?category=musics`,
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=musics&sort=desc",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Icons",
        href: "/products?category=musics",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
  {
    label: "Photography",
    value: "photography" as const,
    featured: [
      {
        name: "Favorite Icon Picks",
        href: `/products?category=photography`,
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=photography&sort=desc",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Icons",
        href: "/products?category=photography",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
