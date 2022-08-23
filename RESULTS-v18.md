# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.7.0`
* __Run:__ Tue Aug 23 2022 14:30:34 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.133ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.048ms 
    new Array(length): 0.024ms (faster)

 10,000 numbers:
           array.push: 0.407ms 
    new Array(length): 0.211ms (faster)

 1,000,000 numbers:
           array.push: 31.383ms 
    new Array(length): 10.601ms (faster)

 100,000,000 numbers:
           array.push: 2,208.824ms (faster)
    new Array(length): 4,558.026ms


----


 10 strings:
           array.push: 0.012ms (faster)
    new Array(length): 0.015ms

 100 strings:
           array.push: 0.115ms 
    new Array(length): 0.042ms (faster)

 1,000 strings:
           array.push: 0.046ms 
    new Array(length): 0.023ms (faster)

 10,000 strings:
           array.push: 0.571ms 
    new Array(length): 0.277ms (faster)

 1,000,000 strings:
           array.push: 221.134ms 
    new Array(length): 11.867ms (faster)

 100,000,000 strings:
           array.push: 2,610.934ms (faster)
    new Array(length): 5,415.425ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|372|85|
|Array.from|17|46|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|209,676|56|
|[True conditional] Using constructor name|162,392|94|
|[True conditional] Check if property is valid then instanceof |165,791|94|
|[False conditional] Using instanceof only|807,932,286|98|
|[False conditional] Using constructor name|807,512,964|95|
|[False conditional] Check if property is valid then instanceof |808,698,160|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,320|93|
|Intl.DateTimeFormat().format(new Date())|8,703|76|
|Reusing Intl.DateTimeFormat()|396,854|78|
|Format using date.get*|3,714,734|96|
|new Date() (Baseline)|7,425,350|96|
|Date.now() (Baseline)|15,266,064|93|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|749,685|91|
|Using brackets {}|700,946|88|
|Using '' + |675,636|96|
|Using date.toString()|738,247|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,379,958|97|
|Using undefined assignment|707,817,907|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|201,884|59|
|NodeError|163,188|93|
|NodeError Range|163,633|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,585,697|93|
|Function returning explicitly undefined|1,568,195|96|
|Function returning implicitly undefined|1,564,096|95|
|Function returning string|1,587,592|98|
|Function returning integer|1,555,946|98|
|Function returning float|1,594,312|99|
|Function returning functions|1,548,509|96|
|Function returning arrow functions|1,579,620|99|
|Function returning empty object|1,578,560|99|
|Function returning empty array|1,589,262|98|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,842,444|96|
|using Array.includes (first item)|707,909,777|97|
|Using raw comparison|708,861,371|96|
|Using raw comparison (first item)|708,357,037|99|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,725,144|96|
|Length = 10_000 - Array.at|16,770,272|99|
|Length = 1_000_000 - Array.at|16,711,765|96|
|Length = 100 - Array[length - 1]|706,869,579|97|
|Length = 10_000 - Array[length - 1]|706,055,872|98|
|Length = 1_000_000 - Array[length - 1]|704,094,165|95|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|807,204,277|97|
|Using optional chain (obj.field?.field2) (undefined)|807,529,180|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|807,748,503|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|804,887,050|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|593,417|75|
|Using ? operator to avoid rejection|666,292|76|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|238,422,242|86|
|Raw usage underscore usage|222,196,812|87|
|Manipulating private properties using #|148,545,690|81|
|Manipulating private properties using underscore(_)|112,123,241|88|
|Manipulating private properties using Symbol|110,024,910|86|
|Manipulating private properties using PrivateSymbol|31,551,693|90|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|5,840,119|96|
|Using replaceAll()|4,899,096|98|
|Using replaceAll(//g)|4,490,609|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|172,688|88|
|Sort using first char|699,248|96|
|Sort using localeCompare|672,200|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,687 ops/sec ±1.74% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 454 ops/sec ±1.10% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,433 ops/sec ±0.39% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,012 ops/sec ±16.73% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|125,320,728|94|
|Using this|122,021,529|92|
