import { Exchange } from './exchange';
import { Bitcoin } from './bitcoin';
import { Ethereum } from './ethereum';

test('I can add bitcoins to the exchange', () => {
  const exchange = new Exchange();
  exchange.transfer(new Bitcoin(0.4, 0));
  exchange.transfer(new Bitcoin(0.4, 1));
  exchange.transfer(new Bitcoin(0.4, 2));
  expect(exchange.verify()).toEqual(
`Liste des transactions en cours:
Bitcoin - 0.4 gaz
Bitcoin - 0.2 gaz
Bitcoin - 0.4 gaz`
    )
});

test('I can correctly add only pair bitcoins', () => {
  const exchange = new Exchange();
  exchange.transfer(new Bitcoin(0.5, 0));
  exchange.transfer(new Bitcoin(0.8, 4));
  exchange.transfer(new Bitcoin(1.3, 8));
  expect(exchange.verify()).toEqual(
`Liste des transactions en cours:
Bitcoin - 0.5 gaz
Bitcoin - 0.8 gaz
Bitcoin - 1.3 gaz`
    )
});

test('I can correctly add only impair bitcoins', () => {
  const exchange = new Exchange();
  exchange.transfer(new Bitcoin(0.6, 1));
  exchange.transfer(new Bitcoin(0.8, 3));
  exchange.transfer(new Bitcoin(1.2, 9));
  expect(exchange.verify()).toEqual(
    `Liste des transactions en cours:
Bitcoin - 0.3 gaz
Bitcoin - 0.4 gaz
Bitcoin - 0.6 gaz`
)
});

test('I can add ethereum to the exchange', () => {
  const exchange = new Exchange();
  exchange.transfer(new Ethereum(0.3));
  exchange.transfer(new Ethereum(0.4));
  exchange.transfer(new Ethereum(0.5));
  exchange.transfer(new Ethereum(0.6));
  expect(exchange.verify()).toEqual(
`Liste des transactions en cours:
Ethereum - 0.3 gaz
Ethereum - 0.4 gaz
Ethereum - 0.5 gaz
Ethereum - 0.6 gaz`
    )
});

test('I can verify and execute a transfer of 3 bitcoins and 3 ethereum', () => {
  const exchange = new Exchange();
  exchange.transfer(new Bitcoin(0.5, 0));
  exchange.transfer(new Ethereum(0.6));
  exchange.transfer(new Bitcoin(0.6, 1));
  exchange.transfer(new Bitcoin(0.4, 2));
  exchange.transfer(new Ethereum(0.3));
  exchange.transfer(new Ethereum(0.9));

  expect(exchange.verify()).toEqual(
`Liste des transactions en cours:
Bitcoin - 0.5 gaz
Bitcoin - 0.3 gaz
Bitcoin - 0.4 gaz
Ethereum - 0.6 gaz
Ethereum - 0.3 gaz
Ethereum - 0.9 gaz`
    )

  expect(exchange.exec()).toEqual(
`Enregistrement en cours...
Total des frais: 3 gaz`
    )
});