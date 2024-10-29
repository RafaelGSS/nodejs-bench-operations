## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,903,647|1951930|
|Using delete property (proto: null)|16,592,144|8296075|
|Using delete property (cached proto: null)|3,890,492|1945546|
|Using undefined assignment|77,381,207|38690610|
|Using undefined assignment (proto: null)|18,450,766|9226130|
|Using undefined property (cached proto: null)|75,787,892|37898378|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:38:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3903647.6962163937,"samples":1951930},{"name":"Using delete property (proto: null)","opsSec":16592144.856435096,"samples":8296075},{"name":"Using delete property (cached proto: null)","opsSec":3890492.055001182,"samples":1945546},{"name":"Using undefined assignment","opsSec":77381207.92853156,"samples":38690610},{"name":"Using undefined assignment (proto: null)","opsSec":18450766.96393728,"samples":9226130},{"name":"Using undefined property (cached proto: null)","opsSec":75787892.45440167,"samples":37898378}]}-->
