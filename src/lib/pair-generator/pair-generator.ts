const listOfPairs: [string, string][] = [
  ["birthday", "cake"],
  ["cheese", "cake"],
  ["coal", "mine"],
  ["coffee", "shop"],
  ["doggy", "bag"],
  ["elementary", "school"],
  ["grass", "roots"],
  ["iron", "man"],
  ["lion", "king"],
  ["money", "bag"],
  ["monkey", "wrench"],
  ["mountain", "bike"],
  ["photo", "shoot"],
  ["shopping", "cart"],
  ["space", "ship"],
  ["taxi", "driver"],
  ["traffic", "light"],
  ["travel", "guide"],
  ["tv", "channel"],
  ["water", "cooler"]
];

export default function pairGenerator(): [string, string] {
  return listOfPairs[Math.floor(Math.random() * listOfPairs.length)];
}
