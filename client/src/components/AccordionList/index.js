import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import AccordionItem from "../AccordionItem";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native-safe-area-context";

const AccordionList = () => {
  const data = [
    {
      id: 0,
      title: "Canales",
      body: [
        {name: "Buenos Aires", key: "1"},
        {name: "Bogota", key: "2"},
        {name: "Medellin", key: "3"},],
    },
    {
      id: 1,
      title: "Mensajes directos",
      body: [
        {name: "Luis Blanco", key: "1"},
        {name: "Mario Villalba", key: "2"},
        {name: "Paula Celman", key: "3"},],
    },
    {
      id: 2,
      title: "Notificaciones",
      body: "Acá irian las notificaciones",
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AccordionItem
              title={item.title}
              bodyText={item.body}
              style={styles.item}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};



export default AccordionList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "5%",
    paddingHorizontal: "10%",
    height: "100%",
    fontSize: 19,
    color: "#A8EB12",
  },
  flatList: {
    fontSize: 19,
    color: "#A8EB12",
  },
});
