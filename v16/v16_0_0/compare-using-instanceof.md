## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|406,373|84|
|[True conditional] Using constructor name|394,330|84|
|[True conditional] Check if property is valid then instanceof |394,963|83|
|[False conditional] Using instanceof only|846,622,510|91|
|[False conditional] Using constructor name|846,845,092|97|
|[False conditional] Check if property is valid then instanceof |847,938,106|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:11:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":406372.9526843884,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":394329.7953887597,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":394963.3531842482,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846622510.0507176,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":846845092.4009019,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":847938106.0980846,"samples":6}]}-->
