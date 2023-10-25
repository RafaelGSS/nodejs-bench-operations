## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|754,763,898|84|
|using Array.includes (first item)|785,801,477|86|
|Using raw comparison|793,701,804|91|
|Using raw comparison (first item)|750,081,632|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":754763897.8771604,"samples":8},{"name":"using Array.includes (first item)","opsSec":785801476.682705,"samples":6},{"name":"Using raw comparison","opsSec":793701804.4857492,"samples":8},{"name":"Using raw comparison (first item)","opsSec":750081632.1775306,"samples":6}]}-->
