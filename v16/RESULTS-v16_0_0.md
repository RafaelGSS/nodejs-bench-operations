## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|580,612,652|91|
|Using dot notation|582,997,076|95|
|Using define property (writable)|2,473,983|95|
|Using define property initialized (writable)|3,068,116|94|
|Using define property (getter)|1,189,211|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:00 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|583,205,479|95|
|Using dot notation|575,814,858|94|
|Using define property (writable)|2,465,141|93|
|Using define property initialized (writable)|3,050,489|88|
|Using define property (getter)|1,297,702|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:02 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|583,205,479|95|
|Using dot notation|575,814,858|94|
|Using define property (writable)|2,465,141|93|
|Using define property initialized (writable)|3,050,489|88|
|Using define property (getter)|1,297,702|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:02 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|293|70|
|Array.from|12|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:05:53 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|308,972|88|
|[True conditional] Using constructor name|303,133|85|
|[True conditional] Check if property is valid then instanceof |302,621|88|
|[False conditional] Using instanceof only|708,955,050|98|
|[False conditional] Using constructor name|708,457,531|97|
|[False conditional] Check if property is valid then instanceof |710,207,339|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:18 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|308,972|88|
|[True conditional] Using constructor name|303,133|85|
|[True conditional] Check if property is valid then instanceof |302,621|88|
|[False conditional] Using instanceof only|708,955,050|98|
|[False conditional] Using constructor name|708,457,531|97|
|[False conditional] Check if property is valid then instanceof |710,207,339|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:18 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,558,564|93|
|fromUnixToISOString(new Date())|1,298,531|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:25 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,558,564|93|
|fromUnixToISOString(new Date())|1,298,531|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:25 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,558,564|93|
|fromUnixToISOString(new Date())|1,298,531|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:10:25 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,692,524|88|
|Using undefined assignment|564,278,692|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:17:07 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,012,382|95|
|Using replaceAll()|1,915,035|98|
|Using replaceAll(//g)|1,777,835|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:34 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:32 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:27 GMT+0000 (Coordinated Universal Time)
</details>

