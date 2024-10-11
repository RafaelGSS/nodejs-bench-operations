## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|116,118,963|58091287|
|Using dot notation|73,083,781|36675254|
|Using define property (writable)|3,742,762|1871601|
|Using define property initialized (writable)|5,549,566|2775255|
|Using define property (getter)|2,116,479|1058275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:00:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":116118963.33517122,"samples":58091287},{"name":"Using dot notation","opsSec":73083781.72256047,"samples":36675254},{"name":"Using define property (writable)","opsSec":3742762.6820019125,"samples":1871601},{"name":"Using define property initialized (writable)","opsSec":5549566.274056831,"samples":2775255},{"name":"Using define property (getter)","opsSec":2116479.783666697,"samples":1058275}]}-->
