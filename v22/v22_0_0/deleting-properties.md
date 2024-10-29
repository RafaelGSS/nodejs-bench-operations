## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,101,380|2050692|
|Using delete property (proto: null)|17,053,472|8527962|
|Using delete property (cached proto: null)|4,024,864|2012458|
|Using undefined assignment|73,531,332|36765675|
|Using undefined assignment (proto: null)|18,130,132|9065336|
|Using undefined property (cached proto: null)|72,336,482|36174736|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:39:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":4101380.891153284,"samples":2050692},{"name":"Using delete property (proto: null)","opsSec":17053472.870237418,"samples":8527962},{"name":"Using delete property (cached proto: null)","opsSec":4024864.699074546,"samples":2012458},{"name":"Using undefined assignment","opsSec":73531332.05835497,"samples":36765675},{"name":"Using undefined assignment (proto: null)","opsSec":18130132.55603593,"samples":9065336},{"name":"Using undefined property (cached proto: null)","opsSec":72336482.53783068,"samples":36174736}]}-->
