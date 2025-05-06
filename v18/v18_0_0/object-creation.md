## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,895,098|15947725|
|Object.create({})|1,681,846|845707|
|new Function with empty prototype|75,901,360|37969473|
|Empty class|76,822,675|38440997|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:04:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15947725,"opsSec":31895098.260856375},{"name":"Object.create({})","samples":845707,"opsSec":1681846.3561769857},{"name":"new Function with empty prototype","samples":37969473,"opsSec":75901360.55706847},{"name":"Empty class","samples":38440997,"opsSec":76822675.52473892}]}-->
