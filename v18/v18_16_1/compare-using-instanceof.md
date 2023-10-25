## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|164,867|59|
|[True conditional] Using constructor name|123,116|92|
|[True conditional] Check if property is valid then instanceof |125,520|87|
|[False conditional] Using instanceof only|618,414,432|89|
|[False conditional] Using constructor name|623,393,970|88|
|[False conditional] Check if property is valid then instanceof |661,685,214|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":164867.12776311286,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":123115.62952362682,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":125519.70478486127,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":618414431.5622146,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":623393970.3612261,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":661685214.2276506,"samples":8}]}-->
