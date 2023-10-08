[<= Back to README](../README.md)
# Task: Changes Calculator App Development

## Objective

Develop a mobile application that assists cashiers and vendors in calculating the exact change to give back to customers after a purchase.

## Background

In various retail and sales environments, it's essential to quickly and accurately determine the change due to customers. This app aims to streamline this process, ensuring that the correct denominations are returned, minimizing human errors.

## Requirements:
1. **User Input**:
    - Allow the user to input the total amount of the purchase.
    - Allow the user to input the amount given by the customer.
2. **Change Calculation**:
    - Calculate the difference between the amount given and the total purchase.
    - Optimally break down the change into the appropriate denominations of notes and coins. You don't need to handle the situation where the vendor doesn't have some specific coins - it would require more input for this. Here we are assuming the store have an infinity amount of all types of notes and coins.
3. **Display**:
    - Show a list of denominations and their quantities that make up the total change.
    - Display a warning if the given amount is less than the purchase amount.
4. **Currency Support**:
    - The default currency is [Euro](#euro-currency) (with its denominations).
    - [_Optional_] Provide an option to switch between different currencies.
5. **Error Handling**:
    - Provide meaningful error messages for invalid inputs.
    - Ensure the app does not crash for edge cases.
6. **UI/UX**:
    - Design should be intuitive and user-friendly.
    - Use clear labels and buttons.
    - Ensure the app is responsive across different device sizes.

## Advanced Features (Optional):
- **History**: Maintain a log of past transactions for reference.
- **Round-off Setting**: Provide an option to round off the change to the nearest available lower denomination.
- **Voice Prompt**: An auditory prompt announcing the total change amount.

## Development Tools:
- **Framework**: React Native (with TypeScript)
- **State Management**: useState hook (or [Redux](https://redux.js.org/introduction/getting-started) if necessary for advanced features)
- **UI Library**: Use native components or a library like React Native Elements.

## Testing:
- Test the application at least on an Android device (virtual or real one).
- Ensure functionality works as expected, including edge cases.

### Examples:

1. 
    - **Amount of purchase**: €57.28
    - **Amount given by the customer**: €60.00
    - **Output**: €2 x 1, €0.50 x 1, €0.20 x 1, €0.02 x 1
    - **Explanation**: The change due is €2.72. The optimal breakdown would be one €2 coin, one €0.50 coin, one €0.20 coin, and one €0.02 coin.

2. 
    - **Amount of purchase**: €34.15
    - **Amount given by the customer**: €50.00
    - **Output**: €10 x 1, €5 x 1, €0.50 x 1, €0.20 x 1, €0.10 x 1, €0.05 x 1
    - **Explanation**: The change due is €15.85. The optimal breakdown would be one €10 note, one €5 note, one €0.50 coin, one €0.20 coin, one €0.10 coin, and one €0.05 coin.

3. 
    - **Amount of purchase**: €89.03
    - **Amount given by the customer**: €100.00
    - **Output**: €10 x 1, €0.50 x 1, €0.20 x 2, €0.05 x 1, €0.02 x 1
    - **Explanation**: The change due is €10.97. The optimal breakdown would be one €10 note, one €0.50 coin, two €0.20 coins, one €0.05 coin, and one €0.02 coin.

4. 
    - **Amount of purchase**: €120.78
    - **Amount given by the customer**: €150.00
    - **Output**: €20 x 1, €5 x 1, €2 x 2, €0.20 x 1, €0.02 x 1
    - **Explanation**: The change due is €29.22. The optimal breakdown would be one €20 note, one €5 note, two €2 coins, one €0.20 coin, and one €0.02 coin.

## Deliverables:
- Source code of the fully functional app.
- A built version of the app for testing.
- [_Optional_] Documentation detailing app architecture, component structure, and usage instructions.

## Deadline:
- 08/11/2023

## Miscellaneous:

#### Euro Currency

**Available Coins**:
- 1 cent
- 2 cents
- 5 cents
- 10 cents
- 20 cents
- 50 cents
- €1
- €2

**Available Notes**:
- €5
- €10
- €20
- €50
- €100
- €200
- €500