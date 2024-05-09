## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,139,621|1569811|
|Using delete property (proto: null)|8,975,383|4487692|
|Using delete property (cached proto: null)|3,218,024|1609013|
|Using undefined assignment|19,998,313|9999157|
|Using undefined assignment (proto: null)|10,233,861|5116931|
|Using undefined property (cached proto: null)|19,977,183|9988592|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:21:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3139621.196257221,"samples":1569811},{"name":"Using delete property (proto: null)","opsSec":8975383.102463158,"samples":4487692},{"name":"Using delete property (cached proto: null)","opsSec":3218024.255833652,"samples":1609013},{"name":"Using undefined assignment","opsSec":19998313.880008366,"samples":9999157},{"name":"Using undefined assignment (proto: null)","opsSec":10233861.304119386,"samples":5116931},{"name":"Using undefined property (cached proto: null)","opsSec":19977183.68027047,"samples":9988592}]}-->
