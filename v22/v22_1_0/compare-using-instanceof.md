## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|334,956|167479|
|[True conditional] Using constructor name|334,036|167019|
|[True conditional] Check if property is valid then instanceof |334,101|167051|
|[False conditional] Using instanceof only|14,600,569|7300285|
|[False conditional] Using constructor name|14,524,257|7262129|
|[False conditional] Check if property is valid then instanceof |14,592,988|7296495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:51:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":334956.850428091,"samples":167479},{"name":"[True conditional] Using constructor name","opsSec":334036.6745424736,"samples":167019},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":334101.6552070778,"samples":167051},{"name":"[False conditional] Using instanceof only","opsSec":14600569.386797031,"samples":7300285},{"name":"[False conditional] Using constructor name","opsSec":14524257.535213009,"samples":7262129},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14592988.657467045,"samples":7296495}]}-->
