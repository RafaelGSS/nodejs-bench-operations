## Adding property


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Directly in the object                        | ██████████████████████████████ | 101,088,669 ops/sec
Using dot notation                            | █████████████████████--------- | 71,930,552 ops/sec
Using define property (writable)              | █----------------------------- | 4,892,939 ops/sec
Using define property initialized (writable)  | ██---------------------------- | 6,920,781 ops/sec
Using define property (getter)                | █----------------------------- | 2,418,761 ops/sec
```

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.114ms
new Array(length)|100|0.012ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.281ms
new Array(length)|10,000|0.133ms
array.push|1,000,000|33.049ms
new Array(length)|1,000,000|6.957ms
array.push|100,000,000|1,940.455ms
new Array(length)|100,000,000|4,136.999ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|15.48ms
new Array(length)|10,000|5.224ms
array.push|1,000,000|172.972ms
new Array(length)|1,000,000|7.644ms
array.push|100,000,000|2,055.034ms
new Array(length)|100,000,000|4,841.428ms

## Array Creation


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

new Array                                     | ██████████████████████████████ | 328 ops/sec
Array.from                                    | ██---------------------------- | 23.87 ops/sec
```

## Blob


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

new Blob (128)                                | █----------------------------- | 4,579 ops/sec
new Blob (1024)                               | ------------------------------ | 667 ops/sec
text (128)                                    | █----------------------------- | 4,291 ops/sec
text (1024)                                   | ------------------------------ | 538 ops/sec
arrayBuffer (128)                             | █----------------------------- | 4,337 ops/sec
arrayBuffer (1024)                            | ------------------------------ | 538 ops/sec
slice (0, 64)                                 | ██████████████████████████████ | 194,762 ops/sec
slice (0, 512)                                | █████------------------------- | 31,406 ops/sec
```

## Comparison using `instanceof`


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

[True conditional] Using instanceof only      | ------------------------------ | 396,101 ops/sec
[True conditional] Using constructor name     | ------------------------------ | 381,714 ops/sec
[True conditional] Check if property is valid then instanceof  | ------------------------------ | 362,269 ops/sec
[False conditional] Using instanceof only     | █████████████████████████████- | 97,195,989 ops/sec
[False conditional] Using constructor name    | ██████████████████████████████ | 98,029,228 ops/sec
[False conditional] Check if property is valid then instanceof  | ██████████████████████████████ | 99,173,222 ops/sec
```

## Crypto Verify


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

crypto.createVerify('RSA-SHA256')             | █████████████████████████████- | 6,623 ops/sec
crypto.verify('RSA-SHA256')                   | ██████████████████████████████ | 6,963 ops/sec
```

## Date toISOString


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

new Date().toISOString()                      | █████████████████████--------- | 1,432,957 ops/sec
fromUnixToISOString(new Date())               | ██████████████████████████████ | 2,081,338 ops/sec
```

## Date format MM/DD/YYYY


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Intl.DateTimeFormat().format(Date.now())      | █----------------------------- | 19,223 ops/sec
Intl.DateTimeFormat().format(new Date())      | █----------------------------- | 18,735 ops/sec
Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now()) | █----------------------------- | 18,447 ops/sec
Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date()) | █----------------------------- | 17,829 ops/sec
Reusing Intl.DateTimeFormat()                 | ███████████████--------------- | 497,685 ops/sec
Date.toLocaleDateString()                     | ██████████████████████████████ | 997,224 ops/sec
Date.toLocaleDateString(undefined, twoDigitsLocaleOptions) | █----------------------------- | 22,807 ops/sec
```

## Date String coersion


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using String()                                | ████████████████████████------ | 919,622 ops/sec
Using brackets {}                             | ████████████████████████------ | 932,075 ops/sec
Using '' +                                    | █████████████████████████----- | 980,936 ops/sec
Using date.toString()                         | ██████████████████████████████ | 1,166,219 ops/sec
```

## Deleting properties


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using delete property                         | ██---------------------------- | 3,892,917 ops/sec
Using delete property (proto: null)           | ███████----------------------- | 16,217,656 ops/sec
Using delete property (cached proto: null)    | ██---------------------------- | 4,026,290 ops/sec
Using undefined assignment                    | █████████████████████████████- | 72,067,153 ops/sec
Using undefined assignment (proto: null)      | ███████----------------------- | 18,353,615 ops/sec
Using undefined property (cached proto: null) | ██████████████████████████████ | 73,507,343 ops/sec
```

## Node.js Error


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Error                                         | ██████████████████████████████ | 368,669 ops/sec
NodeError                                     | ████████████████████████████-- | 341,570 ops/sec
NodeError Range                               | ████████████████████████████-- | 344,647 ops/sec
```

