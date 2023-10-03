## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|724,227,322|77|
|Using dot notation|626,620,666|84|
|Using define property (writable)|2,638,114|80|
|Using define property initialized (writable)|3,182,533|86|
|Using define property (getter)|1,246,377|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:41 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.037ms
new Array(length)|100|0.013ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.389ms
new Array(length)|10,000|0.206ms
array.push|1,000,000|32.01ms
new Array(length)|1,000,000|18.298ms
array.push|100,000,000|1,809.449ms
new Array(length)|100,000,000|4,465.773ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.611ms
new Array(length)|10,000|4.368ms
array.push|1,000,000|343.714ms
new Array(length)|1,000,000|4.665ms
array.push|100,000,000|2,210.277ms
new Array(length)|100,000,000|4,859.036ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:57 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|257|76|
|Array.from|12|34|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:48 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,358|88|
|new Blob (1024)|419|69|
|text (128)|31,959|67|
|text (1024)|19,494|87|
|arrayBuffer (128)|32,483|83|
|arrayBuffer (1024)|19,653|84|
|slice (0, 64)|56,979|79|
|slice (0, 512)|25,141|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:57 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,817|56|
|[True conditional] Using constructor name|145,298|93|
|[True conditional] Check if property is valid then instanceof |146,350|92|
|[False conditional] Using instanceof only|710,824,497|97|
|[False conditional] Using constructor name|712,391,222|95|
|[False conditional] Check if property is valid then instanceof |712,701,960|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,745|90|
|crypto.verify('RSA-SHA256')|3,765|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:22 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,601,427|95|
|fromUnixToISOString(new Date())|1,355,763|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,877|88|
|Intl.DateTimeFormat().format(new Date())|8,232|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,630|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,245|81|
|Reusing Intl.DateTimeFormat()|457,523|92|
|Date.toLocaleDateString()|462,527|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,536|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:10 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|643,717|97|
|Using brackets {}|638,226|98|
|Using '' + |648,204|96|
|Using date.toString()|699,184|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:53 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,367,483|93|
|Using undefined assignment|591,513,642|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:30 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|150,033|58|
|NodeError|114,569|86|
|NodeError Range|115,379|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:42 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,264,488|95|
|Function returning explicitly undefined|1,245,442|95|
|Function returning implicitly undefined|1,298,070|92|
|Function returning string|1,227,144|93|
|Function returning integer|1,295,859|96|
|Function returning float|1,263,431|95|
|Function returning functions|1,218,455|95|
|Function returning arrow functions|1,246,518|90|
|Function returning empty object|1,276,885|92|
|Function returning empty array|1,273,761|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:50 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,504,806|97|
|using Array.includes (first item)|593,064,816|94|
|Using raw comparison|593,791,910|96|
|Using raw comparison (first item)|592,642,793|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:39 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,238,374|95|
|Using Object.getOwnPropertyNames()|51,615,966|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:30 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,867,319|92|
|Length = 10_000 - Array.at|19,737,447|92|
|Length = 1_000_000 - Array.at|20,066,926|91|
|Length = 100 - Array[length - 1]|937,411,635|89|
|Length = 10_000 - Array[length - 1]|925,307,242|92|
|Length = 1_000_000 - Array[length - 1]|860,739,365|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:24 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,892,181|81|
|Object.create({})|765,673|69|
|Cached Empty.prototype|714,414,830|87|
|Empty.prototype|792,356|71|
|Empty class|556,299|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:08 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|589,685,748|97|
|Using optional chain (obj.field?.field2) (undefined)|589,309,491|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|590,541,239|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|591,068,294|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|202,358,091|94|
|Using parseInt(x, 10) - big number (10 len)|14,857,158|95|
|Using + - small number (2 len)|594,357,386|97|
|Using + - big number (10 len)|593,020,261|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:11 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|535,871|69|
|Using ? operator to avoid rejection|595,950|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:51 GMT+0000 (Coordinated Universal Time)
</details>


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|128,018,599|77|
|Raw usage underscore usage|139,238,983|85|
|Manipulating private properties using #|93,329,289|88|
|Manipulating private properties using underscore(_)|80,865,412|81|
|Manipulating private properties using Symbol|82,865,639|81|
|Manipulating private properties using PrivateSymbol|26,908,110|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:28:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,588,875|97|
|Adding property in the object creation - small object|2,609,030|99|
|Adding property after the function creation - small class|145,647|82|
|Adding property in the function creation - small class|151,363|86|
|Adding property after the class creation - small class|119,446|83|
|Adding property in the class creation - small class|120,177|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:32 GMT+0000 (Coordinated Universal Time)
</details>


## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|709,558,999|98|
|Getter|52,939,470|95|
|Method|710,882,820|98|
|DefineProperty (getter)|710,944,931|98|
|DefineProperty (getter & enumerable=false)|53,232,877|96|
|DefineProperty (getter & configurable=false)|711,890,078|98|
|DefineProperty (getter & enumerable=false & configurable=false)|53,280,530|96|
|DefineProperty (writable)|710,722,889|96|
|DefineProperty (writable & enumerable=false)|711,548,037|98|
|DefineProperty (writable & enumerable=false & configurable=false)|710,237,946|98|
|DefineProperties (getter)|52,732,318|91|
|DefineProperties (getter & enumerable=false)|52,700,377|95|
|DefineProperties (getter & enumerable=false & configurable=false)|52,787,624|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:35:06 GMT+0000 (Coordinated Universal Time)
</details>


## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|474,270,137|97|
|Setter|7,490,386|94|
|Method|474,084,096|96|
|DefineProperty (setter)|475,459,094|98|
|DefineProperty (setter & enumerable=false)|7,422,301|97|
|DefineProperty (setter & configurable=false)|7,572,622|97|
|DefineProperty (setter & enumerable=false & configurable=false)|7,537,934|97|
|DefineProperty (writable)|709,043,478|95|
|DefineProperty (writable & enumerable=false)|710,860,965|97|
|DefineProperty (writable & enumerable=false & configurable=false)|95,417,076|17|
|DefineProperties (setter)|61,805,437|86|
|DefineProperties (setter & enumerable=false)|7,421,232|95|
|DefineProperties (setter & enumerable=false & configurable=false)|7,281,604|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,769,199|87|
|Using replaceAll()|1,648,257|84|
|Using replaceAll(//g)|1,504,278|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:40:25 GMT+0000 (Coordinated Universal Time)
</details>


## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|12,315,363|91|
|{ ...object, __proto__: null }|12,482,087|91|
|{ ...object, newProp: true }|380,689|75|
|structuredClone|147,857|96|
|JSON.parse + JSON.stringify|121,723|98|
|loop + object.keys starting with {}|555,349|97|
|loop + object.keys starting with { __proto__: null }|356,639|94|
|loop + object.keys starting with { randomProp: true }|266,849|96|
|object.keys + reduce(FN, {})|254,218|94|
|object.keys + reduce(FN, { __proto__: null })|358,494|97|
|object.keys + reduce(FN, { newProp: true })|268,620|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:18 GMT+0000 (Coordinated Universal Time)
</details>


## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|132,212|87|
|Sort using first char|594,814|97|
|Sort using localeCompare|535,736|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:49:33 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,331,909|87|
|fromUnixToISOString(new Date())|1,118,954|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,331,909|87|
|fromUnixToISOString(new Date())|1,118,954|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,331,909|87|
|fromUnixToISOString(new Date())|1,118,954|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,331,909|87|
|fromUnixToISOString(new Date())|1,118,954|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,331,909|87|
|fromUnixToISOString(new Date())|1,118,954|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,331,909|87|
|fromUnixToISOString(new Date())|1,118,954|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,331,909|87|
|fromUnixToISOString(new Date())|1,118,954|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:30 GMT+0000 (Coordinated Universal Time)
</details>

