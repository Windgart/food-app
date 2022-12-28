import { SetStateAction, createContext, useState, useEffect } from 'react';
import { ENDPOINTS } from '@/utils/constants';
import { showNotification } from '@mantine/notifications';

interface ContextProviderProps {
  children: React.ReactElement;
}

interface StoreContext {
  fetchedMeals: MealModel[];
  mealOrders: string[];
  setFetchedMeals: React.Dispatch<SetStateAction<MealModel[]>>;
  loadingFetchMeals: boolean;
  handleOrdersLogic: ActionWithIdSignature;
  handleFavoriteLogic: ActionWithIdSignature;
}

export const AppContext = createContext({} as StoreContext);

function ContextProvider({ children }: ContextProviderProps) {
  const [fetchedMeals, setFetchedMeals] = useState<MealModel[]>([]);
  const [mealOrders, setMealOrders] = useState<string[]>([]);
  const [loadingFetchMeals, setLoadingMeals] = useState(true);

  const handleFavoriteLogic = (itemToHandle: string) => {
    const alreadyFavorite = fetchedMeals.find((meal) => meal?.id === itemToHandle);
    if (fetchedMeals.length) {
      setFetchedMeals((prevState) =>
        prevState.map((meal) => {
          if (meal?.id === itemToHandle) {
            return { ...meal, isFavorite: !meal.isFavorite };
          } else return meal;
        }),
      );
    }
    showNotification({
      title: alreadyFavorite?.isFavorite
        ? 'Meal removed from favorites!'
        : 'Meal added to favorites!',
      message: '',
      color: alreadyFavorite?.isFavorite ? 'red' : 'green',
    });
  };

  const handleOrdersLogic = (itemToHandle: string) => {
    const alreadyInOrders = mealOrders.some((id) => id === itemToHandle);
    setMealOrders((prevState) => [
      ...(alreadyInOrders
        ? prevState.filter((id) => id !== itemToHandle)
        : [...prevState, itemToHandle]),
    ]);
    showNotification({
      title: alreadyInOrders ? 'Meal removed from orders!' : 'Meal added to orders!',
      message: '',
      color: alreadyInOrders ? 'red' : 'green',
    });
  };

  useEffect(() => {
    Promise.all([
      fetch(`api/${ENDPOINTS.meals}`).then((res) => res.json()),
      fetch(`api/${ENDPOINTS.highRate}`).then((res) => res.json()),
    ])
      .then(([mealsRes, highRateRes]) => {
        setFetchedMeals([...mealsRes.meals, ...highRateRes.hightRates]);
      })
      .finally(() => setLoadingMeals(false));
  }, []);

  return (
    <AppContext.Provider
      value={{
        fetchedMeals,
        mealOrders,
        setFetchedMeals,
        loadingFetchMeals,
        handleOrdersLogic,
        handleFavoriteLogic,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
