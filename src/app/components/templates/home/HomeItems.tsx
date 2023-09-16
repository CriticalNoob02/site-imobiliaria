import { CardServices, PropertiesCard, ReviewCarousel, PostsInstagram, CarouselBanner  } from "../../organisms"
import { PiHandshake, PiKey, PiHouse } from "react-icons/pi"
import asd from "../../../../../public/house.jpg"
import zzx from "../../../../../public/sobrado.jpg"
import logo from "../../../../../public/logo.png"

export default function HomeItems () {

    // CardServices;
    const titles = ['Quero fazer parte da equipe de corretores!','Quero comprar meu imovel novo com vocês!','Quero anunciar meu imovel com vocês!']
    const icons = [PiHandshake , PiKey, PiHouse]
    const tag = 'Serviços'
    // ReviewCarousel
    const name = ['Adriel taradinho!', 'Crinha aleatório']
    const userAvatar = [asd, zzx]
    const comment = ['fgndjngnfgfngngdfngngjfgfigfgn', 'o outro cara disse tudo!']
    const rating = [5, 0]
    // PostInstagram
    const userLogo = logo
    const images = [logo,asd,zzx]
    const time = '10s'

    return(
        <main>
            <CarouselBanner/>
            <CardServices titles={titles} icons={icons} tag={tag}/>
            <PropertiesCard/>
            <ReviewCarousel names={name} imgs={userAvatar} comments={comment} ratings={rating}/>
            <PostsInstagram userLogo={userLogo} images={images} time={time}/>
        </main>
    )
}
