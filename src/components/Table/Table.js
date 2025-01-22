import { useState } from "react";
import styles from "./Table.module.css";

export const Table = () => {
  const [result, setResult] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabledButton(true);
    setErrorMessage("");
    setResult("");

    const amount = event.target.amount.value;
    const currency = event.target.currency.value;

    const url = `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/today/`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject();
        }
        return response.json();
      })
      .then((data) => {
        if (
          data?.rates?.length > 0 &&
          //        typeof data.rates[0].mid === "number" &&
          data.rates[0].mid > 0
        ) {
          const rate = data.rates[0].mid;
          setResult((amount * rate).toFixed(2));
        } else {
          return Promise.reject();
        }
      })
      .catch(() => {
        setErrorMessage("Błąd pobieranych danych");
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  return (
    <section>
      <form className={styles.table} onSubmit={handleSubmit}>
        <div className={styles.amount}>
          <h2 className={styles.amountHeader}>Wartość w walucie obcej</h2>
          <input
            className={styles.amountStyle}
            name="amount"
            type="number"
            placeholder="np.: 5, 10, 100, 200 itp."
            min="0.01"
            step="0.01"
            required
          />
        </div>
        <div className={styles.currencySelectStyle}>
          <h2 className={styles.unitHeader}>Waluta</h2>
          <select name="currency" className={styles.selectStyle}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="CHF">CHF</option>
          </select>
          <button type="submit" disabled={disabledButton}>
            Przelicz
          </button>
        </div>
        <div className={styles.resultStyle}>
          <h2 className={styles.resultHeader}>Wartość w PLN</h2>
          <p className={styles.resultField}>{result}</p>
        </div>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </section>
  );
};
