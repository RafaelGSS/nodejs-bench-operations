## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,566,450|1783277|
|Using delete property (proto: null)|15,261,359|7641671|
|Using delete property (cached proto: null)|3,577,214|1788844|
|Using undefined assignment|75,853,503|37929663|
|Using undefined assignment (proto: null)|16,133,292|8067634|
|Using undefined property (cached proto: null)|74,966,947|37488128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:38:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3566450.9580989187,"samples":1783277},{"name":"Using delete property (proto: null)","opsSec":15261359.354848964,"samples":7641671},{"name":"Using delete property (cached proto: null)","opsSec":3577214.362509547,"samples":1788844},{"name":"Using undefined assignment","opsSec":75853503.0299864,"samples":37929663},{"name":"Using undefined assignment (proto: null)","opsSec":16133292.57512393,"samples":8067634},{"name":"Using undefined property (cached proto: null)","opsSec":74966947.05431648,"samples":37488128}]}-->
