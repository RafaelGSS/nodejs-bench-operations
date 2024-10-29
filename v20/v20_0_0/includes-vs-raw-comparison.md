## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|81,174,777|40605056|
|using Array.includes (first item)|88,020,490|44069235|
|Using raw comparison|100,284,789|50152599|
|Using raw comparison (first item)|100,740,858|50370437|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:55:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":81174777.91796876,"samples":40605056},{"name":"using Array.includes (first item)","opsSec":88020490.50326708,"samples":44069235},{"name":"Using raw comparison","opsSec":100284789.44363947,"samples":50152599},{"name":"Using raw comparison (first item)","opsSec":100740858.6873895,"samples":50370437}]}-->
