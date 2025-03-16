import { Component } from 'react'
import Productos from './components/Productos.jsx'

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Arvejas', price: 2000, img: '/productos/arvejas.jpg'},
      {name: 'Lechuga', price: 1000, img: '/productos/lechuga.jpg'},
    ]
  }
  render() {
    return (
      <div>
        <Productos
         agregarAlCarro={() => console.log('No hace nada')}
         productos={this.state.productos}

         />
        <p>Hola Mundo</p>
      </div>
    )
}

}
export default App

