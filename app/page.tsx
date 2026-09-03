import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SignatureDishes } from '@/components/SignatureDishes';
import { Menu } from '@/components/Menu';
import { Gallery } from '@/components/Gallery';
import { EveningSection } from '@/components/EveningSection';
import { Reservation } from '@/components/Reservation';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';
import { FloatingReservationCTA } from '@/components/FloatingReservationCTA';
export default function Home() { return <main><Navbar /><Hero /><About /><SignatureDishes /><Menu /><Gallery /><EveningSection /><Reservation /><Location /><Footer /><FloatingReservationCTA /></main>; }
