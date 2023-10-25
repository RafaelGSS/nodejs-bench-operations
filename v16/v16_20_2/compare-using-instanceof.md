## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|197,105|57|
|[True conditional] Using constructor name|154,911|91|
|[True conditional] Check if property is valid then instanceof |158,405|90|
|[False conditional] Using instanceof only|712,978,053|95|
|[False conditional] Using constructor name|712,681,779|95|
|[False conditional] Check if property is valid then instanceof |713,987,145|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":197104.96344618677,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":154910.98937721044,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":158404.60820954994,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":712978052.5671902,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":712681778.5674716,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":713987145.2995459,"samples":6}]}-->
