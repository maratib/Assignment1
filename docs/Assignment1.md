# TypeScript coding assignment

- Let me know if you have questions anytime.
- You can share your code in any format, like on typescript playground, github or just a text file.
- The deadline is one week from when you get this.
- Please let me know how long it has taken to get the work done when you submit this. There is no time limit though.



## (1) MyArray class

Complete the following MyArray class in TypeScript that can handle string and number only to get the expected results.
You can actually refine the code in the expected results a bit for getting the most out of TypeScript.
Then you get a bonus point :-)

### Barebone class definition

```JavaScript
class MyArray {
  add(value) {
    this.collection.push(value)
  }

  remove(value) {
  }

  getValues() {
    return this.collection
  }
  
}
```

### Expected results

```JavaScript
const stringAry = new MyArray()
stringAry.add('aaa')
stringAry.add('bbb')
stringAry.add('ccc')
stringAry.remove('bbb')
console.log(stringAry.getValues())
//=> [ 'aaa', 'ccc' ]

const numberAry = new MyArray()
numberAry.add(1)
numberAry.add(2)
numberAry.add(3)
numberAry.remove(2)
console.log(numberAry.getValues())
//=> [ 1, 3 ]

const booleanAry = new MyArray()
numberAry.add(true)
numberAry.add(false)
//=> You shouldn't be able to do these.

const numberAndStringMixedAry = new MyArray();
numberAndStringMixedAry.add(1);
numberAndStringMixedAry.add('bbb');
//=> You shouldn't be able to do these. So you shouldn't be able to mix different types.
```


## (2) Error handling

You can throw an Error and catch it in the JavaScript/TypeScript world.
But the developers have to implement try ~ catch. There's no compiler error if not. So it's not type safe.
You might want to return undefined/false instead, that forces the developers to handle it.
But it's not certain that they mean an error all the time.
Also you can't handle multiple errors and error messages with them.
Can you propose implementation to solve the issue, a way to handle errors intead of using the ways above?
You can find a solution on the Internet or provide your own.



## (3) Cache it!!

Say you want to call the same function for several times.
So I want you to cache the result instead of calculating it again and again.

### Barebone function definition
```JavaScript
const hundredTimes = (param: number): number => {
}
```

### Expected results
```JavaScript
console.log(hundredTimes(1))
//=> 100
console.log(hundredTimes(1)) // cached result should be retunrned intead of calculating again.
//=> 100
console.log(hundredTimes(2))
//=> 200
console.log(hundredTimes(2)) // the same thing for this.
//=> 200
console.log(hundredTimes(1)) // cached result should be retunrned again.
//=> 100
```


## (4) Crazy query

You might find some issues on this code. Can you rewrite this?
```JavaScript
public findOneById(id: number): Promise<any> {
  return this.createQueryBuilder('payments')
           .where(`payments.id=${id}`)
           .getMany();
}
```

