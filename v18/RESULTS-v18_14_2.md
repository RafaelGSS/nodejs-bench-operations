## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|595,271,421|92|
|Using dot notation|606,545,042|93|
|Using define property (writable)|2,565,170|97|
|Using define property initialized (writable)|3,156,964|96|
|Using define property (getter)|1,310,978|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:38 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.036ms
new Array(length)|100|0.012ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.468ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|46.929ms
new Array(length)|1,000,000|6.885ms
array.push|100,000,000|1,955.015ms
new Array(length)|100,000,000|4,715.513ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.017ms
new Array(length)|100|0.011ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.668ms
new Array(length)|10,000|4.273ms
array.push|1,000,000|327.205ms
new Array(length)|1,000,000|4.981ms
array.push|100,000,000|2,775.915ms
new Array(length)|100,000,000|5,524.558ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:57 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|84|
|Array.from|15|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:42 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,003|82|
|new Blob (1024)|390|67|
|text (128)|28,549|61|
|text (1024)|19,414|77|
|arrayBuffer (128)|28,518|74|
|arrayBuffer (1024)|20,050|79|
|slice (0, 64)|52,990|74|
|slice (0, 512)|23,950|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:59 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|144,343|54|
|[True conditional] Using constructor name|112,543|86|
|[True conditional] Check if property is valid then instanceof |112,750|89|
|[False conditional] Using instanceof only|640,615,896|89|
|[False conditional] Using constructor name|637,069,653|90|
|[False conditional] Check if property is valid then instanceof |637,711,766|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:34 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,516|92|
|crypto.verify('RSA-SHA256')|4,556|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:19 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,594,873|96|
|fromUnixToISOString(new Date())|1,350,283|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:38 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,948|85|
|Intl.DateTimeFormat().format(new Date())|8,163|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,971|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,101|81|
|Reusing Intl.DateTimeFormat()|483,192|98|
|Date.toLocaleDateString()|496,159|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,629|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:05 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|659,012|95|
|Using brackets {}|666,117|98|
|Using '' + |656,483|96|
|Using date.toString()|717,434|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:48 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,361,839|96|
|Using undefined assignment|592,807,216|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:28 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|152,164|56|
|NodeError|119,431|89|
|NodeError Range|115,252|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:40 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,365,070|97|
|Function returning explicitly undefined|1,355,232|92|
|Function returning implicitly undefined|1,398,499|94|
|Function returning string|1,368,728|94|
|Function returning integer|1,370,832|92|
|Function returning float|1,386,735|96|
|Function returning functions|1,350,721|96|
|Function returning arrow functions|1,338,430|94|
|Function returning empty object|1,381,714|92|
|Function returning empty array|1,362,081|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:46 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|562,943,869|96|
|using Array.includes (first item)|560,200,969|93|
|Using raw comparison|548,807,525|94|
|Using raw comparison (first item)|563,700,648|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:40 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,533,370|86|
|Using Object.getOwnPropertyNames()|51,176,841|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:39 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,271,318|95|
|Length = 10_000 - Array.at|16,301,775|96|
|Length = 1_000_000 - Array.at|16,282,453|94|
|Length = 100 - Array[length - 1]|708,336,528|98|
|Length = 10_000 - Array[length - 1]|705,572,738|97|
|Length = 1_000_000 - Array[length - 1]|706,455,593|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:23 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,837,656|89|
|Object.create({})|985,139|81|
|Cached Empty.prototype|593,453,034|98|
|Empty.prototype|1,088,203|85|
|Empty class|708,773|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:01 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,352,661|97|
|Using optional chain (obj.field?.field2) (undefined)|589,703,321|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,772,754|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,125,468|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|149,427,298|85|
|Using parseInt(x, 10) - big number (10 len)|10,561,665|84|
|Using + - small number (2 len)|753,779,238|83|
|Using + - big number (10 len)|743,256,157|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:18 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|579,700|75|
|Using ? operator to avoid rejection|597,561|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:47 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,704,688|96|
|Length = 10_000 - Array.at|19,062,395|96|
|Length = 1_000_000 - Array.at|19,269,176|96|
|Length = 100 - Array[length - 1]|589,456,031|97|
|Length = 10_000 - Array[length - 1]|588,279,927|92|
|Length = 1_000_000 - Array[length - 1]|588,403,148|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:55 GMT+0000 (Coordinated Universal Time)
</details>


## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,010,207|94|
|Date.now()|15,802,914|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 23:19:11 GMT+0000 (Coordinated Universal Time)
</details>

