## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,480|53|
|[True conditional] Using constructor name|130,263|95|
|[True conditional] Check if property is valid then instanceof |131,390|93|
|[False conditional] Using instanceof only|593,986,919|98|
|[False conditional] Using constructor name|593,120,036|95|
|[False conditional] Check if property is valid then instanceof |592,096,476|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":169480.2606815362,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":130263.39544590334,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":131389.63834237112,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":593986919.4425759,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":593120035.6066624,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":592096476.2905276,"samples":8}]}-->
