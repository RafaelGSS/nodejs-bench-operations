## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|426,330|213166|
|[True conditional] Using constructor name|331,239|165629|
|[True conditional] Check if property is valid then instanceof |340,421|170214|
|[False conditional] Using instanceof only|95,736,213|47868142|
|[False conditional] Using constructor name|96,593,076|48297318|
|[False conditional] Check if property is valid then instanceof |96,614,721|48307392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":426330.0405871335,"samples":213166},{"name":"[True conditional] Using constructor name","opsSec":331239.8679296296,"samples":165629},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":340421.4577804244,"samples":170214},{"name":"[False conditional] Using instanceof only","opsSec":95736213.34667455,"samples":47868142},{"name":"[False conditional] Using constructor name","opsSec":96593076.60137135,"samples":48297318},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96614721.39366053,"samples":48307392}]}-->
