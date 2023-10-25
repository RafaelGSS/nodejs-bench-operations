## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,342,634|80|
|Object.create({})|1,306,872|74|
|Cached Empty.prototype|681,361,367|89|
|Empty.prototype|1,178,425|73|
|Empty class|839,219|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":40342633.68748828,"samples":6},{"name":"Object.create({})","opsSec":1306871.9619049723,"samples":4},{"name":"Cached Empty.prototype","opsSec":681361367.2035276,"samples":6},{"name":"Empty.prototype","opsSec":1178425.3899849874,"samples":3},{"name":"Empty class","opsSec":839218.9597348523,"samples":3}]}-->
