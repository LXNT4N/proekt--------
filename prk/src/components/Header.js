import React from 'react'
import FoodNutritionCalculator from '../calculator'
import RegistrationForm from '../reg'

export default function Header() {
  return (
    <header>
        <div>
          <RegistrationForm />
            <span className='logo'>CALORFIT</span>
            <ul className='nav'>
                <li href="">Красивая кнопочка :)</li>              
                <div>
</div>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
