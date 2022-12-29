import { useContext, useMemo, useCallback } from 'react';
import { AppContext } from '@/context';
import Headlines from '@/components/Headlines';
import { Container, Flex, Image, Title, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import Layout from '@/components/Layout/MainLayout';
import MealsGrid from '@/components/MealsGrid';
import { ROUTES } from '@/utils/constants';
import Touch from '@/assets/images/touch.png';

function Favorites() {
  const { fetchedMeals, mealOrders, handleFavoriteLogic, handleOrdersLogic } =
    useContext(AppContext);

  const favoritesData = useMemo(() => {
    return fetchedMeals.filter((meal) => meal?.isFavorite);
  }, [fetchedMeals]);

  const isAlreadyOnCart = useCallback(
    (itemId: string) => mealOrders.some((id) => id === itemId),
    [mealOrders],
  );

  return (
    <Layout>
      <Flex pt={85} pb={20} mih={'80vh'} bg='secondary.1' direction='column' align='center'>
        <Headlines text='Favorites' />
        <Container size='md'>
          {favoritesData.length ? (
            <MealsGrid
              mealsData={favoritesData}
              onAddToCart={handleOrdersLogic}
              onClickFavorite={handleFavoriteLogic}
              isAlreadyOnCart={isAlreadyOnCart}
            />
          ) : (
            <Flex mt={30} justify='center' align='center' direction='column'>
              <Image maw={256} src={Touch} />
              <Title size='h2'>No favorite meals yet!</Title>
              <Text>
                Go to the <NavLink to={ROUTES.menu}>menu page</NavLink> and add some
              </Text>
            </Flex>
          )}
        </Container>
      </Flex>
    </Layout>
  );
}

export default Favorites;
