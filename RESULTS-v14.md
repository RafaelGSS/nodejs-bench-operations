# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Sat Jul 02 2022 16:04:00 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|420|87|
|Array.from|14|39|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|291,020|90|
|[True conditional] Using constructor name|289,051|87|
|[True conditional] Check if property is valid then instanceof |286,605|89|
|[False conditional] Using instanceof only|712,864,633|96|
|[False conditional] Using constructor name|714,225,175|96|
|[False conditional] Check if property is valid then instanceof |713,645,662|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,695|82|
|Intl.DateTimeFormat().format(new Date())|7,717|78|
|Format using date.get*|3,097,588|94|
|new Date() (Baseline)|7,278,723|94|
|Date.now() (Baseline)|14,353,121|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|655,207|94|
|Using brackets {}|666,130|95|
|Using '' + |668,754|96|
|Using date.toString()|711,715|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,391,186|92|
|Using undefined assignment|711,573,489|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|280,674|95|
|NodeError|281,161|86|
|NodeError Range|277,453|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,386,225|92|
|Function returning explicitly undefined|1,380,499|95|
|Function returning implicitly undefined|1,380,217|93|
|Function returning string|1,386,765|98|
|Function returning integer|1,403,445|97|
|Function returning float|1,331,965|95|
|Function returning functions|1,352,044|96|
|Function returning arrow functions|1,385,176|99|
|Function returning empty object|1,277,459|95|
|Function returning empty array|1,363,984|97|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,022,642|96|
|using Array.includes (first item)|711,817,205|94|
|Using raw comparisson|712,392,491|95|
|Using raw comparisson (first item)|712,390,396|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|703,487|70|
|Using ? operator to avoid rejection|755,386|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,567,501|92|
|Raw usage underscore usage|7,073,597|93|
|Manipulating private properties using #|2,524,886|97|
|Manipulating private properties using underscore(_)|703,803,041|98|
|Manipulating private properties using Symbol|702,106,878|99|
|Manipulating private properties using PrivateSymbol|29,932,420|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|174,559|97|
|Sort using first char|785,466|95|
|Sort using localeCompare|427,373|96|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|17,476,406|95|
|Using this|127,229,287|92|
