## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|55,480,209|91|
|Object.create({})|1,023,335|79|
|Cached Empty.prototype|592,101,543|98|
|Empty.prototype|1,135,659|82|
|Empty class|655,152|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":55480208.69424268,"samples":6},{"name":"Object.create({})","opsSec":1023335.1740491575,"samples":3},{"name":"Cached Empty.prototype","opsSec":592101543.0796096,"samples":7},{"name":"Empty.prototype","opsSec":1135659.481125978,"samples":4},{"name":"Empty class","opsSec":655151.6085755026,"samples":3}]}-->
