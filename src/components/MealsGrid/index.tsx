import { Grid, Flex, Button } from '@mantine/core';
import MealCard from '@/components/MealCard';

interface MealsGridProps {
  mealsData: MealModel[];
  onAddToCart: ActionWithIdSignature;
  isAlreadyOnCart: (id: string) => boolean;
  onClickFavorite: ActionWithIdSignature;
  showMoreButton?: boolean;
  onShowMore?: () => void;
}

function MealsGrid({
  mealsData,
  onAddToCart,
  isAlreadyOnCart,
  onClickFavorite,
  showMoreButton,
  onShowMore,
}: MealsGridProps) {
  const renderOtherMeals = mealsData.map((meal) => (
    <Grid.Col xs={12} sm={6} md={4} key={meal.id}>
      <MealCard
        alreadyOnCart={isAlreadyOnCart(meal.id)}
        onAddToCart={onAddToCart}
        onClickFavorite={onClickFavorite}
        {...meal}
      />
    </Grid.Col>
  ));

  const handleShowMore = () => {
    if (!onShowMore) return;
    onShowMore();
  };

  return (
    <Grid my={50}>
      {renderOtherMeals}
      <Grid.Col py={30} span={12}>
        <Flex justify='center'>
          {showMoreButton ? (
            <Button onClick={handleShowMore} radius='lg' px={30}>
              See more meals
            </Button>
          ) : null}
        </Flex>
      </Grid.Col>
    </Grid>
  );
}

export default MealsGrid;
