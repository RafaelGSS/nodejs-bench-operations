## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|306,863|153432|
|[True conditional] Using constructor name|304,263|152132|
|[True conditional] Check if property is valid then instanceof |309,732|154867|
|[False conditional] Using instanceof only|13,047,417|6523709|
|[False conditional] Using constructor name|16,307,315|8153658|
|[False conditional] Check if property is valid then instanceof |16,138,654|8069328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:52:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":306863.5965848275,"samples":153432},{"name":"[True conditional] Using constructor name","opsSec":304263.9511065714,"samples":152132},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":309732.1141236471,"samples":154867},{"name":"[False conditional] Using instanceof only","opsSec":13047417.856905647,"samples":6523709},{"name":"[False conditional] Using constructor name","opsSec":16307315.44790869,"samples":8153658},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16138654.291596767,"samples":8069328}]}-->
