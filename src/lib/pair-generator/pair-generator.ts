import listOfPairs from "../../service/pairs";

export default function pairGenerator(): CompoundWord {
  return listOfPairs[Math.floor(Math.random() * listOfPairs.length)];
}
