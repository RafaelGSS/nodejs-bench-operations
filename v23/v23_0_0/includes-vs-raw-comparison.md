## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|83,398,079|41722728|
|using Array.includes (first item)|77,172,358|38586183|
|Using raw comparison|95,234,838|47623287|
|Using raw comparison (first item)|89,280,280|44640874|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:58:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":83398079.5525601,"samples":41722728},{"name":"using Array.includes (first item)","opsSec":77172358.59145358,"samples":38586183},{"name":"Using raw comparison","opsSec":95234838.9726721,"samples":47623287},{"name":"Using raw comparison (first item)","opsSec":89280280.05363536,"samples":44640874}]}-->
