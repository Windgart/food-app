import { Flex, Text, Container, Card, Loader } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import MealCard from '@/components/MealCard';
import { useEffect, useState } from 'react';
import { v4 as UUID } from 'uuid';
import { IconFaceIdError } from '@tabler/icons';

interface CarouselComponentProps {
  carouselName?: string;
  carouselData?: MealModel[];
  fetchMore: () => void;
  pb?: number;
  loading?: boolean;
  error?: boolean;
}

function CarouselComponent({
  carouselName,
  carouselData,
  fetchMore,
  pb,
  loading,
  error = false,
}: CarouselComponentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderSlides = carouselData?.map((item) => (
    <Carousel.Slide size={250} key={item.id}>
      <MealCard {...item} />
    </Carousel.Slide>
  ));

  const handleGetMoreMeals = (currentIndex: number) => {
    setCurrentIndex(currentIndex);
  };

  const renderDummySlides = Array(8)
    .fill('dummy')
    .map(() => (
      <Carousel.Slide size={250} key={UUID()}>
        <Card opacity={0.6} bg='base.1' shadow='xl' p='xl' radius='md'>
          <Flex py={80} justify='center'>
            <Loader variant='dots' />
          </Flex>
        </Card>
      </Carousel.Slide>
    ));

  // got to add side effect to fetch more due to onSlideChange callback losing context when invoked
  useEffect(() => {
    if (currentIndex + 1 === carouselData?.length) {
      fetchMore();
    }
  }, [currentIndex]);

  return (
    <Flex py={20} direction='row' wrap='wrap' justify='center'>
      {error ? (
        <Flex direction='column' align='center'>
          <IconFaceIdError />
          <Text color='base.7'>Error while fetching recipes for this section</Text>
        </Flex>
      ) : (
        <Container size='lg' pb={pb}>
          <Text ff='Oswald' fw={700} size={28} mb={10} color='base.5'>
            {carouselName?.toUpperCase() || 'Carousel'}
          </Text>
          <Carousel
            styles={(theme) => ({
              container: {
                width: 340,
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
            withControls={!loading}
            controlSize={30}
            controlsOffset='xs'
            breakpoints={[
              { maxWidth: 'md', slideSize: '140' },
              { maxWidth: 'sm', slideSize: 260 },
            ]}
          >
            {loading ? renderDummySlides : renderSlides}
          </Carousel>
        </Container>
      )}
    </Flex>
  );
}

export default CarouselComponent;
