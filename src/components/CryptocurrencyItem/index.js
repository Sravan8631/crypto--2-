// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {CryptocurrencyDetails} = props
  const {
    currencyLogUrl,
    currencyName,
    usdValue,
    euroValue,
  } = CryptocurrencyDetails

  return (
    <li className="cryptocurrency-item">
      <div className="logo-and-title-container" data-testid="loader">
        <img
          className="currency-logo"
          src={currencyLogUrl}
          alt={currencyName}
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
