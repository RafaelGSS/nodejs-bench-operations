## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|461,257|230630|
|[True conditional] Using constructor name|352,097|176129|
|[True conditional] Check if property is valid then instanceof |353,731|177170|
|[False conditional] Using instanceof only|97,686,768|48843458|
|[False conditional] Using constructor name|98,181,956|49090989|
|[False conditional] Check if property is valid then instanceof |98,294,719|49154048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:06:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":461257.4667739924,"samples":230630},{"name":"[True conditional] Using constructor name","opsSec":352097.9595060739,"samples":176129},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":353731.0032630043,"samples":177170},{"name":"[False conditional] Using instanceof only","opsSec":97686768.29760632,"samples":48843458},{"name":"[False conditional] Using constructor name","opsSec":98181956.9890612,"samples":49090989},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":98294719.46480691,"samples":49154048}]}-->
