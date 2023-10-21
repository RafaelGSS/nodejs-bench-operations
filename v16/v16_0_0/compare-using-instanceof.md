## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|255,530|86|
|[True conditional] Using constructor name|254,140|89|
|[True conditional] Check if property is valid then instanceof |258,551|85|
|[False conditional] Using instanceof only|585,126,200|95|
|[False conditional] Using constructor name|586,336,768|90|
|[False conditional] Check if property is valid then instanceof |589,895,196|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":255530.47320477135,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":254139.57157936788,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":258551.36494332275,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":585126200.0198668,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":586336768.4592005,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":589895195.9820844,"samples":8}]}-->
