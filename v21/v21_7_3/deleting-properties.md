## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,229,679|1614840|
|Using delete property (proto: null)|8,924,528|4462265|
|Using delete property (cached proto: null)|3,103,523|1551762|
|Using undefined assignment|15,452,340|7726171|
|Using undefined assignment (proto: null)|9,287,437|4643719|
|Using undefined property (cached proto: null)|15,459,632|7729817|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:23:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3229679.580143805,"samples":1614840},{"name":"Using delete property (proto: null)","opsSec":8924528.375728248,"samples":4462265},{"name":"Using delete property (cached proto: null)","opsSec":3103523.925513374,"samples":1551762},{"name":"Using undefined assignment","opsSec":15452340.176612843,"samples":7726171},{"name":"Using undefined assignment (proto: null)","opsSec":9287437.294134187,"samples":4643719},{"name":"Using undefined property (cached proto: null)","opsSec":15459632.763150053,"samples":7729817}]}-->
