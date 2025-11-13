import { FlatList, View, Text, Pressable, StyleSheet } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

export default function ShoppingCartScreen() {
  const total = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => (
          <>
            <View style={styles.totals}>
              <Text style={styles.totalText}>Subtotal : ${total.toFixed(2)}</Text>
              <Text style={styles.totalText}>Total : ${total.toFixed(2)}</Text>
            </View>
            <Pressable style={styles.checkout}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </Pressable>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  totals: { margin: 20, paddingTop: 10, borderTopWidth: 1, borderColor: '#ddd' },
  totalText: { fontSize: 18, fontWeight: '500' },
  checkout: { backgroundColor: '#000', padding: 15, borderRadius: 10, alignItems: 'center', margin: 20 },
  checkoutText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});