## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,379,272|1689716|
|Using delete property (proto: null)|16,962,106|8481058|
|Using delete property (cached proto: null)|3,353,882|1676942|
|Using undefined assignment|76,695,937|38347979|
|Using undefined assignment (proto: null)|18,221,641|9111571|
|Using undefined property (cached proto: null)|77,045,289|38523638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:37:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3379272.707843098,"samples":1689716},{"name":"Using delete property (proto: null)","opsSec":16962106.73868972,"samples":8481058},{"name":"Using delete property (cached proto: null)","opsSec":3353882.0346251274,"samples":1676942},{"name":"Using undefined assignment","opsSec":76695937.13870509,"samples":38347979},{"name":"Using undefined assignment (proto: null)","opsSec":18221641.666468468,"samples":9111571},{"name":"Using undefined property (cached proto: null)","opsSec":77045289.77242966,"samples":38523638}]}-->
