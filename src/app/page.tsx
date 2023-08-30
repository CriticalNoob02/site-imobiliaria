import CarouselBanner from './components/carouselBanner/CarouselBanner';
import CardServices from './components/cardServices/CardServices';
import Review from './components/review/Review';
import PostsInstagram from './components/postsInstagram/PostsInstagram';
import { Navbar } from './components/organisms';
import logo from '../../public/logo.png'

export default function Home() {
    const title = ['Home', 'Serviços', 'Avaliações', 'Jabiraca'];
    const link = ['#Home', '#Services', '#Reviews', '#AAcc'];
    const buttonTitle = 'Contato';
    const buttonLink ='https://api.whatsapp.com/send?phone=5548991539040&text=Ol%C3%A1,%20estou%20visitando%20o%20site,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es';
    return (
        <main>
            <Navbar titles={title} links={link} buttonTitle={buttonTitle} buttonLink={buttonLink} logo={logo}/>
            <CarouselBanner />
            <CardServices />
            <Review/>
            <PostsInstagram/>
        </main>
    );
}
