import { SetStateAction, createContext, useState, useEffect } from 'react';
import { ENDPOINTS } from '@/utils/constants';

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
    if (fetchedMeals.length) {
      setFetchedMeals((prevState) =>
        prevState.map((meal) => {
          if (meal?.id === itemToHandle) {
            return { ...meal, isFavorite: !meal.isFavorite };
          } else return meal;
        }),
      );
    }
  };

  const handleOrdersLogic = (itemToHandle: string) => {
    const alreadyInOrders = mealOrders.some((id) => id === itemToHandle);
    setMealOrders((prevState) => [
      ...(alreadyInOrders
        ? prevState.filter((id) => id !== itemToHandle)
        : [...prevState, itemToHandle]),
    ]);
  };

  useEffect(() => {
    Promise.all([
      fetch(`api/${ENDPOINTS.meals}`).then((res) => res.json()),
      fetch(`api/${ENDPOINTS.highRate}`).then((res) => res.json()),
    ])
      .then(([mealsRes, highRateRes]) =>
        setFetchedMeals([...mealsRes.meals, highRateRes.highRateRes]),
      )
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
