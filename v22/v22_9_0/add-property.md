## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|100,723,818|50367465|
|Using dot notation|67,137,503|33568759|
|Using define property (writable)|4,756,784|2378865|
|Using define property initialized (writable)|6,710,486|3355381|
|Using define property (getter)|2,365,987|1182996|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:01:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":100723818.14838186,"samples":50367465},{"name":"Using dot notation","opsSec":67137503.09547432,"samples":33568759},{"name":"Using define property (writable)","opsSec":4756784.094455681,"samples":2378865},{"name":"Using define property initialized (writable)","opsSec":6710486.064813016,"samples":3355381},{"name":"Using define property (getter)","opsSec":2365987.8169335397,"samples":1182996}]}-->
