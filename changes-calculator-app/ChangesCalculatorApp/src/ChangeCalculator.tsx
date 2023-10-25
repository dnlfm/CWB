import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button } from 'react-native';
import { Breakdown } from './Breakdown';
import { EURO_DENOMINATIONS } from './Denomination'

const breakdownCalculator = new Breakdown(EURO_DENOMINATIONS);

// Equivalent format to define the function below (functional programming approach - preferred by a lot of React developers):
// const ChangeCalculator: React.FC = () => {
export function ChangeCalculator() {
  const [purchaseAmount, setPurchaseAmount] = useState<string>('');
  const [amountGiven, setAmountGiven] = useState<string>('');
  const [changeResult, setChangeResult] = useState<string>('Change will be shown here.');

  const handleCalculateChange = () => {
    const purchase = parseFloat(purchaseAmount);
    const given = parseFloat(amountGiven);
    if (!isNaN(purchase) && !isNaN(given)) {
      const change = given - purchase;
      const breakdownDescription = breakdownCalculator.describeBreakdown(change);
      setChangeResult(breakdownDescription);
    } else {
      setChangeResult("Please enter valid amounts.");
    }
  };

  return (
    <>
      <Text style={styles.title}>Changes Calculator App</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter purchase amount (€)"
        value={purchaseAmount}
        onChangeText={setPurchaseAmount}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount given by the customer (€)"
        value={amountGiven}
        onChangeText={setAmountGiven}
      />
      <Button title="Calculate Change" onPress={handleCalculateChange}/>
      <Text style={styles.result}>{changeResult}</Text>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      paddingTop: 50,
    },
    title: {
      fontSize: 24,
      marginBottom: 40,
      fontWeight: 'bold',
    },
    input: {
      width: '80%',
      padding: 10,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    result: {
      marginTop: 40,
      fontSize: 18,
    },
  });

//export default ChangeCalculator;
