## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|322,746|161374|
|[True conditional] Using constructor name|315,790|157896|
|[True conditional] Check if property is valid then instanceof |320,642|160322|
|[False conditional] Using instanceof only|19,872,338|9936170|
|[False conditional] Using constructor name|19,889,774|9944888|
|[False conditional] Check if property is valid then instanceof |19,877,970|9938986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":322746.4798640826,"samples":161374},{"name":"[True conditional] Using constructor name","opsSec":315790.57515287225,"samples":157896},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":320642.7821987122,"samples":160322},{"name":"[False conditional] Using instanceof only","opsSec":19872338.489690557,"samples":9936170},{"name":"[False conditional] Using constructor name","opsSec":19889774.209887225,"samples":9944888},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19877970.80734362,"samples":9938986}]}-->
