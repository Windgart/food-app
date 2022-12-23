import { faker } from '@faker-js/faker';
import { createServer, Model, Factory } from 'miragejs';
import MealPicture1 from '@/assets/images/meals/m1.webp';
import MealPicture2 from '@/assets/images/meals/m2.webp';
import MealPicture3 from '@/assets/images/meals/m3.webp';
import MealPicture4 from '@/assets/images/meals/m4.webp';
import MealPicture5 from '@/assets/images/meals/m5.webp';
import MealPicture6 from '@/assets/images/meals/m6.webp';

export const server = createServer({
  models: {
    meal: Model,
  },
  factories: {
    meal: Factory.extend({
      id() {
        return faker.datatype.uuid();
      },
      title() {
        return faker.commerce.productName();
      },
      categories() {
        return faker.helpers.arrayElements(
          ['HIGH-PROTEIN', 'HEALTHY', 'LOW-CARB', 'GLUTEN-FREE', 'HIGH-FIBER', 'SUGAR-FREE'],
          3,
        );
      },
      rating() {
        return faker.helpers.arrayElement([4.5, 5, 4.3, 4.4, 4.8]);
      },
      image() {
        return faker.helpers.arrayElement([
          MealPicture1,
          MealPicture2,
          MealPicture3,
          MealPicture4,
          MealPicture5,
          MealPicture6,
        ]);
      },
    }),
  },
  seeds(server) {
    server.createList('meal', 8);
  },
});
