## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|230,083|57|
|[True conditional] Using constructor name|181,546|97|
|[True conditional] Check if property is valid then instanceof |183,215|95|
|[False conditional] Using instanceof only|851,180,332|96|
|[False conditional] Using constructor name|851,500,618|99|
|[False conditional] Check if property is valid then instanceof |851,577,811|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:44:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":230083.4824312284,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":181546.40607151584,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":183215.39977316366,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":851180331.8389312,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":851500617.8585514,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":851577810.5656731,"samples":6}]}-->
