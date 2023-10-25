## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|696,258,526|93|
|using Array.includes (first item)|708,871,154|97|
|Using raw comparison|711,336,267|97|
|Using raw comparison (first item)|709,187,927|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":696258525.6649704,"samples":6},{"name":"using Array.includes (first item)","opsSec":708871154.072438,"samples":9},{"name":"Using raw comparison","opsSec":711336266.9093094,"samples":7},{"name":"Using raw comparison (first item)","opsSec":709187926.6196059,"samples":8}]}-->
