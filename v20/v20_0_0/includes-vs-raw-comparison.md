## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|12,631,537|6315769|
|using Array.includes (first item)|13,177,457|6588729|
|Using raw comparison|14,179,807|7089904|
|Using raw comparison (first item)|14,186,544|7093273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:21:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":12631537.513510054,"samples":6315769},{"name":"using Array.includes (first item)","opsSec":13177457.289522547,"samples":6588729},{"name":"Using raw comparison","opsSec":14179807.76569959,"samples":7089904},{"name":"Using raw comparison (first item)","opsSec":14186544.254688341,"samples":7093273}]}-->
