## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|589,894,225|91|
|Using dot notation|596,557,458|93|
|Using define property (writable)|3,160,548|96|
|Using define property initialized (writable)|4,010,926|98|
|Using define property (getter)|1,566,440|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:35 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.115ms
new Array(length)|100|0.01ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.501ms
new Array(length)|10,000|0.251ms
array.push|1,000,000|30.266ms
new Array(length)|1,000,000|17.887ms
array.push|100,000,000|1,865.072ms
new Array(length)|100,000,000|4,918.026ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.071ms
new Array(length)|100|0.011ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.622ms
new Array(length)|10,000|4.268ms
array.push|1,000,000|322.189ms
new Array(length)|1,000,000|5.231ms
array.push|100,000,000|2,672.361ms
new Array(length)|100,000,000|5,457.897ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:54 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|323|68|
|Array.from|14|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:40 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,296|87|
|new Blob (1024)|413|71|
|text (128)|26,323|69|
|text (1024)|17,627|84|
|arrayBuffer (128)|32,022|84|
|arrayBuffer (1024)|20,676|88|
|slice (0, 64)|65,767|82|
|slice (0, 512)|28,384|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:57 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|163,271|58|
|[True conditional] Using constructor name|131,161|91|
|[True conditional] Check if property is valid then instanceof |128,343|92|
|[False conditional] Using instanceof only|592,310,931|98|
|[False conditional] Using constructor name|591,860,889|94|
|[False conditional] Check if property is valid then instanceof |592,629,151|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|18,089|91|
|crypto.verify('RSA-SHA256')|16,975|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:24 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,276,017|90|
|fromUnixToISOString(new Date())|1,047,149|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:39 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,023|81|
|Intl.DateTimeFormat().format(new Date())|6,037|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,260|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,182|78|
|Reusing Intl.DateTimeFormat()|405,872|87|
|Date.toLocaleDateString()|396,026|82|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,695|74|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:09 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|639,480|94|
|Using brackets {}|631,198|97|
|Using '' + |659,983|96|
|Using date.toString()|695,755|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:45 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,342,100|94|
|Using undefined assignment|714,929,213|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:28 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|191,708|55|
|NodeError|150,293|94|
|NodeError Range|150,636|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:35 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,263,840|97|
|Function returning explicitly undefined|1,274,107|91|
|Function returning implicitly undefined|1,295,811|93|
|Function returning string|1,311,912|95|
|Function returning integer|1,301,452|94|
|Function returning float|1,319,624|94|
|Function returning functions|1,279,743|96|
|Function returning arrow functions|1,297,906|97|
|Function returning empty object|1,325,257|96|
|Function returning empty array|1,323,636|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:44 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|713,139,277|95|
|using Array.includes (first item)|714,086,160|96|
|Using raw comparison|714,262,770|98|
|Using raw comparison (first item)|715,242,786|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:37 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,745,645|89|
|Using Object.getOwnPropertyNames()|55,605,503|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:31 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,153,808|93|
|Length = 10_000 - Array.at|13,101,925|94|
|Length = 1_000_000 - Array.at|13,035,592|94|
|Length = 100 - Array[length - 1]|583,670,266|97|
|Length = 10_000 - Array[length - 1]|587,551,397|95|
|Length = 1_000_000 - Array[length - 1]|587,107,795|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:24 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,527,919|92|
|Object.create({})|1,439,360|84|
|Cached Empty.prototype|595,556,390|97|
|Empty.prototype|1,438,777|76|
|Empty class|878,373|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:19:59 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|716,559,094|95|
|Using optional chain (obj.field?.field2) (undefined)|717,621,071|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|717,277,067|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|716,240,183|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:38 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|211,397,032|89|
|Using parseInt(x, 10) - big number (10 len)|14,717,950|96|
|Using + - small number (2 len)|595,529,093|99|
|Using + - big number (10 len)|595,293,110|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:12 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|704,170|79|
|Using ? operator to avoid rejection|749,988|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:47 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,080,064|94|
|Raw usage underscore usage|6,611,827|92|
|Manipulating private properties using #|2,444,293|91|
|Manipulating private properties using underscore(_)|701,363,296|91|
|Manipulating private properties using Symbol|698,472,772|93|
|Manipulating private properties using PrivateSymbol|24,657,073|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:36 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,636,108|91|
|Adding property in the object creation - small object|1,669,717|87|
|Adding property after the function creation - small class|145,406|78|
|Adding property in the function creation - small class|146,620|82|
|Adding property after the class creation - small class|118,627|77|
|Adding property in the class creation - small class|117,336|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:34 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|836,526,779|83|
|Getter|61,813,238|84|
|Method|804,452,838|83|
|DefineProperty (getter)|859,511,063|86|
|DefineProperty (getter & enumerable=false)|63,846,428|88|
|DefineProperty (getter & configurable=false)|818,211,207|85|
|DefineProperty (getter & enumerable=false & configurable=false)|59,075,421|85|
|DefineProperty (writable)|818,480,655|83|
|DefineProperty (writable & enumerable=false)|827,661,588|85|
|DefineProperty (writable & enumerable=false & configurable=false)|170,164,062|20|
|DefineProperties (getter)|37,635,121|79|
|DefineProperties (getter & enumerable=false)|33,605,473|73|
|DefineProperties (getter & enumerable=false & configurable=false)|34,806,254|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:09 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|391,195,556|95|
|Setter|5,557,564|96|
|Method|392,109,513|90|
|DefineProperty (setter)|395,007,034|94|
|DefineProperty (setter & enumerable=false)|5,653,956|94|
|DefineProperty (setter & configurable=false)|5,572,600|93|
|DefineProperty (setter & enumerable=false & configurable=false)|5,636,915|98|
|DefineProperty (writable)|579,209,460|88|
|DefineProperty (writable & enumerable=false)|590,287,869|93|
|DefineProperty (writable & enumerable=false & configurable=false)|104,438,837|19|
|DefineProperties (setter)|53,913,960|84|
|DefineProperties (setter & enumerable=false)|5,620,859|98|
|DefineProperties (setter & enumerable=false & configurable=false)|5,641,158|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,360,242|98|
|Using replaceAll()|2,257,074|99|
|Using replaceAll(//g)|2,157,928|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:15 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,610,281|95|
|fromUnixToISOString(new Date())|1,389,989|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:27 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,610,281|95|
|fromUnixToISOString(new Date())|1,389,989|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:27 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,610,281|95|
|fromUnixToISOString(new Date())|1,389,989|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:27 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,610,281|95|
|fromUnixToISOString(new Date())|1,389,989|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:27 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,610,281|95|
|fromUnixToISOString(new Date())|1,389,989|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:27 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,610,281|95|
|fromUnixToISOString(new Date())|1,389,989|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:27 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,610,281|95|
|fromUnixToISOString(new Date())|1,389,989|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:27 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,610,281|95|
|fromUnixToISOString(new Date())|1,389,989|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:27 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,610,281|95|
|fromUnixToISOString(new Date())|1,389,989|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:27 GMT+0000 (Coordinated Universal Time)
</details>