## Function return


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Function returning null                       | ██████████████████████████████ | 1,961,681 ops/sec
Function returning explicitly undefined       | █████████████████████████████- | 1,915,955 ops/sec
Function returning implicitly undefined       | █████████████████████████████- | 1,912,928 ops/sec
Function returning string                     | █████████████████████████████- | 1,941,235 ops/sec
Function returning integer                    | █████████████████████████████- | 1,917,850 ops/sec
Function returning float                      | ██████████████████████████████ | 1,988,693 ops/sec
Function returning functions                  | █████████████████████████████- | 1,902,370 ops/sec
Function returning arrow functions            | ███████████████████████████--- | 1,766,359 ops/sec
Function returning empty object               | ███████████████████████████--- | 1,785,114 ops/sec
Function returning empty array                | ███████████████████████████--- | 1,810,759 ops/sec
```

## Array.includes vs raw comparison


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

using Array.includes                          | ██████████████████████-------- | 73,678,894 ops/sec
using Array.includes (first item)             | █████████████████████████----- | 82,755,579 ops/sec
Using raw comparison                          | ██████████████████████████████ | 99,860,784 ops/sec
Using raw comparison (first item)             | ██████████████████████████████ | 100,072,644 ops/sec
```

## Object.keys vs Object.getOwnPropertyNames comparison


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using Object.keys()                           | ██████████████████████████████ | 42,541,920 ops/sec
Using Object.getOwnPropertyNames()            | █████████████████████████████- | 41,649,476 ops/sec
```

## Get the last item of an Array


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Length = 100 - Array.at                       | ██████████████████████████████ | 99,277,411 ops/sec
Length = 10_000 - Array.at                    | ██████████████████████████████ | 99,406,725 ops/sec
Length = 1_000_000 - Array.at                 | ██████████████████████████████ | 99,817,893 ops/sec
Length = 100 - Array[length - 1]              | ██████████████████████████████ | 98,845,308 ops/sec
Length = 10_000 - Array[length - 1]           | ████████████████████████████-- | 91,669,982 ops/sec
Length = 1_000_000 - Array[length - 1]        | █████████████████████████████- | 95,236,734 ops/sec
```

## Math.floor vs ~


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Math.floor (small)                            | ██████████████████████████████ | 97,885,697 ops/sec
~ (small)                                     | ██████████████████████████████ | 98,729,508 ops/sec
Math.floor (long)                             | ██████████████████████████████ | 98,558,998 ops/sec
~ (long)                                      | ██████████████████████████████ | 97,634,369 ops/sec
```

## Object Creation


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Object.create(null)                           | ██████████-------------------- | 32,416,019 ops/sec
Object.create({})                             | █----------------------------- | 2,099,724 ops/sec
Cached Empty.prototype                        | ██████████████████████████████ | 98,377,220 ops/sec
Empty.prototype                               | █----------------------------- | 2,440,986 ops/sec
Empty class                                   | ------------------------------ | 1,586,513 ops/sec
```

## Optional Chain (?) vs && operator


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using optional chain (obj.field?.field2) (Valid) | ██████████████████████████████ | 96,943,234 ops/sec
Using optional chain (obj.field?.field2) (undefined) | █████████████████████████████- | 94,161,607 ops/sec
Using and operator (obj.field && obj.field.field2) (Valid) | ██████████████████████████████ | 97,082,242 ops/sec
Using and operator (obj.field && obj.field.field2) (undefined) | █████████████████████████████- | 93,999,678 ops/sec
```

## Parsing Integer


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using parseInt(x, 10) - small number (2 len)  | █████████████████████████████- | 97,009,084 ops/sec
Using parseInt(x, 10) - big number (10 len)   | ██████████████████████████████ | 99,080,910 ops/sec
Using + - small number (2 len)                | ██████████████████████████████ | 98,244,961 ops/sec
Using + - big number (10 len)                 | ██████████████████████████████ | 98,373,516 ops/sec
```

## Possible undefined Function


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using if to check function existence          | █████████████████████████████- | 1,000,079 ops/sec
Using ? operator to avoid rejection           | ██████████████████████████████ | 1,038,491 ops/sec
```

## Private Property


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Raw usage private field                       | █████████████████████████----- | 82,851,110 ops/sec
Raw usage underscore usage                    | █████████████████████████████- | 97,006,203 ops/sec
Manipulating private properties using #       | ████████████████████████████-- | 94,409,377 ops/sec
Manipulating private properties using underscore(_) | ██████████████████████████████ | 99,420,560 ops/sec
Manipulating private properties using Symbol  | ██████████████████████████████ | 99,417,673 ops/sec
Manipulating private properties using PrivateSymbol | ███████████------------------- | 36,373,027 ops/sec
```

