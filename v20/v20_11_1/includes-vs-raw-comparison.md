## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|857,670,809|98|
|using Array.includes (first item)|854,096,807|93|
|Using raw comparison|847,832,021|97|
|Using raw comparison (first item)|840,776,253|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:55:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":857670809.1599735,"samples":9},{"name":"using Array.includes (first item)","opsSec":854096806.5144886,"samples":6},{"name":"Using raw comparison","opsSec":847832020.5644073,"samples":7},{"name":"Using raw comparison (first item)","opsSec":840776253.4506136,"samples":6}]}-->
