var orderHistory = [
  {
    item: ['JavaScript for impatient programmers'],
    author: ['Rauschmayer, Dr. Axel'],
    price: ['$31.55'],
    orderPlaced: ['August 4, 2020'],
    orderDelivered: ['Aug 8, 2020']
  },
  {
    item: ['The Timeless Way of Building'],
    author: ['Alexander, Christopher'],
    price: ['$41.33'],
    orderPlaced: ['July 19, 2020'],
    orderDelivered: ['Jul 20, 2020']
  },
  {
    item: ['Gamecube Controller Adapter Super Smash Bros Switch Gamecube Adapter for WI U, PC Support Turbo and Vibration Features No Driver and No Lag Gamecube Adapter'],
    price: ['$15.98'],
    orderPlaced: ['July 4, 2020'],
    orderDelivered: ['Jul 7, 2020']
  },
  {
    item: ['GameCube Controller Super Smash Bros.Edition(Nintendo Switch)', 'The Art of Sql'],
    author: ['', 'Faroult, Stephane'],
    price: ['$94.95', '$33.99'],
    orderPlaced: ['July 3, 2020'],
    orderDelivered: ['Jul 5, 2020']
  }
];

console.log('On ' + orderHistory[2].orderPlaced + ' I ordered a ' + orderHistory[2].item + ' for ' + orderHistory[2].price + '.');
console.log('On ' + orderHistory[3].orderPlaced + ' I ordered ' + orderHistory[3].item[1] + ' for ' + orderHistory[3].price[1] + '.');
