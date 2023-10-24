## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|56,489,675|85|
|using Array.includes (first item)|113,705,508|87|
|Using raw comparison|726,104,746|85|
|Using raw comparison (first item)|706,962,608|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":56489674.97587588,"samples":6},{"name":"using Array.includes (first item)","opsSec":113705508.31250069,"samples":6},{"name":"Using raw comparison","opsSec":726104745.7466456,"samples":7},{"name":"Using raw comparison (first item)","opsSec":706962607.5531682,"samples":6}]}-->
