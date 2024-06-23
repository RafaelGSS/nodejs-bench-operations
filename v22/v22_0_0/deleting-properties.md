## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,382,956|1691479|
|Using delete property (proto: null)|8,725,931|4362966|
|Using delete property (cached proto: null)|3,306,092|1653047|
|Using undefined assignment|16,169,016|8084509|
|Using undefined assignment (proto: null)|8,391,363|4195682|
|Using undefined property (cached proto: null)|15,963,507|7981754|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:24:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3382956.8700916525,"samples":1691479},{"name":"Using delete property (proto: null)","opsSec":8725931.389189262,"samples":4362966},{"name":"Using delete property (cached proto: null)","opsSec":3306092.4196848706,"samples":1653047},{"name":"Using undefined assignment","opsSec":16169016.674122745,"samples":8084509},{"name":"Using undefined assignment (proto: null)","opsSec":8391363.664323574,"samples":4195682},{"name":"Using undefined property (cached proto: null)","opsSec":15963507.361459142,"samples":7981754}]}-->
