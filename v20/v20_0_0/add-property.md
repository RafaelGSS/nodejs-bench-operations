## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|13,933,392|6966697|
|Using dot notation|13,548,374|6774188|
|Using define property (writable)|2,994,448|1497225|
|Using define property initialized (writable)|3,711,080|1855541|
|Using define property (getter)|1,830,673|915337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:17:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":13933392.8568513,"samples":6966697},{"name":"Using dot notation","opsSec":13548374.31993359,"samples":6774188},{"name":"Using define property (writable)","opsSec":2994448.335185077,"samples":1497225},{"name":"Using define property initialized (writable)","opsSec":3711080.9905208247,"samples":1855541},{"name":"Using define property (getter)","opsSec":1830673.165215418,"samples":915337}]}-->
