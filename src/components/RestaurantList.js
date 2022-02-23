import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);
  return (
    <View>
      {!restaurants ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}
