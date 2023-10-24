## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|172,781|61|
|[True conditional] Using constructor name|143,084|91|
|[True conditional] Check if property is valid then instanceof |146,696|96|
|[False conditional] Using instanceof only|716,377,961|93|
|[False conditional] Using constructor name|715,745,087|97|
|[False conditional] Check if property is valid then instanceof |716,847,530|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":172781.2767911401,"samples":5},{"name":"[True conditional] Using constructor name","opsSec":143083.84982470988,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":146695.8010803075,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":716377961.41641,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":715745086.9510347,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":716847529.6233689,"samples":6}]}-->
