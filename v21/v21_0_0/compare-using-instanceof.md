## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|251,593|51|
|[True conditional] Using constructor name|199,704|92|
|[True conditional] Check if property is valid then instanceof |209,887|93|
|[False conditional] Using instanceof only|822,897,160|97|
|[False conditional] Using constructor name|819,613,532|95|
|[False conditional] Check if property is valid then instanceof |819,373,788|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":251593.32385216028,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":199703.8361242393,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":209886.57771134793,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":822897160.2151258,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":819613531.8428692,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":819373787.8498353,"samples":9}]}-->
