## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,845,954|7422978|
|using Array.includes (first item)|15,280,362|7640182|
|Using raw comparison|16,085,724|8042863|
|Using raw comparison (first item)|16,052,541|8026271|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:57:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14845954.515414245,"samples":7422978},{"name":"using Array.includes (first item)","opsSec":15280362.410850277,"samples":7640182},{"name":"Using raw comparison","opsSec":16085724.294953553,"samples":8042863},{"name":"Using raw comparison (first item)","opsSec":16052541.422140198,"samples":8026271}]}-->
