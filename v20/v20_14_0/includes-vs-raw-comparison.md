## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|20,046,549|10023275|
|using Array.includes (first item)|19,940,557|9970279|
|Using raw comparison|20,091,000|10045501|
|Using raw comparison (first item)|20,073,006|10036504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:38:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":20046549.318397075,"samples":10023275},{"name":"using Array.includes (first item)","opsSec":19940557.44167704,"samples":9970279},{"name":"Using raw comparison","opsSec":20091000.47306269,"samples":10045501},{"name":"Using raw comparison (first item)","opsSec":20073006.75542372,"samples":10036504}]}-->
