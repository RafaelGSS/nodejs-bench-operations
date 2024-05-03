## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|908,878,486|97|
|using Array.includes (first item)|910,490,275|97|
|Using raw comparison|912,494,510|99|
|Using raw comparison (first item)|911,469,927|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:25:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":908878485.5330005,"samples":6},{"name":"using Array.includes (first item)","opsSec":910490275.4530396,"samples":6},{"name":"Using raw comparison","opsSec":912494510.4756975,"samples":7},{"name":"Using raw comparison (first item)","opsSec":911469926.8815029,"samples":6}]}-->
