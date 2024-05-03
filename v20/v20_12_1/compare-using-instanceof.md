## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|262,504|57|
|[True conditional] Using constructor name|217,454|97|
|[True conditional] Check if property is valid then instanceof |219,093|98|
|[False conditional] Using instanceof only|939,454,080|98|
|[False conditional] Using constructor name|939,689,257|100|
|[False conditional] Check if property is valid then instanceof |940,654,743|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:00:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":262503.6277931306,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":217453.9198828867,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":219093.2666166107,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":939454080.2460455,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":939689257.3404241,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":940654743.1747468,"samples":6}]}-->
