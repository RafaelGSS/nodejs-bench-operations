## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,929,702|1464852|
|Using delete property (proto: null)|8,835,229|4417616|
|Using delete property (cached proto: null)|2,931,341|1465671|
|Using undefined assignment|19,397,294|9698648|
|Using undefined assignment (proto: null)|8,567,336|4283669|
|Using undefined property (cached proto: null)|16,962,467|8481366|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:18:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2929702.8925681906,"samples":1464852},{"name":"Using delete property (proto: null)","opsSec":8835229.861818526,"samples":4417616},{"name":"Using delete property (cached proto: null)","opsSec":2931341.777225095,"samples":1465671},{"name":"Using undefined assignment","opsSec":19397294.409444608,"samples":9698648},{"name":"Using undefined assignment (proto: null)","opsSec":8567336.526430335,"samples":4283669},{"name":"Using undefined property (cached proto: null)","opsSec":16962467.41960008,"samples":8481366}]}-->
