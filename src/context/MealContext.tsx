import { MealInterface } from "@/types/interfaces";
import React, { createContext, useState, useEffect, useContext, ReactNode, FC, useRef } from "react";

interface MealContextType {
  bookmarkedMeals: MealInterface[];
  addBookmark: (meal: MealInterface) => void;
  removeBookmark: (mealId: string) => void;
}

const MealContext = createContext<MealContextType | undefined>(undefined);

interface MealProviderProps {
  children: ReactNode;
}

export const MealProvider: FC<MealProviderProps> = ({ children }: { children: ReactNode }) => {
  const [bookmarkedMeals, setBookmarkedMeals] = useState<MealInterface[]>([]);
  const initialRender = useRef(true);

  // Load bookmarked meals from local storage on component mount
  useEffect(() => {
    const savedBookmarkedMeals = localStorage.getItem("bookmarkedMeals");
    if (savedBookmarkedMeals) {
      setBookmarkedMeals(JSON.parse(savedBookmarkedMeals));
    }
  }, []);

  // Save bookmarked meals to local storage whenever it changes
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("bookmarkedMeals", JSON.stringify(bookmarkedMeals));
  }, [bookmarkedMeals]);

  const addBookmark = (meal: MealInterface) => {
    setBookmarkedMeals([...bookmarkedMeals, meal]);
  };

  const removeBookmark = (mealId: string) => {
    let newArray = bookmarkedMeals.filter((meal) => meal.idMeal !== mealId);
    setBookmarkedMeals([...newArray]);
  };

  return <MealContext.Provider value={{ bookmarkedMeals, addBookmark, removeBookmark }}>{children}</MealContext.Provider>;
};

export const useMealContext = () => {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error("useMealContext must be used within a MealProvider");
  }
  return context;
};
