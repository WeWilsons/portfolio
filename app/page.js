// app/page.js

import Hero from '../components/Hero';

export default function Home() {
  return (
    <main>
      <Hero
        title="Welcome to My Portfolio"
        subtitle="Showcasing my work with images and videos."
        backgroundImage="/images/hero.jpg" // Ensure this image exists in public/images
      />
    </main>
  );
}
