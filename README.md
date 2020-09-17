# Assignment 1

## How to run : 




```bash
#to build + watch
yarn dev

#to run myarray
yarn myarray

#to run cache
yarn mycache
```

## (1) MyArray Class
Please refer to the code MyArray.ts

## (1) Error Handling
Please refer to the code MyArray.ts


## (3) Cache it!!
Please refer to the code MyCache.ts


## (4) Crazy query
```javascript
public findOneById(id: number): Promise<any> {
  return this.createQueryBuilder('payments')
           .where("payments.id = :pid", {pid: id})
           .getOne();
}
```
