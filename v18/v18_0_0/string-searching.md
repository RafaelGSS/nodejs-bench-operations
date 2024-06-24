## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,734,861|4867432|
|Using indexof|19,868,967|9934484|
|Using RegExp.test|8,978,349|4489175|
|Using RegExp.text with cached regex pattern|8,794,453|4397227|
|Using new RegExp.test|3,062,191|1531096|
|Using new RegExp.test with cached regex pattern|3,246,855|1623428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:39:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":9734861.994136244,"samples":4867432},{"name":"Using indexof","opsSec":19868967.55900271,"samples":9934484},{"name":"Using RegExp.test","opsSec":8978349.213227225,"samples":4489175},{"name":"Using RegExp.text with cached regex pattern","opsSec":8794453.082830869,"samples":4397227},{"name":"Using new RegExp.test","opsSec":3062191.1083630123,"samples":1531096},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3246855.182261011,"samples":1623428}]}-->
