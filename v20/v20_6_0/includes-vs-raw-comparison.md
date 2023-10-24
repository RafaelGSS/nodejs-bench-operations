## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|714,152,705|92|
|using Array.includes (first item)|717,129,298|98|
|Using raw comparison|719,240,532|96|
|Using raw comparison (first item)|717,377,360|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":714152704.6485482,"samples":8},{"name":"using Array.includes (first item)","opsSec":717129297.6554948,"samples":7},{"name":"Using raw comparison","opsSec":719240531.8843725,"samples":6},{"name":"Using raw comparison (first item)","opsSec":717377360.0748997,"samples":6}]}-->
