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

|name|ops/sec|samples|
|-|-|-|
|Sort using default|306,352|153177|
|Sort using first char|1,291,047|645916|
|Sort using localeCompare|1,179,265|589723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:33:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":306352.29423042573,"samples":153177},{"name":"Sort using first char","opsSec":1291047.985289973,"samples":645916},{"name":"Sort using localeCompare","opsSec":1179265.942600288,"samples":589723}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,699|850|
|{...smallObject} - Total keys: 2|55,195,465|27598245|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,027|514|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,554|3278|
|{ ...bigObject, ...anotherBigObject }|1,078|540|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,618,800|6309516|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,351,755|14175881|
|{ ...smallObject, ...anotherSmallObject }|20,053,238|10029196|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:34:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1699.2220213928374,"samples":850},{"name":"{...smallObject} - Total keys: 2","opsSec":55195465.57215898,"samples":27598245},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1027.81267497311,"samples":514},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6554.830434715195,"samples":3278},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1078.1936547297107,"samples":540},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12618800.243114736,"samples":6309516},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28351755.025468268,"samples":14175881},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20053238.798906412,"samples":10029196}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,787|894|
|streams.web.Readable reading 1e3 * "some data"|1,705|854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:35:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1787.6836872483782,"samples":894},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1705.0287589137392,"samples":854}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,394|5212|
|streams.web.WritableStream writing 1e3 * "some data"|1,635|818|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:36:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":10394.589299565667,"samples":5212},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1635.8378066814676,"samples":818}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|149,497,498|74761374|
|Using backtick (`)|94,071,366|47035691|
|Using array.join|9,962,952|4981479|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:37:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":149497498.17155382,"samples":74761374},{"name":"Using backtick (`)","opsSec":94071366.57229587,"samples":47035691},{"name":"Using array.join","opsSec":9962952.261339499,"samples":4981479}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|128,521,829|64338024|
|(short string) (true) String#slice and strict comparison|50,908,536|25457083|
|(long string) (true) String#endsWith|55,608,429|27804220|
|(long string) (true) String#slice and strict comparison|46,077,236|23043525|
|(short string) (false) String#endsWith|95,740,357|47870187|
|(short string) (false) String#slice and strict comparison|51,102,766|25557367|
|(long string) (false) String#endsWith|86,852,165|43426088|
|(long string) (false) String#slice and strict comparison|45,174,660|22593992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:39:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":128521829.00241953,"samples":64338024},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50908536.635835886,"samples":25457083},{"name":"(long string) (true) String#endsWith","opsSec":55608429.65683208,"samples":27804220},{"name":"(long string) (true) String#slice and strict comparison","opsSec":46077236.28590688,"samples":23043525},{"name":"(short string) (false) String#endsWith","opsSec":95740357.34117782,"samples":47870187},{"name":"(short string) (false) String#slice and strict comparison","opsSec":51102766.24317351,"samples":25557367},{"name":"(long string) (false) String#endsWith","opsSec":86852165.75144444,"samples":43426088},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45174660.99862897,"samples":22593992}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|136,251,361|68128724|
|Using indexof|15,442,147|7721246|
|Using RegExp.test|12,800,892|6401086|
|Using RegExp.text with cached regex pattern|13,781,845|6890923|
|Using new RegExp.test|4,575,564|2287843|
|Using new RegExp.test with cached regex pattern|5,379,402|2689708|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:40:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":136251361.37918445,"samples":68128724},{"name":"Using indexof","opsSec":15442147.609224018,"samples":7721246},{"name":"Using RegExp.test","opsSec":12800892.34599574,"samples":6401086},{"name":"Using RegExp.text with cached regex pattern","opsSec":13781845.779490467,"samples":6890923},{"name":"Using new RegExp.test","opsSec":4575564.216782806,"samples":2287843},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5379402.217971518,"samples":2689708}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|127,976,366|63988540|
|(short string) (true) String#slice and strict comparison|58,354,959|29177750|
|(long string) (true) String#startsWith|64,522,356|32261201|
|(long string) (true) String#slice and strict comparison|53,236,320|26621299|
|(short string) (false) String#startsWith|91,437,261|45718636|
|(short string) (false) String#slice and strict comparison|57,466,295|28734690|
|(long string) (false) String#startsWith|87,468,950|43745945|
|(long string) (false) String#slice and strict comparison|52,479,757|26239879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:42:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":127976366.14782964,"samples":63988540},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58354959.16623846,"samples":29177750},{"name":"(long string) (true) String#startsWith","opsSec":64522356.06008248,"samples":32261201},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53236320.58602178,"samples":26621299},{"name":"(short string) (false) String#startsWith","opsSec":91437261.57615218,"samples":45718636},{"name":"(short string) (false) String#slice and strict comparison","opsSec":57466295.20927317,"samples":28734690},{"name":"(long string) (false) String#startsWith","opsSec":87468950.56796195,"samples":43745945},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52479757.58016194,"samples":26239879}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|124,641,121|62334890|
|Using this|97,779,425|48897456|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:43:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":124641121.76543695,"samples":62334890},{"name":"Using this","opsSec":97779425.49903062,"samples":48897456}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,230,418|5115367|
|Date.now()|18,655,711|9364020|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:44:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10230418.227910979,"samples":5115367},{"name":"Date.now()","opsSec":18655711.805330735,"samples":9364020}]}-->
