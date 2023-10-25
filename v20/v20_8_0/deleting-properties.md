## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,191,890|89|
|Using delete property (proto: null)|10,183,384|96|
|Using delete property (cached proto: null)|2,246,467|92|
|Using undefined assignment|589,355,623|95|
|Using undefined assignment (proto: null)|11,337,851|94|
|Using undefined property (cached proto: null)|585,141,137|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2191890.1804444212,"samples":5},{"name":"Using delete property (proto: null)","opsSec":10183383.955204532,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2246467.208105072,"samples":5},{"name":"Using undefined assignment","opsSec":589355622.5874732,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":11337851.442385795,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":585141137.1207792,"samples":6}]}-->
