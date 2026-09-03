'use client';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
const dishes=[
  ['דג ים שלם','לימון חרוך, עשבי תיבול, שמן זית','128 ₪','/images/noir-food.png'],
  ['קלמרי על הגריל','שום, לימון, פטרוזיליה ושמן זית','74 ₪','/images/noir-wine.png'],
  ['פסטת פירות ים','שרימפס, קלמרי, מולים, עגבניות ושום','126 ₪','/images/noir-pasta.png'],
  ['פיצה NOIR','מוצרלה, עגבניות, בזיליקום ושמן זית','68 ₪','/images/noir-pizza.png'],
  ['דג ים בשקיעה','לימון, עשבי תיבול ושמן זית','128 ₪','/images/noir-sunset-fish.png']
];
export function SignatureDishes(){return <section className="section bg-[#e9e3d8]"><Reveal className="mb-12 flex items-end justify-between"><div><p className="eyebrow mb-4 text-ocean">Selected with care</p><h2 className="display text-6xl leading-none sm:text-7xl">SIGNATURE<br/>DISHES</h2></div><p className="hidden max-w-[190px] text-right text-xs leading-6 text-ink/60 md:block">הים, כפי שהוא מגיע לשולחן שלנו.</p></Reveal><div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{dishes.map(([name,description,price,image],i)=><Reveal delay={i*.08} key={name}><motion.article whileHover={{y:-7}} transition={{duration:.3}} className="group"><div className="image-wrap aspect-square bg-sand"><img className="h-full w-full object-cover" src={image} alt={name}/></div><div dir="rtl" className="mt-4 text-right"><div className="flex items-baseline justify-between gap-2"><h3 className="display text-2xl leading-none">{name}</h3><span className="text-[11px] font-bold whitespace-nowrap">{price}</span></div><p className="mt-2 text-xs leading-5 text-ink/65">{description}</p></div></motion.article></Reveal>)}</div></section>}
