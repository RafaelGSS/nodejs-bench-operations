## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|149,913,213|74956718|
|Using backtick (`)|100,415,056|50686076|
|Using array.join|9,837,415|4918717|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:41:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":149913213.22896516,"samples":74956718},{"name":"Using backtick (`)","opsSec":100415056.33372098,"samples":50686076},{"name":"Using array.join","opsSec":9837415.859805154,"samples":4918717}]}-->
