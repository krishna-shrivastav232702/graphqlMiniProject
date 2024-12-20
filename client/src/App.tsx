import './App.css'
import StockChart from './graphql/stockChart'

function App() {

  return (
    <div>
      <h1>Stock Chart Viewer</h1>
      <StockChart symbol="AAPL" range="1mo" interval="1d" />
      </div>
  )
}
export default App
