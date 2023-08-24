import CarouselBanner from './components/carouselBanner/CarouselBanner';
import CardServices from './components/cardServices/CardServices';
import Review from './components/review/Review';

export default function Home() {
  return (
    <main>
      <CarouselBanner />
      <CardServices />
      <Review/>
    </main>
  );
}
