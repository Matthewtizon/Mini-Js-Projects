const uniteUnique = (...arrays) => {
    const combined = arrays.flat();
    const seen = new Set();
    const unique = combined.filter(item => {
      if (!seen.has(item)){
        seen.add(item);
        return true;
      }
      return false;
    })
    return unique;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))