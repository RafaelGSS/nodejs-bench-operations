## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,394,705|1197353|
|Using delete property (proto: null)|7,783,176|3891589|
|Using delete property (cached proto: null)|2,493,005|1246503|
|Using undefined assignment|12,743,240|6371621|
|Using undefined assignment (proto: null)|8,171,916|4086813|
|Using undefined property (cached proto: null)|11,345,938|5672970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:50:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2394705.3379969285,"samples":1197353},{"name":"Using delete property (proto: null)","opsSec":7783176.093612931,"samples":3891589},{"name":"Using delete property (cached proto: null)","opsSec":2493005.870490406,"samples":1246503},{"name":"Using undefined assignment","opsSec":12743240.750873998,"samples":6371621},{"name":"Using undefined assignment (proto: null)","opsSec":8171916.750475733,"samples":4086813},{"name":"Using undefined property (cached proto: null)","opsSec":11345938.58044453,"samples":5672970}]}-->
