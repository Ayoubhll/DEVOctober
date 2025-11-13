import { View, Text, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CartListItem({ cartItem }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Taille {cartItem.size}</Text>
        <View style={styles.footer}>
          <Feather name="minus-circle" size={24} color="gray" />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather name="plus-circle" size={24} color="gray" />
          <Text style={styles.price}>
            ${(cartItem.product.price * cartItem.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  image: { width: 100, height: 100, marginRight: 10 },
  content: { flex: 1 },
  name: { fontWeight: 'bold' },
  size: { color: 'gray' },
  footer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  quantity: { marginHorizontal: 10, fontWeight: 'bold' },
  price: { marginLeft: 'auto', fontWeight: 'bold' },
});