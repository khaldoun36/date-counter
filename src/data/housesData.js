import { v4 as uuidv4 } from "uuid";
const houses = [
  {
    id: uuidv4(),
    location: "dubai",
    price: 1600,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bookedDates: [["2022-04-10", "2022-04-11", "2022-04-12"]],
  },
  {
    id: uuidv4(),
    location: "dubai",
    price: 1450,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bookedDates: [["2022-03-29", "2022-03-30", "2022-03-31"]],
  },
  {
    id: uuidv4(),
    location: "abu dhabi",
    price: 1300,
    image:
      "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bookedDates: [["2022-03-29", "2022-03-30", "2022-03-31"]],
  },
  {
    id: uuidv4(),
    location: "abu dhabi",
    price: 1950,
    image:
      "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bookedDates: [["2022-04-10", "2022-04-11", "2022-04-12"]],
  },
  {
    id: uuidv4(),
    location: "london",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bookedDates: [["2022-03-29", "2022-03-30", "2022-03-31"]],
  },
  {
    id: uuidv4(),
    location: "london",
    price: 500,
    image:
      "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bookedDates: [["2022-04-10", "2022-04-11", "2022-04-12"]],
  },
];

export default houses;
