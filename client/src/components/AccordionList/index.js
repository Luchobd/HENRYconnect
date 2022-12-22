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
      body: "Acá irian los canales",
    },
    {
      id: 1,
      title: "Mensajes directos",
      body: "Acá irian los mensajes",
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

// AccordionList.propTypes = {
//   data: PropTypes.array.isRequired,
//   customTitle: PropTypes.func.isRequired,
//   customBody: PropTypes.func.isRequired,
//   customIcon: PropTypes.func,
//   containerItemStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   animationDuration: PropTypes.number,
//   isRTL: PropTypes.bool,
// };

// AccordionList.defaultProps = {
//   customIcon: null,
//   containerStyle: null,
//   animationDuration: 300,
//   isRTL: false,
// };

export default AccordionList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "20%",
    paddingHorizontal: "10%",
    height: "100%",
    fontSize: 19,
    color: "#A8EB12",
  },
  flatList: {
    fontSize: 19,
    color: "#A8EB12",
    // borderRadius: 40, 
  },
  //   item: {
  // alignItems: "center",
  // flexDirection: "row",
  // paddingVertical: 10,
  // paddingHorizontal: 20,
  //   }
});
