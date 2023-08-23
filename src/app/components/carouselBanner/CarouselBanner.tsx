'use client';

import { useState, useEffect } from 'react';
import ArrowButton from './arrowButton/ArrowButton';
import Glass from './glass/Glass';
import CardBanner from './cardBanner/CardBanner';
import TextLink from './textLink/TextLink';

export default function CarouselBanner() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count == 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count == 0) {
      setCount(3);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => increment(), 4000);
    return () => clearTimeout(timer);
  }, [count,4]);

  const titles = ['Apartamento', 'Casa', 'Terreno', 'Sobrado'];
  const links = ['#Apartamento', '#Casa', '#Terreno', '#Sobrado'];

  return (
    <div
      id="Home"
      className={`h-screen w-screen ${'card' + count} transition-all`}
    >
      <Glass>
        <CardBanner size="w-3/5 h-2/5">
          <div
            className={`h-screen w-screen ${'card' + count} flex flex-col items-center justify-center transition-all`}
          >
            <h1 className="my-5 mr-40 select-none text-start text-2xl font-light text-stone-300">
              Venha conquistar seu
            </h1>
            <TextLink title={titles[count]} link={links[count]} />
            <h1 className="my-5 ml-40 select-none text-end text-2xl font-light text-stone-300">
              com a gente!
            </h1>
          </div>
          <div className="text-cente absolute right-0 z-20 px-10">
            <ArrowButton size="text-5xl" onClick={increment} />
          </div>
          <div className="text-cente absolute left-0 z-20 -scale-x-100 px-10">
            <ArrowButton size="text-5xl" onClick={decrement} />
          </div>
          <div className="absolute left-0 z-10 h-screen w-28 bg-gradient-to-r from-black/70 px-10"></div>
          <div className="absolute right-0 z-10 h-screen w-28 bg-gradient-to-l from-black/70 px-10"></div>
        </CardBanner>
      </Glass>
    </div>
  );
}
