## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|268,267|55|
|[True conditional] Using constructor name|221,980|98|
|[True conditional] Check if property is valid then instanceof |223,896|98|
|[False conditional] Using instanceof only|936,709,633|95|
|[False conditional] Using constructor name|940,225,263|97|
|[False conditional] Check if property is valid then instanceof |938,937,656|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:01:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":268267.2760931702,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":221979.8597595103,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":223896.09356476352,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":936709632.6375676,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":940225263.1247319,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":938937656.182004,"samples":8}]}-->
