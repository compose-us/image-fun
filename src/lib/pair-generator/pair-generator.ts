import listOfPairs from "../../service/pairs";

export default function pairGenerator(): [string, string] {
  return listOfPairs[Math.floor(Math.random() * listOfPairs.length)];
}
