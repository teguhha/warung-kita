import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { items, total, clear } = useCart();

  return (
    <View style={s.container}>
      <Text style={s.title}>Ringkasan Pesanan</Text>
      {items.map((i) => (
        <Text key={i.id} style={s.item}>
          {i.nama} x{i.qty} — Rp {(i.harga * i.qty).toLocaleString("id-ID")}
        </Text>
      ))}
      <Text style={s.total}>Total: Rp {total.toLocaleString("id-ID")}</Text>

      <Button
        title="Konfirmasi Pesanan"
        color="#2e7d32"
        onPress={() => {
          clear();
          router.replace("/");
        }}
      />
      <View style={{ height: 10 }} />
      <Button title="Kembali" onPress={() => router.back()} />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  item: { fontSize: 16, marginBottom: 6 },
  total: { fontSize: 18, fontWeight: "bold", marginVertical: 16 },
});
