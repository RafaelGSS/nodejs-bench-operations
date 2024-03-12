## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|819,781,392|96|
|using Array.includes (first item)|822,244,135|95|
|Using raw comparison|823,387,015|96|
|Using raw comparison (first item)|824,314,994|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"using Array.includes","opsSec":819781391.7118386,"samples":8},{"name":"using Array.includes (first item)","opsSec":822244135.0732285,"samples":6},{"name":"Using raw comparison","opsSec":823387015.3938857,"samples":9},{"name":"Using raw comparison (first item)","opsSec":824314994.4864911,"samples":6}]}-->
