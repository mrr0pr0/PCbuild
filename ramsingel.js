const pcRam = [
  {
    id: 'corsair-vengeance-lpx-16gb-3200mhz',
    name: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz',
    price: 1077,
    url: 'https://www.komplett.no/product/893831/datautstyr/pc-komponenter/minnebrikker/corsair-vengeance-lpx-ddr4-3200mhz-16gb-sort',
    info: 'Reliable DDR4 RAM with low-profile heat spreaders.',
    type: 'DDR4',
    tier: 'mid-range',
    bestFor: 'General gaming and productivity builds',
    image: './imgas/RAM/corsair-vengeance-lpx-16gb-3200mhz.jpg'
  },
  {
    id: 'gskill-trident-z-rgb-16gb-3600mhz',
    name: 'G.Skill Trident Z RGB 16GB (2x8GB) DDR4 3600MHz',
    price: 609,
    url: 'https://www.komplett.no/product/916429/datautstyr/pc-komponenter/minnebrikker/gskill-trident-z-ddr4-rgb-3200mhz-16gb',
    info: 'RGB DDR4 memory for stylish and fast builds.',
    type: 'DDR4',
    tier: 'mid-range',
    bestFor: 'Entry gaming rigs with RGB focus',
    image: './imgas/RAM/gskill-trident-z-rgb-16gb-3600mhz.jpg'
  },
  {
    id: 'kingston-fury-beast-16gb-3200mhz',
    name: 'Kingston Fury Beast 16GB (2x8GB) DDR4 3200MHz',
    price: 808,
    url: 'https://www.komplett.no/product/1191404/datautstyr/pc-komponenter/minnebrikker/kingston-fury-beast-ddr4-3200mhz-16gb',
    info: 'Affordable DDR4 kit with solid reliability.',
    type: 'DDR4',
    tier: 'budget',
    bestFor: 'Basic gaming and everyday PCs',
    image: './imgas/RAM/kingston-fury-beast-16gb-3200mhz.jpg'
  },
  {
    id: 'gskill-ripjaws-v-16gb-3200mhz',
    name: 'G.Skill Ripjaws V 16GB (2x8GB) DDR4 3200MHz',
    price: 760,
    url: 'https://www.komplett.no/product/1018341/datautstyr/pc-komponenter/minnebrikker/gskill-ripjaws-v-ddr4-3200mhz-16gb',
    info: 'Compact DDR4 memory kit with strong performance.',
    type: 'DDR4',
    tier: 'budget',
    bestFor: 'Compact and affordable builds',
    image: './imgas/RAM/gskill-ripjaws-v-16gb-3200mhz.jpg'
  },
  {
    id: 'corsair-vengeance-rgb-pro-32gb-3600mhz',
    name: 'Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 3600MHz',
    price: 2672,
    url: 'https://www.komplett.no/product/1178478/datautstyr/pc-komponenter/minnebrikker/corsair-vengeance-rgb-pro-sl-ddr4-3600mhz-32gb-hvit',
    info: 'RGB DDR4 kit with high speed and large capacity.',
    type: 'DDR4',
    tier: 'premium',
    bestFor: 'High-end gaming and workstation use',
    image: './imgas/RAM/corsair-vengeance-rgb-pro-32gb-3600mhz.jpg'
  },
  {
    id: 'corsair-dominator-titanium-rgb-32gb-3600mhzblack',
    name: 'G.Skill Trident Z Neo 32GB (2x16GB) DDR4 3600MHz',
    price: 1569,
    url: 'https://www.komplett.no/product/1252975/datautstyr/pc-komponenter/minnebrikker/corsair-dominator-titanium-rgb-ddr5-6600mhz-64gb-sort?queryid=e3c26dc6eca7b40fe89b779e00386a08&sort=None',
    info: 'High-performance DDR4 kit optimized for AMD platforms.',
    type: 'DDR5',
    tier: 'high-end',
    bestFor: 'Gaming and creative workstations',
    image: './imgas/RAM/gskill-trident-z-neo-32gb-3600mhzblack.jpg'
  },
  {
    id: 'corsair-vengeance-lpx-32gb-3200mhz',
    name: 'Corsair Vengeance LPX 32GB (2x16GB) DDR4 3200MHz',
    price: 1690,
    url: 'https://www.komplett.no/product/1178199/datautstyr/pc-komponenter/minnebrikker/corsair-vengeance-lpx-ddr4-3200mhz-32gb',
    info: 'High-capacity DDR4 kit with low-profile design.',
    type: 'DDR4',
    tier: 'high-end',
    bestFor: 'Power users needing more memory',
    image: './imgas/RAM/corsair-vengeance-lpx-16gb-3200mhz.jpg'
  },
  {
    id: 'kingston-fury-beast-32gb-3200mhz',
    name: 'Kingston Fury Beast 32GB (2x16GB) DDR4 3200MHz',
    price: 1576,
    url: 'https://www.komplett.no/product/1192138/datautstyr/pc-komponenter/minnebrikker/kingston-fury-beast-ddr4-3200mhz-32gb',
    info: 'Large DDR4 kit for gaming and multitasking.',
    type: 'DDR4',
    tier: 'high-end',
    bestFor: 'Advanced gaming setups',
    image: './imgas/RAM/kingston-fury-beast-32gb-3200mhz.jpg'
  },
  {
    id: 'corsair-vengeance-rgb-pro-16gb-3200mhz',
    name: 'Corsair Vengeance RGB Pro 16GB (2x8GB) DDR4 3200MHz',
    price: 1595,
    url: 'https://www.komplett.no/product/1163193/datautstyr/pc-komponenter/minnebrikker/corsair-vengeance-rgb-pro-ddr4-3200mhz-16gb-hvit',
    info: 'RGB DDR4 memory with solid speed.',
    type: 'DDR4',
    tier: 'mid-range',
    bestFor: 'Gaming with aesthetic builds',
    image: './imgas/RAM/corsair-vengeance-rgb-pro-32gb-3600mhz.jpg'
  },
  {
    id: 'corsair-dominator-titanium-rgb-64gb-6000mhz',
    name: 'G.Skill Trident Z Neo 16GB (2x8GB) DDR4 3600MHz',
    price: 1019,
    url: 'https://www.komplett.no/product/1252984/datautstyr/pc-komponenter/minnebrikker/corsair-dominator-titanium-rgb-ddr5-6000mhz-64gb-graa?queryid=c1e6537edcc7279ce55a622b4385ecfb&sort=None',
    info: 'DDR4 kit optimized for performance with RGB lighting.',
    type: 'DDR4',
    tier: 'mid-range',
    bestFor: 'Mainstream gaming builds',
    image: './imgas/RAM/corsair-dominator-titanium-rgb-64gb-6000mhz.jpg'
  },
  {
    id: 'kingston-fury-beast-8gb-3200mhz',
    name: 'Kingston Fury Beast 8GB DDR4 3200MHz',
    price: 445,
    url: 'https://www.komplett.no/product/1191389/datautstyr/pc-komponenter/minnebrikker/kingston-fury-beast-ddr4-3200mhz-8gb',
    info: 'Single DDR4 module for budget PCs.',
    type: 'DDR4',
    tier: 'budget',
    bestFor: 'Basic computing needs',
    image: './imgas/RAM/kingston-fury-beast-8gb-3200mhz.jpg'
  },
  {
    id: 'kingston-fury-beast-16gb-5200mhz',
    name: 'Kingston Fury Beast DDR5 16GB 5200MHz',
    price: 799,
    url: 'https://www.komplett.no/product/1216808/datautstyr/pc-komponenter/minnebrikker/kingston-fury-beast-ddr5-5200mhz-16gb',
    info: 'Next-gen DDR5 RAM for faster performance.',
    type: 'DDR5',
    tier: 'mid-range',
    bestFor: 'Modern gaming and productivity',
    image: './imgas/RAM/kingston-fury-beast-16gb-5200mhz.jpg'
  },
  {
    id: 'corsair-vengeance-32gb-5200mhz',
    name: 'Corsair Vengeance DDR5 32GB 5200MHz',
    price: 1390,
    url: 'https://www.komplett.no/product/1216715/datautstyr/pc-komponenter/minnebrikker/corsair-vengeance-ddr5-5200mhz-32gb-rgb-hvit',
    info: 'High-capacity DDR5 kit with RGB lighting.',
    type: 'DDR5',
    tier: 'high-end',
    bestFor: 'Future-proof gaming and workstation builds',
    image: './imgas/RAM/corsair-vengeance-32gb-5200mhz.jpg'
  },
  {
    id: 'corsair-vengeance-lpx-16gb-3000mhz',
    name: 'Corsair Vengeance LPX 16GB DDR4 3000MHz',
    price: 699,
    url: 'https://www.komplett.no/product/893833/datautstyr/pc-komponenter/minnebrikker/corsair-vengeance-lpx-ddr4-3000mhz-16gb-sort',
    info: 'DDR4 kit with reliable performance at 3000MHz.',
    type: 'DDR4',
    tier: 'budget',
    bestFor: 'Budget builds and older platforms',
    image: './imgas/RAM/corsair-vengeance-lpx-16gb-3000mhz.jpg'
  },
  {
    id: 'gskill-trident-z-rgb-16gb-3200mhz',
    name: 'G.Skill Trident Z RGB 16GB DDR4 3200MHz',
    price: 609,
    url: 'https://www.komplett.no/product/916429/datautstyr/pc-komponenter/minnebrikker/gskill-trident-z-ddr4-rgb-3200mhz-16gb',
    info: 'Stylish DDR4 RAM with RGB lighting.',
    type: 'DDR4',
    tier: 'budget',
    bestFor: 'Entry-level gaming PCs with RGB',
    image: './imgas/RAM/gskill-ripjaws-v-16gb-3200mhz.jpg'
  }
];
