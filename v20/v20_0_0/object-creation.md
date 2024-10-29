## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,741,442|23374409|
|Object.create({})|2,010,956|1005526|
|Cached Empty.prototype|81,689,460|40847247|
|Empty.prototype|2,240,578|1126806|
|Empty class|1,379,695|701331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:18:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":46741442.200420775,"samples":23374409},{"name":"Object.create({})","opsSec":2010956.5881537185,"samples":1005526},{"name":"Cached Empty.prototype","opsSec":81689460.29545659,"samples":40847247},{"name":"Empty.prototype","opsSec":2240578.5991006037,"samples":1126806},{"name":"Empty class","opsSec":1379695.0254132308,"samples":701331}]}-->
