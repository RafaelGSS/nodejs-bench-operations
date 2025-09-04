## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|918,087|459044|
|Using brackets {}|974,309|487209|
|Using '' + |887,502|443801|
|Using date.toString()|992,369|496186|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:52:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":459044,"opsSec":918087.5483009262},{"name":"Using brackets {}","samples":487209,"opsSec":974309.7697735344},{"name":"Using '' + ","samples":443801,"opsSec":887502.5056441022},{"name":"Using date.toString()","samples":496186,"opsSec":992369.8703742583}]}-->
