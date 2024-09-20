// app/portfolio/page.js

import PortfolioGallery from '../../components/PortfolioGallery';

export default function Portfolio() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Portfolio</h1>
      <PortfolioGallery />
    </main>
  );
}
