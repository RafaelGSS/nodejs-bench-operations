## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|262,877|58|
|[True conditional] Using constructor name|217,273|95|
|[True conditional] Check if property is valid then instanceof |222,110|100|
|[False conditional] Using instanceof only|145,116,176|83|
|[False conditional] Using constructor name|145,303,080|83|
|[False conditional] Check if property is valid then instanceof |147,403,750|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":262876.9631897255,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":217272.66937502782,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":222109.51585693946,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":145116175.907225,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":145303080.03071555,"samples":5},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":147403750.13155952,"samples":5}]}-->
