## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,655,915|1828162|
|Using delete property (proto: null)|16,003,078|8001549|
|Using delete property (cached proto: null)|3,620,518|1810459|
|Using undefined assignment|73,322,871|36665539|
|Using undefined assignment (proto: null)|16,971,252|8486424|
|Using undefined property (cached proto: null)|73,312,508|36656261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:38:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3655915.897420203,"samples":1828162},{"name":"Using delete property (proto: null)","opsSec":16003078.95633604,"samples":8001549},{"name":"Using delete property (cached proto: null)","opsSec":3620518.960882208,"samples":1810459},{"name":"Using undefined assignment","opsSec":73322871.70419887,"samples":36665539},{"name":"Using undefined assignment (proto: null)","opsSec":16971252.227095593,"samples":8486424},{"name":"Using undefined property (cached proto: null)","opsSec":73312508.51049843,"samples":36656261}]}-->
