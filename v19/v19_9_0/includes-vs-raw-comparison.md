## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,460,766|92|
|using Array.includes (first item)|711,284,446|95|
|Using raw comparison|712,971,800|97|
|Using raw comparison (first item)|713,287,555|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"using Array.includes","opsSec":709460766.1814797,"samples":6},{"name":"using Array.includes (first item)","opsSec":711284446.4146591,"samples":6},{"name":"Using raw comparison","opsSec":712971800.1902121,"samples":9},{"name":"Using raw comparison (first item)","opsSec":713287555.2106079,"samples":7}]}-->
