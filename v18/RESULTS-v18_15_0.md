## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|708,837,144|96|
|Using dot notation|696,059,781|94|
|Using define property (writable)|2,856,975|91|
|Using define property initialized (writable)|3,641,239|96|
|Using define property (getter)|1,428,981|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:39 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.009ms
array.push|1,000|0.065ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.466ms
new Array(length)|10,000|0.243ms
array.push|1,000,000|43.976ms
new Array(length)|1,000,000|6.448ms
array.push|100,000,000|2,017.136ms
new Array(length)|100,000,000|4,649.659ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.066ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.674ms
new Array(length)|10,000|4.324ms
array.push|1,000,000|327.787ms
new Array(length)|1,000,000|4.53ms
array.push|100,000,000|2,827.544ms
new Array(length)|100,000,000|5,431.845ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:51:55 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|279|71|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:46 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,472|88|
|new Blob (1024)|443|71|
|text (128)|32,375|75|
|text (1024)|21,781|87|
|arrayBuffer (128)|32,832|73|
|arrayBuffer (1024)|22,698|80|
|slice (0, 64)|56,877|78|
|slice (0, 512)|27,598|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:55 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|188,091|57|
|[True conditional] Using constructor name|148,281|95|
|[True conditional] Check if property is valid then instanceof |149,681|93|
|[False conditional] Using instanceof only|711,699,665|97|
|[False conditional] Using constructor name|711,649,918|99|
|[False conditional] Check if property is valid then instanceof |711,726,707|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,972|82|
|crypto.verify('RSA-SHA256')|3,039|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:27 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,284,073|96|
|fromUnixToISOString(new Date())|1,069,436|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:41 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,590|81|
|Intl.DateTimeFormat().format(new Date())|8,282|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,873|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,060|79|
|Reusing Intl.DateTimeFormat()|450,481|98|
|Date.toLocaleDateString()|461,400|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,612|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:07 GMT+0000 (Coordinated Universal Time)
</details>


## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|676,847|95|
|Using brackets {}|701,562|95|
|Using '' + |687,973|96|
|Using date.toString()|744,835|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:04:52 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,333,599|93|
|Using undefined assignment|710,884,887|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:06:28 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|180,836|57|
|NodeError|143,094|93|
|NodeError Range|145,328|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:08:39 GMT+0000 (Coordinated Universal Time)
</details>


## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,312,407|96|
|Function returning explicitly undefined|1,297,940|93|
|Function returning implicitly undefined|1,327,820|96|
|Function returning string|1,318,162|97|
|Function returning integer|1,290,765|92|
|Function returning float|1,319,368|98|
|Function returning functions|1,275,844|93|
|Function returning arrow functions|1,304,509|95|
|Function returning empty object|1,272,787|94|
|Function returning empty array|1,297,628|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:10:48 GMT+0000 (Coordinated Universal Time)
</details>


## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|583,515,766|94|
|using Array.includes (first item)|585,908,737|93|
|Using raw comparison|585,887,457|95|
|Using raw comparison (first item)|585,921,604|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:41 GMT+0000 (Coordinated Universal Time)
</details>


## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|62,516,450|94|
|Using Object.getOwnPropertyNames()|58,702,417|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:16:35 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,246,119|94|
|Length = 10_000 - Array.at|19,108,923|92|
|Length = 1_000_000 - Array.at|19,235,163|92|
|Length = 100 - Array[length - 1]|590,968,872|97|
|Length = 10_000 - Array[length - 1]|590,877,793|97|
|Length = 1_000_000 - Array[length - 1]|590,058,669|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:19 GMT+0000 (Coordinated Universal Time)
</details>


## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,658,706|92|
|Object.create({})|951,732|79|
|Cached Empty.prototype|714,471,016|97|
|Empty.prototype|1,043,288|81|
|Empty class|716,606|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:20:00 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|588,094,263|96|
|Using optional chain (obj.field?.field2) (undefined)|588,074,915|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|590,259,327|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|589,522,763|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|138,505,283|86|
|Using parseInt(x, 10) - big number (10 len)|10,429,124|85|
|Using + - small number (2 len)|650,971,294|87|
|Using + - big number (10 len)|680,358,130|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:24:19 GMT+0000 (Coordinated Universal Time)
</details>


## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|448,693|70|
|Using ? operator to avoid rejection|512,221|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:25:53 GMT+0000 (Coordinated Universal Time)
</details>


## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,675,438|97|
|Using optional chain (obj.field?.field2) (undefined)|710,899,358|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,830,834|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,723,291|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:33:17 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>


## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,860,465|84|
|Adding property in the object creation - small object|1,844,150|87|
|Adding property after the function creation - small class|105,948|79|
|Adding property in the function creation - small class|104,621|79|
|Adding property after the class creation - small class|86,080|76|
|Adding property in the class creation - small class|87,178|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:42:41 GMT+0000 (Coordinated Universal Time)
</details>

