import './App.css'
import Card from './components/Card'

function App() {

  return (
    

        <div className="wrapper">
       
        
        <div className="airfraes-block">
        <div className="container">
            <snap className="airfraes-tag">Top Airfares</snap>
            <h1>Find Best Flight deals from Loss Angeles to Miami</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sit ultricies fames at a sed. Mattis dis tortor posuere diam
                cursusr. Sit ultricies fames at a sed. Mattis dis tortor posuere diam cursus.</p>
        </div>
    </div>
        <div className="flight-block">
            <div className="container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
                
                
            </div>
        </div>
        
    </div>
  
  )
}

export default App
