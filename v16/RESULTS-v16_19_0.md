## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|712,524,367|95|
|Using dot notation|713,884,546|97|
|Using define property (writable)|3,021,126|95|
|Using define property initialized (writable)|3,725,443|97|
|Using define property (getter)|1,547,936|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:42:43 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|386|82|
|Array.from|14|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:02:33 GMT+0000 (Coordinated Universal Time)
</details>


## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|195,346|55|
|NodeError|155,398|90|
|NodeError Range|152,979|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:28:20 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,653,697|92|
|Using replaceAll()|1,600,665|93|
|Using replaceAll(//g)|1,504,407|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:34 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:23 GMT+0000 (Coordinated Universal Time)
</details>




<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sun Aug 27 2023 00:21:30 GMT+0000 (Coordinated Universal Time)
</details>

