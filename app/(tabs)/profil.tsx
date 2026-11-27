import { View, Text, StyleSheet } from 'react-native';

export default function Profil() {
  return (
    <View style={s.container}>
      <Text style={s.nama}>Teguh Hadi Rachmat</Text>
      <Text>NIM: 14524212</Text>
      <Text>Program Studi: Teknik Informatika</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  nama: { fontSize: 22, fontWeight: 'bold', marginBottom: 6 },
});
