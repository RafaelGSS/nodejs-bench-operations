## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|182,062|56|
|[True conditional] Using constructor name|144,416|92|
|[True conditional] Check if property is valid then instanceof |144,434|93|
|[False conditional] Using instanceof only|710,071,309|94|
|[False conditional] Using constructor name|711,334,395|99|
|[False conditional] Check if property is valid then instanceof |709,527,134|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":182062.3572310811,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":144415.8291504846,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":144434.05338431467,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":710071308.9308871,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":711334395.2177022,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":709527134.2716991,"samples":6}]}-->
