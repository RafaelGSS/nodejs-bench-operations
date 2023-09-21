## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|586,466,634|96|
|Using dot notation|587,813,576|98|
|Using define property (writable)|2,424,618|97|
|Using define property initialized (writable)|3,043,716|95|
|Using define property (getter)|1,235,926|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:58 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|710,897,342|98|
|Using dot notation|712,103,940|97|
|Using define property (writable)|2,928,643|96|
|Using define property initialized (writable)|3,720,059|97|
|Using define property (getter)|1,544,836|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:02 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.044ms
new Array(length)|100|0.013ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.558ms
new Array(length)|10,000|0.345ms
array.push|1,000,000|53.605ms
new Array(length)|1,000,000|7.83ms
array.push|100,000,000|2,307.09ms
new Array(length)|100,000,000|5,484.461ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.024ms
array.push|100|0.019ms
new Array(length)|100|0.014ms
array.push|1,000|0.08ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.781ms
new Array(length)|10,000|5.084ms
array.push|1,000,000|399.631ms
new Array(length)|1,000,000|6.381ms
array.push|100,000,000|3,045.871ms
new Array(length)|100,000,000|6,650.89ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:26 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.044ms
new Array(length)|100|0.013ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.558ms
new Array(length)|10,000|0.345ms
array.push|1,000,000|53.605ms
new Array(length)|1,000,000|7.83ms
array.push|100,000,000|2,307.09ms
new Array(length)|100,000,000|5,484.461ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.024ms
array.push|100|0.019ms
new Array(length)|100|0.014ms
array.push|1,000|0.08ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.781ms
new Array(length)|10,000|5.084ms
array.push|1,000,000|399.631ms
new Array(length)|1,000,000|6.381ms
array.push|100,000,000|3,045.871ms
new Array(length)|100,000,000|6,650.89ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:04:26 GMT+0000 (Coordinated Universal Time)
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

