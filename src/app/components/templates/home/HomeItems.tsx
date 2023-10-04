import { CardServices, PropertiesCard, ReviewCarousel, PostsInstagram, CarouselBanner  } from "../../organisms"
import { PiHandshake, PiKey, PiHouse } from "react-icons/pi"
import asd from "../../../../../public/house.jpg"
import zzx from "../../../../../public/sobrado.jpg"
import logo from "../../../../../public/logo.png"

export default function HomeItems () {

    // CardServices;
    const titles = ['Quero fazer parte da equipe de corretores!','Quero comprar meu imovel novo com vocês!','Quero anunciar meu imovel com vocês!']
    const icons = [PiHandshake , PiKey, PiHouse]
    const links = ["#dffds","/filter",'#assx']
    // ReviewCarousel
    const name = ['Adriel toloko', 'Crinha aleatório','PipipiPopopo']
    const userAvatar = [asd, zzx, asd]
    const comment = ['fgndjngnfgfngngdfngngjfgfigfgn', 'o outro cara disse tudo!','abiel']
    const rating = [5, 0, 3]
    // PostInstagram
    const userLogo = logo
    const images = [logo,asd,zzx]
    const time = '20s'
    // PropertiesCards 
    const images2 = [asd,zzx,asd,asd,zzx,asd]
    const cod = ['#22','#33','#erd','#345','#5467','#3434']
    const titles2 = ['casa','abelha', 'casa','abelha','jonas','outro']
    const values = ['1000','2000','50000','50000','100','32323']
    const topics = [{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4}]


    return(
        <main>
            <CarouselBanner/>
            <CardServices titles={titles} icons={icons} links={links}/>
            <PropertiesCard images={images2} imagesCod={cod} imageTitles={titles2} imageValues={values} imageTopics={topics}/>
            <ReviewCarousel names={name} imgs={userAvatar} comments={comment} ratings={rating}/>
            <PostsInstagram userLogo={userLogo} images={images} time={time}/>
        </main>
    )
}
