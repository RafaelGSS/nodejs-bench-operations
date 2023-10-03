## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|592,310,680|91|
|Using dot notation|601,297,385|96|
|Using define property (writable)|3,016,351|95|
|Using define property initialized (writable)|4,130,061|96|
|Using define property (getter)|1,642,903|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:39 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.005ms
array.push|100|0.036ms
new Array(length)|100|0.015ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.381ms
new Array(length)|10,000|0.402ms
array.push|1,000,000|37.546ms
new Array(length)|1,000,000|9.504ms
array.push|100,000,000|1,594.027ms
new Array(length)|100,000,000|5,042.417ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.1ms
new Array(length)|100|0.01ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.018ms
array.push|10,000|8.508ms
new Array(length)|10,000|0.022ms
array.push|1,000,000|17.791ms
new Array(length)|1,000,000|9.416ms
array.push|100,000,000|2,061.15ms
new Array(length)|100,000,000|5,078.453ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|275|82|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:44 GMT+0000 (Coordinated Universal Time)
</details>



## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,064|56|
|[True conditional] Using constructor name|146,849|96|
|[True conditional] Check if property is valid then instanceof |150,597|97|
|[False conditional] Using instanceof only|715,625,464|97|
|[False conditional] Using constructor name|714,022,687|96|
|[False conditional] Check if property is valid then instanceof |714,409,793|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,929|87|
|crypto.verify('RSA-SHA256')|4,047|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:22 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|901,579|93|
|fromUnixToISOString(new Date())|1,426,530|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:40 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,357|91|
|Intl.DateTimeFormat().format(new Date())|8,670|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,029|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,188|82|
|Reusing Intl.DateTimeFormat()|443,883|98|
|Date.toLocaleDateString()|459,891|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,568|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:11 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|538,058|87|
|Using brackets {}|562,765|85|
|Using '' + |566,866|87|
|Using date.toString()|614,763|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:51 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,554,615|93|
|Using undefined assignment|714,579,221|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:29 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,630|54|
|NodeError|129,504|97|
|NodeError Range|129,984|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:38 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,177,621|88|
|Function returning explicitly undefined|1,153,488|88|
|Function returning implicitly undefined|1,161,405|90|
|Function returning string|1,152,145|88|
|Function returning integer|1,144,182|93|
|Function returning float|1,177,627|93|
|Function returning functions|1,133,837|91|
|Function returning arrow functions|1,154,356|91|
|Function returning empty object|1,141,496|91|
|Function returning empty array|1,169,599|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:49 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,819,093|96|
|using Array.includes (first item)|714,691,614|97|
|Using raw comparison|717,369,316|99|
|Using raw comparison (first item)|715,738,422|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:36 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,563,394|85|
|Using Object.getOwnPropertyNames()|47,796,497|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:33 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|593,817,859|84|
|Length = 10_000 - Array.at|601,427,596|86|
|Length = 1_000_000 - Array.at|634,368,007|80|
|Length = 100 - Array[length - 1]|823,289,499|85|
|Length = 10_000 - Array[length - 1]|817,561,623|81|
|Length = 1_000_000 - Array[length - 1]|836,834,850|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:26 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|53,356,277|92|
|Object.create({})|1,638,939|84|
|Cached Empty.prototype|595,111,984|93|
|Empty.prototype|1,540,867|79|
|Empty class|1,004,887|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:02 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,481,952|93|
|Using optional chain (obj.field?.field2) (undefined)|596,995,635|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,258,091|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|595,863,252|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:46 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,260,822|85|
|Using parseInt(x, 10) - big number (10 len)|6,623,119|86|
|Using + - small number (2 len)|686,888,430|85|
|Using + - big number (10 len)|669,651,468|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:21 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|824,372|76|
|Using ? operator to avoid rejection|848,847|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:49 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|599,874,286|96|
|Raw usage underscore usage|603,826,068|92|
|Manipulating private properties using #|624,874,490|93|
|Manipulating private properties using underscore(_)|631,810,127|92|
|Manipulating private properties using Symbol|610,263,566|92|
|Manipulating private properties using PrivateSymbol|23,797,195|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,041,915|98|
|Adding property in the object creation - small object|2,055,754|98|
|Adding property after the function creation - small class|178,630|80|
|Adding property in the function creation - small class|183,268|86|
|Adding property after the class creation - small class|142,626|76|
|Adding property in the class creation - small class|148,095|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:35 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|718,895,022|97|
|Getter|51,438,178|96|
|Method|718,996,217|97|
|DefineProperty (getter)|718,934,478|94|
|DefineProperty (getter & enumerable=false)|51,546,663|96|
|DefineProperty (getter & configurable=false)|708,228,763|91|
|DefineProperty (getter & enumerable=false & configurable=false)|51,536,259|97|
|DefineProperty (writable)|718,943,811|91|
|DefineProperty (writable & enumerable=false)|719,523,475|98|
|DefineProperty (writable & enumerable=false & configurable=false)|203,567,710|29|
|DefineProperties (getter)|32,589,236|91|
|DefineProperties (getter & enumerable=false)|51,617,864|96|
|DefineProperties (getter & enumerable=false & configurable=false)|51,576,579|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:07 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|581,976,662|97|
|Setter|8,247,688|98|
|Method|587,507,243|94|
|DefineProperty (setter)|587,238,913|99|
|DefineProperty (setter & enumerable=false)|8,652,957|95|
|DefineProperty (setter & configurable=false)|8,687,762|99|
|DefineProperty (setter & enumerable=false & configurable=false)|8,276,458|98|
|DefineProperty (writable)|598,407,217|91|
|DefineProperty (writable & enumerable=false)|597,461,570|97|
|DefineProperty (writable & enumerable=false & configurable=false)|597,413,854|98|
|DefineProperties (setter)|594,830,157|98|
|DefineProperties (setter & enumerable=false)|7,871,392|97|
|DefineProperties (setter & enumerable=false & configurable=false)|7,788,419|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,686,957|86|
|Using replaceAll()|1,575,523|90|
|Using replaceAll(//g)|1,520,292|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:25 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,078,154|94|
|{ ...object, __proto__: null }|12,730,661|90|
|{ ...object, newProp: true }|461,768|86|
|structuredClone|172,881|94|
|JSON.parse + JSON.stringify|141,840|96|
|loop + object.keys starting with {}|692,970|96|
|loop + object.keys starting with { __proto__: null }|402,229|94|
|loop + object.keys starting with { randomProp: true }|302,884|97|
|object.keys + reduce(FN, {})|291,728|94|
|object.keys + reduce(FN, { __proto__: null })|399,507|94|
|object.keys + reduce(FN, { newProp: true })|306,617|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:15 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|160,858|90|
|Sort using first char|770,665|96|
|Sort using localeCompare|697,555|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:49:30 GMT+0000 (Coordinated Universal Time)
</details>


## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,385|89|
|{...smallObject} - Total keys: 2|70,975,486|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,519|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,528|95|
|{ ...bigObject, ...anotherBigObject }|828|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,054,160|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,165,969|97|
|{ ...smallObject, ...anotherSmallObject }|17,674,280|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:51:41 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Readable

```
streams.Readable reading 1e3 * "some data" x 1,369 ops/sec ±26.26% (83 runs sampled)
streams.web.Readable reading 1e3 * "some data" x 395 ops/sec ±11.07% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:53:24 GMT+0000 (Coordinated Universal Time)
</details>


## Stream.Writable

```
streams.Writable writing 1e3 * "some data" x 3,844 ops/sec ±2.78% (91 runs sampled)
streams.web.WritableStream writing 1e3 * "some data" x 735 ops/sec ±21.38% (38 runs sampled)
Fastest is streams.Writable writing 1e3 * "some data"
```


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:56:28 GMT+0000 (Coordinated Universal Time)
</details>


## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|595,762,444|95|
|Using backtick (`)|598,968,770|95|
|Using array.join|8,987,804|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:59:33 GMT+0000 (Coordinated Universal Time)
</details>


## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|598,153,230|93|
|Using indexof|605,490,917|94|
|Using RegExp.test|10,343,577|94|
|Using RegExp.text with cached regex pattern|10,822,924|92|
|Using new RegExp.test|2,616,198|95|
|Using new RegExp.test with cached regex pattern|2,951,386|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:14 GMT+0000 (Coordinated Universal Time)
</details>


## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|104,056,760|93|
|Using this|118,978,079|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:10:40 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|820,334|74|
|Using ? operator to avoid rejection|831,588|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:38:54 GMT+0000 (Coordinated Universal Time)
</details>

