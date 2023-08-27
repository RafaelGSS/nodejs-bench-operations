## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|588,639,959|96|
|Using dot notation|592,568,568|92|
|Using define property (writable)|2,591,364|98|
|Using define property initialized (writable)|3,398,661|92|
|Using define property (getter)|1,388,167|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:48 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|383|86|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:02:35 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|137,562|61|
|NodeError|112,236|87|
|NodeError Range|110,358|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:28:27 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,239,276|93|
|Using replaceAll()|2,009,032|97|
|Using replaceAll(//g)|2,003,924|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:32 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:25 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:54 GMT+0000 (Coordinated Universal Time)
</details>

