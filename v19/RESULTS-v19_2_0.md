# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.2.0`
* __Run:__ Sat Dec 31 2022 20:04:39 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.015ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.045ms 
    new Array(length): 0.013ms (faster)

 1,000 numbers:
           array.push: 0.086ms 
    new Array(length): 0.04ms (faster)

 10,000 numbers:
           array.push: 0.647ms 
    new Array(length): 0.546ms (faster)

 1,000,000 numbers:
           array.push: 50.577ms 
    new Array(length): 14.08ms (faster)

 100,000,000 numbers:
           array.push: 2,448.371ms (faster)
    new Array(length): 6,565.699ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.022ms

 100 strings:
           array.push: 0.127ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.05ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.399ms (faster)
    new Array(length): 5.907ms

 1,000,000 strings:
           array.push: 40.735ms 
    new Array(length): 5.721ms (faster)

 100,000,000 strings:
           array.push: 3,150.26ms (faster)
    new Array(length): 6,832.466ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|307|75|
|Array.from|12|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|146,163|58|
|[True conditional] Using constructor name|111,353|85|
|[True conditional] Check if property is valid then instanceof |118,466|87|
|[False conditional] Using instanceof only|733,610,019|88|
|[False conditional] Using constructor name|744,242,385|87|
|[False conditional] Check if property is valid then instanceof |744,364,163|90|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,313|82|
|Intl.DateTimeFormat().format(new Date())|6,065|84|
|Reusing Intl.DateTimeFormat()|419,443|89|
|Format using date.get*|2,310,866|75|
|new Date() (Baseline)|7,146,007|90|
|Date.now() (Baseline)|14,163,828|89|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|544,338|88|
|Using brackets {}|549,058|84|
|Using '' + |542,128|86|
|Using date.toString()|614,789|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,920,952|86|
|Using undefined assignment|711,837,407|86|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|143,522|56|
|NodeError|117,377|88|
|NodeError Range|116,777|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,138,417|86|
|Function returning explicitly undefined|1,135,613|89|
|Function returning implicitly undefined|1,156,980|86|
|Function returning string|1,123,277|86|
|Function returning integer|1,098,536|89|
|Function returning float|1,093,876|87|
|Function returning functions|1,095,206|86|
|Function returning arrow functions|1,147,893|87|
|Function returning empty object|1,084,622|86|
|Function returning empty array|1,078,747|87|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|715,437,963|84|
|using Array.includes (first item)|726,329,851|88|
|Using raw comparison|723,831,057|88|
|Using raw comparison (first item)|714,348,862|86|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,372,548|84|
|Using Object.getOwnPropertyNames()|41,471,761|84|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|599,306,594|89|
|Length = 10_000 - Array.at|594,460,419|89|
|Length = 1_000_000 - Array.at|603,392,464|85|
|Length = 100 - Array[length - 1]|741,336,792|88|
|Length = 10_000 - Array[length - 1]|727,415,963|90|
|Length = 1_000_000 - Array[length - 1]|725,269,677|88|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,221,003|88|
|Object.create({})|1,113,765|75|
|Cached Empty.prototype|723,697,654|85|
|Empty.prototype|1,047,562|76|
|Empty class|775,903|76|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|735,270,620|88|
|Using optional chain (obj.field?.field2) (undefined)|737,055,036|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|744,033,134|84|
|Using and operator (obj.field && obj.field.field2) (undefined)|743,117,181|90|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,150,057|90|
|Using parseInt(x, 10) - big number (10 len)|10,921,022|86|
|Using + - small number (2 len)|742,792,404|89|
|Using + - big number (10 len)|744,286,296|89|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|662,583|71|
|Using ? operator to avoid rejection|711,198|75|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|601,858,492|87|
|Raw usage underscore usage|605,935,464|88|
|Manipulating private properties using #|611,077,401|88|
|Manipulating private properties using underscore(_)|615,975,590|90|
|Manipulating private properties using Symbol|609,907,206|89|
|Manipulating private properties using PrivateSymbol|23,374,786|80|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,180,270|90|
|Adding property in the object creation - small object|2,157,640|88|
|Adding property after the function creation - small class|136,243|76|
|Adding property in the function creation - small class|140,132|79|
|Adding property after the class creation - small class|113,782|73|
|Adding property in the class creation - small class|114,015|74|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,839,551|90|
|Using replaceAll()|1,660,096|85|
|Using replaceAll(//g)|1,678,335|86|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|145,091|87|
|Sort using first char|658,465|86|
|Sort using localeCompare|618,933|85|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,006|87|
|{...smallObject} - Total keys: 2|51,945,044|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,069|88|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|2,949|88|
|{ ...bigObject, ...anotherBigObject }|620|81|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,204,194|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,660,367|90|
|{ ...smallObject, ...anotherSmallObject }|12,779,722|90|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,316 ops/sec ±1.04% (82 runs sampled)
streams.web.Readable reading 1e3 * some data x 321 ops/sec ±4.82% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,541 ops/sec ±1.08% (86 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 722 ops/sec ±11.72% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|718,701,561|89|
|Using backtick (`)|730,118,413|88|
|Using array.join|5,754,287|85|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|140,182,457|85|
|Using this|167,448,991|88|
