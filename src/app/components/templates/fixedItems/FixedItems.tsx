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

    // Footer;
    const email = ['contato@chavesnovas.com.br','mailto:contato@chavesnovas.com.br']
    const localization = ['Avenida Atilio Pedro Pagani nº425 Pagani','https://goo.gl/maps/41GXnhrbNTU1RuCv8']
    const phone = ['(48) 3093.9040','tel:(48) 3093.9040']
    const instagram = "https://www.instagram.com/chavesnovas/"
    const facebook = "https://www.facebook.com/chavesNovas/"
    const razaoSocial = "GERSON CHAVES NEGÓCIOS IMOBILIÁRIOS LTDA"
    const creci = "5852J"
    const cnpj = "37.768.802/0001.56"

    return(
        <Base>
            <Navbar titles={title} links={link} buttonTitle={buttonTitle} buttonLink={buttonLink} logo={logo}/>
            {children}
            <Footer email={email} localization={localization} phone={phone} instagram={instagram} facebook={facebook} razaoSocial={razaoSocial} creci={creci} cnpj={cnpj}/>
        </Base>
    )
}
