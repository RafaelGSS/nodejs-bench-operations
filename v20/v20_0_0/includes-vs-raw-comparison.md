## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|825,152,543|97|
|using Array.includes (first item)|825,589,123|96|
|Using raw comparison|826,968,683|96|
|Using raw comparison (first item)|827,085,476|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"using Array.includes","opsSec":825152542.6667063,"samples":6},{"name":"using Array.includes (first item)","opsSec":825589122.710746,"samples":8},{"name":"Using raw comparison","opsSec":826968683.3030281,"samples":7},{"name":"Using raw comparison (first item)","opsSec":827085475.5419201,"samples":6}]}-->
