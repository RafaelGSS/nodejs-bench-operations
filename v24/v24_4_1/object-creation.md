## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|33,257,961|16629030|
|Object.create({})|2,038,418|1019210|
|new Function with empty prototype|71,880,680|35941228|
|Empty class|78,399,620|39223915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:33:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":16629030,"opsSec":33257961.024307992},{"name":"Object.create({})","samples":1019210,"opsSec":2038418.1124248279},{"name":"new Function with empty prototype","samples":35941228,"opsSec":71880680.40343268},{"name":"Empty class","samples":39223915,"opsSec":78399620.03525022}]}-->
