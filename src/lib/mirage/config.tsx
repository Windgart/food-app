import { faker } from '@faker-js/faker';
import { createServer, Model, Factory } from 'miragejs';
import MealPicture1 from '@/assets/images/meals/m1.webp';
import MealPicture2 from '@/assets/images/meals/m2.webp';
import MealPicture3 from '@/assets/images/meals/m3.webp';
import MealPicture4 from '@/assets/images/meals/m4.webp';
import MealPicture5 from '@/assets/images/meals/m5.webp';
import MealPicture6 from '@/assets/images/meals/m6.webp';
import MealPicture7 from '@/assets/images/meals/m7.jpg';
import MealPicture8 from '@/assets/images/meals/m8.jpg';
import MealPicture9 from '@/assets/images/meals/m9.jpg';
import { ENDPOINTS } from '@/utils/constants';

class MealClass {
  id() {
    return faker.datatype.uuid();
  }
  title() {
    return faker.commerce.productName();
  }
  categories() {
    return faker.helpers.arrayElements(
      ['HIGH-PROTEIN', 'HEALTHY', 'LOW-CARB', 'GLUTEN-FREE', 'HIGH-FIBER', 'SUGAR-FREE'],
      3,
    );
  }
  rating(highRate: boolean) {
    if (highRate) {
      return 5;
    } else {
      return faker.helpers.arrayElement([4.0, 4.1, 4.5, 4.3, 4.4, 4.6, 4.8]);
    }
  }
  image() {
    return faker.helpers.arrayElement([
      MealPicture1,
      MealPicture2,
      MealPicture3,
      MealPicture4,
      MealPicture5,
      MealPicture6,
      MealPicture7,
      MealPicture8,
      MealPicture9,
    ]);
  }
  isFavorite() {
    return false;
  }
}

const mealProperties = new MealClass();
const defaultProperties = {
  id: mealProperties.id,
  title: mealProperties.title,
  categories: mealProperties.categories,
  image: mealProperties.image,
  isFavorite: mealProperties.isFavorite,
};

export const server = createServer({
  models: {
    [ENDPOINTS.meals]: Model,
    [ENDPOINTS.highRate]: Model,
  },
  factories: {
    [ENDPOINTS.meals]: Factory.extend({
      ...defaultProperties,
      rating: () => mealProperties.rating(false),
    }),
    [ENDPOINTS.highRate]: Factory.extend({
      ...defaultProperties,
      rating: () => mealProperties.rating(true),
    }),
  },
  seeds(server) {
    server.createList(ENDPOINTS.meals, 50);
    server.createList(ENDPOINTS.highRate, 16);
  },
});
