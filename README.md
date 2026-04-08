# 💱 Currency Converter App

A simple React-based currency converter that allows users to convert values between different currencies using real-time exchange rates.

---

## 🚀 Features

* Convert between multiple currencies (USD, INR, EUR, etc.)
* Real-time exchange rates using API
* Clean and responsive UI using Tailwind CSS
* Controlled inputs with React state
* Reusable components (`InputBox`)
* Auto update on input change

---

# 🧠 How It Works

### 1. User Input

* User enters an amount
* Selects source and target currencies

### 2. State Management

* All values are stored in `App.jsx` using 
* Example:

```js
const [amount, setAmount] = useState("");
const [fromCurrency, setFromCurrency] = useState("usd");
const [toCurrency, setToCurrency] = useState("inr");
```

---

### 3. Data Flow

```
User Input → InputBox → App.jsx (state update) → API → Converted Value → UI update
```

---

## 🌐 Currency API

We use this API:

```
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{currency}.json
```

### Example:

```
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json
```

---

## 📦 API Response

```json
{
  "date": "2024-04-01",
  "usd": {
    "inr": 83.2,
    "eur": 0.92
  }
}
```

---

## 🔄 Daily Refresh

* This API is **updated daily**
* You always get **latest exchange rates**
* No need to manually refresh data

---

## ⚙️ Fetching Data (Custom Hook Created for this)

```js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
```

---

## 🔁 Conversion Logic

```js
const convertedAmount = amount * currencyData[toCurrency];
```

---

## 🧩 Components

### InputBox.jsx

* Handles:

  * Amount input
  * Currency selection
* Uses:

  * `useId()` for accessibility
  * Controlled inputs

---

## 🔄 Auto Conversion

Using `useEffect`:

```js
useEffect(() => {
  if (amount && currencyData[toCurrency]) {
    setConvertedAmount(amount * currencyData[toCurrency]);
  }
}, [amount, fromCurrency, toCurrency, currencyData]);
```

---

## 🎯 Why Controlled Inputs?

* Keeps React in control of data
* Enables real-time updates
* Prevents inconsistent UI

---

## ⚠️ Important Fixes

### Prevent empty input bug

```js
onChange={(e) =>
  setAmount(e.target.value === "" ? "" : Number(e.target.value))
}
```

---

### Prevent typing "e"

```js
onKeyDown={(e) => {
  if (e.key === "e" || e.key === "E") e.preventDefault();
}}
```

---

## 🧠 Concepts Used

* React Hooks (`useState`, `useEffect`, `useId`)
* Controlled Components
* Props & State Flow
* API Fetching
* Tailwind CSS

---

## 📌 Future Improvements

* 🔁 Swap button (From ↔ To)
* 📊 Conversion history
* 🌍 More currencies
* 💾 Local storage support

---

## 🏁 Conclusion

This project demonstrates how to:

* Build reusable components
* Manage state efficiently
* Fetch and use real-time data
* Create clean UI with Tailwind

---

## 👨‍💻 Author

Built as part of learning React fundamentals and real-world app structure.

---
