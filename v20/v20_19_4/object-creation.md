## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|28,422,327|14216139|
|Object.create({})|1,839,365|919685|
|new Function with empty prototype|104,309,408|52158800|
|Empty class|78,223,367|39138398|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:27:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14216139,"opsSec":28422327.627320953},{"name":"Object.create({})","samples":919685,"opsSec":1839365.2801886909},{"name":"new Function with empty prototype","samples":52158800,"opsSec":104309408.58214405},{"name":"Empty class","samples":39138398,"opsSec":78223367.09357408}]}-->
