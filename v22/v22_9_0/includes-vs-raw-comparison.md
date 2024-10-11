## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|92,112,261|46063552|
|using Array.includes (first item)|80,349,160|40175554|
|Using raw comparison|93,381,598|46690808|
|Using raw comparison (first item)|96,333,953|48166983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:05:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"using Array.includes","opsSec":92112261.39864726,"samples":46063552},{"name":"using Array.includes (first item)","opsSec":80349160.65774229,"samples":40175554},{"name":"Using raw comparison","opsSec":93381598.4442595,"samples":46690808},{"name":"Using raw comparison (first item)","opsSec":96333953.09125029,"samples":48166983}]}-->
