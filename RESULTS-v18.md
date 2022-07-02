# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Sat Jul 02 2022 16:04:04 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.005ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.105ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.047ms 
    new Array(length): 0.021ms (faster)

 10,000 numbers:
           array.push: 0.374ms 
    new Array(length): 0.197ms (faster)

 1,000,000 numbers:
           array.push: 33.098ms 
    new Array(length): 17.406ms (faster)

 100,000,000 numbers:
           array.push: 1,543.758ms (faster)
    new Array(length): 4,099.703ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.091ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.048ms 
    new Array(length): 0.023ms (faster)

 10,000 strings:
           array.push: 0.617ms 
    new Array(length): 0.285ms (faster)

 1,000,000 strings:
           array.push: 298.877ms 
    new Array(length): 8.497ms (faster)

 100,000,000 strings:
           array.push: 2,090.462ms (faster)
    new Array(length): 4,725.835ms

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|481|87|
|Array.from|17|46|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,496|53|
|[True conditional] Using constructor name|130,064|95|
|[True conditional] Check if property is valid then instanceof |131,234|94|
|[False conditional] Using instanceof only|591,863,696|97|
|[False conditional] Using constructor name|591,526,975|96|
|[False conditional] Check if property is valid then instanceof |592,519,021|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,360|88|
|Intl.DateTimeFormat().format(new Date())|9,164|80|
|Format using date.get*|3,174,087|94|
|new Date() (Baseline)|8,042,850|97|
|Date.now() (Baseline)|15,898,712|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|717,603|98|
|Using brackets {}|722,156|100|
|Using '' + |718,652|96|
|Using date.toString()|790,656|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,454,669|95|
|Using undefined assignment|591,018,994|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,931|57|
|NodeError|128,323|93|
|NodeError Range|128,163|94|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,451,145|95|
|Function returning explicitly undefined|1,448,217|94|
|Function returning implicitly undefined|1,490,191|94|
|Function returning string|1,459,853|95|
|Function returning integer|1,490,852|98|
|Function returning float|1,463,149|97|
|Function returning functions|1,386,242|98|
|Function returning arrow functions|1,388,567|95|
|Function returning empty object|1,476,333|99|
|Function returning empty array|1,436,401|95|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,356,918|97|
|using Array.includes (first item)|590,596,824|91|
|Using raw comparisson|591,987,079|97|
|Using raw comparisson (first item)|591,769,674|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|563,017|83|
|Using ? operator to avoid rejection|589,551|90|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|253,222,904|95|
|Raw usage underscore usage|263,164,954|94|
|Manipulating private properties using #|196,124,302|94|
|Manipulating private properties using underscore(_)|195,134,893|93|
|Manipulating private properties using Symbol|196,854,439|93|
|Manipulating private properties using PrivateSymbol|37,368,094|98|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|197,161|92|
|Sort using first char|883,186|99|
|Sort using localeCompare|830,831|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,975 ops/sec ±0.85% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 401 ops/sec ±0.52% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,226 ops/sec ±0.33% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 930 ops/sec ±15.14% (59 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,045,865|92|
|Using this|113,974,520|94|
