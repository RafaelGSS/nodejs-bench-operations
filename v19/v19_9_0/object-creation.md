## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,188,969|92|
|Object.create({})|1,426,287|76|
|Cached Empty.prototype|710,758,356|98|
|Empty.prototype|1,279,959|73|
|Empty class|909,210|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":48188968.69238555,"samples":6},{"name":"Object.create({})","opsSec":1426287.1468762194,"samples":3},{"name":"Cached Empty.prototype","opsSec":710758356.1575743,"samples":6},{"name":"Empty.prototype","opsSec":1279959.1910986453,"samples":3},{"name":"Empty class","opsSec":909210.4428654304,"samples":3}]}-->
