import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function App() {
  const desserts = [
    {
        id: 1,
        name: "ชีสเค้ก (Cheesecake)",
        description: "เค้กเนื้อเนียนนุ่ม ทำ จากครีมชีส รสหวานมัน ละมุนลิ้น",
        price: 25
    },
    {
        id: 2,
        name: "ทีรามิส (Tiramisu)",
        description: "ของหวานอิตาเลียน ชั้น เค้กกาแฟกับมาสคาร์โพนซีส หอมกลิ่นโกโก้",
        price: 40
    },
    {
        id: 3,
        name: "บราวนี่ (Brownie)",
        description: "ขนมช็อกโกแลตเข้มข้น เนื้อ หนึบหรือฉ่ำ นิยมกินคู่ไอศกรีม",
        price: 15
    },
    {
        id: 4,
        name: "ครอฟเฟิล (Croffle)",
        description: "ครัวซองต์อบในเครื่อง วาฟเฟิล กรอบนอกนุ่มใน",
        price: 25
    },
    {
        id: 5,
        name: "แพนเค้ก (Pancake)",
        description: "แผ่นแป้งนุ่มๆ ราดน้ำผึ้ง หรือไซรัป กินคู่ผลไม้",
        price: 30
    },
    {
        id: 6,
        name: "เครป (Crepe)",
        description: "แผ่นแป้งบางนุ่ม ม้วนใส่ผลไม้ วิปครีม หรือไอศกรีม",
        price: 25
    },
    {
        id: 7,
        name: "มาการอง (Macaron)",
        description: "ขนมฝรั่งเศสสีสันสดใส ไส้ครีมรสต่างๆ เนื้อกรอบนอกนุ่มใน",
        price: 55
    },
    {
        id: 8,
        name: "ครัวซองต์ (Croissant)",
        description: "ขนมอบเนยหอม กรอบ บางเป็นชั้น นิยมกินคู่กาแฟ",
        price: 50
    },
    {
        id: 9,
        name: "โดนัท (Donut)",
        description: "แป้งทอดนุ่ม โรยน้ำตาลหรือ เคลือบช็อกโกแลต หวานกำลังดี",
        price: 10
    },
    {
        id: 10,
        name: "พายแอปเปิ้ล (Apple Pie)",
        description: "แป้งพายกรอบหอม เนื้อในเป็นแอปเปิ้ลเคี่ยวหวานอมเปรี้ยว",
        price: 25
    },
    {
        id: 11,
        name: "ชูครีม (Cream Puff)",
        description: "แป้งฟูเบา ข้างในสอดไส้ ครีมวานิลลาเย็นๆ",
        price: 20
    },
    {
        id: 12,
        name: "เอแคลร์ (Eclair)",
        description: "แป้งอบยาวไส้คัสตาร์ดหรือ ครีม ราดช็อกโกแลต",
        price: 20
    },
    {
        id: 13,
        name: "มัฟฟิน (Muffin)",
        description: "ขนมอบเนื้อนุ่มคล้ายเค้ก มี หลายรส เช่น บลูเบอร์รี่หรือกล้วย ไอศกรีม วิปครีม และผลไม้สด",
        price: 30
    },
    {
        id: 14,
        name: "คัพเค้ก (Cupcake)",
        description: "เค้กถ้วยเล็กแต่งหน้าด้วย ครีมและท็อปปิ้งน่ารัก",
        price: 25
    },
    {
        id: 15,
        name: "พานาคอตต้า (Panna Cotta)",
        description: "ของหวาน อิตาเลียนเนื้อเด้งนุ่ม ทำจากครีมและเจลาติน",
        price: 25
    },
    {
        id: 16,
        name: "พาร์เฟต์ (Parfait)",
        description: "ของหวานในแก้ว ชั้น",
        price: 30
    },
    {
        id: 17,
        name: "วาฟเฟิล (Waffle)",
        description: "ขนมแป้งอบเป็นลายตาราง กรอบนอกนุ่มใน เสิร์ฟกับไอศกรีมหรือไซรัป",
        price: 25
    },
    {
        id: 18,
        name: "มูสช็อกโกแลต (Chocolate Mousse)",
        description: "ครีม ช็อกโกแลตเนื้อนุ่มเบา ละลายในปาก",
        price: 25
    },
    {
        id: 19,
        name: "ทาร์ตผลไม้ (Fruit Tart)",
        description: "แป้งพายกรอบ ใส่คัส ตาร์ดและผลไม้สดหลากสากล",
        price: 27
    },
    {
        id: 20,
        name: "สโคน (Scone)",
        description: "ขนมอบเนื้อแน่นนุ่ม กินคู่แยม และครีม นิยมในชุดน้ำชายามบ่าย",
        price: 30
    },
]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topic}>แนะนำของหวาน</Text>
        <Text style={styles.comment}>( 20 รายการ ราคาโดยประมาณ และคำอธิบาย )</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {desserts.map((d) => (
          <View style={styles.card} key={d.id}>
            <Text style={styles.index}>รายการที่ {d.id}</Text>
            <Text style={styles.title}>{d.name}</Text>
            <Text style={styles.description}>{d.description}</Text>
            <Text style={styles.price}>{d.price} บาท</Text>
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
    backgroundColor: "#5A4335",
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
  comment: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  body: {
    backgroundColor: "#E8DCCF",
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 40,
    justifyContent: "center",
    minHeight: "100%",
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    width: 400,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 30,
  },
  index: {
    fontSize: 18,
    fontWeight: "800",
    paddingBottom: 10,
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
  description: {
    fontSize: 16,
    color: "#48484bff",
    marginBottom: 15,
    textAlign: "center",
  },
});