import { Flex, Text, Container } from '@mantine/core';
import MealPicture from '@/assets/images/meal.jpg';
import { Carousel } from '@mantine/carousel';
import MealCard from '@/components/MealCard';
import { useState } from 'react';
import { v4 as UUID } from 'uuid';

function CarouselComponent() {
  const generateMeals = (initialCount: number): MealsArray[] => {
    const arr = Array.from({ length: initialCount }, () => ({
      id: UUID(),
      title: 'Some Delicious Food',
      image: MealPicture,
      categories: ['HEALTHY', 'LOW-FAT', 'HIGH-PROTEIN', 'MAIN-DISH'],
    }));
    return arr;
  };

  const [meals, setMeals] = useState<MealsArray[]>(generateMeals(8));

  const renderSlides = meals.map((item) => (
    <Carousel.Slide size={250} key={item.id}>
      <MealCard {...item} />
    </Carousel.Slide>
  ));

  const handleGetMoreMeals = (currentIndex: number) => {
    console.log('%c  meals:', 'color: #0e93e0;background: #aaefe5;', meals);
    console.log('%c  currentIndex:', 'color: #0e93e0;background: #aaefe5;', currentIndex);

    if (currentIndex + 1 === meals.length) console.log('triggered');
    setMeals([...meals, ...generateMeals(8 + meals.length)]);
  };

  return (
    <Flex bg='soft.1' py={20} direction='row' wrap='wrap' justify='center'>
      <Container size='lg'>
        <Text sx={{ fontFamily: 'Oswald', fontWeight: 700, fontSize: 30 }} mb={10} color='base.1'>
          Selection
        </Text>
        <Carousel
          styles={(theme) => ({
            container: {
              width: 290,
              [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
                width: 640,
              },
              [`@media (min-width: ${theme.breakpoints.md}px)`]: {
                width: 740,
              },
              [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
                width: 920,
              },
              [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
                width: 1010,
              },
            },
            indicator: {
              backgroundColor: theme.colors.base[1],
            },
          })}
          onSlideChange={(currentIndex) => handleGetMoreMeals(currentIndex)}
          slideGap='md'
          align='start'
          slideSize={250}
          dragFree
          breakpoints={[
            { maxWidth: 'md', slideSize: '140' },
            { maxWidth: 'sm', slideSize: 260 },
          ]}
        >
          {renderSlides}
        </Carousel>
      </Container>
    </Flex>
  );
}

export default CarouselComponent;
