class MyCache {
  private map = new Map();
  private maxSize: number = 0;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  hundredTimes = (key: number): number => {
    const hasKey = this.map.has(key);
    if (hasKey) {
      // peek the entry, re-insert for LRU strategy
      let value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      console.log("From Cached : ");
      return this.map.get(key);
    }

    if (this.map.size >= this.maxSize) {
      // least-recently used cache eviction strategy
      const keyToDelete = this.map.keys().next().value;
      this.map.delete(keyToDelete);
    }

    let calculated = (key * 100);
    this.map.set(key, calculated);

    return calculated;
  }
}

let cache = new MyCache(10);

console.log(cache.hundredTimes(1))
//=> 100
console.log(cache.hundredTimes(1)) // cached result should be returned instead of calculating again.
//=> 100
console.log(cache.hundredTimes(2))
//=> 200
console.log(cache.hundredTimes(2)) // the same thing for this.
//=> 200
console.log(cache.hundredTimes(1)) // cached result should be returned again.
//=> 100



