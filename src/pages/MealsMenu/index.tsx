import { useState, useContext, useCallback, useMemo } from 'react';
import Layout from '@/components/Layout/MainLayout';
import { Container, Flex } from '@mantine/core';
import Carousel from '@/components/Carousel';
import Headlines from '@/components/Headlines';
import { AppContext } from '@/context';
import MealsGrid from '@/components/MealsGrid';

function MealsMenu() {
  const [limit, setLimit] = useState(9);
  const [limitHighRate, setLimitHighRate] = useState(8);

  const { fetchedMeals, mealOrders, handleOrdersLogic, handleFavoriteLogic, loadingFetchMeals } =
    useContext(AppContext);

  const isAlreadyOnCart = useCallback(
    (itemId: string) => mealOrders.some((id) => id === itemId),
    [mealOrders],
  );

  const handleFetchMore = () => {
    setLimitHighRate((prevState) => prevState + 9);
  };

  const handleShowMoreMeals = () => {
    setLimit((prevState) => prevState + 8);
  };

  const memoizedHighRateMeals = useMemo(() => {
    if (fetchedMeals.length) {
      return fetchedMeals.filter((item) => item?.rating === 5).slice(0, limitHighRate);
    } else return [];
  }, [limitHighRate, fetchedMeals]);

  const memoizedMeals = useMemo(() => {
    if (fetchedMeals.length) {
      return fetchedMeals.slice(0, limit);
    }
    return [];
  }, [limit, fetchedMeals]);

  return (
    <Layout>
      <Flex direction='column' py={30} justify='center' align='center' bg='secondary.2'>
        <Headlines text='Our Menu' otherProps={{ py: 30 }} />
        <Carousel
          isOnCart={isAlreadyOnCart}
          loading={loadingFetchMeals}
          carouselName='Top Rated'
          carouselData={memoizedHighRateMeals}
          fetchMore={handleFetchMore}
          onAddToCart={handleOrdersLogic}
          onClickFavorite={handleFavoriteLogic}
        />
        <Container size='md'>
          <MealsGrid
            isAlreadyOnCart={isAlreadyOnCart}
            showMoreButton={limit <= fetchedMeals.length}
            onShowMore={handleShowMoreMeals}
            mealsData={memoizedMeals}
            onAddToCart={handleOrdersLogic}
            onClickFavorite={handleFavoriteLogic}
          />
        </Container>
      </Flex>
    </Layout>
  );
}

export default MealsMenu;
