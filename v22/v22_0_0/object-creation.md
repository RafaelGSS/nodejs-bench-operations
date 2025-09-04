## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|28,313,959|14176396|
|Object.create({})|1,989,633|1003301|
|new Function with empty prototype|71,337,324|35673007|
|Empty class|72,237,132|36120467|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:29:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14176396,"opsSec":28313959.51777721},{"name":"Object.create({})","samples":1003301,"opsSec":1989633.8375771323},{"name":"new Function with empty prototype","samples":35673007,"opsSec":71337324.54317205},{"name":"Empty class","samples":36120467,"opsSec":72237132.73760109}]}-->
