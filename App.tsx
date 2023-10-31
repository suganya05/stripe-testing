import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import Payment from "./src/Payment";

const PUBLISHABLE_KEY = process.env.PUBLISHABLE_KEY || "YOUR_DEFAULT_KEY";

const App: React.FC = () => {
  return (
    <StripeProvider publishableKey={PUBLISHABLE_KEY}>
      <Payment />
    </StripeProvider>
  );
};

export default App;
