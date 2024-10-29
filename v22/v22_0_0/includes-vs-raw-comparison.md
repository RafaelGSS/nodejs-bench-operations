## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|83,025,110|41512572|
|using Array.includes (first item)|75,713,098|37857282|
|Using raw comparison|85,849,981|42924998|
|Using raw comparison (first item)|86,780,880|43393000|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:56:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":83025110.62390554,"samples":41512572},{"name":"using Array.includes (first item)","opsSec":75713098.19441895,"samples":37857282},{"name":"Using raw comparison","opsSec":85849981.0621033,"samples":42924998},{"name":"Using raw comparison (first item)","opsSec":86780880.2751873,"samples":43393000}]}-->
