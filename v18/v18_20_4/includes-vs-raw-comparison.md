## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|91,930,277|46001596|
|using Array.includes (first item)|80,116,170|40077189|
|Using raw comparison|95,861,118|48013691|
|Using raw comparison (first item)|96,552,553|48276289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:24:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":91930277.6841154,"samples":46001596},{"name":"using Array.includes (first item)","opsSec":80116170.43808573,"samples":40077189},{"name":"Using raw comparison","opsSec":95861118.55874933,"samples":48013691},{"name":"Using raw comparison (first item)","opsSec":96552553.86186153,"samples":48276289}]}-->
