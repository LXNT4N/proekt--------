import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import FoodNutritionCalculator from "./calculator";
import RegistrationForm from "./reg";
import Calculator from "./components/klr";
import Calculator2 from "./components/klr2";
import Chat from "./Chat";

class App extends React.Component  {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        {
        id: 1,
        title:'Разработка всё еще ведется',
        img:'lol.jpg',
        desc:'После завершения курса, я продолжу заниматься сайтом, обновляя его.',
        },
        {
          id: 2,
          title:'Что такое калории?',
          img:'kal.jpg',
          desc:'Калории — это единица измерения, которая показывает, сколько энергии содержится в пище.',
        },
        {
          id: 3,
          title:'Зачем нужен этот сайт?',
          img:'rs.jpg',
          desc:'На этом сайте вы можете расчитать свою дневную норму калорий и узнать пищевую ценность разных продуктов.',
        },
      ]
    }
  }
  render () {
return(
    <div className="wrapper">
<Header />
<Items items={this.state.items} />
<Footer />
<Calculator />
<Calculator2 />
<FoodNutritionCalculator />
<Chat />
    </div>
  )
  }
}

export default App;