## Property access after shape transition


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Adding property after object creation - small object | ██████████████████████████████ | 7,986,994 ops/sec
Adding property in the object creation - small object | ██████████████████████████████ | 7,941,045 ops/sec
Adding property after the function creation - small class | █----------------------------- | 272,654 ops/sec
Adding property in the function creation - small class | █----------------------------- | 281,593 ops/sec
Adding property after the class creation - small class | █----------------------------- | 267,608 ops/sec
Adding property in the class creation - small class | █----------------------------- | 265,851 ops/sec
```

## Property Getter Access


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Getter (class)                                | ██████████████████████████████ | 96,137,210 ops/sec
Getter                                        | ███████████████--------------- | 49,013,013 ops/sec
Method                                        | ██████████████████████████████ | 97,358,853 ops/sec
DefineProperty (getter)                       | ██████████████████████████████ | 95,738,527 ops/sec
DefineProperty (getter & enumerable=false)    | ███████████████--------------- | 50,238,409 ops/sec
DefineProperty (getter & configurable=false)  | █████████████████████████████- | 95,143,386 ops/sec
DefineProperty (getter & enumerable=false & configurable=false) | ████████████████-------------- | 50,613,479 ops/sec
DefineProperty (writable)                     | ██████████████████████████████ | 96,117,330 ops/sec
DefineProperty (writable & enumerable=false)  | █████████████████████████████- | 95,196,836 ops/sec
DefineProperty (writable & enumerable=false & configurable=false) | ██████████████████████████████ | 96,251,177 ops/sec
DefineProperties (getter)                     | ████████████████-------------- | 51,149,541 ops/sec
DefineProperties (getter & enumerable=false)  | ████████████████-------------- | 50,995,850 ops/sec
DefineProperties (getter & enumerable=false & configurable=false) | ██████████████---------------- | 46,364,626 ops/sec
```

## Property Setter Access


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Setter (class)                                | ██████████████████████████████ | 100,849,462 ops/sec
Setter                                        | ███--------------------------- | 11,100,592 ops/sec
Method                                        | █████████████████████████████- | 99,267,116 ops/sec
DefineProperty (setter)                       | ████████████████████████████-- | 95,352,468 ops/sec
DefineProperty (setter & enumerable=false)    | ███--------------------------- | 11,159,151 ops/sec
DefineProperty (setter & configurable=false)  | ███--------------------------- | 11,554,499 ops/sec
DefineProperty (setter & enumerable=false & configurable=false) | ███--------------------------- | 11,579,726 ops/sec
DefineProperty (writable)                     | █████████████████████████████- | 96,237,908 ops/sec
DefineProperty (writable & enumerable=false)  | █████████████████████████████- | 96,159,782 ops/sec
DefineProperty (writable & enumerable=false & configurable=false) | █████████████████████████████- | 98,458,799 ops/sec
DefineProperties (setter)                     | ██████████████████████████████ | 100,956,294 ops/sec
DefineProperties (setter & enumerable=false)  | ███--------------------------- | 11,417,293 ops/sec
DefineProperties (setter & enumerable=false & configurable=false) | ███--------------------------- | 11,577,234 ops/sec
```

## replace vs replaceAll comparison


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using replace(//g)                            | ██████████████████████████████ | 3,321,034 ops/sec
Using replaceAll()                            | █████████████████████████████- | 3,168,317 ops/sec
Using replaceAll(//g)                         | ████████████████████████████-- | 3,061,442 ops/sec
```

## Shallow Copy


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

{ ...object }                                 | ██████████████████████████████ | 25,045,555 ops/sec
{ ...object, __proto__: null }                | ███--------------------------- | 2,571,898 ops/sec
{ ...object, newProp: true }                  | ████████████████████████████-- | 23,150,413 ops/sec
structuredClone                               | ------------------------------ | 302,764 ops/sec
JSON.parse + JSON.stringify                   | ------------------------------ | 300,643 ops/sec
loop + object.keys starting with {}           | ██---------------------------- | 1,667,136 ops/sec
loop + object.keys starting with { __proto__: null } | █----------------------------- | 893,228 ops/sec
loop + object.keys starting with { randomProp: true } | █----------------------------- | 671,823 ops/sec
object.keys + reduce(FN, {})                  | ██---------------------------- | 1,756,816 ops/sec
object.keys + reduce(FN, { __proto__: null }) | █----------------------------- | 878,325 ops/sec
object.keys + reduce(FN, { newProp: true })   | █----------------------------- | 631,708 ops/sec
```

## Sorting Map


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Sort using default                            | ███████----------------------- | 320,776 ops/sec
Sort using first char                         | ██████████████████████████████ | 1,338,829 ops/sec
Sort using localeCompare                      | ████████████████████████████-- | 1,229,124 ops/sec
```

