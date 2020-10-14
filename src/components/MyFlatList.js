import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from '../../GlobalStyles'

const dummyData = [
              { age: 32, name: 'Ianm' },
              { age: 30, name: 'Dase' },
              { age: 30, name: 'Johne' },
              { age: 100, name: 'Sookyi' },
              { age: 32, name: 'Ian2' },
              { age: 30, name: 'Das2' },
              { age: 30, name: 'John2' },
              { age: 100, name: 'Sooky2' }
              ]

const MyFlatList = () => {
  const greeting = <Text style={styles.h4}>FlatList h4</Text>
  return (
         <View>
           <Text style={styles.h3}>FlatList H3</Text>
           {greeting}
           <FlatList
              keyExtractor={(item) => {
                item.name
              }}
              data={dummyData}
              renderItem={({ item }) => {
                return <Text style={styles.flatListStyle}>{item.name}: {item.age}</Text>
              }}
           />
         </View>
       )
};

export { MyFlatList }
