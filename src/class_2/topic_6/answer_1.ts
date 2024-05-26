interface Item {
    id: number;
    name: string;
    price: number;
  }
  
  const items: Item[] = [
    { id: 1, name: "Item 1", price: 100 },
    { id: 2, name: "Item 2", price: 200 },
    { id: 3, name: "Item 3", price: 300 },
  ];
  
  // Type aliases for the anonymous functions
  type ActionFunction = (item: Item) => void;
  type ConditionFunction = (item: Item) => boolean;
  type TransformFunction = (item: Item) => any;
  

  