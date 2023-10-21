## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,716,951|89|
|Object.create({})|826,542|73|
|Cached Empty.prototype|591,290,566|96|
|Empty.prototype|879,643|74|
|Empty class|626,201|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":37716951.07499896,"samples":6},{"name":"Object.create({})","opsSec":826542.0271547645,"samples":4},{"name":"Cached Empty.prototype","opsSec":591290566.4709147,"samples":9},{"name":"Empty.prototype","opsSec":879642.6075022463,"samples":3},{"name":"Empty class","opsSec":626200.6384387305,"samples":3}]}-->
