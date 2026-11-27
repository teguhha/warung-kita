import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useCart } from "../../context/CartContext";

export default function Keranjang() {
  const { items, total } = useCart();

  return (
    <View style={s.container}>
      {items.length === 0 ? (
        <Text>Keranjang masih kosong.</Text>
      ) : (
        <>
          {items.map((i) => (
            <Text key={i.id} style={s.item}>
              {i.nama} x{i.qty}
            </Text>
          ))}
          <Text style={s.total}>Total: Rp {total.toLocaleString("id-ID")}</Text>
          <Button
            title="Checkout"
            color="#2e7d32"
            onPress={() => router.push("/checkout")}
          />
        </>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { fontSize: 16, marginBottom: 6 },
  total: { fontSize: 18, fontWeight: "bold", marginVertical: 16 },
});
