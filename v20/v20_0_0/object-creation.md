## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,048,901|5524451|
|Object.create({})|1,743,315|871658|
|Cached Empty.prototype|14,076,447|7038224|
|Empty.prototype|1,682,696|841350|
|Empty class|1,078,899|539450|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:02:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11048901.312663067,"samples":5524451},{"name":"Object.create({})","opsSec":1743315.2102604252,"samples":871658},{"name":"Cached Empty.prototype","opsSec":14076447.014149591,"samples":7038224},{"name":"Empty.prototype","opsSec":1682696.6531171217,"samples":841350},{"name":"Empty class","opsSec":1078899.255541285,"samples":539450}]}-->
