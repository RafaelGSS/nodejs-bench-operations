## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,929|56|
|[True conditional] Using constructor name|147,195|95|
|[True conditional] Check if property is valid then instanceof |148,436|92|
|[False conditional] Using instanceof only|710,383,937|96|
|[False conditional] Using constructor name|711,270,795|96|
|[False conditional] Check if property is valid then instanceof |709,187,161|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":186928.61680602902,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":147195.09400614188,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148435.6472283005,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":710383936.9322736,"samples":10},{"name":"[False conditional] Using constructor name","opsSec":711270794.9951831,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":709187160.6412472,"samples":10}]}-->
