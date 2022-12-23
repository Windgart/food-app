import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Spotlights from '@/components/Spotlights';
import Carousel from '@/components/Carousel';
import { v4 as UUID } from 'uuid';

function HomePage() {
  const [mealData, setMealData] = useState<MealModel[]>([]);
  const handleFetchMore = async () => {
    fetch('/api/meals')
      .then((res) => res.json())
      .then((data) => {
        // update the id´s to avoid key conflict
        const updateIds = data.meals.map((item: MealModel) => ({ ...item, id: UUID() }));
        setMealData((prevState) => [...prevState, ...updateIds]);
      });
  };

  useEffect(() => {
    fetch('/api/meals')
      .then((res) => res.json())
      .then((json) => {
        setMealData(json.meals);
      });
  }, []);

  return (
    <>
      <Hero />
      <Spotlights />
      <Carousel carouselName='Best Sellers' carouselData={mealData} fetchMore={handleFetchMore} />
      <Carousel carouselName='Trending' carouselData={mealData} fetchMore={handleFetchMore} />
    </>
  );
}

export default HomePage;
