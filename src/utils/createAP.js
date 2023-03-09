const createArP  = (n, lim) =>
  Array.from({ length: 6 }, (_, i) => (i + 1) * n );

const  createAP = (a, d, n)=> {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(a + (i * d));
    }
    return result;
  }

export {createAP}