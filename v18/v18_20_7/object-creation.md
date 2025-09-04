## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,992,830|14999234|
|Object.create({})|1,296,512|658789|
|new Function with empty prototype|79,113,680|39557126|
|Empty class|77,629,791|38829253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:26:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14999234,"opsSec":29992830.00780079},{"name":"Object.create({})","samples":658789,"opsSec":1296512.477887333},{"name":"new Function with empty prototype","samples":39557126,"opsSec":79113680.79922463},{"name":"Empty class","samples":38829253,"opsSec":77629791.98202252}]}-->
