## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|47,356,598|23680682|
|Using Object.getOwnPropertyNames()|43,038,835|21520026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:19:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using Object.keys()","opsSec":47356598.031974055,"samples":23680682},{"name":"Using Object.getOwnPropertyNames()","opsSec":43038835.89465296,"samples":21520026}]}-->
