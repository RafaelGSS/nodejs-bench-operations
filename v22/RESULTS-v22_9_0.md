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

Object.create(null)                           | ██████████-------------------- | 32702879.08 ops/sec
Object.create({})                             | █----------------------------- | 2116415.47 ops/sec
Cached Empty.prototype                        | ██████████████████████████████ | 102497407.86 ops/sec
Empty.prototype                               | █----------------------------- | 2545470.76 ops/sec
Empty class                                   | ------------------------------ | 1576326.93 ops/sec
```

## Optional Chain (?) vs && operator


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Using optional chain (obj.field?.field2) (Valid) | █████████████████████████████- | 96712026.84 ops/sec
Using optional chain (obj.field?.field2) (undefined) | ██████████████████████████████ | 98964214.68 ops/sec
Using and operator (obj.field && obj.field.field2) (Valid) | █████████████████████████████- | 96504187.38 ops/sec
Using and operator (obj.field && obj.field.field2) (undefined) | █████████████████████████████- | 95310526.94 ops/sec
```

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|136,529,625|68267206|
|Using parseInt(x, 10) - big number (10 len)|97,121,606|48561689|
|Using + - small number (2 len)|92,679,462|46363940|
|Using + - big number (10 len)|96,166,195|48083144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:22:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":136529625.54438767,"samples":68267206},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97121606.11341806,"samples":48561689},{"name":"Using + - small number (2 len)","opsSec":92679462.76577976,"samples":46363940},{"name":"Using + - big number (10 len)","opsSec":96166195.87278436,"samples":48083144}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|962,415|481221|
|Using ? operator to avoid rejection|1,025,993|515879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:23:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":962415.2737278485,"samples":481221},{"name":"Using ? operator to avoid rejection","opsSec":1025993.0435834368,"samples":515879}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|135,881,932|67942180|
|Raw usage underscore usage|98,821,632|49410825|
|Manipulating private properties using #|96,267,213|48133615|
|Manipulating private properties using underscore(_)|98,311,292|49194032|
|Manipulating private properties using Symbol|97,176,293|48588958|
|Manipulating private properties using PrivateSymbol|35,622,437|17813540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:24:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":135881932.0616379,"samples":67942180},{"name":"Raw usage underscore usage","opsSec":98821632.80503589,"samples":49410825},{"name":"Manipulating private properties using #","opsSec":96267213.2495049,"samples":48133615},{"name":"Manipulating private properties using underscore(_)","opsSec":98311292.71152157,"samples":49194032},{"name":"Manipulating private properties using Symbol","opsSec":97176293.93330167,"samples":48588958},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35622437.04280072,"samples":17813540}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,077,968|4039040|
|Adding property in the object creation - small object|7,528,168|3797190|
|Adding property after the function creation - small class|249,619|125148|
|Adding property in the function creation - small class|271,863|135932|
|Adding property after the class creation - small class|258,211|129530|
|Adding property in the class creation - small class|259,234|132556|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:26:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8077968.394788657,"samples":4039040},{"name":"Adding property in the object creation - small object","opsSec":7528168.926195527,"samples":3797190},{"name":"Adding property after the function creation - small class","opsSec":249619.1242955101,"samples":125148},{"name":"Adding property in the function creation - small class","opsSec":271863.07240319694,"samples":135932},{"name":"Adding property after the class creation - small class","opsSec":258211.04752089563,"samples":129530},{"name":"Adding property in the class creation - small class","opsSec":259234.2172019496,"samples":132556}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|150,277,841|75171410|
|Getter|51,307,048|25659764|
|Method|100,763,960|50389402|
|DefineProperty (getter)|98,660,471|49330276|
|DefineProperty (getter & enumerable=false)|50,087,425|25044953|
|DefineProperty (getter & configurable=false)|97,355,154|48677653|
|DefineProperty (getter & enumerable=false & configurable=false)|51,476,272|25773810|
|DefineProperty (writable)|99,292,951|49647351|
|DefineProperty (writable & enumerable=false)|99,082,142|49541103|
|DefineProperty (writable & enumerable=false & configurable=false)|98,473,294|49241307|
|DefineProperties (getter)|49,285,533|24643112|
|DefineProperties (getter & enumerable=false)|49,379,727|24695435|
|DefineProperties (getter & enumerable=false & configurable=false)|51,477,071|25738748|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:28:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":150277841.66459835,"samples":75171410},{"name":"Getter","opsSec":51307048.27880486,"samples":25659764},{"name":"Method","opsSec":100763960.66248272,"samples":50389402},{"name":"DefineProperty (getter)","opsSec":98660471.29573448,"samples":49330276},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50087425.470341004,"samples":25044953},{"name":"DefineProperty (getter & configurable=false)","opsSec":97355154.32066958,"samples":48677653},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51476272.75348567,"samples":25773810},{"name":"DefineProperty (writable)","opsSec":99292951.66384807,"samples":49647351},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99082142.58742873,"samples":49541103},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98473294.88126561,"samples":49241307},{"name":"DefineProperties (getter)","opsSec":49285533.0168271,"samples":24643112},{"name":"DefineProperties (getter & enumerable=false)","opsSec":49379727.95818351,"samples":24695435},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51477071.52006825,"samples":25738748}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|120,914,193|60467040|
|Setter|10,922,153|5461549|
|Method|80,219,166|40110265|
|DefineProperty (setter)|82,091,910|41045961|
|DefineProperty (setter & enumerable=false)|10,820,384|5410195|
|DefineProperty (setter & configurable=false)|11,026,152|5513079|
|DefineProperty (setter & enumerable=false & configurable=false)|10,865,002|5432505|
|DefineProperty (writable)|57,544,427|28774877|
|DefineProperty (writable & enumerable=false)|82,988,435|41494464|
|DefineProperty (writable & enumerable=false & configurable=false)|82,750,662|41377334|
|DefineProperties (setter)|79,515,602|39760345|
|DefineProperties (setter & enumerable=false)|10,808,961|5404486|
|DefineProperties (setter & enumerable=false & configurable=false)|10,745,003|5372522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:29:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":120914193.00084876,"samples":60467040},{"name":"Setter","opsSec":10922153.190060448,"samples":5461549},{"name":"Method","opsSec":80219166.75548016,"samples":40110265},{"name":"DefineProperty (setter)","opsSec":82091910.83550014,"samples":41045961},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10820384.4383224,"samples":5410195},{"name":"DefineProperty (setter & configurable=false)","opsSec":11026152.99412654,"samples":5513079},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10865002.78563815,"samples":5432505},{"name":"DefineProperty (writable)","opsSec":57544427.80285142,"samples":28774877},{"name":"DefineProperty (writable & enumerable=false)","opsSec":82988435.71259935,"samples":41494464},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":82750662.53693056,"samples":41377334},{"name":"DefineProperties (setter)","opsSec":79515602.59174618,"samples":39760345},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10808961.19103881,"samples":5404486},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10745003.147498034,"samples":5372522}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,327,761|1664123|
|Using replaceAll()|3,173,138|1586727|
|Using replaceAll(//g)|2,954,547|1477275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:30:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3327761.670910892,"samples":1664123},{"name":"Using replaceAll()","opsSec":3173138.1267920304,"samples":1586727},{"name":"Using replaceAll(//g)","opsSec":2954547.612725529,"samples":1477275}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,866,701|11934262|
|{ ...object, __proto__: null }|2,542,283|1272917|
|{ ...object, newProp: true }|20,859,609|10429888|
|structuredClone|296,628|148329|
|JSON.parse + JSON.stringify|296,454|148228|
|loop + object.keys starting with {}|1,625,988|813079|
|loop + object.keys starting with { __proto__: null }|898,386|451373|
|loop + object.keys starting with { randomProp: true }|655,443|327751|
|object.keys + reduce(FN, {})|1,706,517|853313|
|object.keys + reduce(FN, { __proto__: null })|922,009|461012|
|object.keys + reduce(FN, { newProp: true })|648,998|324507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:31:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23866701.25229196,"samples":11934262},{"name":"{ ...object, __proto__: null }","opsSec":2542283.6652694796,"samples":1272917},{"name":"{ ...object, newProp: true }","opsSec":20859609.33172144,"samples":10429888},{"name":"structuredClone","opsSec":296628.6414768385,"samples":148329},{"name":"JSON.parse + JSON.stringify","opsSec":296454.8420473869,"samples":148228},{"name":"loop + object.keys starting with {}","opsSec":1625988.4711900167,"samples":813079},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":898386.8705846079,"samples":451373},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":655443.5134644065,"samples":327751},{"name":"object.keys + reduce(FN, {})","opsSec":1706517.8545505214,"samples":853313},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":922009.0487012663,"samples":461012},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":648998.0670974527,"samples":324507}]}-->

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
