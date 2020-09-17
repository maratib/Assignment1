import { MyArray } from "./MyArray";

const stringAry = new MyArray()

let strRes = stringAry.add('aaa')
if (strRes.type === 'error') { console.log(strRes.value); }
strRes = stringAry.add('bbb')
if (strRes.type === 'error') { console.log(strRes.value); }
strRes = stringAry.add('ccc')
if (strRes.type === 'error') { console.log(strRes.value); }

stringAry.remove('bbb')

console.log(stringAry.getValues())
//=> [ 'aaa', 'ccc' ]

const numberAry = new MyArray()

let numRes = numberAry.add(1)
if (numRes.type === 'error') { console.log(numRes.value); }
numRes = numberAry.add(2)
if (numRes.type === 'error') { console.log(numRes.value); }
numRes = numberAry.add(3)
if (numRes.type === 'error') { console.log(numRes.value); }

numberAry.remove(2)

console.log(numberAry.getValues())
//=> [ 1, 3 ]


const booleanAry = new MyArray()
let bolRes = numberAry.add(true)
if (bolRes.type === 'error') { console.log(bolRes.value); }
bolRes = numberAry.add(false)
if (bolRes.type === 'error') { console.log(bolRes.value); }
console.log(booleanAry.getValues())
//=> You shouldn't be able to do these.

const numberAndStringMixedAry = new MyArray();
let mixRes = numberAndStringMixedAry.add(1);
if (mixRes.type === 'error') { console.log(mixRes.value); }

mixRes = numberAndStringMixedAry.add('bbb');
if (mixRes.type === 'error') { console.log(mixRes.value); }

console.log(numberAndStringMixedAry.getValues())
//=> You shouldn't be able to do these. So you shouldn't be able to mix different types.