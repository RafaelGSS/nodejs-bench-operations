## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|825,027,795|96|
|using Array.includes (first item)|825,772,998|98|
|Using raw comparison|827,598,924|94|
|Using raw comparison (first item)|827,013,180|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":825027794.5727352,"samples":6},{"name":"using Array.includes (first item)","opsSec":825772998.1645721,"samples":7},{"name":"Using raw comparison","opsSec":827598923.9092534,"samples":6},{"name":"Using raw comparison (first item)","opsSec":827013179.8720958,"samples":7}]}-->
