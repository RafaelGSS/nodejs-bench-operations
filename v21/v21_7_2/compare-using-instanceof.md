## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|318,565|159283|
|[True conditional] Using constructor name|325,618|162810|
|[True conditional] Check if property is valid then instanceof |330,367|165184|
|[False conditional] Using instanceof only|15,299,436|7649719|
|[False conditional] Using constructor name|15,339,811|7669906|
|[False conditional] Check if property is valid then instanceof |15,295,420|7647711|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:56:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":318565.54636268836,"samples":159283},{"name":"[True conditional] Using constructor name","opsSec":325618.68840793264,"samples":162810},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":330367.251387826,"samples":165184},{"name":"[False conditional] Using instanceof only","opsSec":15299436.56185192,"samples":7649719},{"name":"[False conditional] Using constructor name","opsSec":15339811.631790739,"samples":7669906},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15295420.929365022,"samples":7647711}]}-->
