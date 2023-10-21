## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,251,144|96|
|using Array.includes (first item)|117,545,938|91|
|Using raw comparison|711,292,262|98|
|Using raw comparison (first item)|711,667,007|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":67251144.22682332,"samples":7},{"name":"using Array.includes (first item)","opsSec":117545937.77538282,"samples":6},{"name":"Using raw comparison","opsSec":711292262.1714602,"samples":10},{"name":"Using raw comparison (first item)","opsSec":711667006.7378162,"samples":9}]}-->
