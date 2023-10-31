import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import Payment from "./src/Payment";

const PUBLISHABLE_KEY =
  "pk_test_51O6p0wSGEesR2xZcTMeDvXgwTJgLfsOMehC1tZcDo7bphTUPo65HjeJJUcKIRYTqA115nRZi3CbzYH2GsuY69Htf00ewXq6Z7m";

const App: React.FC = () => {
  return (
    <StripeProvider publishableKey={PUBLISHABLE_KEY}>
      <Payment />
    </StripeProvider>
  );
};

export default App;
