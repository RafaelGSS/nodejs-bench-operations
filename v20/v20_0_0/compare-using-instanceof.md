## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|260,628|53|
|[True conditional] Using constructor name|213,422|97|
|[True conditional] Check if property is valid then instanceof |214,866|97|
|[False conditional] Using instanceof only|916,266,149|95|
|[False conditional] Using constructor name|916,931,038|99|
|[False conditional] Check if property is valid then instanceof |917,245,242|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:01:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":260627.89823526435,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":213422.2307025607,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":214866.4762376148,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":916266148.5159158,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":916931037.9747696,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":917245241.5597596,"samples":6}]}-->
