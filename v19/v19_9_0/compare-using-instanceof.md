## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|161,710|51|
|[True conditional] Using constructor name|127,632|95|
|[True conditional] Check if property is valid then instanceof |129,680|97|
|[False conditional] Using instanceof only|595,773,670|94|
|[False conditional] Using constructor name|598,776,586|97|
|[False conditional] Check if property is valid then instanceof |598,992,779|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":161710.21872010638,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":127632.35874130242,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":129679.53020944096,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":595773670.0482652,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":598776585.9179529,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598992778.6349702,"samples":6}]}-->
