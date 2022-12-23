import { Flex, Text, Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import MealCard from '@/components/MealCard';
import { useEffect, useState } from 'react';

interface CarouselComponentProps {
  carouselName?: string;
  carouselData?: MealModel[];
  fetchMore: () => void;
}

function CarouselComponent({ carouselName, carouselData, fetchMore }: CarouselComponentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderSlides = carouselData?.map((item) => (
    <Carousel.Slide size={250} key={item.id}>
      <MealCard {...item} />
    </Carousel.Slide>
  ));

  const handleGetMoreMeals = (currentIndex: number) => {
    setCurrentIndex(currentIndex);
  };

  // got to add side effect to fetch more due to onSlideChange callback losing context when invoked
  useEffect(() => {
    if (currentIndex + 1 === carouselData?.length) {
      fetchMore();
    }
  }, [currentIndex]);

  return (
    <Flex bg='soft.1' py={20} direction='row' wrap='wrap' justify='center'>
      <Container size='lg'>
        <Text sx={{ fontFamily: 'Oswald', fontWeight: 700, fontSize: 35 }} mb={10} color='base.5'>
          {carouselName?.toUpperCase() || 'Carousel'}
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
            control: {
              backgroundColor: theme.colors.base[1],
              borderColor: 'transparent',
              color: 'white',
            },
          })}
          onSlideChange={(currentIndex) => handleGetMoreMeals(currentIndex)}
          slideGap='md'
          align='start'
          slideSize={250}
          controlSize={30}
          controlsOffset='xs'
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
