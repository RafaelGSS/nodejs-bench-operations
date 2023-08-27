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


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|404|84|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:02:33 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|281,022|85|
|NodeError|283,620|87|
|NodeError Range|279,479|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:28:23 GMT+0000 (Coordinated Universal Time)
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

