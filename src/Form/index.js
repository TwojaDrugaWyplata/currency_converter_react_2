import React from "react";

import { rates } from "../rates";
import { Label, Select, Input, Button } from "./styled";

const ratesToOptions = () => (
  rates.map(({ code, currency }) => ({
    value: code,
    label: currency,
  }))
)

const Form = ({ amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency }) => (
  <form className="form">
    <fieldset className="form__fieldset">
      <Label labelText="Pierwsza waluta">
        <Select
          value={fromCurrency}
          setValue={setFromCurrency}
          options={ratesToOptions()}
        />
      </Label>
      <Input
            required
            type="number"
            step="0.01"
            min="1"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
      <Label labelText="Kwota">
        <input
          className="form__field"
          type="number"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
        />
      </Label>
      <Label labelText="Druga waluta">
        <Select
          value={toCurrency}
          setValue={setToCurrency}
          options={ratesToOptions()}
        />
      </Label>
      <Label>
          <Button>Wymień</Button>
        </Label>
    </fieldset>
  </form>
)

export default Form;



