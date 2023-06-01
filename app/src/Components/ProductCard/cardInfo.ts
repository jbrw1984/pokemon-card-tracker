export type PokemonCard = {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  marketPrice: number;
  rating: number; 
  image: string;
  priceHistory: priceHistoryData[]
};

export type priceHistoryData = {
  date: Date;
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
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ] 
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ] 
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ] 
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 123,
    name: "Charmander",
    description: "Card Description here",
    salePrice: 12.23,
    marketPrice: 11.99,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SMA/SMA_EN_SV6.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  },
  {
    id: 321,
    name: "Pikachu",
    description: "Card Description here",
    salePrice: 12.13,
    marketPrice: 11.89,
    rating: 4,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png", 
    priceHistory: [
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}, 
      {date: new Date("2023-05-01"), quantity: 1, price: 3.99}
    ]
  }
];

export default cardInfo;