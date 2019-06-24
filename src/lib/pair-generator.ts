const listOfPairs: [string, string][] = [
  ["grass", "roots"],
  ["doggy", "bag"],
  ["money", "bag"],
  ["tv", "channel"]
];

export default function pairGenerator(): [string, string] {
  return listOfPairs[Math.floor(Math.random() * listOfPairs.length)];
}
