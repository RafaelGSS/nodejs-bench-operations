## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,683,877|7341939|
|using Array.includes (first item)|15,293,704|7646853|
|Using raw comparison|16,179,973|8089987|
|Using raw comparison (first item)|16,030,522|8015262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:45:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14683877.67697227,"samples":7341939},{"name":"using Array.includes (first item)","opsSec":15293704.990617272,"samples":7646853},{"name":"Using raw comparison","opsSec":16179973.449894963,"samples":8089987},{"name":"Using raw comparison (first item)","opsSec":16030522.653426718,"samples":8015262}]}-->
