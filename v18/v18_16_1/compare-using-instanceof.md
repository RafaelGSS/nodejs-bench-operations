## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|181,590|57|
|[True conditional] Using constructor name|145,406|96|
|[True conditional] Check if property is valid then instanceof |145,389|90|
|[False conditional] Using instanceof only|710,809,317|95|
|[False conditional] Using constructor name|710,010,958|98|
|[False conditional] Check if property is valid then instanceof |711,720,264|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":181590.3525774762,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":145405.85802053876,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":145389.38595254172,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":710809317.4972111,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":710010957.8627003,"samples":12},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":711720264.183716,"samples":11}]}-->
