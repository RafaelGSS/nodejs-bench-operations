## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|319,971|159986|
|[True conditional] Using constructor name|316,300|158151|
|[True conditional] Check if property is valid then instanceof |322,637|161319|
|[False conditional] Using instanceof only|20,020,954|10010478|
|[False conditional] Using constructor name|19,904,156|9952079|
|[False conditional] Check if property is valid then instanceof |19,414,816|9707409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:53:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":319971.7677005002,"samples":159986},{"name":"[True conditional] Using constructor name","opsSec":316300.11105565797,"samples":158151},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":322637.135332468,"samples":161319},{"name":"[False conditional] Using instanceof only","opsSec":20020954.59855765,"samples":10010478},{"name":"[False conditional] Using constructor name","opsSec":19904156.089174483,"samples":9952079},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19414816.95166225,"samples":9707409}]}-->
