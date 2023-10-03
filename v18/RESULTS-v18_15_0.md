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


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,843|57|
|[True conditional] Using constructor name|122,918|91|
|[True conditional] Check if property is valid then instanceof |123,131|92|
|[False conditional] Using instanceof only|587,544,728|97|
|[False conditional] Using constructor name|588,093,186|96|
|[False conditional] Check if property is valid then instanceof |588,210,194|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:21 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,843|57|
|[True conditional] Using constructor name|122,918|91|
|[True conditional] Check if property is valid then instanceof |123,131|92|
|[False conditional] Using instanceof only|587,544,728|97|
|[False conditional] Using constructor name|588,093,186|96|
|[False conditional] Check if property is valid then instanceof |588,210,194|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:21 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,843|57|
|[True conditional] Using constructor name|122,918|91|
|[True conditional] Check if property is valid then instanceof |123,131|92|
|[False conditional] Using instanceof only|587,544,728|97|
|[False conditional] Using constructor name|588,093,186|96|
|[False conditional] Check if property is valid then instanceof |588,210,194|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:21 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,843|57|
|[True conditional] Using constructor name|122,918|91|
|[True conditional] Check if property is valid then instanceof |123,131|92|
|[False conditional] Using instanceof only|587,544,728|97|
|[False conditional] Using constructor name|588,093,186|96|
|[False conditional] Check if property is valid then instanceof |588,210,194|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:21 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,843|57|
|[True conditional] Using constructor name|122,918|91|
|[True conditional] Check if property is valid then instanceof |123,131|92|
|[False conditional] Using instanceof only|587,544,728|97|
|[False conditional] Using constructor name|588,093,186|96|
|[False conditional] Check if property is valid then instanceof |588,210,194|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:21 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,065,712|94|
|Length = 10_000 - Array.at|15,947,232|94|
|Length = 1_000_000 - Array.at|16,085,897|97|
|Length = 100 - Array[length - 1]|708,504,635|96|
|Length = 10_000 - Array[length - 1]|706,995,891|94|
|Length = 1_000_000 - Array[length - 1]|706,145,230|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:54 GMT+0000 (Coordinated Universal Time)
</details>


## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,065,712|94|
|Length = 10_000 - Array.at|15,947,232|94|
|Length = 1_000_000 - Array.at|16,085,897|97|
|Length = 100 - Array[length - 1]|708,504,635|96|
|Length = 10_000 - Array[length - 1]|706,995,891|94|
|Length = 1_000_000 - Array[length - 1]|706,145,230|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:26:54 GMT+0000 (Coordinated Universal Time)
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

