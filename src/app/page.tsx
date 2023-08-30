import CarouselBanner from './components/carouselBanner/CarouselBanner';
import Review from './components/review/Review';
import PostsInstagram from './components/postsInstagram/PostsInstagram';
import { Navbar, CardServices } from './components/organisms';


import logo from '../../public/logo.png'
import { PiHandshake, PiKey, PiHouse } from 'react-icons/pi';

export default function Home() {
    //Navbar;
    const title = ['Home', 'Serviços', 'Avaliações', 'Jabiraca'];
    const link = ['#Home', '#Services', '#Reviews', '#AAcc'];
    const buttonTitle = 'Contato';
    const buttonLink ='https://api.whatsapp.com/send?phone=5548991539040&text=Ol%C3%A1,%20estou%20visitando%20o%20site,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es';
    //CardServices;
    const titles = ['Quero fazer parte da equipe de corretores!','Quero comprar meu imovel novo com vocês!','Quero anunciar meu imovel com vocês!']
    const icons = [PiHandshake , PiKey, PiHouse]
    const tag = 'Serviços'

    return (
        <main>
            <Navbar titles={title} links={link} buttonTitle={buttonTitle} buttonLink={buttonLink} logo={logo}/>
            <CarouselBanner />
            <CardServices titles={titles} icons={icons} tag={tag} />
            <Review/>
            <PostsInstagram/>
        </main>
    );
}
