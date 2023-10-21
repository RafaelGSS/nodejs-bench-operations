## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,890,745|94|
|using Array.includes (first item)|599,054,223|97|
|Using raw comparison|599,342,701|97|
|Using raw comparison (first item)|599,606,194|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":590890744.8952146,"samples":9},{"name":"using Array.includes (first item)","opsSec":599054222.5028611,"samples":8},{"name":"Using raw comparison","opsSec":599342701.0488621,"samples":6},{"name":"Using raw comparison (first item)","opsSec":599606193.5937462,"samples":6}]}-->
