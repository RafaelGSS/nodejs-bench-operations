## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|323,841|161921|
|[True conditional] Using constructor name|320,955|160478|
|[True conditional] Check if property is valid then instanceof |321,545|160773|
|[False conditional] Using instanceof only|20,066,414|10033208|
|[False conditional] Using constructor name|19,985,106|9992554|
|[False conditional] Check if property is valid then instanceof |20,020,051|10010306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:59:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":323841.1495931033,"samples":161921},{"name":"[True conditional] Using constructor name","opsSec":320955.4858293537,"samples":160478},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":321545.52604183333,"samples":160773},{"name":"[False conditional] Using instanceof only","opsSec":20066414.956566893,"samples":10033208},{"name":"[False conditional] Using constructor name","opsSec":19985106.081263546,"samples":9992554},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":20020051.758914545,"samples":10010306}]}-->
