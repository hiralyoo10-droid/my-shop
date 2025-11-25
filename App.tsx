import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function App() {
  const products = [
    { id: 1, name: "ต้มยำกุ้ง", price: 30 },
    { id: 2, name: "ส้มตำ", price: 25 },
    { id: 3, name: "ขนมจีน", price: 20 },
    { id: 4, name: "แกงมัสมั่น", price: 40 },
    { id: 5, name: "ผัดผักบุ้ง", price: 35 },
    { id: 6, name: "ผัดซีออิ้ว", price: 30 },
    { id: 7, name: "ผัดเผ็ดปลาดุก", price: 30 },
    { id: 8, name: "แกงแพนง", price: 35 },
    { id: 9, name: "ลาดหน้า", price: 30 },
    { id: 10, name: "ลาบ", price: 25 },
    { id: 11, name: "แกงส้ม", price: 30 },
    { id: 12, name: "แกงป่า", price: 35 },
    { id: 13, name: "แกงเทโพ", price: 30 },
    { id: 14, name: "แกงขี้เหล็ก", price: 30 },
    { id: 15, name: "ข้าวซอย", price: 30 },
    { id: 16, name: "ข้าวหมูแดง", price: 30 },
    { id: 17, name: "ข้าวผัด", price: 30 },
    { id: 18, name: "ข้าวเหนียวมะม่วง", price: 30 },
    { id: 19, name: "ข้าวมันไก่", price: 30 },
    { id: 20, name: "แกงเขียวหวาน", price: 30 },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topic}>แนะนำอาหารไทย</Text>
        <Text style={styles.discription}>( 20 รายการ และราคาโดยประมาณ )</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {products.map((p) => (
          <View style={styles.card} key={p.id}>
            <Text style={styles.index}># {p.id}</Text>
            <Text style={styles.title}>{p.name}</Text>
            <Text style={styles.price}>{p.price} บาท</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#5f2ce0ff",
  },
  topic: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: 8,
    textAlign: "center",
  },
  discription: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  body: {
    backgroundColor: "#8d67eeff",
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 30,
    justifyContent: "center",
    minHeight: "100%",
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  index: {
    fontSize: 18,
    fontWeight: "800",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#3a3a3dff",
  },
  price: {
    fontSize: 16,
    color: "#68686bff",
  },
});