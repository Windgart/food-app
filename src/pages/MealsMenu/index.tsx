import { useState, useContext, useCallback, useMemo } from 'react';
import Layout from '@/components/Layout/MainLayout';
import { Button, Container, Flex, Grid } from '@mantine/core';
import Carousel from '@/components/Carousel';
import Headlines from '@/components/Headlines';
import { AppContext } from '@/context';
import MealCard from '@/components/MealCard';

function MealsMenu() {
  const [limit, setLimit] = useState(8);
  const [limitHighRate, setLimitHighRate] = useState(8);

  const { fetchedMeals, mealOrders, handleOrdersLogic, handleFavoriteLogic, loadingFetchMeals } =
    useContext(AppContext);

  const isAlreadyOnCart = useCallback(
    (itemId: string) => mealOrders.some((id) => id === itemId),
    [mealOrders],
  );

  const renderOtherMeals = fetchedMeals.slice(0, limit).map((meal) => (
    <Grid.Col xs={12} sm={6} md={4} lg={3} key={meal.id}>
      <MealCard
        alreadyOnCart={isAlreadyOnCart(meal.id)}
        onAddToCart={handleOrdersLogic}
        onClickFavorite={handleFavoriteLogic}
        {...meal}
      />
    </Grid.Col>
  ));

  const handleFetchMore = () => {
    setLimitHighRate((prevState) => prevState + 8);
  };

  const handleShowMoreMeals = () => {
    setLimit((prevState) => prevState + 8);
  };

  const memoizedMeals = useMemo(() => {
    if (fetchedMeals.length) {
      return fetchedMeals.filter((item) => item?.rating < 5).slice(limitHighRate);
    } else return [];
  }, [fetchedMeals, limitHighRate]);

  return (
    <Layout>
      <Flex direction='column' py={30} justify='center' align='center' bg='secondary.2'>
        <Headlines text='Our Menu' otherProps={{ py: 30 }} />
        <Carousel
          isOnCart={isAlreadyOnCart}
          loading={loadingFetchMeals}
          carouselName='Best Sellers'
          carouselData={memoizedMeals}
          fetchMore={handleFetchMore}
          onAddToCart={handleOrdersLogic}
          onClickFavorite={handleFavoriteLogic}
        />
        <Container size='md'>
          <Grid my={50}>
            {renderOtherMeals}
            <Grid.Col py={30} span={12}>
              <Flex justify='center'>
                {limit <= fetchedMeals.length ? (
                  <Button onClick={handleShowMoreMeals} radius='lg' px={30}>
                    See more meals
                  </Button>
                ) : null}
              </Flex>
            </Grid.Col>
          </Grid>
        </Container>
      </Flex>
    </Layout>
  );
}

export default MealsMenu;
