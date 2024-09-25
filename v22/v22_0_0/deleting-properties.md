## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,733,526|1366764|
|Using delete property (proto: null)|7,800,453|3900227|
|Using delete property (cached proto: null)|2,691,868|1345935|
|Using undefined assignment|12,810,091|6405046|
|Using undefined assignment (proto: null)|8,330,145|4165073|
|Using undefined property (cached proto: null)|12,764,534|6382268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:57:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2733526.0810695505,"samples":1366764},{"name":"Using delete property (proto: null)","opsSec":7800453.70361081,"samples":3900227},{"name":"Using delete property (cached proto: null)","opsSec":2691868.6863668924,"samples":1345935},{"name":"Using undefined assignment","opsSec":12810091.28244954,"samples":6405046},{"name":"Using undefined assignment (proto: null)","opsSec":8330145.200256271,"samples":4165073},{"name":"Using undefined property (cached proto: null)","opsSec":12764534.851195654,"samples":6382268}]}-->
