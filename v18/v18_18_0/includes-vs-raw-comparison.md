## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|706,687,133|96|
|using Array.includes (first item)|712,017,955|98|
|Using raw comparison|713,642,902|96|
|Using raw comparison (first item)|711,710,881|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"using Array.includes","opsSec":706687132.7685359,"samples":9},{"name":"using Array.includes (first item)","opsSec":712017954.8574747,"samples":6},{"name":"Using raw comparison","opsSec":713642902.1723611,"samples":6},{"name":"Using raw comparison (first item)","opsSec":711710881.2252192,"samples":10}]}-->
