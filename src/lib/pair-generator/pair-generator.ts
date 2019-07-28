const listOfPairs: [string, string][] = [
  ["birthday", "cake"],
  ["doggy", "bag"],
  ["grass", "roots"],
  ["lion", "king"],
  ["money", "bag"],
  ["mountain", "bike"],
  ["shopping", "cart"],
  ["taxi", "driver"],
  ["tv", "channel"]
];

export default function pairGenerator(): [string, string] {
  return listOfPairs[Math.floor(Math.random() * listOfPairs.length)];
}
