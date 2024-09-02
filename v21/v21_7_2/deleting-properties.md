## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,915,152|1457577|
|Using delete property (proto: null)|7,935,829|3967916|
|Using delete property (cached proto: null)|2,882,503|1441252|
|Using undefined assignment|14,187,573|7093787|
|Using undefined assignment (proto: null)|8,661,721|4330861|
|Using undefined property (cached proto: null)|14,139,026|7069514|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:21:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2915152.7639761777,"samples":1457577},{"name":"Using delete property (proto: null)","opsSec":7935829.619252359,"samples":3967916},{"name":"Using delete property (cached proto: null)","opsSec":2882503.089122172,"samples":1441252},{"name":"Using undefined assignment","opsSec":14187573.26208088,"samples":7093787},{"name":"Using undefined assignment (proto: null)","opsSec":8661721.151117828,"samples":4330861},{"name":"Using undefined property (cached proto: null)","opsSec":14139026.557786295,"samples":7069514}]}-->
