## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|277,464|53|
|[True conditional] Using constructor name|231,737|99|
|[True conditional] Check if property is valid then instanceof |234,356|97|
|[False conditional] Using instanceof only|912,856,098|99|
|[False conditional] Using constructor name|913,032,554|99|
|[False conditional] Check if property is valid then instanceof |913,428,312|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:02:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":277464.0148980207,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":231737.14634359902,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":234356.18829249655,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":912856097.9141179,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":913032553.5364028,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":913428311.9060191,"samples":6}]}-->
