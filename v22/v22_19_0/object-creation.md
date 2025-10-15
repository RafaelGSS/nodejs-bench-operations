## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,186,681|18093446|
|Object.create({})|2,115,528|1063608|
|new Function with empty prototype|103,720,563|51868719|
|Empty class|73,300,610|36651021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:57:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18093446,"opsSec":36186681.39351429},{"name":"Object.create({})","samples":1063608,"opsSec":2115528.559382947},{"name":"new Function with empty prototype","samples":51868719,"opsSec":103720563.90889879},{"name":"Empty class","samples":36651021,"opsSec":73300610.43907812}]}-->
