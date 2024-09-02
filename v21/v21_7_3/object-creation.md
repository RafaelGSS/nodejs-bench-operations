## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,023,529|6011765|
|Object.create({})|1,820,024|910015|
|Cached Empty.prototype|13,786,062|6893032|
|Empty.prototype|1,926,264|963133|
|Empty class|1,221,390|619981|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:25:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12023529.278630296,"samples":6011765},{"name":"Object.create({})","opsSec":1820024.670965039,"samples":910015},{"name":"Cached Empty.prototype","opsSec":13786062.04237873,"samples":6893032},{"name":"Empty.prototype","opsSec":1926264.8211354252,"samples":963133},{"name":"Empty class","opsSec":1221390.6212524315,"samples":619981}]}-->
