import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RestaurantCard from "../components/RestaurantCard";
import styles from "../../styles";

export default function RestaurantListScreen() {
  const navigation = useNavigation();
  const handleAddNew = () => {
    navigation.navigate("Add New Restaurant");
  };

  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);
  return (
    <View>
      <TouchableOpacity
        onPress={handleAddNew}
        style={styles.customBtn}
      >
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "700" }}>
          Add New Restaurant
        </Text>
      </TouchableOpacity>
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
