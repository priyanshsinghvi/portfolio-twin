// File: src/components/projects/AllProjects.tsx

import { Carousel, Card } from '@/components/projects/apple-cards-carousel';
import { data } from './Data';

export default function AllProjects() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} layout={true} />
  ));
  console.log(data[0]);

  return (
    <div className="h-full w-full py-20">
      <h2 className="mx-auto max-w-7xl pl-4 font-sans text-xl font-bold text-neutral-800 md:text-5xl dark:text-neutral-200">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}