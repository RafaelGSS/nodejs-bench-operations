## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,292,205|6146103|
|Object.create({})|1,842,052|921027|
|Cached Empty.prototype|14,211,645|7105823|
|Empty.prototype|2,126,374|1068626|
|Empty class|1,295,478|647740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12292205.680339536,"samples":6146103},{"name":"Object.create({})","opsSec":1842052.7105664592,"samples":921027},{"name":"Cached Empty.prototype","opsSec":14211645.516886197,"samples":7105823},{"name":"Empty.prototype","opsSec":2126374.5733945984,"samples":1068626},{"name":"Empty class","opsSec":1295478.9972984076,"samples":647740}]}-->
