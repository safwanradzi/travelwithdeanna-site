import { Trophy, Award, Star } from 'lucide-react';
import { PackageDetails, Testimonial, Award as AwardType } from './types';

// ==========================================
// MASTER DATA SOURCE
// ==========================================

const createGallery = (seed: string, count: number) => 
  Array.from({ length: count }, (_, i) => `https://picsum.photos/800/600?random=${seed}${i}`);

const PACKAGES_DATA: Record<string, PackageDetails> = {
  'moscow': {
    id: 'moscow',
    title: 'Moscow — Russia',
    description: 'Explore Moscow, Russia’s historic capital filled with iconic architecture, rich culture, and world-famous landmarks. From the Red Square to St. Basil’s Cathedral and the majestic Kremlin, Moscow blends history, art, and modern city life beautifully.',
    image: 'https://picsum.photos/800/600?random=moscow',
    region: 'Europe',
    style: 'Historical',
    gallery: createGallery('moscow', 6)
  },
  'spain': {
    id: 'spain',
    title: 'Spain',
    description: 'Discover the colours, flavours, and culture of Spain through vibrant cities like Barcelona and Madrid. Iconic architecture, lively streets, and artistic experiences make Spain an unforgettable destination.',
    image: 'https://picsum.photos/800/600?random=spain',
    region: 'Europe',
    style: 'City',
    gallery: createGallery('spain', 6)
  },
  'finland': {
    id: 'finland',
    title: 'Finland — Northern Lights',
    description: 'Witness the magical Northern Lights in the Arctic Circle while exploring snow villages, winter forests, and the charming town of Rovaniemi. A winter wonderland for travellers seeking something extraordinary.',
    image: 'https://picsum.photos/800/600?random=finland',
    region: 'Europe',
    style: 'Winter',
    gallery: createGallery('finland', 6)
  },
  'london-edinburgh': {
    id: 'london-edinburgh',
    title: 'London – Edinburgh',
    description: 'Experience two iconic British cities — historic London and charming Edinburgh. From royal landmarks to ancient castles, this journey blends heritage, culture, and scenic city landscapes.',
    image: 'https://picsum.photos/800/600?random=uk',
    region: 'Europe',
    style: 'City',
    gallery: createGallery('uk', 6)
  },
  'paris-london-amsterdam-luxembourg': {
    id: 'paris-london-amsterdam-luxembourg',
    title: 'Paris – London – Amsterdam – Luxembourg',
    description: 'A multi-country European adventure exploring romantic Paris, royal London, artistic Amsterdam, and elegant Luxembourg. Diverse cultures, major landmarks, and unforgettable city experiences in one trip.',
    image: 'https://picsum.photos/800/600?random=euro-multi',
    region: 'Europe',
    style: 'City',
    gallery: createGallery('euro-multi', 6)
  },
  'switzerland-italy-paris': {
    id: 'switzerland-italy-paris',
    title: 'Switzerland – Italy – Paris',
    description: 'A scenic European journey covering Switzerland’s natural beauty, Italy’s rich charm, and the timeless elegance of Paris. A perfect blend of nature, culture, and city exploration.',
    image: 'https://picsum.photos/800/600?random=swiss',
    region: 'Europe',
    style: 'Nature',
    gallery: createGallery('swiss', 6)
  },
  'santorini': {
    id: 'santorini',
    title: 'Santorini',
    description: 'Famous for its blue-domed churches, whitewashed cliffs, and world-class sunsets, Santorini is the ultimate Mediterranean escape. Ideal for romantic getaways and scenic island exploration.',
    image: 'https://picsum.photos/800/600?random=santorini',
    region: 'Islands',
    style: 'Nature',
    gallery: createGallery('santorini', 6)
  },
  'turkey': {
    id: 'turkey',
    title: 'Turkey',
    description: 'Explore Istanbul’s grand mosques, colourful bazaars, and historic landmarks, along with the cultural and scenic attractions across Turkey. A destination rich in tradition and beauty.',
    image: 'https://picsum.photos/800/600?random=turkey',
    region: 'Middle East',
    style: 'Historical',
    gallery: createGallery('turkey', 6)
  },
  'vienna-budapest': {
    id: 'vienna-budapest',
    title: 'Vienna – Budapest',
    description: 'A cultured European route featuring Vienna’s classical elegance and Budapest’s riverside charm. Rich history, music, and architecture define this journey.',
    image: 'https://picsum.photos/800/600?random=vienna',
    region: 'Europe',
    style: 'Historical',
    gallery: createGallery('vienna', 6)
  },
  'vienna-budapest-prague': {
    id: 'vienna-budapest-prague',
    title: 'Vienna – Budapest – Prague',
    description: 'Three charming European cities in one trip — Vienna’s classical style, Budapest’s warm character, and Prague’s fairy-tale architecture.',
    image: 'https://picsum.photos/800/600?random=prague',
    region: 'Europe',
    style: 'Historical',
    gallery: createGallery('prague', 6)
  },
  'balkan': {
    id: 'balkan',
    title: 'Balkan (Bosnia – Montenegro – Croatia)',
    description: 'A beautiful combination of culture, scenery, and heritage across Bosnia, Montenegro, and Croatia. Perfect for travellers seeking historical charm by the sea.',
    image: 'https://picsum.photos/800/600?random=balkan',
    region: 'Europe',
    style: 'Nature',
    gallery: createGallery('balkan', 6)
  },
  'azerbaijan': {
    id: 'azerbaijan',
    title: 'Azerbaijan',
    description: 'A blend of modern architecture and ancient culture. Experience Baku, Flame Towers, old towns, and natural landscapes full of history and beauty.',
    image: 'https://picsum.photos/800/600?random=azerbaijan',
    region: 'Asia',
    style: 'Historical',
    gallery: createGallery('azerbaijan', 4)
  },
  'kazakhstan': {
    id: 'kazakhstan',
    title: 'Kazakhstan',
    description: 'Discover dramatic natural landscapes like Big Almaty Lake and Charyn Canyon, along with the unique cultural atmosphere of Almaty.',
    image: 'https://picsum.photos/800/600?random=kazakhstan',
    region: 'Asia',
    style: 'Nature',
    gallery: createGallery('kazakhstan', 4)
  },
  'uzbekistan-russia': {
    id: 'uzbekistan-russia',
    title: 'Uzbekistan – Russia',
    description: 'A cultural fusion journey exploring historic Uzbekistan and the vibrant modern city of Moscow. Perfect for travellers who want diversity.',
    image: 'https://picsum.photos/800/600?random=uzbek',
    region: 'Asia',
    style: 'Historical',
    gallery: createGallery('uzbek', 3)
  },
  'egypt': {
    id: 'egypt',
    title: 'Egypt',
    description: 'Experience one of the world’s greatest civilizations — pyramids, temples, museums, and ancient wonders across Cairo and beyond.',
    image: 'https://picsum.photos/800/600?random=egypt',
    region: 'Middle East',
    style: 'Historical',
    gallery: createGallery('egypt', 3)
  },
  'dubai': {
    id: 'dubai',
    title: 'Dubai',
    description: 'A modern paradise offering skyscrapers, desert adventures, shopping, beaches, and iconic attractions all in one city.',
    image: 'https://picsum.photos/800/600?random=dubai',
    region: 'Middle East',
    style: 'City',
    gallery: createGallery('dubai', 3)
  },
  'los-angeles': {
    id: 'los-angeles',
    title: 'Los Angeles',
    description: 'The entertainment capital of the world — Hollywood, beaches, theme parks, and the vibrant lifestyle of California.',
    image: 'https://picsum.photos/800/600?random=la',
    region: 'Americas',
    style: 'City',
    gallery: createGallery('la', 3)
  },
  'new-york': {
    id: 'new-york',
    title: 'New York',
    description: 'The city that never sleeps — Times Square, Central Park, skyscrapers, and world-famous attractions.',
    image: 'https://picsum.photos/800/600?random=nyc',
    region: 'Americas',
    style: 'City',
    gallery: createGallery('nyc', 3)
  },
  'indonesia': {
    id: 'indonesia',
    title: 'Indonesia',
    description: 'Indonesia offers beaches, culture, heritage, and nature — from Bali’s coastlines to Bandung’s scenery.',
    image: 'https://picsum.photos/800/600?random=indo',
    region: 'Asia',
    style: 'Nature',
    gallery: createGallery('indo', 3)
  },
  'japan': {
    id: 'japan',
    title: 'Japan',
    description: 'A rich blend of culture, technology, and tradition — from Tokyo’s modern skyline to Kyoto’s ancient temples.',
    image: 'https://picsum.photos/800/600?random=japan',
    region: 'Asia',
    style: 'City',
    gallery: createGallery('japan', 3)
  },
  'korea': {
    id: 'korea',
    title: 'Korea',
    description: 'Trendy cities, traditional palaces, K-culture, and scenic landscapes make Korea a favourite among modern travellers.',
    image: 'https://picsum.photos/800/600?random=korea',
    region: 'Asia',
    style: 'City',
    gallery: createGallery('korea', 3)
  },
  'kashmir': {
    id: 'kashmir',
    title: 'Kashmir',
    description: 'A peaceful mountain paradise with lakes, valleys, and breathtaking Himalayan scenery.',
    image: 'https://picsum.photos/800/600?random=kashmir',
    region: 'Asia',
    style: 'Nature',
    gallery: createGallery('kashmir', 3)
  },
  'maldives': {
    id: 'maldives',
    title: 'Maldives',
    description: 'Crystal-clear waters, white sand beaches, and luxurious water villas — the ultimate island escape.',
    image: 'https://picsum.photos/800/600?random=maldives',
    region: 'Islands',
    style: 'Nature',
    gallery: createGallery('maldives', 3)
  },
  'thailand': {
    id: 'thailand',
    title: 'Thailand',
    description: 'A vibrant destination with beaches, temples, markets, nightlife, and tropical attractions.',
    image: 'https://picsum.photos/800/600?random=thailand',
    region: 'Asia',
    style: 'Nature',
    gallery: createGallery('thailand', 3)
  },
  'vietnam': {
    id: 'vietnam',
    title: 'Vietnam',
    description: 'Rich history, stunning landscapes, and lively cities — from Hanoi to Ho Chi Minh and the beautiful Halong Bay.',
    image: 'https://picsum.photos/800/600?random=vietnam',
    region: 'Asia',
    style: 'Historical',
    gallery: createGallery('vietnam', 3)
  },
  'kundasang': {
    id: 'kundasang',
    title: 'Kundasang',
    description: 'Cool weather, mountain views, and nature attractions make Kundasang a favourite highland escape in Sabah.',
    image: 'https://picsum.photos/800/600?random=kundasang',
    region: 'Asia',
    style: 'Nature',
    gallery: createGallery('kundasang', 2)
  },
  'mabul-island': {
    id: 'mabul-island',
    title: 'Mabul Island',
    description: 'A diver’s paradise with turquoise waters, coral reefs, and rich marine life — one of Malaysia’s most beautiful islands.',
    image: 'https://picsum.photos/800/600?random=mabul',
    region: 'Islands',
    style: 'Nature',
    gallery: createGallery('mabul', 2)
  },
};

