import { Component} from 'react'


const styles = {
    layout: {
      backgroundColor: '#fff',
      color: '#0A283E',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      width: '1200px',
    }
  }

class Layout extends Component {
    render() {
        return (

<div style={styles.layout}> {/* para centrar contenido */}
    <div style={styles.container}> {/* para texto */}
        {this.props.children} {/* para imprimir productos */}
    </div>
</div>

        )
}
}

export default Layout