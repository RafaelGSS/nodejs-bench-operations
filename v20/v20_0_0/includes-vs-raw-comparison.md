## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|914,234,712|99|
|using Array.includes (first item)|914,901,289|97|
|Using raw comparison|916,520,703|95|
|Using raw comparison (first item)|915,135,439|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:23:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":914234712.1959611,"samples":6},{"name":"using Array.includes (first item)","opsSec":914901288.7639852,"samples":6},{"name":"Using raw comparison","opsSec":916520702.5725727,"samples":7},{"name":"Using raw comparison (first item)","opsSec":915135438.8073635,"samples":9}]}-->
