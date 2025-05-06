## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,828,175|15914840|
|Object.create({})|1,308,836|665968|
|new Function with empty prototype|71,541,321|35780905|
|Empty class|71,032,056|35677079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:06:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15914840,"opsSec":31828175.291184932},{"name":"Object.create({})","samples":665968,"opsSec":1308836.079789884},{"name":"new Function with empty prototype","samples":35780905,"opsSec":71541321.28099833},{"name":"Empty class","samples":35677079,"opsSec":71032056.74580106}]}-->
