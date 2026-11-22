// Initialize Lucide Icons
lucide.createIcons();

/* =========================================================
   1. STOREFRONT CATALOG DATA
   ========================================================= */
const cats = ['For you', 'Mobiles', 'Fashion', 'Electronics', 'Trends', 'Beauty', 'Furniture', 'Books', 'Home'];

const deals = [
  { title: 'Over-Ear Studio Pro', cat: 'Electronics Trends', tag: 'AUDIO // 01', badge: '-35% OFF', bCls: 'bg-[#E0533C] text-white', bg: 'bg-[#BAE6FD]', rate: '4.9', price: 2399, old: 3699, desc: '32-hour battery, warm analog soundstage & plush earcups.', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=450&q=80' },
  { title: 'Nordic Mesh Watch', cat: 'Fashion Trends', tag: 'HOROLOGY // 02', badge: 'STAFF PICK', bCls: 'bg-[#111111] text-[#FDB813]', bg: 'bg-[#FDB813]/40', rate: '4.8', price: 1749, old: 2499, desc: 'Brushed steel 38mm dial with Japanese quartz movement.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=450&q=80' },
  { title: 'Aero Pace Runners', cat: 'Fashion Trends', tag: 'FOOTWEAR // 03', badge: '-40% OFF', bCls: 'bg-[#E0533C] text-white', bg: 'bg-[#E0533C]/20', rate: '4.9', price: 1899, old: 3200, desc: 'Featherweight knit upper with responsive gum outsole.', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=450&q=80' },
  { title: 'Quiet Click Keypad', cat: 'Electronics Trends', tag: 'DESK // 04', badge: 'NEW BATCH', bCls: 'bg-[#FDB813] text-[#111111]', bg: 'bg-[#A7F3D0]/50', rate: '5.0', price: 3199, old: 4299, desc: 'Hot-swappable creamy tactile switches & PBT keycaps.', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=450&q=80' },
  { title: 'Urban Commute 20L', cat: 'Fashion', tag: 'CARRY // 05', badge: '-25% OFF', bCls: 'bg-[#E0533C] text-white', bg: 'bg-[#BAE6FD]/60', rate: '4.7', price: 1249, old: 1699, desc: 'Waxed water-repellent canvas with padded 16" laptop sleeve.', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=450&q=80' }
];

const pillars = [
  { n: '01', bg: 'bg-[#A7F3D0]', t: 'Zero Drop-Shipping', d: 'Every item sits on our regional shelves in Kolkata & Bengaluru before going live—no 3-week mystery waits.' },
  { n: '02', bg: 'bg-[#FDB813]', t: 'Acoustic & Build Bench', d: 'Headphones, keyboards, and watches undergo a 48-hour real-world stress check by our hardware desk.' },
  { n: '03', bg: 'bg-[#BAE6FD]', t: 'Plastic-Free Kraft', d: 'Shipped in reinforced honeycomb paper wrap and water-activated gummed tape—100% curbside recyclable.' },
  { n: '04', bg: 'bg-[#E0533C] text-white', t: 'Direct Maker Split', d: '78% of every artisan craft sale goes straight back to the potter, weaver, or metalworker who made it.' }
];

const essSummary = [
  { k: 'pantry', e: '☕', bg: 'bg-[#FDB813]', tag: '01 // PANTRY', t: 'Chikmagalur Roast & Nuts', d: 'Single-estate medium roast Arabica & slow-roasted salted almonds.', link: 'EXPLORE PANTRY COLLECTION →' },
  { k: 'care', e: '🧼', bg: 'bg-[#A7F3D0]', tag: '02 // CARE', t: 'Gentle Clean & Bamboo Kit', d: 'Charcoal bamboo brushes, copper tongue cleaner & organic body wash.', link: 'EXPLORE CARE COLLECTION →' },
  { k: 'study', e: '📓', bg: 'bg-[#BAE6FD]', tag: '03 // STUDY & WORK', t: '120GSM Dotted Sketchbooks', d: 'Lay-flat thread-bound notebooks with archival fountain-friendly paper.', link: 'EXPLORE STUDY & WORK →' },
  { k: 'bites', e: '🍪', bg: 'bg-[#E0533C]/25', tag: '04 // HEALTHY BITES', t: 'Roasted Makhana & 70% Cacao', d: 'Peri-peri popped lotus seeds & Idukki single-origin dark chocolate.', link: 'EXPLORE HEALTHY BITES →' }
];

const diwali = [
  { e: '🪔', name: 'Brass Diya (Set of 4)', desc: 'Heavy-gauge engraved solid brass', price: 499 },
  { e: '🍬', name: 'Royal Kaju Katli Box', desc: '500g pure Goa cashew & saffron', price: 650 },
  { e: '✨', name: 'Copper Fairy Lights', desc: '10-meter warm amber micro LEDs', price: 299 },
  { e: '🥜', name: 'Spiced Dry Fruit Tin', desc: 'Kashmiri walnuts, figs & pistachios', price: 890 }
];

const shelfItems = [
  { cat: 'Books', badge: 'BOOKS', title: 'The Design of Everyday Things', desc: "Don Norman's essential field manual on human-centered industrial objects.", price: 549, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=550&q=80' },
  { cat: 'Home', badge: 'HOME', title: 'Architect Swing Desk Lamp', desc: 'Matte powder-coated aluminum arm with warm 3000K flicker-free bulb.', price: 1399, img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=550&q=80' },
  { cat: 'Electronics Trends', badge: 'ELECTRONICS', title: 'Retro Instant Film Camera', desc: 'Tactile shutter button, glass 60mm lens & USB-C rechargeable battery.', price: 4499, img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=550&q=80' },
  { cat: 'Mobiles Electronics', badge: 'MOBILES', title: 'MagSnap 10,000mAh Power Pack', desc: 'Anodized slate casing with 22.5W fast PD charging & braided cable.', price: 1599, img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=550&q=80' },
  { cat: 'Fashion Trends', badge: 'FASHION', title: 'Hand-Cured Acetate Shades', desc: 'Polarized UV400 CR-39 lenses with 5-barrel stainless steel hinges.', price: 1149, img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=550&q=80' },
  { cat: 'Furniture Home', badge: 'FURNITURE', title: 'Stackable Birch Accent Stool', desc: 'Bent-plywood studio seating finished in matte natural beeswax.', price: 2199, img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=550&q=80' }
];

const phones = [
  { title: 'ZigPhone 16 Pro (256GB, Titanium Sand)', price: 79999, old: 89999, badge: 'FLAGSHIP 5G', desc: '6.3" 120Hz LTPO OLED display, titanium frame & 48MP periscope camera.', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=550&q=85' },
  { title: 'ZigPhone PixelLite 9a (128GB, Mint)', price: 36999, old: 41999, badge: 'COMPACT PICK', desc: 'Featherweight everyday smartphone with clean OS & 5,100mAh battery.', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=550&q=85' },
  { title: 'ZigPhone FoldStudio (512GB, Obsidian)', price: 114999, old: 129999, badge: 'FOLDABLE EDIT', desc: 'Dual-screen book-style foldable smartphone with zero-gap hinge.', img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=550&q=85' },
  { title: 'ZigPhone UltraCam X (256GB, Cobalt)', price: 68999, old: 76999, badge: 'PRO OPTICS', desc: '1-inch main sensor, 5x optical telephoto & 80W fast wireless charging.', img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=550&q=85' },
  { title: 'ZigPhone NeoAir 5G (128GB, Marigold)', price: 27999, old: 32999, badge: 'ULTRA SLIM', desc: '6.9mm brushed aluminum unibody, 144Hz AMOLED & 65W charger in box.', img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=550&q=85' },
  { title: 'ZigPhone MaxPower 12 (256GB, Graphite)', price: 44999, old: 49999, badge: '6500MAH CELL', desc: 'Two-day silicon-carbon battery, vapor cooling & Dolby Atmos stereo.', img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=550&q=85' },
  { title: 'ZigPhone MiniPocket SE (128GB, Coral)', price: 31999, old: 35999, badge: '5.8" POCKET', desc: 'True one-handed ergonomic flagship with frosted glass & MagSnap.', img: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=550&q=85' },
  { title: 'ZigPhone FlipWave Z (256GB, Lavender)', price: 62999, old: 71999, badge: 'CLAMSHELL FLIP', desc: 'Pocket-sized clamshell foldable with 3.6" interactive cover screen.', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=550&q=85' },
  { title: 'ZigPhone CoreNote 14 (128GB, Sage)', price: 19999, old: 23999, badge: 'BEST VALUE', desc: '50MP OIS night camera, IP65 resistance & 4 years of OS updates.', img: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=550&q=85' }
];

const heroSlides = [
  { tag: 'HERO DROP // 01', badge: 'SAVE 35%', bg: '#BAE6FD', rate: '4.9 (412 REVIEWS)', title: 'Over-Ear Studio Pro', desc: '32-hour battery, warm analog soundstage & plush memory foam.', price: 2399, old: 3699, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=85' },
  { tag: 'HERO DROP // 02', badge: 'STAFF PICK', bg: '#FDB813', rate: '4.8 (289 REVIEWS)', title: 'Nordic Mesh Watch', desc: 'Brushed steel 38mm dial with Japanese quartz movement.', price: 1749, old: 2499, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=85' },
  { tag: 'HERO DROP // 03', badge: 'NEW BATCH', bg: '#A7F3D0', rate: '5.0 (194 REVIEWS)', title: 'Quiet Click Keypad', desc: 'Hot-swappable creamy tactile switches & thick PBT keycaps.', price: 3199, old: 4299, img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&q=85' },
  { tag: 'HERO DROP // 04', badge: 'FESTIVE EDIT', bg: '#FCA5A5', rate: '4.9 (318 REVIEWS)', title: 'Artisan Stoneware Pour-Over', desc: 'Hand-thrown Khurja speckled clay cup fired at 1200°C.', price: 399, old: 650, img: 'https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?w=700&q=85' }
];

const books = [
  { spine: 'EVERYDAY THINGS', h: 'h-60 sm:h-64', bg: 'bg-[#FDB813] text-[#111111]', num: 'bg-white', dot: 'bg-[#111111]', genre: 'INDUSTRIAL DESIGN', pages: '368 PAGES // PAPERBACK', author: 'DON NORMAN', title: 'The Design of Everyday Things', summary: 'Why some objects delight us while others frustrate—an indispensable manual on intuitive product craft.', quote: '"Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible."', price: 549, tint: '#FAF7EE', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=85' },
  { spine: 'WINGS OF FIRE', h: 'h-64 sm:h-72', bg: 'bg-[#E0533C] text-white', num: 'bg-[#111111] text-[#FDB813]', dot: 'bg-[#FDB813] dark-border', genre: 'AUTOBIOGRAPHY', pages: '196 PAGES // PAPERBACK', author: 'A.P.J. ABDUL KALAM', title: 'Wings of Fire', summary: 'An inspiring journey from Rameswaram boatyards to leading India’s indigenous space and missile programs.', quote: '"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."', price: 349, tint: '#FEE2E2', cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=85' },
  { spine: 'ATOMIC HABITS', h: 'h-56 sm:h-60', bg: 'bg-[#A7F3D0] text-[#111111]', num: 'bg-white', dot: 'bg-[#111111]', genre: 'SYSTEMS & HABITS', pages: '320 PAGES // HARDCOVER', author: 'JAMES CLEAR', title: 'Atomic Habits', summary: 'A practical framework for compounding 1% daily improvements into lasting personal and creative mastery.', quote: '"You do not rise to the level of your goals. You fall to the level of your systems."', price: 499, tint: '#ECFDF5', cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=85' },
  { spine: 'SHOW YOUR WORK!', h: 'h-62 sm:h-68', bg: 'bg-[#BAE6FD] text-[#111111]', num: 'bg-white', dot: 'bg-[#E0533C] dark-border', genre: 'CREATIVE PROCESS', pages: '224 PAGES // ILLUSTRATED', author: 'AUSTIN KLEON', title: 'Show Your Work!', summary: 'Ten honest ways for makers, coders, and artists to share their process and build an authentic audience.', quote: '"Become a documentarian of what you do. Start a work journal and write your thoughts down in a notebook."', price: 399, tint: '#E0F2FE', cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=85' },
  { spine: 'THE CREATIVE ACT', h: 'h-60 sm:h-64', bg: 'bg-[#FAF7EE] text-[#111111]', num: 'bg-[#FDB813]', dot: 'bg-[#111111]', genre: 'ART & PHILOSOPHY', pages: '432 PAGES // CLOTHBOUND', author: 'RICK RUBIN', title: 'The Creative Act: A Way of Being', summary: 'Meditations on tuning into ideas, embracing curiosity, and bringing unseen beauty into everyday objects.', quote: '"Look for what you notice but no one else sees. Pay attention to what holds your attention."', price: 799, tint: '#FEF9C3', cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=85' },
  { spine: 'CLEAN CODE', h: 'h-56 sm:h-62', bg: 'bg-[#111111] text-[#FAF7EE]', num: 'bg-[#A7F3D0] text-[#111111]', dot: 'bg-[#FDB813]', genre: 'SOFTWARE CRAFT', pages: '464 PAGES // PAPERBACK', author: 'ROBERT C. MARTIN', title: 'Clean Code', summary: 'A field handbook of agile software craftsmanship—writing readable, resilient systems built to last.', quote: '"Clean code always looks like it was written by someone who cares."', price: 699, tint: '#F3F4F6', cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=85' }
];

const essCatalog = {
  pantry: {
    code: 'ESSENTIAL STORE // 01 PANTRY', emoji: '☕', bg: '#FDB813', title: 'Pantry & Single-Estate Brews', sub: 'Freshly roasted Chikmagalur beans, raw forest honey, and slow-roasted nuts.',
    items: [
      { name: 'Chikmagalur Roast & Nuts', price: 399, old: 499, tag: 'BESTSELLER', desc: 'Single-estate medium roast Arabica (250g) with slow-roasted almonds.', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80' },
      { name: 'Sundarbans Raw Wild Honey', price: 349, old: 420, tag: 'UNFILTERED', desc: '100% pure cold-extracted mangrove honey in reusable glass jar (400g).', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80' },
      { name: 'Nilgiri First-Flush Oolong', price: 289, old: 360, tag: 'WHOLE LEAF', desc: 'Fragrant high-altitude loose-leaf tea tins with floral bergamot notes.', img: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80' },
      { name: 'Cold-Pressed Kashmiri Walnut Oil', price: 549, old: 699, tag: 'SMALL BATCH', desc: 'Wood-pressed gourmet finishing oil rich in natural Omega-3.', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80' },
      { name: 'Malabar Pepper & Sea Salt Mill', price: 229, old: 299, tag: 'SPICE LAB', desc: 'Tellicherry bold peppercorns & solar sea salt in ceramic burr mill.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80' },
      { name: 'Stone-Ground Hazelnut Cacao', price: 429, old: 520, tag: 'ZERO PALM OIL', desc: 'Roasted hazelnuts blended with 65% Idukki dark chocolate & jaggery.', img: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=500&q=80' }
    ]
  },
  care: {
    code: 'ESSENTIAL STORE // 02 CARE', emoji: '🧼', bg: '#A7F3D0', title: 'Botanical Care & Zero-Waste Bath', sub: 'Plastic-free daily hygiene essentials crafted with cold-pressed oils & copper.',
    items: [
      { name: 'Gentle Clean & Bamboo Kit', price: 210, old: 280, tag: 'STARTER SET', desc: 'Charcoal bamboo toothbrushes, pure copper tongue cleaner & wash.', img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&q=80' },
      { name: 'Saffron & Neem Soap Trio', price: 249, old: 330, tag: '6-WK CURED', desc: 'Hand-poured shea butter bars infused with Kashmiri saffron & neem.', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80' },
      { name: 'Vetiver & Cedarwood Face Oil', price: 379, old: 480, tag: 'APOTHECARY', desc: 'Lightweight jojoba and argan botanical blend in amber dropper.', img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80' },
      { name: 'Hammered Copper Water Bottle', price: 699, old: 899, tag: 'AYURVEDIC', desc: 'Leak-proof jointless 1L solid copper vessel with matte exterior.', img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80' },
      { name: 'Unbleached Waffle Bath Towel', price: 549, old: 720, tag: '450 GSM', desc: 'Quick-drying honeycomb weave organic cotton towel in natural oat.', img: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?w=500&q=80' },
      { name: 'Eucalyptus Shower Steamers', price: 299, old: 390, tag: 'AROMA', desc: 'Set of 6 fizzing essential oil tablets for an instant steam spa.', img: 'https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?w=500&q=80' }
    ]
  },
  study: {
    code: 'ESSENTIAL STORE // 03 STUDY & WORK', emoji: '📓', bg: '#BAE6FD', title: 'Study, Desk & Analog Stationery', sub: 'Archival fountain-friendly paper, solid brass instruments & desk organizers.',
    items: [
      { name: '120GSM Dotted Sketchbook', price: 299, old: 399, tag: 'LAY-FLAT', desc: 'Thread-bound A5 notebook with 192 bleed-proof ivory dot-grid pages.', img: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&q=80' },
      { name: 'Machined Solid Brass Hex Pen', price: 649, old: 850, tag: 'WEIGHTED', desc: 'Precision-turned raw brass rollerball pen that develops rich patina.', img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80' },
      { name: 'Merino Wool Felt Desk Mat', price: 799, old: 1099, tag: 'DESK FAVORITE', desc: '3mm dense charcoal felt pad (80×30cm) with anti-slip cork base.', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80' },
      { name: 'Weekly Undated Desk Planner', price: 249, old: 320, tag: '60 SHEETS', desc: 'Tear-off daily time-blocking & priority matrix on 100GSM paper.', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=80' },
      { name: 'Modular Teakwood Desk Caddy', price: 449, old: 599, tag: 'HAND-OILED', desc: 'Compact desktop organizer with magnetic clip dish & phone slot.', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=80' },
      { name: 'Pastel Archival Fineliners (8pc)', price: 329, old: 420, tag: '0.4MM TIP', desc: 'Quick-dry pigment ink markers for journaling & technical sketches.', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80' }
    ]
  },
  bites: {
    code: 'ESSENTIAL STORE // 04 HEALTHY BITES', emoji: '🍪', bg: '#FCA5A5', title: 'Clean Snacks & Craft Cacao', sub: 'Zero-maida wholesome munchies and single-origin Indian dark chocolate.',
    items: [
      { name: 'Roasted Makhana & Cacao Box', price: 310, old: 399, tag: 'COMBO', desc: 'Peri-peri popped lotus seeds paired with Idukki dark chocolate.', img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=500&q=80' },
      { name: '72% Idukki Dark Chocolate', price: 249, old: 310, tag: 'BEAN-TO-BAR', desc: 'Stone-ground Kerala cacao with roasted sea-salt almond nibs.', img: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&q=80' },
      { name: 'Baked Ragi & Rosemary Crisps', price: 179, old: 230, tag: 'GLUTEN-FREE', desc: 'Crunchy finger-millet crackers with cold-pressed olive oil.', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80' },
      { name: 'Himalayan Trail Mix Jar', price: 349, old: 440, tag: 'PROTEIN PACK', desc: 'Pumpkin seeds, cranberries, Kashmiri walnuts & pistachios.', img: 'https://images.unsplash.com/photo-1536591375667-f6e135e1c3f1?w=500&q=80' },
      { name: 'Date & Espresso Energy Bites', price: 269, old: 340, tag: 'NO SUGAR', desc: 'Box of 8 fudge-like Medjool date truffles rolled in raw cacao.', img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&q=80' },
      { name: 'Spiced Masala Cashew Tin', price: 389, old: 480, tag: 'PARTY TIN', desc: 'Dry-roasted Goa cashews & crunchy makhana in curry leaves.', img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&q=80' }
    ]
  }
};

const palettes = {
  default:  { name: 'DEFAULT MARIGOLD',   label: 'Default (Zigzoo Marigold)',   sub: 'Warm Cream, Marigold & Terracotta', light: '#FAF7EE', dark: '#121214', y: '#FDB813', c: '#E0533C', m: '#A7F3D0', s: '#BAE6FD' },
  matcha:   { name: 'MATCHA & YUZU',      label: 'Kyoto Matcha & Yuzu',         sub: 'Botanical Sage, Citrus & Forest',   light: '#F3F8F2', dark: '#0F1712', y: '#A3E635', c: '#15803D', m: '#FEF08A', s: '#BBF7D0' },
  lavender: { name: 'LAVENDER & CORAL',   label: 'Studio Lavender & Coral',     sub: 'Soft Lilac, Violet & Punch',        light: '#F6F3FF', dark: '#14111D', y: '#C084FC', c: '#F43F5E', m: '#99F6E4', s: '#DDD6FE' },
  cobalt:   { name: 'COBALT & TANGERINE', label: 'Bauhaus Cobalt & Tangerine',  sub: 'Gallery Ice, Orange & Sky',         light: '#F0F6FF', dark: '#0F1522', y: '#FB923C', c: '#2563EB', m: '#FDE047', s: '#BAE6FD' },
  rosewood: { name: 'JAIPUR ROSE',        label: 'Jaipur Rose & Pistachio',     sub: 'Blush Sandstone, Berry & Mint',     light: '#FDF4F5', dark: '#1B1115', y: '#F472B6', c: '#BE185D', m: '#BBF7D0', s: '#FBCFE8' }
};

/* =========================================================
   2. CORE HELPER FUNCTIONS
   ========================================================= */
const $ = id => document.getElementById(id);
const toggleEl = (id, show) => $(id)?.classList.toggle('hidden', !show);

let toastTimer;
function toast(msg) {
  $('toastTxt').textContent = msg;
  $('toastBanner').classList.remove('translate-y-24', 'opacity-0');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('toastBanner').classList.add('translate-y-24', 'opacity-0'), 2500);
}

// Currency Formatter
let curr = 'INR';
const rates = { INR: { s: '₹', r: 1 }, USD: { s: '$', r: 0.01079 }, EUR: { s: '€', r: 0.00986 } };
const fmt = inr => {
  const c = rates[curr] || rates.INR;
  const val = inr * c.r;
  return curr === 'INR' ? `₹${Math.round(val).toLocaleString('en-IN')}` : `${c.s}${val.toFixed(2)}`;
};
const refreshPrices = () => document.querySelectorAll('[data-inr]').forEach(el => el.textContent = fmt(+el.dataset.inr));

/* =========================================================
   3. RENDER STOREFRONT SECTIONS
   ========================================================= */
function renderStore() {
  $('catList').innerHTML = cats.map((c, i) =>
    `<button onclick="filterCat(this,'${i ? c : 'All'}')" class="catbtn ${i ? 'bg-[#FAF7EE] hover:bg-[#FDB813]' : 'bg-[#111111] text-[#FAF7EE]'} px-3.5 py-1.5 rounded-lg dark-border whitespace-nowrap">${c}</button>`
  ).join('');

  $('heroDots').innerHTML = heroSlides.map((_, i) =>
    `<button onclick="setHero(${i})" class="hdot ${i ? 'w-3 bg-white' : 'w-7 bg-[#111111]'} h-3 rounded-full dark-border transition-all"></button>`
  ).join('');

  $('dealsRow').innerHTML = deals.map(d => `
    <article data-cat="${d.cat}" class="pcard hover-card w-60 sm:w-64 flex-shrink-0 bg-white dark-border hard-shadow rounded-2xl p-4 flex flex-col justify-between cursor-pointer">
      <div>
        <div class="relative aspect-square rounded-xl ${d.bg} dark-border overflow-hidden mb-3">
          <span class="absolute top-2.5 left-2.5 ${d.bCls} code-font text-[10px] font-bold px-2 py-0.5 rounded dark-border z-10">${d.badge}</span>
          <img loading="lazy" src="${d.img}" alt="${d.title}" class="w-full h-full object-cover">
        </div>
        <div class="flex justify-between code-font text-[10px] font-bold text-neutral-600"><span>${d.tag}</span><span>★ ${d.rate}</span></div>
        <h3 class="text-base sm:text-lg font-bold mt-1">${d.title}</h3>
        <p class="text-xs text-neutral-600 mt-1">${d.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t-2 border-dashed border-neutral-300 flex items-center justify-between">
        <div><span class="font-bold heading-font" data-inr="${d.price}">${fmt(d.price)}</span><span class="text-xs text-neutral-400 line-through ml-1 code-font" data-inr="${d.old}">${fmt(d.old)}</span></div>
        <button onclick="addBag('${d.title}',${d.price})" class="btn-tap px-3 py-1.5 rounded-lg bg-[#A7F3D0] dark-border text-xs font-bold code-font">+ BAG</button>
      </div>
    </article>`).join('');

  $('spotlightsGrid').innerHTML = `
    <div data-cat="Home" class="pcard lg:col-span-5 hover-card bg-[#BAE6FD]/45 dark-border hard-shadow rounded-3xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer">
      <div>
        <div class="flex justify-between"><span class="code-font text-[10px] font-bold bg-white dark-border px-2.5 py-1 rounded-lg">CRAFT &amp; CERAMICS</span><span class="code-font text-xs font-bold">KHURJA, UP</span></div>
        <h3 class="text-xl sm:text-2xl font-bold mt-4">Artisan Stoneware &amp; Pour-Over Cups</h3>
        <p class="text-xs sm:text-sm text-neutral-700 mt-1.5">Hand-thrown speckled clay vessels fired at 1200°C with food-safe matte mineral glazes.</p>
        <div class="mt-4 rounded-2xl dark-border overflow-hidden aspect-[4/3] bg-white"><img loading="lazy" src="https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?w=600&q=80" alt="Stoneware" class="w-full h-full object-cover"></div>
      </div>
      <div class="mt-5 pt-3 border-t-2 border-[#111111] flex items-center justify-between">
        <span class="font-bold heading-font text-lg">From <span data-inr="399">₹399</span></span>
        <button onclick="addBag('Artisan Stoneware Mug',399)" class="btn-tap px-4 py-2 rounded-xl bg-white hover:bg-[#FDB813] dark-border text-xs font-bold code-font">ADD TO BAG →</button>
      </div>
    </div>
    <div class="lg:col-span-7 flex flex-col gap-6">${[
      { cat: 'Furniture Home', bg: 'bg-white', b: 'WORKSPACE EDIT', t: 'Warm Pinewood Desk Risers', d: 'Solid kiln-dried pine monitor shelves paired with merino wool felt desk mats.', p: 649, btn: 'bg-[#A7F3D0]', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=80' },
      { cat: 'Beauty', bg: 'bg-[#E0533C]/15', b: 'APOTHECARY', t: 'Cold-Pressed Botanical Soaps', d: 'Small-batch Kashmiri saffron, wild neem, and unrefined shea butter bars cured 6 weeks.', p: 249, btn: 'bg-[#FDB813]', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80' }
    ].map(s => `
      <div data-cat="${s.cat}" class="pcard hover-card flex-1 ${s.bg} dark-border hard-shadow rounded-3xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center cursor-pointer">
        <div class="sm:col-span-5 rounded-2xl dark-border overflow-hidden aspect-[16/10] sm:aspect-square bg-white"><img loading="lazy" src="${s.img}" alt="${s.t}" class="w-full h-full object-cover"></div>
        <div class="sm:col-span-7 flex flex-col justify-between h-full">
          <div><span class="code-font text-[10px] font-bold bg-[#FDB813] dark-border px-2.5 py-0.5 rounded">${s.b}</span><h3 class="text-xl sm:text-2xl font-bold mt-2.5">${s.t}</h3><p class="text-xs text-neutral-600 mt-1.5">${s.d}</p></div>
          <div class="mt-4 pt-3 border-t-2 border-dashed border-neutral-300 flex items-center justify-between"><span class="font-bold heading-font" data-inr="${s.p}">${fmt(s.p)}</span><button onclick="addBag('${s.t}',${s.p})" class="btn-tap px-3.5 py-1.5 rounded-lg ${s.btn} dark-border text-xs font-bold code-font">+ ADD TO BAG</button></div>
        </div>
      </div>`).join('')}
    </div>`;

  $('pillarsGrid').innerHTML = pillars.map(p => `
    <div class="hover-card bg-white dark-border hard-shadow rounded-2xl p-5 space-y-3">
      <div class="w-11 h-11 rounded-xl ${p.bg} dark-border flex items-center justify-center font-bold code-font text-sm">${p.n}</div>
      <h3 class="text-lg font-bold">${p.t}</h3>
      <p class="text-xs text-neutral-600 leading-relaxed">${p.d}</p>
    </div>`).join('');

  $('essentialsGrid').innerHTML = essSummary.map(e => `
    <div onclick="openEss('${e.k}')" class="hover-card cursor-pointer bg-white dark-border hard-shadow rounded-2xl p-4 sm:p-5 flex items-center gap-4 group">
      <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${e.bg} dark-border flex items-center justify-center text-3xl sm:text-4xl flex-shrink-0 group-hover:scale-105 transition-transform">${e.e}</div>
      <div>
        <span class="code-font text-[10px] font-bold bg-[#FAF7EE] dark-border px-2 py-0.5 rounded">${e.tag}</span>
        <h3 class="text-base sm:text-lg font-bold mt-1.5">${e.t}</h3>
        <p class="text-xs text-neutral-600 mt-0.5">${e.d}</p>
        <span class="mt-2 inline-block code-font text-xs font-bold underline decoration-2 group-hover:text-[#E0533C]">${e.link}</span>
      </div>
    </div>`).join('');

  $('diwaliGrid').innerHTML = diwali.map(d => `
    <div class="hover-card bg-[#FAF7EE] dark-border hard-shadow-sm rounded-2xl p-4 flex flex-col justify-between">
      <div class="flex justify-between"><span class="text-3xl">${d.e}</span><span class="code-font text-xs font-bold bg-[#FDB813] dark-border px-2 py-0.5 rounded" data-inr="${d.price}">${fmt(d.price)}</span></div>
      <div class="mt-3"><h4 class="font-bold text-sm sm:text-base">${d.name}</h4><p class="text-[11px] text-neutral-600 mt-0.5">${d.desc}</p></div>
      <button onclick="addBag('${d.name}',${d.price})" class="btn-tap mt-3 w-full py-1.5 rounded-lg bg-[#E0533C] text-white dark-border code-font text-[11px] font-bold">+ ADD TO BAG</button>
    </div>`).join('');

  $('shelfGrid').innerHTML = shelfItems.map(s => `
    <article data-cat="${s.cat}" class="pcard hover-card bg-white dark-border hard-shadow rounded-2xl p-4 flex flex-col justify-between cursor-pointer">
      <div>
        <div class="aspect-[4/3] rounded-xl bg-[#FAF7EE] dark-border overflow-hidden mb-3 relative">
          <span class="absolute top-2.5 left-2.5 bg-white dark-border code-font text-[10px] font-bold px-2 py-0.5 rounded">${s.badge}</span>
          <img loading="lazy" src="${s.img}" alt="${s.title}" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-bold">${s.title}</h3>
        <p class="text-xs text-neutral-600 mt-1">${s.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t-2 border-dashed border-neutral-300 flex items-center justify-between">
        <span class="font-bold heading-font" data-inr="${s.price}">${fmt(s.price)}</span>
        <button onclick="addBag('${s.title}',${s.price})" class="btn-tap px-3.5 py-1.5 rounded-lg bg-[#FDB813] dark-border text-xs font-bold code-font">+ BAG</button>
      </div>
    </article>`).join('');

  $('spinesRow').innerHTML = books.map((b, i) => `
    <button onclick="setBook(${i})" class="spine ${i ? '' : 'selected-book'} ${b.h} w-12 sm:w-14 rounded-t-xl ${b.bg} dark-border hard-shadow-sm py-3 px-1.5 flex items-center justify-between cursor-pointer flex-shrink-0">
      <span class="code-font text-[9px] font-bold ${b.num} dark-border px-1 py-0.5 rounded">0${i + 1}</span>
      <span class="heading-font font-bold text-xs sm:text-sm truncate">${b.spine}</span>
      <span class="w-2.5 h-2.5 rounded-full ${b.dot}"></span>
    </button>`).join('');

  $('palList').innerHTML = Object.entries(palettes).map(([k, p]) => `
    <button onclick="setPalette('${k}')" data-pkey="${k}" class="pchoice w-full btn-tap p-3 rounded-xl bg-white dark-border hard-shadow-sm flex items-center justify-between text-left ${k === 'default' ? 'ring-2 ring-[#111111]' : ''}">
      <div><div class="font-bold text-xs">${p.label}</div><div class="code-font text-[10px] text-neutral-500">${p.sub}</div></div>
      <div class="flex gap-1">${[p.light, p.y, p.c, p.m].map(c => `<span class="w-4 h-4 rounded-full border border-[#111111]" style="background:${c}"></span>`).join('')}</div>
    </button>`).join('');

  $('reviewsFaqSec').innerHTML = `
    <div class="lg:col-span-6 bg-white dark-border hard-shadow-lg rounded-3xl p-5 sm:p-7 space-y-5">
      <div class="border-b-2 border-[#111111] pb-3 flex justify-between items-center"><div><span class="code-font text-[10px] font-bold bg-[#A7F3D0] dark-border px-2 py-0.5 rounded">VERIFIED BUYERS</span><h3 class="text-2xl font-bold mt-1.5">Field Notes</h3></div><span class="code-font text-xs font-bold">4.9 ★ AVG</span></div>
      <div class="space-y-4">
        <div class="bg-[#FAF7EE] dark-border rounded-2xl p-4"><div class="flex justify-between code-font text-[11px] font-bold"><span>ANANYA R. // BENGALURU</span><span class="text-[#E0533C]">★★★★★</span></div><p class="text-xs text-neutral-700 mt-2 leading-relaxed">"Ordered the Over-Ear Studio Pro and Khurja stoneware mugs on Tuesday afternoon—arrived Wednesday morning in plastic-free packaging. Zero fluff, pure quality."</p></div>
        <div class="bg-[#FAF7EE] dark-border rounded-2xl p-4"><div class="flex justify-between code-font text-[11px] font-bold"><span>ROHAN M. // KOLKATA</span><span class="text-[#E0533C]">★★★★★</span></div><p class="text-xs text-neutral-700 mt-2 leading-relaxed">"The Quiet Click Keypad has the cleanest factory lube I have felt under <span data-inr="3500">₹3,500</span>. Feels like a custom boutique build right out of the box."</p></div>
      </div>
    </div>
    <div class="lg:col-span-6 bg-[#BAE6FD]/40 dark-border hard-shadow-lg rounded-3xl p-5 sm:p-7 space-y-4">
      <div class="border-b-2 border-[#111111] pb-3"><span class="code-font text-[10px] font-bold bg-white dark-border px-2 py-0.5 rounded">HELP DESK</span><h3 class="text-2xl font-bold mt-1.5">Common Questions</h3></div>
      <div class="space-y-3">${[
        ['open', 'How fast does Express Courier deliver?', 'Metro orders (Kolkata, Bengaluru, Mumbai, Delhi, Hyderabad) arrive within 24–48 hours. Rest of India delivers in 3–4 business days.'],
        ['', 'What is your 7-day no-fuss return policy?', "If an object doesn't fit your desk or daily ritual, trigger a doorstep pickup within 7 days for an instant full refund—no restocking fees."],
        ['', 'Are electronics covered by manufacturer warranty?', 'Yes—every audio, desk, and mobile accessory includes a 1-year direct replacement guarantee handled straight through Zigzoo.']
      ].map(f => `<details class="bg-white dark-border rounded-2xl p-4" ${f[0]}><summary class="font-bold text-xs sm:text-sm cursor-pointer list-none flex justify-between"><span>${f[1]}</span><span class="code-font text-xs bg-[#FDB813] dark-border px-2 py-0.5 rounded">+</span></summary><p class="text-xs text-neutral-600 mt-2.5 pt-2.5 border-t border-dashed border-neutral-300 leading-relaxed">${f[2]}</p></details>`).join('')}
      </div>
    </div>`;
}

/* =========================================================
   4. HERO SLIDER, BOOKSHELF & CATEGORY FILTER
   ========================================================= */
let heroIdx = 0;
let bookIdx = 0;

function setHero(i) {
  heroIdx = (i + heroSlides.length) % heroSlides.length;
  const s = heroSlides[heroIdx];
  $('heroStage').style.backgroundColor = s.bg;
  $('heroTag').textContent = s.tag;
  $('heroBadge').textContent = s.badge;
  $('heroRating').textContent = s.rate;
  $('heroTitle').textContent = s.title;
  $('heroDesc').textContent = s.desc;
  $('heroPrice').textContent = fmt(s.price);
  $('heroOldPrice').textContent = fmt(s.old);
  $('heroImg').src = s.img;

  if (window.gsap) gsap.fromTo('#heroImg', { opacity: 0.35, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.35 });
  document.querySelectorAll('.hdot').forEach((d, idx) => {
    const on = idx === heroIdx;
    d.classList.toggle('w-7', on);
    d.classList.toggle('bg-[#111111]', on);
    d.classList.toggle('w-3', !on);
    d.classList.toggle('bg-white', !on);
  });
}

function setBook(i) {
  bookIdx = i;
  const b = books[i];
  document.querySelectorAll('.spine').forEach((sp, idx) => sp.classList.toggle('selected-book', idx === i));
  $('bookCard').style.backgroundColor = b.tint;
  $('bGenre').textContent = b.genre;
  $('bPages').textContent = b.pages;
  $('bAuthor').textContent = b.author;
  $('bTitle').textContent = b.title;
  $('bSummary').textContent = b.summary;
  $('bQuote').textContent = b.quote;
  $('bPrice').textContent = fmt(b.price);
  $('bCover').src = b.cover;
}

function filterCat(btn, cat) {
  document.querySelectorAll('.catbtn').forEach(b => {
    b.classList.remove('bg-[#111111]', 'text-[#FAF7EE]');
    b.classList.add('bg-[#FAF7EE]');
  });
  btn.classList.replace('bg-[#FAF7EE]', 'bg-[#111111]');
  btn.classList.add('text-[#FAF7EE]');

  let count = 0;
  document.querySelectorAll('.pcard').forEach(c => {
    const ok = cat === 'All' || c.dataset.cat.toLowerCase().includes(cat.toLowerCase());
    c.classList.toggle('hidden', !ok);
    if (ok) count++;
  });
  if (cat === 'Books') $('bookshelfSec')?.scrollIntoView({ behavior: 'smooth' });
  toast(cat === 'All' ? 'SHOWING ALL CURATED OBJECTS' : `${cat.toUpperCase()} (${count} MATCHES)`);
}

/* =========================================================
   5. SHOPPING BAG & SANDBOX CHECKOUT GATEWAY
   ========================================================= */
let bag = [
  { name: 'Over-Ear Studio Pro', price: 2399 },
  { name: 'Brass Diya (Set of 4)', price: 499 }
];
let payTab = 'upi';
let payBusy = false;

function renderBag() {
  $('bagBadge').textContent = bag.length;
  $('bagCount').textContent = bag.length;
  const sum = bag.reduce((a, b) => a + b.price, 0);

  $('bagList').innerHTML = bag.length ? bag.map((x, i) => `
    <div class="bg-white dark-border rounded-xl p-3 flex items-center justify-between">
      <div><div class="font-bold text-xs">${x.name}</div><div class="code-font text-xs font-bold text-[#E0533C]">${fmt(x.price)}</div></div>
      <button onclick="bag.splice(${i},1);renderBag()" class="code-font text-[10px] font-bold px-2 py-1 rounded bg-[#FAF7EE] hover:bg-[#E0533C] hover:text-white dark-border">REMOVE</button>
    </div>`).join('') : '<p class="text-xs text-neutral-500 code-font py-6 text-center">YOUR BAG IS EMPTY.</p>';

  $('bagTotal').textContent = fmt(sum);
}

function addBag(name, price) {
  bag.push({ name, price });
  renderBag();
  toast(`ADDED "${name.toUpperCase()}" TO BAG!`);
}

function openBag() {
  renderBag();
  toggleEl('bagDrawer', true);
}

function setPayTab(t) {
  payTab = t;
  document.querySelectorAll('.ptab').forEach(b => {
    const on = b.dataset.ptab === t;
    b.classList.toggle('bg-[#111111]', on);
    b.classList.toggle('text-[#FAF7EE]', on);
    b.classList.toggle('bg-white', !on);
  });
  toggleEl('paneUpi', t === 'upi');
  toggleEl('paneCard', t === 'card');
  toggleEl('paneCod', t === 'cod');
}

function openCheckout() {
  if (!bag.length) return toast('YOUR BAG IS EMPTY!');
  const tot = fmt(bag.reduce((a, b) => a + b.price, 0));
  $('payItems').textContent = bag.length;
  $('payAmt').textContent = tot;
  $('payBtnAmt').textContent = tot;
  toggleEl('payForm', true);
  toggleEl('payFoot', true);
  toggleEl('payDone', false);
  toggleEl('paySpin', false);
  setPayTab(payTab);
  toggleEl('payModal', true);
}

function runPay() {
  if (payBusy || !bag.length) return;
  payBusy = true;
  const tot = fmt(bag.reduce((a, b) => a + b.price, 0));
  $('paySubmit').disabled = true;
  toggleEl('paySpin', true);
  $('payStep').textContent = 'VERIFYING DEMO CREDENTIALS...';

  setTimeout(() => $('payStep').textContent = 'GENERATING ZIGZOO RECEIPT...', 600);
  setTimeout(() => {
    payBusy = false;
    $('paySubmit').disabled = false;
    toggleEl('paySpin', false);
    $('txnRef').textContent = `ZGZ-${Math.floor(100000 + Math.random() * 900000)}`;
    $('txnMethod').textContent = payTab === 'upi' ? `UPI (${$('upiId').value || 'demo@upi'})` : payTab === 'card' ? 'SANDBOX CARD •••• 4242' : 'CASH ON DELIVERY';
    $('txnPaid').textContent = tot;
    toggleEl('payForm', false);
    toggleEl('payFoot', false);
    toggleEl('payDone', true);
    bag = [];
    renderBag();
    toggleEl('bagDrawer', false);
  }, 1300);
}

/* =========================================================
   6. PRODUCT ZOOM LOUPE & ESSENTIAL COLLECTION MODAL
   ========================================================= */
let curProd = null;
let mQty = 1;
let zoomLvl = 1;
let curEss = null;

function openProd(p) {
  curProd = p;
  mQty = 1;
  setZoom(1);
  $('zoomImg').src = p.img;
  $('mTitle').textContent = p.title;
  $('mDesc').textContent = p.desc || 'Verified small-batch everyday object.';
  $('mCat').textContent = (p.cat || 'CURATED OBJECT').toUpperCase();
  $('mCode').textContent = `INSPECT_OBJ // ${(p.cat || 'VOL.04').toUpperCase()}`;
  $('mQty').textContent = '1';
  refreshModalPrice();
  toggleEl('prodModal', true);

  if (window.gsap) gsap.fromTo('#prodCard', { scale: 0.9, y: 24, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.35, ease: 'back.out(1.6)' });
}

function refreshModalPrice() {
  if (!curProd) return;
  $('mPrice').textContent = fmt(curProd.price);
  $('mBtnTotal').textContent = fmt(curProd.price * mQty);
  const old = $('mOldPrice');
  if (curProd.old > curProd.price) {
    old.textContent = fmt(curProd.old);
    old.classList.remove('hidden');
  } else {
    old.classList.add('hidden');
  }
}

function setModalQty(d) {
  mQty = Math.min(10, Math.max(1, mQty + d));
  $('mQty').textContent = mQty;
  refreshModalPrice();
}

function addModalToBag() {
  if (!curProd) return;
  for (let i = 0; i < mQty; i++) bag.push({ name: curProd.title, price: curProd.price });
  renderBag();
  toggleEl('prodModal', false);
  toast(`ADDED ${mQty}× "${curProd.title.toUpperCase()}" TO BAG!`);
}

function setZoom(s) {
  zoomLvl = s;
  const z = s > 1;
  $('zoomBox').classList.toggle('zoomed', z);
  $('zoomImg').style.transformOrigin = '50% 50%';
  $('zoomImg').style.transform = `scale(${s})`;
  $('zoomTxt').textContent = z ? `${s.toFixed(1)}X LOUPE // MOVE TO PAN` : '1.0X // TAP TO ZOOM';
  [$('z1Btn'), $('z2Btn')].forEach((b, i) => {
    const on = i === (z ? 1 : 0);
    b.classList.toggle('bg-[#111111]', on);
    b.classList.toggle('text-[#FAF7EE]', on);
    b.classList.toggle('bg-[#FAF7EE]', !on);
  });
}

function toggleZoom(e) {
  if (zoomLvl > 1) setZoom(1);
  else {
    setZoom(2.4);
    panZoom(e.clientX, e.clientY);
  }
}

function panZoom(x, y) {
  if (zoomLvl <= 1) return;
  const r = $('zoomBox').getBoundingClientRect();
  const px = Math.min(100, Math.max(0, (x - r.left) / r.width * 100));
  const py = Math.min(100, Math.max(0, (y - r.top) / r.height * 100));
  $('zoomImg').style.transformOrigin = `${px}% ${py}%`;
}

function openEss(k) {
  const c = essCatalog[k];
  if (!c) return;
  curEss = k;
  $('essBanner').style.backgroundColor = c.bg;
  $('essEmoji').textContent = c.emoji;
  $('essCode').textContent = c.code;
  $('essTitle').textContent = c.title;
  $('essSub').textContent = c.sub;

  document.querySelectorAll('.etab').forEach(b => {
    const on = b.dataset.etab === k;
    b.classList.toggle('bg-[#111111]', on);
    b.classList.toggle('text-[#FAF7EE]', on);
    b.classList.toggle('bg-[#FAF7EE]', !on);
  });

  $('essItems').innerHTML = c.items.map((it, idx) => `
    <article class="hover-card bg-white dark-border hard-shadow-sm rounded-2xl p-3.5 flex flex-col justify-between">
      <div>
        <div onclick="openProd({...essCatalog['${k}'].items[${idx}],title:essCatalog['${k}'].items[${idx}].name,cat:essCatalog['${k}'].code})" class="relative aspect-[4/3] rounded-xl bg-[#FAF7EE] dark-border overflow-hidden mb-3 cursor-zoom-in">
          <span class="absolute top-2 left-2 bg-[#111111] text-[#FDB813] code-font text-[9px] font-bold px-2 py-0.5 rounded dark-border">${it.tag}</span>
          <img src="${it.img}" alt="${it.name}" class="w-full h-full object-cover">
        </div>
        <h4 class="font-bold text-sm sm:text-base">${it.name}</h4>
        <p class="text-[11px] text-neutral-600 mt-1">${it.desc}</p>
      </div>
      <div class="mt-3.5 pt-2.5 border-t-2 border-dashed border-neutral-300 flex items-center justify-between">
        <div><span class="font-bold heading-font">${fmt(it.price)}</span><span class="text-[11px] text-neutral-400 line-through ml-1 code-font">${fmt(it.old)}</span></div>
        <button onclick="addBag('${it.name.replace(/'/g, "\\'")}',${it.price})" class="btn-tap px-3 py-1.5 rounded-lg bg-[#A7F3D0] hover:bg-[#FDB813] dark-border code-font text-[11px] font-bold">+ BAG</button>
      </div>
    </article>`).join('');

  toggleEl('essModal', true);
}

/* =========================================================
   7. SMARTPHONES SEARCH & ZIGGY CHATBOT
   ========================================================= */
let phonesOpen = false;

function renderPhones() {
  $('phonesCount').textContent = `${phones.length} SMARTPHONES FOUND`;
  $('phonesGrid').innerHTML = phones.map((p, i) => `
    <article onclick="if(!event.target.closest('button'))openProd({...phones[${i}],cat:'Smartphones'})" class="hover-card bg-white dark-border hard-shadow rounded-2xl p-4 flex flex-col justify-between cursor-pointer">
      <div>
        <div class="relative aspect-[4/3] rounded-xl bg-[#FAF7EE] dark-border overflow-hidden mb-3">
          <span class="absolute top-2.5 left-2.5 bg-[#111111] text-[#FDB813] code-font text-[10px] font-bold px-2 py-0.5 rounded dark-border">${p.badge}</span>
          <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover">
        </div>
        <div class="flex justify-between code-font text-[10px] font-bold text-neutral-500"><span>SMARTPHONES // 0${i + 1}</span><span>★ 4.9</span></div>
        <h3 class="text-base font-bold mt-1 hover:text-[#E0533C]">${p.title}</h3>
        <p class="text-xs text-neutral-600 mt-1 line-clamp-2">${p.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t-2 border-dashed border-neutral-300 flex items-center justify-between">
        <div><span class="font-bold heading-font">${fmt(p.price)}</span><span class="text-xs text-neutral-400 line-through ml-1 code-font">${fmt(p.old)}</span></div>
        <button onclick="addBag('${p.title}',${p.price})" class="btn-tap px-3.5 py-1.5 rounded-lg bg-[#A7F3D0] hover:bg-[#FDB813] dark-border code-font text-xs font-bold">+ BAG</button>
      </div>
    </article>`).join('');
}

function runSearch() {
  phonesOpen = true;
  $('deskSearch').value = 'Smartphones';
  $('mobSearch').value = 'Smartphones';
  toggleEl('deskDrop', false);
  toggleEl('mobDrop', false);
  toggleEl('homeView', false);
  toggleEl('phonesView', true);
  renderPhones();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
  phonesOpen = false;
  $('deskSearch').value = '';
  $('mobSearch').value = '';
  toggleEl('phonesView', false);
  toggleEl('homeView', true);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobSearch() {
  toggleEl('mobSearchPanel', $('mobSearchPanel').classList.contains('hidden'));
  $('mobSearch').focus();
}

function askZiggy(preset) {
  const inp = $('chatIn');
  const q = (preset || inp.value).trim();
  if (!q) return;
  inp.value = '';
  const box = $('chatBox');
  box.insertAdjacentHTML('beforeend', `<div class="bg-[#111111] text-[#FAF7EE] p-3 rounded-2xl ml-8 text-right font-medium">${q.replace(/</g, '&lt;')}</div>`);

  setTimeout(() => {
    const l = q.toLowerCase();
    let ans = 'Every object on Zigzoo is small-batch verified. Explore Top Deals, the Bookshelf, or our Diwali Marigold Edit!';
    if (l.includes('diwali') || l.includes('gift')) ans = `Our Brass Diya Set (${fmt(499)}) + Royal Kaju Katli Box (${fmt(650)}) is our #1 festive pairing!`;
    else if (l.includes('studio') || l.includes('headphone')) ans = `Over-Ear Studio Pro is 35% off at ${fmt(2399)} with 32-hour battery life.`;
    else if (l.includes('delivery') || l.includes('fast')) ans = `Orders over ${fmt(499)} ship free via Express Courier—24–48h in metros & 3–4 days nationwide.`;
    box.insertAdjacentHTML('beforeend', `<div class="bg-[#A7F3D0] text-[#111111] dark-border p-3 rounded-2xl mr-8 font-medium">${ans}</div>`);
    box.scrollTop = box.scrollHeight;
  }, 320);
}

/* =========================================================
   8. SETTINGS, THEME, PRELOADER & GLOBAL EVENTS
   ========================================================= */
let theme = 'light';
let palKey = 'default';
let curMode = 'default';
let loadInt;

function applyTheme() {
  const p = palettes[palKey] || palettes.default;
  const dk = theme === 'dark';
  document.documentElement.classList.toggle('dark-mode', dk);

  const vars = {
    '--bg': dk ? p.dark : p.light,
    '--card': dk ? '#18181D' : '#FFFFFF',
    '--text': dk ? '#F5F5F7' : '#111111',
    '--line': dk ? '#3F3F46' : '#111111',
    '--yellow': p.y,
    '--coral': p.c,
    '--mint': p.m,
    '--sky': p.s,
    '--dots': dk ? 'rgba(255,255,255,.08)' : 'rgba(17,17,17,.08)'
  };
  Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));

  [$('btnLight'), $('btnDark')].forEach((b, i) => {
    const on = i === (dk ? 1 : 0);
    b.classList.toggle('bg-[#111111]', on);
    b.classList.toggle('text-[#FAF7EE]', on);
    b.classList.toggle('bg-white', !on);
  });
  $('modeTag').textContent = dk ? 'DARK INK' : 'LIGHT PAPER';
  $('palTag').textContent = p.name;
  document.querySelectorAll('.pchoice').forEach(c => c.classList.toggle('ring-2', c.dataset.pkey === palKey));
}

const saveCfg = () => localStorage.setItem('zigzoo_cfg', JSON.stringify({ theme, palKey, curMode, curr }));

function setTheme(m) {
  theme = m;
  applyTheme();
  saveCfg();
  toast(`SWITCHED TO ${m.toUpperCase()} MODE`);
}

function setPalette(k) {
  palKey = k;
  applyTheme();
  saveCfg();
  toast(`PALETTE: ${palettes[k].name}`);
}

function setCursor(m, silent) {
  curMode = m;
  document.documentElement.classList.toggle('cursor-disabled', m === 'none');
  $('cursorRing').className = `hidden md:flex ${m === 'crosshair' ? 'mode-crosshair' : m === 'pixel' ? 'mode-pixel' : ''}`;
  $('curTag').textContent = m === 'none' ? 'OFF' : m.toUpperCase();
  document.querySelectorAll('.cmode').forEach(b => {
    const on = b.dataset.cmode === m;
    b.classList.toggle('bg-[#111111]', on);
    b.classList.toggle('text-[#FAF7EE]', on);
    b.classList.toggle('bg-[#FAF7EE]', !on);
  });
  saveCfg();
  if (!silent) toast(m === 'none' ? 'SYSTEM CURSOR RESTORED' : `CURSOR: ${m.toUpperCase()}`);
}

function setCurr(c, silent) {
  curr = c;
  document.querySelectorAll('.ccode').forEach(b => {
    const on = b.dataset.ccode === c;
    b.classList.toggle('bg-[#111111]', on);
    b.classList.toggle('text-[#FAF7EE]', on);
    b.classList.toggle('bg-[#FAF7EE]', !on);
  });
  refreshPrices();
  renderBag();
  setHero(heroIdx);
  setBook(bookIdx);
  if (curProd) refreshModalPrice();
  if (curEss) openEss(curEss);
  if (phonesOpen) renderPhones();
  saveCfg();
  if (!silent) toast(`CURRENCY: ${c}`);
}

function setShip(btn, lbl) {
  document.querySelectorAll('.shipbtn').forEach(b => b.classList.replace('bg-[#A7F3D0]', 'bg-[#FAF7EE]'));
  btn.classList.replace('bg-[#FAF7EE]', 'bg-[#A7F3D0]');
  toast(`COURIER: ${lbl.toUpperCase()}`);
}

function saveProf() {
  const n = $('inName').value.trim() || 'Explorer X';
  const p = $('inPin').value.trim() || '700114';
  $('profName').textContent = n;
  $('profPin').textContent = `Panihati, WB • ${p}`;
  toast(`PROFILE SAVED FOR ${n.toUpperCase()}`);
}

function resetCfg() {
  theme = 'light';
  palKey = 'default';
  applyTheme();
  setCursor('default', true);
  setCurr('INR', true);
  localStorage.removeItem('zigzoo_cfg');
  toast('RESET TO DEFAULTS');
}

function runLoader() {
  const scr = $('loaderScreen');
  const t0 = performance.now();
  scr.classList.remove('slide-exit', 'hidden');
  $('loaderBar').style.width = '0%';
  $('loaderPct').textContent = '000%';
  if (window.gsap) gsap.fromTo('.logo-tile', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'back.out(1.8)' });

  clearInterval(loadInt);
  loadInt = setInterval(() => {
    const pct = Math.min(100, Math.round((performance.now() - t0) / 28));
    $('loaderBar').style.width = `${pct}%`;
    $('loaderPct').textContent = `${String(pct).padStart(3, '0')}%`;
    $('loaderMsg').textContent = pct < 35 ? 'CALIBRATING STUDIO SHELVES...' : pct < 75 ? 'VERIFYING SMALL-BATCH CRAFT...' : 'READY FOR DISPATCH!';
    if (pct >= 100) hideLoader();
  }, 50);
}

function hideLoader() {
  clearInterval(loadInt);
  $('loaderScreen').classList.add('slide-exit');
  setTimeout(() => {
    toggleEl('loaderScreen', false);
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, 680);
}

function reloadSite() {
  $('reloadIcon').style.transform = 'rotate(360deg)';
  toast('RELOADING ZIGZOO...');
  setTimeout(() => location.reload(), 260);
}

function retryNet() {
  const ic = document.querySelector('#retryBtn svg');
  ic?.classList.add('animate-spin');
  setTimeout(() => {
    ic?.classList.remove('animate-spin');
    if (navigator.onLine) {
      toggleEl('offlineModal', false);
      toast('BACK ONLINE!');
    } else {
      toast('STILL OFFLINE — CHECK CONNECTION');
    }
  }, 600);
}

function jumpScroll(e) {
  const r = $('scrollRuler').getBoundingClientRect();
  const targetY = ((e.clientX - r.left) / r.width) * (document.documentElement.scrollHeight - innerHeight);
  window.scrollTo({ top: targetY, behavior: 'smooth' });
}

function initEvents() {
  // 1. Scroll progress ruler & auto-hide category bar
  const onScroll = () => {
    const y = scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    const pct = max > 0 ? Math.min(100, Math.max(0, y / max * 100)) : 0;
    $('scrollFill').style.width = `${pct}%`;
    $('scrollPct').textContent = `${String(Math.round(pct)).padStart(2, '0')}%`;
    $('catBar').classList.toggle('hide-cats', y > 40);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 2. Quick-view modal click on product cards
  document.querySelectorAll('.pcard').forEach(c => c.addEventListener('click', e => {
    if (e.target.closest('button,a')) return;
    const ps = c.querySelectorAll('[data-inr]');
    openProd({
      title: c.querySelector('h3').textContent.trim(),
      desc: c.querySelector('p')?.textContent.trim(),
      img: c.querySelector('img').src,
      price: +ps[0].dataset.inr,
      old: ps[1] ? +ps[1].dataset.inr : null,
      cat: c.dataset.cat
    });
  }));

  $('heroImgWrap').addEventListener('click', e => {
    if (!e.target.closest('button')) {
      const s = heroSlides[heroIdx];
      openProd({ title: s.title, desc: s.desc, img: s.img, price: s.price, old: s.old, cat: s.tag });
    }
  });

  // 3. Search input & keyboard shortcuts (Cmd/Ctrl + K, Escape)
  const showChips = () => {
    const chip = `<button type="button" onmousedown="event.preventDefault();$('deskSearch').value=$('mobSearch').value='Smartphones';$('deskSearchBtn').textContent='GO: SMARTPHONES';toggleEl('deskDrop',false);toggleEl('mobDrop',false)" class="btn-tap px-2.5 py-1 rounded-lg bg-[#FAF7EE] hover:bg-[#FDB813] dark-border code-font text-[11px] font-bold">📱 Smartphones</button>`;
    $('deskChips').innerHTML = $('mobChips').innerHTML = chip;
    if (document.activeElement === $('deskSearch')) toggleEl('deskDrop', true);
    if (document.activeElement === $('mobSearch')) toggleEl('mobDrop', true);
  };

  [$('deskSearch'), $('mobSearch')].forEach(inp => {
    inp.addEventListener('focus', showChips);
    inp.addEventListener('input', () => {
      $('deskSearch').value = $('mobSearch').value = 'Smartphones';
      $('deskSearchBtn').textContent = 'GO: SMARTPHONES';
      $('deskGlass').classList.add('pinging');
      setTimeout(() => $('deskGlass').classList.remove('pinging'), 650);
      showChips();
    });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); runSearch(); }
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#deskSearchWrap,#mobSearchWrap')) {
      toggleEl('deskDrop', false);
      toggleEl('mobDrop', false);
    }
  });

  addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('deskSearch').focus(); }
    if (e.key === 'Escape') ['ziggyModal', 'bagDrawer', 'settingsDrawer', 'profileDrawer', 'prodModal', 'essModal'].forEach(id => toggleEl(id, false));
  });

  // 4. Horizontal mouse drag scrolling
  document.querySelectorAll('#dealsRow,#catList,#spinesRow').forEach(el => {
    el.classList.add('drag-strip');
    let down = false, moved = false, sx = 0, sl = 0;
    el.addEventListener('mousedown', e => { down = true; moved = false; sx = e.pageX; sl = el.scrollLeft; el.classList.add('dragging'); });
    addEventListener('mousemove', e => { if (!down) return; const dx = e.pageX - sx; if (Math.abs(dx) > 4) moved = true; if (moved) el.scrollLeft = sl - dx * 1.15; });
    addEventListener('mouseup', () => {
      if (!down) return;
      down = false;
      el.classList.remove('dragging');
      if (moved) el.addEventListener('click', ev => { ev.preventDefault(); ev.stopPropagation(); }, { capture: true, once: true });
    });
  });

  // 5. Desktop custom tactile cursor
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    const ring = $('cursorRing'), dot = $('cursorDot'), lbl = $('cursorLabel');
    const cols = ['#FDB813', '#E0533C', '#A7F3D0', '#BAE6FD'], syms = ['✦', '★', '●', '+'];
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, last = 0, tgt = null;

    const spawn = (cls, x, y, styleFn, anim) => {
      const s = document.createElement('span');
      s.className = cls; s.style.left = x + 'px'; s.style.top = y + 'px';
      styleFn(s); document.body.appendChild(s);
      if (window.gsap) gsap.to(s, { ...anim, opacity: 0, duration: 0.5, onComplete: () => s.remove() });
      else setTimeout(() => s.remove(), 450);
    };

    addEventListener('mousemove', e => {
      if (curMode === 'none') return;
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
      tgt = e.target;
      const now = Date.now(), spd = Math.abs(e.movementX) + Math.abs(e.movementY);

      if (curMode === 'default' && now - last > 75 && spd > 14) {
        last = now; const a = Math.random() * 6.28;
        spawn('c-spark', mx, my, s => { s.textContent = syms[Math.floor(Math.random() * 4)]; s.style.color = cols[Math.floor(Math.random() * 4)]; }, { x: Math.cos(a) * 18, y: Math.sin(a) * 18 - 10, scale: 0.5 });
      } else if (curMode === 'ribbon' && now - last > 25 && spd > 4) {
        last = now;
        spawn('c-ribbon', mx, my, s => { s.style.width = s.style.height = '13px'; s.style.background = cols[Math.floor(Math.random() * 4)]; }, { scale: 0.1 });
      } else if (curMode === 'pixel' && now - last > 45 && spd > 8) {
        last = now;
        spawn('c-pixel', mx, my, s => s.style.background = cols[Math.floor(Math.random() * 4)], { rotation: 45, scale: 1.6 });
      }
    }, { passive: true });

    addEventListener('mousedown', () => curMode !== 'none' && ring.classList.add('pressed'));
    addEventListener('mouseup', () => ring.classList.remove('pressed'));

    (function loop() {
      if (tgt && curMode !== 'none') {
        const btn = tgt.closest('button,a,input,summary,#scrollRuler');
        const crd = tgt.closest('.hover-card');
        ring.classList.toggle('on-btn', !!btn);
        ring.classList.toggle('on-card', !btn && !!crd);
        dot.style.opacity = (btn || crd) ? '0' : '1';
        lbl.textContent = btn ? (tgt.closest('.spine') ? 'READ' : 'TAP') : 'VIEW';
        lbl.style.opacity = (btn || crd) ? '1' : '0';
      }
      rx += (mx - rx) * (curMode === 'crosshair' ? 0.38 : 0.2);
      ry += (my - ry) * (curMode === 'crosshair' ? 0.38 : 0.2);
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
  }

  // 6. GSAP scroll animations & Network status listeners
  if (window.gsap) {
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero-anim', { y: 24, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' });
    gsap.utils.toArray('.reveal-sec').forEach(sec =>
      gsap.fromTo(sec, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, scrollTrigger: { trigger: sec, start: 'top 90%', once: true } })
    );
  }

  addEventListener('offline', () => toggleEl('offlineModal', true));
  addEventListener('online', () => { toggleEl('offlineModal', false); toast('INTERNET CONNECTED!'); });
  if (!navigator.onLine) toggleEl('offlineModal', true);
}

/* =========================================================
   9. BOOT SEQUENCE
   ========================================================= */
runLoader();

window.onload = () => {
  renderStore();
  try {
    const s = JSON.parse(localStorage.getItem('zigzoo_cfg') || '{}');
    theme = s.theme || 'light';
    palKey = palettes[s.palKey] ? s.palKey : 'default';
    curMode = s.curMode || 'default';
    curr = rates[s.curr] ? s.curr : 'INR';
  } catch (e) {}

  applyTheme();
  setCursor(curMode, true);
  setCurr(curr, true);
  renderBag();
  initEvents();

  // Fetch live exchange rates for USD/EUR
  fetch('https://open.er-api.com/v6/latest/INR')
    .then(r => r.json())
    .then(d => {
      if (d?.rates?.USD) {
        rates.USD.r = d.rates.USD;
        rates.EUR.r = d.rates.EUR;
        $('fxRate').textContent = `LIVE: $1 = ₹${(1 / d.rates.USD).toFixed(2)} • €1 = ₹${(1 / d.rates.EUR).toFixed(2)}`;
        if (curr !== 'INR') setCurr(curr, true);
      }
    }).catch(() => {});
};