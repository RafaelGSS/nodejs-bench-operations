## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|158,772,311|79386181|
|Using backtick (`)|104,619,955|52310253|
|Using array.join|10,420,820|5210888|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:35:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using + sign","opsSec":158772311.5104049,"samples":79386181},{"name":"Using backtick (`)","opsSec":104619955.90827183,"samples":52310253},{"name":"Using array.join","opsSec":10420820.077332666,"samples":5210888}]}-->
