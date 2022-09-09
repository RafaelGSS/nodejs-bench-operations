# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.0`
* __Run:__ Fri Sep 09 2022 02:02:51 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.007ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.048ms 
    new Array(length): 0.015ms (faster)

 1,000 numbers:
           array.push: 0.074ms 
    new Array(length): 0.045ms (faster)

 10,000 numbers:
           array.push: 0.681ms 
    new Array(length): 0.286ms (faster)

 1,000,000 numbers:
           array.push: 60.428ms 
    new Array(length): 9.491ms (faster)

 100,000,000 numbers:
           array.push: 2,206.088ms (faster)
    new Array(length): 5,607.844ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.02ms

 100 strings:
           array.push: 0.104ms 
    new Array(length): 0.013ms (faster)

 1,000 strings:
           array.push: 0.067ms 
    new Array(length): 0.032ms (faster)

 10,000 strings:
           array.push: 0.709ms 
    new Array(length): 0.374ms (faster)

 1,000,000 strings:
           array.push: 407.716ms 
    new Array(length): 11.768ms (faster)

 100,000,000 strings:
           array.push: 3,006.472ms (faster)
    new Array(length): 6,221.426ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|313|78|
|Array.from|12|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,953|59|
|[True conditional] Using constructor name|135,850|94|
|[True conditional] Check if property is valid then instanceof |136,471|91|
|[False conditional] Using instanceof only|600,927,915|96|
|[False conditional] Using constructor name|608,387,610|94|
|[False conditional] Check if property is valid then instanceof |606,627,952|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,190|82|
|Intl.DateTimeFormat().format(new Date())|6,767|78|
|Reusing Intl.DateTimeFormat()|428,951|94|
|Format using date.get*|2,786,552|88|
|new Date() (Baseline)|6,589,570|94|
|Date.now() (Baseline)|12,149,534|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|583,829|89|
|Using brackets {}|594,337|93|
|Using '' + |595,772|92|
|Using date.toString()|642,815|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,117,598|90|
|Using undefined assignment|602,834,044|91|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|168,034|54|
|NodeError|132,898|94|
|NodeError Range|130,954|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,090,647|94|
|Function returning explicitly undefined|1,082,802|95|
|Function returning implicitly undefined|1,094,452|91|
|Function returning string|1,080,910|92|
|Function returning integer|1,102,860|94|
|Function returning float|1,103,176|90|
|Function returning functions|1,084,765|92|
|Function returning arrow functions|1,088,003|95|
|Function returning empty object|1,086,363|89|
|Function returning empty array|1,088,530|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|600,532,631|93|
|using Array.includes (first item)|604,786,497|94|
|Using raw comparison|605,036,278|95|
|Using raw comparison (first item)|601,723,123|92|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,764,302|93|
|Using Object.getOwnPropertyNames()|43,552,371|88|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,289,350|93|
|Length = 10_000 - Array.at|13,286,183|92|
|Length = 1_000_000 - Array.at|13,197,033|95|
|Length = 100 - Array[length - 1]|595,848,895|96|
|Length = 10_000 - Array[length - 1]|593,813,444|94|
|Length = 1_000_000 - Array[length - 1]|592,604,620|92|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,896,993|95|
|Object.create({})|1,147,638|82|
|Cached Empty.prototype|597,985,135|93|
|Empty.prototype|1,170,121|74|
|Empty class|800,865|81|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|606,086,402|93|
|Using optional chain (obj.field?.field2) (undefined)|605,855,973|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|606,803,240|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|605,745,913|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|651,360|75|
|Using ? operator to avoid rejection|721,564|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,783,254|96|
|Raw usage underscore usage|6,288,900|95|
|Manipulating private properties using #|2,262,886|91|
|Manipulating private properties using underscore(_)|590,440,356|97|
|Manipulating private properties using Symbol|587,913,321|96|
|Manipulating private properties using PrivateSymbol|22,483,335|90|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,772,380|90|
|Using replaceAll()|1,659,255|92|
|Using replaceAll(//g)|1,583,290|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|148,312|89|
|Sort using first char|631,891|94|
|Sort using localeCompare|355,896|93|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,227 ops/sec ±13.75% (82 runs sampled)
streams.web.Readable reading 1e3 * some data x 343 ops/sec ±0.78% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,464 ops/sec ±0.79% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 805 ops/sec ±16.07% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|598,506,533|91|
|Using backtick (`)|589,929,618|93|
|Using array.join|5,331,484|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,100,098|94|
|Using this|113,435,481|96|
