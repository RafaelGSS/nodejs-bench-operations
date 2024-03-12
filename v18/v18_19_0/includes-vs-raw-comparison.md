## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|817,990,345|99|
|using Array.includes (first item)|817,542,903|97|
|Using raw comparison|817,842,502|98|
|Using raw comparison (first item)|817,846,889|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"using Array.includes","opsSec":817990345.2659092,"samples":6},{"name":"using Array.includes (first item)","opsSec":817542902.8907378,"samples":9},{"name":"Using raw comparison","opsSec":817842502.4792736,"samples":6},{"name":"Using raw comparison (first item)","opsSec":817846888.9102714,"samples":6}]}-->
