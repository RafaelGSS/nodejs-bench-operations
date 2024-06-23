## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,249,243|1624622|
|Using delete property (proto: null)|9,775,138|4887570|
|Using delete property (cached proto: null)|3,161,154|1580578|
|Using undefined assignment|20,098,967|10049484|
|Using undefined assignment (proto: null)|9,354,803|4677402|
|Using undefined property (cached proto: null)|20,115,985|10057993|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:22:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3249243.5256105377,"samples":1624622},{"name":"Using delete property (proto: null)","opsSec":9775138.611930337,"samples":4887570},{"name":"Using delete property (cached proto: null)","opsSec":3161154.564837837,"samples":1580578},{"name":"Using undefined assignment","opsSec":20098967.55776078,"samples":10049484},{"name":"Using undefined assignment (proto: null)","opsSec":9354803.98127793,"samples":4677402},{"name":"Using undefined property (cached proto: null)","opsSec":20115985.557439018,"samples":10057993}]}-->
