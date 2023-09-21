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


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|150,839|56|
|NodeError|121,482|88|
|NodeError Range|121,468|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:28:27 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,128,995|93|
|Using replaceAll()|1,980,419|96|
|Using replaceAll(//g)|1,879,198|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:32 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:26 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:45 GMT+0000 (Coordinated Universal Time)
</details>

