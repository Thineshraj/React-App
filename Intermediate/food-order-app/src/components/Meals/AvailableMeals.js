import { useEffect, useState } from 'react';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import useHttp from '../../hooks/use-http';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { sendRequest: fetchData, error, isLoading } = useHttp();

  useEffect(() => {
    const transformMeals = (meals) => {
      const loadedMeals = [];
      for (const key in meals) {
        loadedMeals.push({
          id: key,
          name: meals[key].name,
          description: meals[key].description,
          price: meals[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchData(
      {
        url: 'https://udemy-food-app-6f556-default-rtdb.firebaseio.com/meals.json',
      },
      transformMeals
    );
  }, [fetchData]);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        id={meal.id}
        loading={isLoading}
        error={error}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p className={classes.MealIsLoading}>Loading...</p>}
        {error && <p className={classes.error}>{error}💥</p>}
        {!error && mealsList}
      </Card>
    </section>
  );
};

export default AvailableMeals;
