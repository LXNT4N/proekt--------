import React, { useState } from "react";

const FoodNutritionCalculator = () => {
  const [products, setProducts] = useState([
    { name: "Яблоко", nutrition: 52 },
    { name: "Морковь", nutrition: 41 },
    { name: "Картошка варёная", nutrition: 82 },
    { name: "Рис варёный", nutrition: 116 },
    { name: "Курица варёная", nutrition: 171 },
    { name: "Конфета Snickers", nutrition: 499 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [weight, setWeight] = useState(0);
  const [nutritionValue, setNutritionValue] = useState(0);

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(parseFloat(event.target.value));
  };

  const handleCalculate = () => {
    const selectedProductData = products.find((product) => product.name === selectedProduct);

    if (selectedProductData) {
      const calculatedNutritionValue = (weight * selectedProductData.nutrition) / 100;
      setNutritionValue(calculatedNutritionValue);
    } else {
      setNutritionValue(0);
    }
  };

  return (
    <div>
      <h2>Пищевая ценность продукта</h2>
      <div>
        <label>Выберите продукт:</label>
        <select value={selectedProduct} onChange={handleProductChange}>
          <option value="">Выберите продукт</option>
          {products.map((product) => (
            <option key={product.name} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Введите вес продукта(в граммах):</label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <button onClick={handleCalculate}>Рассчитать пищевую ценность</button>
      <div>
        <label>Пищевая ценность продукта:</label>
        <span>{nutritionValue} калорий</span>
      </div>
    </div>
    
  );
};

export default FoodNutritionCalculator;