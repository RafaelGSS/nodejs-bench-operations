## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|697,150,338|96|
|using Array.includes (first item)|709,783,528|97|
|Using raw comparison|711,237,636|98|
|Using raw comparison (first item)|708,936,569|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":697150337.7325624,"samples":5},{"name":"using Array.includes (first item)","opsSec":709783527.6144496,"samples":7},{"name":"Using raw comparison","opsSec":711237636.215471,"samples":14},{"name":"Using raw comparison (first item)","opsSec":708936568.5131605,"samples":6}]}-->
