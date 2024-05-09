## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,240,298|7620150|
|using Array.includes (first item)|15,301,004|7650503|
|Using raw comparison|15,258,321|7629161|
|Using raw comparison (first item)|15,304,793|7652397|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:44:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":15240298.994144283,"samples":7620150},{"name":"using Array.includes (first item)","opsSec":15301004.01085102,"samples":7650503},{"name":"Using raw comparison","opsSec":15258321.481224831,"samples":7629161},{"name":"Using raw comparison (first item)","opsSec":15304793.051048558,"samples":7652397}]}-->
