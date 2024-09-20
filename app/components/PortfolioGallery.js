// components/PortfolioGallery.js

import PortfolioItem from './PortfolioItem';

const portfolioItems = [
  {
    id: 1,
    title: 'Project One',
    image: '/images/project1.jpg',
    description: 'A brief description of Project One.',
  },
  // Add more items as needed
];

export default function PortfolioGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </div>
  );
}
