## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|585,201,442|95|
|Using backtick (`)|586,852,752|92|
|Using array.join|5,539,111|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:53:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":585201442.0584515,"samples":7},{"name":"Using backtick (`)","opsSec":586852751.9640403,"samples":9},{"name":"Using array.join","opsSec":5539111.035696682,"samples":9}]}-->
