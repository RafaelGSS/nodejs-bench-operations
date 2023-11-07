## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|854,433,469|98|
|Using dot notation|853,901,011|98|
|Using define property (writable)|4,701,078|99|
|Using define property initialized (writable)|6,427,858|93|
|Using define property (getter)|2,446,968|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:56:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":854433468.755534,"samples":6},{"name":"Using dot notation","opsSec":853901011.4584838,"samples":8},{"name":"Using define property (writable)","opsSec":4701078.078457609,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6427858.244403295,"samples":5},{"name":"Using define property (getter)","opsSec":2446967.927215301,"samples":4}]}-->
