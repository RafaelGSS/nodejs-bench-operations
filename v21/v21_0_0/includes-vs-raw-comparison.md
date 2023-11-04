## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|585,742,530|97|
|using Array.includes (first item)|582,351,968|96|
|Using raw comparison|589,143,038|95|
|Using raw comparison (first item)|590,623,486|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:19:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":585742530.1006917,"samples":6},{"name":"using Array.includes (first item)","opsSec":582351967.9275491,"samples":6},{"name":"Using raw comparison","opsSec":589143037.7082245,"samples":6},{"name":"Using raw comparison (first item)","opsSec":590623485.6486257,"samples":7}]}-->
