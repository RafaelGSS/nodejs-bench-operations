## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|85,173,205|42653516|
|using Array.includes (first item)|82,206,304|41157646|
|Using raw comparison|95,848,945|47931186|
|Using raw comparison (first item)|97,230,979|48627385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:18:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":85173205.98494592,"samples":42653516},{"name":"using Array.includes (first item)","opsSec":82206304.0330013,"samples":41157646},{"name":"Using raw comparison","opsSec":95848945.4797172,"samples":47931186},{"name":"Using raw comparison (first item)","opsSec":97230979.1351013,"samples":48627385}]}-->
