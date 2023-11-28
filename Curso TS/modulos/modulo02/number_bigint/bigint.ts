// number != bigint, o typo bigint é utilizado para a manipulação de grandes números.
// O tipo bigint esta disponivel apartiir do es2020!
// A representação de valores bigint deve ser seguido de (n), 12347127365401293409n.

let numBig: bigint = BigInt(Number.MAX_SAFE_INTEGER);

let numBig2: bigint = 9123746192386745n;


console.log("Número BigInt gerado: " + numBig, "\n", "Número BigInt de exêmplo: " + numBig2);
