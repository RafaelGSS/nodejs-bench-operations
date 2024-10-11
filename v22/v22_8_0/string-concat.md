## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|140,059,721|70049215|
|Using backtick (`)|99,069,104|49541771|
|Using array.join|9,815,478|4907741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:35:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using + sign","opsSec":140059721.13463113,"samples":70049215},{"name":"Using backtick (`)","opsSec":99069104.85748734,"samples":49541771},{"name":"Using array.join","opsSec":9815478.407534903,"samples":4907741}]}-->
