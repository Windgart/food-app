import { SetStateAction, createContext, useState } from 'react';

interface ContextProviderProps {
  children: React.ReactElement;
}

type AddItemSignature = (item: MealModel) => void;
type ActionWithIdSignature = (item: string) => void;

interface StoreContext {
  fetchedRecipes: MealModel[];
  mealOrders: MealModel[];
  favoriteMeals: MealModel[];
  addMealToFavorites: AddItemSignature;
  removeFromFavorites: ActionWithIdSignature;
  addToMealOrders: AddItemSignature;
  removeFromMealOrders: ActionWithIdSignature;
  setFetchedRecipes: React.Dispatch<SetStateAction<MealModel[]>>;
}

function ContextProvider({ children }: ContextProviderProps) {
  const AppContext = createContext({} as StoreContext);
  const [fetchedRecipes, setFetchedRecipes] = useState<MealModel[]>([]);
  const [mealOrders, setMealOrders] = useState<MealModel[]>([]);
  const [favoriteMeals, setFavoriteMeals] = useState<MealModel[]>([]);

  const addMealToFavorites = (itemToAdd: MealModel) => {
    const alreadyInFavorites = favoriteMeals.some(({ id }) => id === itemToAdd.id);
    if (alreadyInFavorites) return;
    setFavoriteMeals((prevState) => [...prevState, itemToAdd]);
  };

  const removeFromFavorites = (itemToRemove: string) => {
    setFavoriteMeals((prevState) => [...prevState.filter(({ id }) => id === itemToRemove)]);
  };

  const addToMealOrders = (itemToAdd: MealModel) => {
    const alreadyInFavorites = mealOrders.some(({ id }) => id === itemToAdd.id);
    if (alreadyInFavorites) return;
    setMealOrders((prevState) => [...prevState, itemToAdd]);
  };

  const removeFromMealOrders = (itemToRemove: string) => {
    setMealOrders((prevState) => [...prevState.filter(({ id }) => id === itemToRemove)]);
  };

  return (
    <AppContext.Provider
      value={{
        fetchedRecipes,
        mealOrders,
        favoriteMeals,
        addMealToFavorites,
        removeFromFavorites,
        addToMealOrders,
        removeFromMealOrders,
        setFetchedRecipes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
