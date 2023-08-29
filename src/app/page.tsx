import CarouselBanner from './components/carouselBanner/CarouselBanner';
import CardServices from './components/cardServices/CardServices';
import Review from './components/review/Review';
import PostsInstagram from './components/postsInstagram/PostsInstagram';

export default function Home() {
    return (
        <main>
            <CarouselBanner />
            <CardServices />
            <Review/>
            <PostsInstagram/>
        </main>
    );
}
