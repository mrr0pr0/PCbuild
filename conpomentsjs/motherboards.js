const motherboards = [
  {
    id: 'asus-tuf-gaming-z790-plus-wifi',
    name: 'ASUS TUF GAMING Z790-PLUS WIFI Hovedkort',
    price: 3289,
    url: 'https://www.komplett.no/product/1222960/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-tuf-gaming-z790-plus-wifi-hovedkort',
    info: 'Durable ATX motherboard with DDR4 support, no WiFi or Bluetooth.',
    type: 'LGA1700',
    tier: 'high-end',
    bestFor: 'Gaming and general performance builds',
    image: './imgas/Motherboard/asus-tuf-gaming-z790-plus-wifi.jpg'
  },
  {
    id: 'asus-rog-strix-b550-a-gaming',
    name: 'ASUS ROG Strix B550-A GAMING Hovedkort',
    price: 2090,
    url: 'https://www.komplett.no/product/1222960/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-tuf-gaming-z790-plus-wifi-hovedkort',
    info: 'ATX motherboard with DDR5, WiFi and Bluetooth included.',
    type: 'LGA1700',
    tier: 'mid-range',
    bestFor: 'High-performance gaming builds',
    image: './imgas/Motherboard/asus-rog-strix-b550-a-gaming.jpg'
  },
  {
    id: 'asus-rog-strix-b650e-f-gaming-wifi',
    name: 'ASUS ROG Strix B650E-F Gaming WIFI Hovedkort',
    price: 3190,
    url: 'https://www.komplett.no/product/1219287/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-rog-strix-b650e-f-gaming-wifi-hovedkort',
    info: 'ATX motherboard with DDR5, WiFi and Bluetooth, good for gaming.',
    type: 'LGA1700',
    tier: 'high-end',
    bestFor: 'Gaming with high-speed connectivity',
    image: './imgas/Motherboard/asus-rog-strix-b650e-f-gaming-wifi.jpg'
  },
  {
    id: 'asus-prime-b550m-a-wifi-ii',
    name: 'ASUS PRIME B550M-A WIFI II Hovedkort',
    price: 1990,
    url: 'https://www.komplett.no/product/1205552/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-prime-b550m-a-wifi-ii-hovedkort',
    info: 'ATX motherboard with DDR5, WiFi and Bluetooth included.',
    type: 'LGA1700',
    tier: 'mid-range',
    bestFor: 'Home and office builds',
    image: './imgas/Motherboard/asus-prime-b550m-a-wifi-ii.jpg'
  },
  {
    id: 'asus-prime-b550-plus',
    name: 'ASUS PRIME B550-PLUS Hovedkort',
    price: 1390,
    url: 'https://www.komplett.no/product/1160729/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-prime-b550-plus-hovedkort',
    info: 'ATX motherboard with DDR5, WiFi and Bluetooth.',
    type: 'AM5',
    tier: 'budget',
    bestFor: 'Budget-friendly AMD gaming builds',
    image: './imgas/Motherboard/asus-prime-b550-plus.jpg'
  },
  {
    id: 'asus-rog-strix-b650e-i-gaming-wifi',
    name: 'ASUS ROG Strix B650E-I Gaming WIFI Hovedkort',
    price: 3790,
    url: 'https://www.komplett.no/product/1219020/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-rog-strix-b650e-i-gaming-wifi-hovedkort',
    info: 'ATX motherboard with DDR5, WiFi and Bluetooth, great for gaming.',
    type: 'AM5',
    tier: 'high-end',
    bestFor: 'High-end AMD gaming builds',
    image: './imgas/Motherboard/asus-rog-strix-b650e-i-gaming-wifi.jpg'
  },
  {
    id: 'asus-rog-strix-x870-a-gaming-wifi-hvit',
    name: 'ASUS ROG Strix X870-A GAMING WIFI Hovedkort (hvit)',
    price: 5990,
    url: 'https://www.komplett.no/product/1313278/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-rog-strix-x870-a-gaming-wifi-hovedkort-hvit',
    info: 'ATX motherboard with DDR4, premium build without WiFi or Bluetooth.',
    type: 'AM4',
    tier: 'premium',
    bestFor: 'Extreme gaming and enthusiast setups',
    image: './imgas/Motherboard/asus-rog-strix-x870-a-gaming-wifi-hvit.jpg'
  },
  {
    id: 'asus-tuf-gaming-b550m-plus-wifi-ii',
    name: 'ASUS TUF GAMING B550M-PLUS WIFI II Hovedkort',
    price: 1749,
    url: 'https://www.komplett.no/product/1205554/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-tuf-gaming-b550m-plus-wifi-ii-hovedkort',
    info: 'ATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'AM4',
    tier: 'mid-range',
    bestFor: 'Reliable AMD gaming and general builds',
    image: './imgas/Motherboard/asus-tuf-gaming-b550m-plus-wifi-ii.jpg'
  },
  {
    id: 'asus-tuf-gaming-b550-pro',
    name: 'ASUS TUF GAMING B550-PRO Hovedkort',
    price: 2068,
    url: 'https://www.komplett.no/product/1177056/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-tuf-gaming-b550-pro-hovedkort',
    info: 'mATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'AM4',
    tier: 'mid-range',
    bestFor: 'Mid-range AMD gaming builds',
    image: './imgas/Motherboard/asus-tuf-gaming-b550-pro.jpg'
  },
  {
    id: 'asus-prime-b650-plus',
    name: 'ASUS Prime B650-PLUS Hovedkort',
    price: 2290,
    url: 'https://www.komplett.no/product/1219278/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-prime-b650-plus-hovedkort',
    info: 'ATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'LGA1200',
    tier: 'mid-range',
    bestFor: 'General purpose Intel builds',
    image: './imgas/Motherboard/asus-prime-b650-plus.jpg'
  },
  {
    id: 'asus-tuf-gaming-b760-plus-wifi',
    name: 'ASUS TUF GAMING B760-PLUS WIFI Hovedkort',
    price: 2037,
    url: 'https://www.komplett.no/product/1249946/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-tuf-gaming-b760-plus-wifi-hovedkort',
    info: 'mATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'LGA1200',
    tier: 'mid-range',
    bestFor: 'Intel mid-range builds',
    image: './imgas/Motherboard/asus-tuf-gaming-b760-plus-wifi.jpg'
  },
  {
    id: 'asus-tuf-gaming-b650m-plus-wifi',
    name: 'ASUS TUF Gaming B650M-PLUS WIFI Hovedkort',
    price: 2799,
    url: 'https://www.komplett.no/product/1219283/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-tuf-gaming-b650m-plus-wifi-hovedkort',
    info: 'ITX motherboard with DDR5, WiFi and Bluetooth.',
    type: 'LGA1700',
    tier: 'high-end',
    bestFor: 'Compact high-performance AMD builds',
    image: './imgas/Motherboard/asus-tuf-gaming-b650m-plus-wifi.jpg'
  },
  {
    id: 'asus-rog-strix-z790-i-gaming-wifi',
    name: 'ASUS ROG STRIX Z790-I GAMING WIFI Hovedkort',
    price: 6490,
    url: 'https://www.komplett.no/product/1219274/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-rog-strix-z790-i-gaming-wifi-hovedkort',
    info: 'mATX motherboard with DDR4, WiFi and Bluetooth, premium build.',
    type: 'AM4',
    tier: 'premium',
    bestFor: 'High-end compact gaming builds',
    image: './imgas/Motherboard/asus-rog-strix-z790-i-gaming-wifi.jpg'
  },
  {
    id: 'asus-rog-strix-b760-i-gaming-wifi',
    name: 'ASUS ROG STRIX B760-I GAMING WIFI Hovedkort',
    price: 2390,
    url: 'https://www.komplett.no/product/1221913/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-rog-strix-b760-i-gaming-wifi-hovedkort',
    info: 'ATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'AM4',
    tier: 'mid-range',
    bestFor: 'Intel mid-range gaming builds',
    image: './imgas/Motherboard/asus-rog-strix-b760-i-gaming-wifi.jpg'
  },
  {
    id: 'msi-pro-b760m-vision-d',
    name: 'MSI PRO B760M-Vision D',
    price: 1450,
    url: 'https://www.komplett.no/product/1221904/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-rog-strix-b760-f-gaming-wifi-hovedkort',
    info: 'mATX motherboard with DDR5, no WiFi or Bluetooth.',
    type: 'LGA1700',
    tier: 'mid-range',
    bestFor: 'Intel productivity builds',
    image: './imgas/Motherboard/msi-pro-b760m-vision-d.jpg'
  },
  {
    id: 'asus-rog-strix-b760-f-gaming-wifi',
    name: 'ASUS ROG STRIX B760-F GAMING WIFI Hovedkort',
    price: 3114,
    url: 'https://www.komplett.no/product/1249034',
    info: 'ATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'LGA1200',
    tier: 'high-end',
    bestFor: 'Intel high-performance gaming',
    image: './imgas/Motherboard/asus-rog-strix-b760-f-gaming-wifi.jpg'
  },
  {
    id: 'z370-pro4',
    name: 'Asus ROG Maximus Z890 EXTREME Hovedkort',
    price: 17990,
    url: 'https://www.komplett.no/product/1314190/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-rog-maximus-z890-extreme-hovedkort',
    info: 'ATX motherboard with DDR4, premium build, no WiFi or Bluetooth.',
    type: 'LGA1151',
    tier: 'premium',
    bestFor: 'Extreme Intel gaming and enthusiast setups',
    image: './imgas/Motherboard/z370-pro4.jpg'
  },
  {
    id: 'msi-b650-gaming-plus-wifi',
    name: 'MSI B650 Gaming Plus WIFI Hovedkort',
    price: 1990,
    url: 'https://www.komplett.no/product/1249698/datautstyr/pc-komponenter/hovedkort/amd-socket/msi-b650-gaming-plus-wifi-hovedkort',
    info: 'mATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'LGA1200',
    tier: 'mid-range',
    bestFor: 'AMD mid-range gaming builds',
    image: './imgas/Motherboard/msi-b650-gaming-plus-wifi.jpg'
  },
  {
    id: 'asus-tuf-gaming-a620m-plus-wifi',
    name: 'ASUS TUF GAMING A620M-PLUS WIFI Hovedkort',
    price: 1785,
    url: 'https://www.komplett.no/product/1245331/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-tuf-gaming-a620m-plus-wifi-hovedkort',
    info: 'mATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'LGA1200',
    tier: 'mid-range',
    bestFor: 'Budget-friendly Intel builds',
    image: './imgas/Motherboard/asus-tuf-gaming-a620m-plus-wifi.jpg'
  },
  {
    id: 'msi-mag-z790-tomahawk-wifi',
    name: 'MSI MAG Z790 TOMAHAWK WIFI Hovedkort',
    price: 2999,
    url: 'https://www.komplett.no/product/1245331/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-tuf-gaming-a620m-plus-wifi-hovedkort',
    info: 'mATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'AM4',
    tier: 'high-end',
    bestFor: 'AMD high-performance builds',
    image: './imgas/Motherboard/msi-mag-z790-tomahawk-wifi.jpg'
  },
  {
    id: 'msi-pro-z790-p-wifi',
    name: 'MSI PRO Z790-P WIFI Hovedkort',
    price: 2990,
    url: 'https://www.komplett.no/product/1220001/datautstyr/pc-komponenter/hovedkort/intel-socket/msi-mag-z790-tomahawk-wifi-hovedkort',
    info: 'ATX motherboard with DDR4, WiFi and Bluetooth included.',
    type: 'AM4',
    tier: 'high-end',
    bestFor: 'AMD high-performance and workstation builds',
    image: './imgas/Motherboard/msi-pro-z790-p-wifi.jpg'
  },
  {
    id: 'asus-prime-b650m-a-wifi-ii',
    name: 'ASUS Prime B650M-A WIFI II Hovedkort',
    price: 1908,
    url: 'https://www.komplett.no/product/1220000',
    info: 'mATX motherboard with DDR4, WiFi and Bluetooth.',
    type: 'LGA1200',
    tier: 'mid-range',
    bestFor: 'Compact AMD gaming and workstation builds',
    image: './imgas/Motherboard/asus-prime-b650m-a-wifi-ii.jpg'
  },
  {
    id: 'asus-prime-b760m-a-wifi-d4',
    name: 'ASUS PRIME B760M-A WIFI D4 Hovedkort',
    price: 1718,
    url: 'https://www.komplett.no/product/1222961/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-prime-b650m-a-wifi-ii-hovedkort',
    info: 'mATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'LGA1200',
    tier: 'mid-range',
    bestFor: 'Intel mid-range productivity builds',
    image: './imgas/Motherboard/asus-prime-b650m-a-wifi-ii.jpg'
  },
  {
    id: 'msi-b760-gaming-plus-wifi',
    name: 'MSI B760 Gaming Plus WiFi Hovedkort',
    price: 1840,
    url: 'https://www.komplett.no/product/1221898/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-prime-b760m-a-wifi-d4-hovedkort',
    info: 'ATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'LGA1700',
    tier: 'mid-range',
    bestFor: 'Intel mid-range gaming builds',
    image: ''
  },
  {
    id: 'msi-mag-b760-tomahawk-wifi-ddr4',
    name: 'MSI MAG B760 Tomahawk WIFI DDR4 Hovedkort',
    price: 2490,
    url: 'https://www.komplett.no/product/1308790/datautstyr/pc-komponenter/hovedkort/intel-socket/msi-b760-gaming-plus-wifi-hovedkort',
    info: 'ATX motherboard with DDR4, WiFi and Bluetooth.',
    type: 'AM4',
    tier: 'high-end',
    bestFor: 'AMD high-performance gaming builds',
    image: './imgas/Motherboard/msi-mag-b760-tomahawk-wifi-ddr4.jpg'
  },
  {
    id: 'asus-rog-maximus-z890-hero',
    name: 'Asus ROG Maximus Z890 HERO Hovedkort',
    price: 10529,
    url: 'https://www.komplett.no/product/1314195/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-rog-maximus-z890-hero-hovedkort',
    info: 'ATX motherboard with DDR4, WiFi and Bluetooth, premium build.',
    type: 'AM4',
    tier: 'premium',
    bestFor: 'Extreme AMD gaming and enthusiast setups',
    image: './imgas/Motherboard/asus-rog-maximus-z890-hero.jpg'
  },
  {
    id: 'msi-pro-z790-p-wifi',
    name: 'MSI PRO Z790-P WIFI Hovedkort',
    price: 2990,
    url: 'https://www.komplett.no/product/1313305/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-prime-x870-p-wifi-hovedkort',
    info: 'ATX motherboard with DDR4, WiFi and Bluetooth included.',
    type: 'AM4',
    tier: 'high-end',
    bestFor: 'AMD high-performance and workstation builds',
    image: './imgas/Motherboard/msi-pro-z790-p-wifiwhite.jpg'
  },
  {
    id: 'asus-prime-b650m-a-wifi-iiblack',
    name: 'ASUS Prime B650M-A WIFI II Hovedkort',
    price: 1908,
    url: 'https://www.komplett.no/product/1314194/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-rog-strix-z890-e-gaming-wifi-hovedkort',
    info: 'mATX motherboard with DDR4, WiFi and Bluetooth.',
    type: 'LGA1200',
    tier: 'mid-range',
    bestFor: 'Compact AMD gaming and workstation builds',
    image: './imgas/Motherboard/asus-prime-b650m-a-wifi-iiblack.jpg'
  },
  {
    id: 'asus-prime-b760m-a-wifi-d4',
    name: 'ASUS PRIME B760M-A WIFI D4 Hovedkort',
    price: 1718,
    url: 'https://www.komplett.no/product/1221900/datautstyr/pc-komponenter/hovedkort/intel-socket/asus-tuf-gaming-b760-plus-wifi-d4-hovedkort',
    info: 'mATX motherboard with DDR4, no WiFi or Bluetooth.',
    type: 'LGA1200',
    tier: 'mid-range',
    bestFor: 'Intel mid-range productivity builds',
    image: './imgas/Motherboard/asus-prime-b760m-a-wifi-d4.jpg'
  },
  {
    id: 'msi-mag-b760-tomahawk-wifi-ddr4',
    name: 'MSI MAG B760 Tomahawk WIFI DDR4 Hovedkort',
    price: 2490,
    url: 'https://www.komplett.no/product/1313933/datautstyr/pc-komponenter/hovedkort/amd-socket/asrock-x870e-phantom-gaming-nova-wifi-hovedkort',
    info: 'ATX motherboard with DDR4, WiFi and Bluetooth.',
    type: 'AM4',
    tier: 'high-end',
    bestFor: 'AMD high-performance gaming builds',
    image: './imgas/Motherboard/msi-mag-b760-tomahawk-wifi-ddr4.jpg'
  },
  {
    id: 'asus-rog-maximus-z890-hero',
    name: 'Asus ROG Maximus Z890 HERO Hovedkort',
    price: 10529,
    url: 'https://www.komplett.no/product/1317721/datautstyr/pc-komponenter/hovedkort/amd-socket/asus-rog-strix-b850-f-gaming-wifi-hovedkort',
    info: 'ATX motherboard with DDR4, WiFi and Bluetooth, premium build.',
    type: 'AM4',
    tier: 'premium',
    bestFor: 'Extreme AMD gaming and enthusiast setups',
    image: './imgas/Motherboard/asus-rog-maximus-z890-hero.jpg'
  },
];






