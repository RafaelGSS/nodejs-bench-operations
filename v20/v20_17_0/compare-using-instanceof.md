## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|391,289|195851|
|[True conditional] Using constructor name|322,044|161041|
|[True conditional] Check if property is valid then instanceof |306,528|154290|
|[False conditional] Using instanceof only|94,749,928|47375174|
|[False conditional] Using constructor name|96,320,769|48168490|
|[False conditional] Check if property is valid then instanceof |96,570,652|48285335|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:09:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":391289.41739508905,"samples":195851},{"name":"[True conditional] Using constructor name","opsSec":322044.9081556583,"samples":161041},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":306528.4285240491,"samples":154290},{"name":"[False conditional] Using instanceof only","opsSec":94749928.06831878,"samples":47375174},{"name":"[False conditional] Using constructor name","opsSec":96320769.40715031,"samples":48168490},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96570652.231,"samples":48285335}]}-->
