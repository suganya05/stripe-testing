import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import axios from "axios";

const StripeApp = () => {
  const [email, setEmail] = useState<string>();
  const [cardDetails, setCardDetails] = useState<string>("4242 4242 4242 4242");
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    try {
      const data = {
        amount: 100,
      };

      const createData = await axios.post(
        "http://192.168.43.117:3001/create-payment-intent",
        {
          ...data,
        }
      );
      console.log("jhiihuuhuhuhuhuhuhuh", createData);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // const handlePayPress = async () => {
  //   //1.Gather the customer's billing information (e.g., email)
  //   if (!cardDetails || !email) {
  //     Alert.alert("Please enter Complete card details and Email");
  //     return;
  //   }
  //   const billingDetails = {
  //     email: email,
  //   };
  //   //2.Fetch the intent client secret from the backend
  //   try {
  //     const { clientSecret, error } = await fetchPaymentIntentClientSecret();
  //     //2. confirm the payment
  //     if (error) {
  //       console.log("Unable to process payment");
  //     } else {
  //       const { paymentIntent, error } = await confirmPayment(clientSecret, {
  //         type: "Card",
  //         billingDetails: billingDetails,
  //       });
  //       if (error) {
  //         alert(`Payment Confirmation Error ${error.message}`);
  //       } else if (paymentIntent) {
  //         alert("Payment Successful");
  //         console.log("Payment successful ", paymentIntent);
  //       }
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   //3.Confirm the payment with the card details
  // };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails: any) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button
        onPress={fetchPaymentIntentClientSecret}
        title="Pay"
        disabled={loading}
      />
    </View>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});