## Object.assign VS spread operator


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

{...bigObject} - Total keys: 1000             | ------------------------------ | 1,703 ops/sec
{...smallObject} - Total keys: 2              | ██████████████████████████████ | 38,741,844 ops/sec
Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object | ------------------------------ | 1,027 ops/sec
Object.assign(bigObject, anotherBigObject) - mutating bigObject | ------------------------------ | 6,810 ops/sec
{ ...bigObject, ...anotherBigObject }         | ------------------------------ | 1,085 ops/sec
Object.assign({}, smallObject, anotherSmallObject) - creating new object | ██████████-------------------- | 12,382,362 ops/sec
Object.assign(smallObject, anotherSmallObject) - mutating smallObject | ██████████████████████-------- | 28,322,837 ops/sec
{ ...smallObject, ...anotherSmallObject }     | ████████████████-------------- | 20,455,718 ops/sec
```

## Stream.Readable


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

streams.Readable reading 1e3 * "some data"    | ██████████████████████████████ | 1,928 ops/sec
streams.web.Readable reading 1e3 * "some data" | ████████████████████████------ | 1,547 ops/sec
```

## Stream.Writable


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

streams.Writable writing 1e3 * "some data"    | ██████████████████████████████ | 11,283 ops/sec
streams.web.WritableStream writing 1e3 * "some data" | ████-------------------------- | 1,639 ops/sec
```

## String concat


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using + sign                                  | ██████████████████████████████ | 99,059,007 ops/sec
Using backtick (`)                            | ██████████████████████████████ | 99,154,021 ops/sec
Using array.join                              | ███--------------------------- | 10,561,116 ops/sec
```

## endsWith comparison


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

(short string) (true) String#endsWith         | ████████████████████████████-- | 89,772,699 ops/sec
(short string) (true) String#slice and strict comparison | ███████████████████----------- | 60,692,869 ops/sec
(long string) (true) String#endsWith          | ███████████████████----------- | 61,205,657 ops/sec
(long string) (true) String#slice and strict comparison | █████████████████------------- | 54,169,775 ops/sec
(short string) (false) String#endsWith        | ██████████████████████████████ | 95,466,246 ops/sec
(short string) (false) String#slice and strict comparison | ███████████████████----------- | 59,935,505 ops/sec
(long string) (false) String#endsWith         | ████████████████████████████-- | 87,861,523 ops/sec
(long string) (false) String#slice and strict comparison | █████████████████------------- | 54,047,770 ops/sec
```

## String searching


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using includes                                | ██████████████████████████████ | 15,849,995 ops/sec
Using indexof                                 | ██████████████████████████████ | 16,049,843 ops/sec
Using RegExp.test                             | █████████████████████████----- | 13,157,213 ops/sec
Using RegExp.text with cached regex pattern   | ███████████████████████████--- | 14,249,363 ops/sec
Using new RegExp.test                         | █████████--------------------- | 4,854,048 ops/sec
Using new RegExp.test with cached regex pattern | ██████████-------------------- | 5,508,947 ops/sec
```

## startsWith comparison


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

(short string) (true) String#startsWith       | █████████████████████████████- | 91,398,811 ops/sec
(short string) (true) String#slice and strict comparison | ████████████████-------------- | 52,373,143 ops/sec
(long string) (true) String#startsWith        | █████████████████------------- | 54,509,776 ops/sec
(long string) (true) String#slice and strict comparison | ███████████████--------------- | 47,556,283 ops/sec
(short string) (false) String#startsWith      | ██████████████████████████████ | 96,145,818 ops/sec
(short string) (false) String#slice and strict comparison | ████████████████-------------- | 52,576,692 ops/sec
(long string) (false) String#startsWith       | ███████████████████████████--- | 86,133,104 ops/sec
(long string) (false) String#slice and strict comparison | ███████████████--------------- | 46,525,697 ops/sec
```

## Super vs This


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using super                                   | ████████████████████████████-- | 94,792,555 ops/sec
Using this                                    | ██████████████████████████████ | 100,100,837 ops/sec
```

## Getting unix time


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

new Date().getTime()                          | █████████████████------------- | 10,143,513 ops/sec
Date.now()                                    | ██████████████████████████████ | 17,949,386 ops/sec
```
