const getInputValue = (input) => {
  return input.value !== "" ? input.value : null; //najpierw sprawdza czy input nie jest pustym stringiem, za znakiem zapytania jezeli nie jest to pusty string,
  // to zwroci input, za dwukropkiem zwroci null jezeli string jest faktycznie pusty. Dwa apostrofy pokazuja, ze input oczekujemy aby byl stringiem

  // return input.value ? input.value : null; //sprawdza czu input skonwertowany do true/false daje true, jako false potraktujemy pusty string, jako false
  // tez potraktujemy null albo undefined, jezeli true bedzie string, to wyswietlimy ten string

  // return input.value || null; // krotsza forma tego wyzej z 4 linijki, tj. jezeli input bedzie true to zwroci string inputa, jezeli nie, to zwroci to co jest po
  // tych dwoch kreseczkach czyli tutaj null.
};
