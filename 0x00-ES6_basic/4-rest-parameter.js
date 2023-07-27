export default function returnHowManyArguments(...Args) {
  let totale = 0;

  for (const arg of Args) {
    totale += 1;
  }
  return totale;
}
