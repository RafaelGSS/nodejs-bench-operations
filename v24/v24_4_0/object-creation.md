## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,529,369|19323392|
|Object.create({})|2,097,302|1048652|
|new Function with empty prototype|70,695,980|35352382|
|Empty class|73,786,638|36894004|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:30:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":19323392,"opsSec":38529369.82955763},{"name":"Object.create({})","samples":1048652,"opsSec":2097302.2592391246},{"name":"new Function with empty prototype","samples":35352382,"opsSec":70695980.30723076},{"name":"Empty class","samples":36894004,"opsSec":73786638.22484799}]}-->
