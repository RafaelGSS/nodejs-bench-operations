## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,254,091|18127102|
|Object.create({})|1,956,209|996231|
|new Function with empty prototype|112,087,638|56043998|
|Empty class|82,536,749|41271210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:55:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18127102,"opsSec":36254091.03225234},{"name":"Object.create({})","samples":996231,"opsSec":1956209.5750172294},{"name":"new Function with empty prototype","samples":56043998,"opsSec":112087638.44043338},{"name":"Empty class","samples":41271210,"opsSec":82536749.72529387}]}-->
