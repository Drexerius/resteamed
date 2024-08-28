import "./Store.css";
import StoreSection from "./StoreSection/StoreSection";
import Header from "../../components/Header/Header";

import { useState, useEffect } from "react";

export type obj = {
  image: string;
  title: string;
  price?: string;
  sale?: {
    date?: string;
    value?: string;
    price?: string;
  };
  recent?: {
    status: string;
    description: string;
  };
  banner?: {
    description: string;
    images: string[];
    tags: string[];
  };
  viewers?: string;
};

type StoreData = {
  [key: string]: obj[];
};

const Store = () => {
  const [storeData, setStoreData] = useState<StoreData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data/store.json")
      .then((response) => response.json())
      .then((data: StoreData) => {
        const updatedData: StoreData = Object.keys(data).reduce(
          (acc, sectionTitle) => {
            acc[sectionTitle] = data[sectionTitle].map((item: obj) => ({
              ...item,
              image: `/src/assets/store/${item.image}.png`, // Absolute path
              banner: item.banner
                ? {
                    ...item.banner,
                    images: item.banner.images.map(
                      (image: string) => `/src/assets/store/${image}.png`
                    ), // Absolute path
                  }
                : undefined,
            }));
            return acc;
          },
          {} as StoreData
        );
        setStoreData(updatedData);
        if (updatedData) setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const sections = [...Object.keys(storeData || {})];
  const cardsPerPage: { [key: string]: number } = {
    Featured: 1,
    "Special Offers": 3,
    "Browse Steam": 5,
    "Free-to-Play Games": 3,
    "Recently Updated": 4,
    "New & Trending": 3,
    "Top Sellers": 6,
    "Under $5": 3,
    "Streaming Games Now": 3,
  };

  return isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
        fontSize: "48px",
      }}
    >
      Loading...
    </div>
  ) : (
    <>
      <Header />
      <img
        src="/src/assets/store/season-banner.png"
        alt="banner"
        className="season-banner"
      />
      <main>
        {sections.map((section, i) => {
          return (
            <StoreSection
              key={i}
              title={section}
              per_page={cardsPerPage[section] || 1}
              objects={storeData?.[section] || []}
            />
          );
        })}
      </main>
    </>
  );
};

export default Store;
