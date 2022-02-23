import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";

export default function AddNewRestaurantScreen() {
  const [newRestaurant, setNewRestaurant] = useState({});

  // const restaurantObject = {
  //   name: newRestaurant.name,
  //   address: newRestaurant.address,
  //   photoUrl: newRestaurant.photoUrl,
  //   rating: newRestaurant.rating,
  // };

  const navigation = useNavigation()

  const sendNewRestaurantInfo = () => {
    fetch("https://bocacode-intranet-api.web.app/restaurants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    })
    .then(() => alert('Added new restaurant successfully!'))
    .then(() => navigation.navigate("Home"))
    .catch(alert)
  };

  return (
    <View>
      <Input
        placeholder="Enter name"
        onChangeText={(text) =>
          setNewRestaurant({ ...newRestaurant, name: text })
        }
      />
      <Input
        placeholder="Enter address"
        onChangeText={(text) =>
          setNewRestaurant({ ...newRestaurant, address: text })
        }
      />
      <Input
        placeholder="Photo URL"
        keyboardType="url"
        onChangeText={(text) =>
          setNewRestaurant({ ...newRestaurant, photoUrl: text })
        }
      />
      <Input
        placeholder="Enter rating"
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(text) =>
          setNewRestaurant({ ...newRestaurant, rating: text })
        }
      />
      <Button
        title="Add New Restaurant"
        style={styles.customBtn}
        onPress={sendNewRestaurantInfo}
      />
    </View>
  );
}
