import Card3d from './card3D/Card3D';
import IconContainer from './iconContainer/IconContainer';
import Title from './title/Title';
import { PiHandshake, PiKey, PiHouse } from 'react-icons/pi';
import { createElement } from 'react';

export default function CardServices() {

  const titles = ['Quero fazer parte da equipe de corretores!','Quero comprar meu imovel novo com vocês!','Quero anunciar meu imovel com vocês!']
  const icons = [PiHandshake , PiKey, PiHouse]
  const tag = 'Serviços'

  return (
    <div
      id="Services"
      className="flex h-[95vh] w-screen flex-col items-center justify-between bg-slate-100 py-14 text-center"
    >
      <Title
      title={tag}
      />
      <div className="flex h-full w-full flex-row items-center justify-evenly">
      {titles.map((title, i) => (
          <Card3d
          key={title}
          color="bg-red-800"
          >
          <div className="relative flex h-full w-full flex-col items-center rounded transition">
            <IconContainer>
              {createElement(icons[i])}
            </IconContainer>
            <h1 className="z-20 m-4 select-none text-2xl font-semibold tracking-wide text-slate-50 drop-shadow-md transition">
              {title}
            </h1>
          </div>
        </Card3d>
        ))}
      </div>
    </div>
  );
}
