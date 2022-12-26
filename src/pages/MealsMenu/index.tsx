import { useState, useEffect } from 'react';
import Layout from '@/components/Layout/MainLayout';
import { Flex } from '@mantine/core';
import Carousel from '@/components/Carousel';
import { v4 as UUID } from 'uuid';
import Headlines from '@/components/Headlines';

function MealsMenu() {
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
    <Layout>
      <Flex direction='column' py={30} justify='center' align='center' bg='secondary.2'>
        <Headlines text='Our Menu' otherProps={{ py: 30 }} />
        <Carousel carouselName='Best Sellers' carouselData={mealData} fetchMore={handleFetchMore} />
        <Carousel
          carouselName='Trending'
          carouselData={mealData}
          fetchMore={handleFetchMore}
          pb={60}
        />
      </Flex>
    </Layout>
  );
}

export default MealsMenu;
