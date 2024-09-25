## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|887,687|443844|
|Using brackets {}|882,307|441154|
|Using '' + |893,645|446823|
|Using date.toString()|976,056|488029|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:45:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":887687.7121712164,"samples":443844},{"name":"Using brackets {}","opsSec":882307.5004536158,"samples":441154},{"name":"Using '' + ","opsSec":893645.2726808141,"samples":446823},{"name":"Using date.toString()","opsSec":976056.739334151,"samples":488029}]}-->