// ==========================================
// EXPORTS
// ==========================================

export const PACKAGES = PACKAGES_DATA;
export const DESTINATIONS = Object.values(PACKAGES_DATA);

export const REVIEWS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah A.',
    role: 'Traveler',
    text: 'My trip to Turkey was absolutely seamless. The team handled everything from flights to the balloon ride. Highly recommended!',
    avatar: 'https://picsum.photos/100/100?random=10',
  },
  {
    id: 2,
    name: 'Azlan M.',
    role: 'Family Trip',
    text: 'Traveled with my elderly parents to London. The private van arrangement was perfect. Very patient guides.',
    avatar: 'https://picsum.photos/100/100?random=11',
  },
  {
    id: 3,
    name: 'Bella R.',
    role: 'Solo Traveler',
    text: 'I was nervous traveling alone to Spain, but Travelwithdeanna made me feel so safe. The 24/7 support is real!',
    avatar: 'https://picsum.photos/100/100?random=12',
  },
];

export const AWARDS: AwardType[] = [
  { id: 1, title: 'Inspiring Women', year: '2023', icon: Star },
  { id: 2, title: '100 Successful People', year: 'Britishpedia', icon: Trophy },
  { id: 3, title: 'Usahawan Bintang', year: 'Negara Madani 2025', icon: Award },
];