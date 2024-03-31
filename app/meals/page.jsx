import React, { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/Meals/MealsGrid/meals-grid";
import MealsLoadingPage from "./loading-out";

async function Meals() {
    const meals = await getMeals();
  
    return <MealsGrid meals={meals} />;
  }
const MealsPage = async () => {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<MealsLoadingPage />}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
