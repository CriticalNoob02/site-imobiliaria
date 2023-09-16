import FixedItemsProps from './types';
import picture from '../../../../../public/logo.png'
import { Base } from '../../atoms';
import { Navbar, Footer } from '../../organisms';

export default function FixedItems ({
    children
}:FixedItemsProps) {

    // Navbar;
    const logo = picture
    const title = ['Home', 'Serviços', 'Avaliações', 'Jabiraca'];
    const link = ['#Home', '#Services', '#Reviews', '#AAcc'];
    const buttonTitle = 'Contato';
    const buttonLink ='https://api.whatsapp.com/send?phone=5548991539040&text=Ol%C3%A1,%20estou%20visitando%20o%20site,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es';


    return(
        <Base>
            <Navbar titles={title} links={link} buttonTitle={buttonTitle} buttonLink={buttonLink} logo={logo}/>
            {children}
            <Footer/>
        </Base>
    )
}
