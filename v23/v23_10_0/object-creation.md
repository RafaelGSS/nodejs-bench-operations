## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,631,084|15816654|
|Object.create({})|2,048,157|1030606|
|new Function with empty prototype|72,212,524|36117387|
|Empty class|70,777,129|35406758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:05:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15816654,"opsSec":31631084.20825582},{"name":"Object.create({})","samples":1030606,"opsSec":2048157.0836158602},{"name":"new Function with empty prototype","samples":36117387,"opsSec":72212524.59904578},{"name":"Empty class","samples":35406758,"opsSec":70777129.90218008}]}-->
