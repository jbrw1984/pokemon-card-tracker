export type PokemonCard = {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  marketPrice: number;
  image: string;
  priceHistory: priceHistoryData[]
};

export type priceHistoryData = {
  month: number; 
  day: number; 
  year: number; 
  quantity: number; 
  price: number; 
}

const cardInfo: PokemonCard[] = [
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ] 
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}, 
      {month: 2, day: 1, year: 2023, quantity: 1, price: 3.99}
    ]
  }
];

export default cardInfo;