export const calcToltalPricse = (items) =>
  items.reduce((acc, game) => (acc += game.price), 0);
