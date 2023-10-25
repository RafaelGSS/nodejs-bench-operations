## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,442,244|96|
|using Array.includes (first item)|710,921,181|96|
|Using raw comparison|712,469,125|97|
|Using raw comparison (first item)|711,990,866|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":709442244.2018203,"samples":8},{"name":"using Array.includes (first item)","opsSec":710921181.0641251,"samples":8},{"name":"Using raw comparison","opsSec":712469124.9507518,"samples":7},{"name":"Using raw comparison (first item)","opsSec":711990865.9772139,"samples":7}]}-->
