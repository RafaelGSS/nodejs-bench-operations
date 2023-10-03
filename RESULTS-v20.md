## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|588,639,959|96|
|Using dot notation|592,568,568|92|
|Using define property (writable)|2,591,364|98|
|Using define property initialized (writable)|3,398,661|92|
|Using define property (getter)|1,388,167|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:48 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|587,968,542|94|
|Using dot notation|597,546,473|95|
|Using define property (writable)|2,614,485|93|
|Using define property initialized (writable)|3,439,034|93|
|Using define property (getter)|1,399,953|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:42 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.017ms
new Array(length)|10|0.003ms
array.push|100|0.109ms
new Array(length)|100|0.019ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.568ms
new Array(length)|10,000|0.517ms
array.push|1,000,000|46.41ms
new Array(length)|1,000,000|10.589ms
array.push|100,000,000|2,540.854ms
new Array(length)|100,000,000|5,821.659ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.022ms
array.push|100|0.055ms
new Array(length)|100|0.013ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.391ms
new Array(length)|10,000|0.324ms
array.push|1,000,000|44.703ms
new Array(length)|1,000,000|4.747ms
array.push|100,000,000|2,853.451ms
new Array(length)|100,000,000|6,523.44ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:03 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|319|73|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:47 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,986|84|
|new Blob (1024)|357|63|
|text (128)|3,380|86|
|text (1024)|425|84|
|arrayBuffer (128)|3,389|86|
|arrayBuffer (1024)|429|86|
|slice (0, 64)|43,676|65|
|slice (0, 512)|11,273|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:59 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|177,677|57|
|[True conditional] Using constructor name|144,084|93|
|[True conditional] Check if property is valid then instanceof |144,900|91|
|[False conditional] Using instanceof only|719,013,279|98|
|[False conditional] Using constructor name|716,971,271|95|
|[False conditional] Check if property is valid then instanceof |718,986,143|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,554|92|
|crypto.verify('RSA-SHA256')|4,614|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:21 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|937,780|95|
|fromUnixToISOString(new Date())|1,474,477|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,131|86|
|Intl.DateTimeFormat().format(new Date())|8,192|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,334|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,555|82|
|Reusing Intl.DateTimeFormat()|493,282|99|
|Date.toLocaleDateString()|467,236|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,229|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:06 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|688,073|93|
|Using brackets {}|704,759|95|
|Using '' + |694,233|94|
|Using date.toString()|759,494|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:50 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,573,760|94|
|Using undefined assignment|716,889,237|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:28 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|161,083|54|
|NodeError|127,321|93|
|NodeError Range|127,635|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:39 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,129,896|95|
|Function returning explicitly undefined|1,141,971|98|
|Function returning implicitly undefined|1,159,301|97|
|Function returning string|1,148,995|92|
|Function returning integer|1,163,023|97|
|Function returning float|1,104,115|93|
|Function returning functions|1,114,744|92|
|Function returning arrow functions|1,122,076|93|
|Function returning empty object|1,149,454|94|
|Function returning empty array|1,136,554|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:48 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,632,722|96|
|using Array.includes (first item)|597,586,255|97|
|Using raw comparison|597,250,278|97|
|Using raw comparison (first item)|598,439,949|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:36 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|66,138,094|87|
|Using Object.getOwnPropertyNames()|69,281,401|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:35 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|712,920,304|95|
|Length = 10_000 - Array.at|711,714,824|94|
|Length = 1_000_000 - Array.at|714,107,310|99|
|Length = 100 - Array[length - 1]|716,352,514|98|
|Length = 10_000 - Array[length - 1]|717,252,848|97|
|Length = 1_000_000 - Array[length - 1]|715,067,087|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:23 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|52,725,664|97|
|Object.create({})|1,592,313|78|
|Cached Empty.prototype|716,861,251|97|
|Empty.prototype|1,456,410|74|
|Empty class|1,042,761|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:05 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,296,278|94|
|Using optional chain (obj.field?.field2) (undefined)|715,656,228|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|717,219,058|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|716,313,940|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:41 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|596,848,100|95|
|Using parseInt(x, 10) - big number (10 len)|595,270,082|95|
|Using + - small number (2 len)|599,966,224|96|
|Using + - big number (10 len)|597,458,744|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:10 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|767,066|81|
|Using ? operator to avoid rejection|850,847|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:52 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|598,835,639|97|
|Raw usage underscore usage|592,672,004|95|
|Manipulating private properties using #|592,329,017|88|
|Manipulating private properties using underscore(_)|594,980,331|95|
|Manipulating private properties using Symbol|593,972,935|93|
|Manipulating private properties using PrivateSymbol|39,605,804|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:39 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|6,097,247|96|
|Adding property in the object creation - small object|6,137,433|95|
|Adding property after the function creation - small class|186,851|88|
|Adding property in the function creation - small class|179,276|87|
|Adding property after the class creation - small class|157,771|83|
|Adding property in the class creation - small class|158,015|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:34 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|680,986,323|89|
|Getter|50,322,221|88|
|Method|708,058,544|89|
|DefineProperty (getter)|703,869,433|91|
|DefineProperty (getter & enumerable=false)|51,462,755|87|
|DefineProperty (getter & configurable=false)|712,370,051|88|
|DefineProperty (getter & enumerable=false & configurable=false)|51,091,506|91|
|DefineProperty (writable)|705,915,955|92|
|DefineProperty (writable & enumerable=false)|683,782,060|88|
|DefineProperty (writable & enumerable=false & configurable=false)|706,123,395|92|
|DefineProperties (getter)|50,314,522|83|
|DefineProperties (getter & enumerable=false)|50,638,700|87|
|DefineProperties (getter & enumerable=false & configurable=false)|51,091,851|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:15 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|671,616,470|87|
|Setter|7,538,883|86|
|Method|655,015,509|82|
|DefineProperty (setter)|628,639,090|82|
|DefineProperty (setter & enumerable=false)|7,150,385|83|
|DefineProperty (setter & configurable=false)|7,101,863|79|
|DefineProperty (setter & enumerable=false & configurable=false)|7,361,402|84|
|DefineProperty (writable)|627,638,226|81|
|DefineProperty (writable & enumerable=false)|582,862,284|89|
|DefineProperty (writable & enumerable=false & configurable=false)|645,051,010|83|
|DefineProperties (setter)|613,734,284|78|
|DefineProperties (setter & enumerable=false)|6,782,174|84|
|DefineProperties (setter & enumerable=false & configurable=false)|7,195,136|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:45 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,496,288|94|
|Using replaceAll()|2,307,344|99|
|Using replaceAll(//g)|2,381,674|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:19 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,725,785|94|
|{ ...object, __proto__: null }|19,509,317|89|
|{ ...object, newProp: true }|573,405|81|
|structuredClone|183,073|97|
|JSON.parse + JSON.stringify|145,926|98|
|loop + object.keys starting with {}|850,010|91|
|loop + object.keys starting with { __proto__: null }|471,016|98|
|loop + object.keys starting with { randomProp: true }|362,675|97|
|object.keys + reduce(FN, {})|354,153|99|
|object.keys + reduce(FN, { __proto__: null })|464,876|93|
|object.keys + reduce(FN, { newProp: true })|363,612|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:14 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|142,636|85|
|Sort using first char|708,024|87|
|Sort using localeCompare|643,657|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:49:35 GMT+0000 (Coordinated Universal Time)
</details>


## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,443|93|
|{...smallObject} - Total keys: 2|78,460,458|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|819|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,744|96|
|{ ...bigObject, ...anotherBigObject }|868|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,142,892|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,403,929|97|
|{ ...smallObject, ...anotherSmallObject }|18,679,538|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:41 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Readable

```
streams.Readable reading 1e3 * "some data" x 1,549 ops/sec ±15.48% (83 runs sampled)
streams.web.Readable reading 1e3 * "some data" x 425 ops/sec ±14.77% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:53:23 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|598,582,230|95|
|Length = 10_000 - Array.at|600,602,977|97|
|Length = 1_000_000 - Array.at|603,097,763|99|
|Length = 100 - Array[length - 1]|596,218,433|98|
|Length = 10_000 - Array[length - 1]|596,822,236|97|
|Length = 1_000_000 - Array[length - 1]|596,539,154|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:53 GMT+0000 (Coordinated Universal Time)
</details>

