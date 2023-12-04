const umlautMap: any = {
  Ü: "U",
  Ä: "A",
  Ö: "O",
  ü: "u",
  ä: "a",
  ö: "o",
  ß: "ss",
};

const replaceUmlauts = (str: string) =>
  str
    .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, (a) => {
      const big = umlautMap[a.slice(0, 1)];
      return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1);
    })
    .replace(
      new RegExp(`[${Object.keys(umlautMap).join("|")}]`, "g"),
      (a) => umlautMap[a]
    );

export default replaceUmlauts;
