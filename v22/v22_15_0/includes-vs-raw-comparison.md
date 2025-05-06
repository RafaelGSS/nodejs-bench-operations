## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,366,444|35183229|
|using Array.includes (first item)|79,800,055|39900039|
|Using raw comparison|100,238,704|50120379|
|Using raw comparison (first item)|99,461,999|49881497|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:50:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35183229,"opsSec":70366444.3489098},{"name":"using Array.includes (first item)","samples":39900039,"opsSec":79800055.49638435},{"name":"Using raw comparison","samples":50120379,"opsSec":100238704.50989942},{"name":"Using raw comparison (first item)","samples":49881497,"opsSec":99461999.51106761}]}-->
