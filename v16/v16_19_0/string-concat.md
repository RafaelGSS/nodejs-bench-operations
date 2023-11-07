## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|849,193,940|101|
|Using backtick (`)|849,895,109|96|
|Using array.join|12,234,442|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:41:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":849193940.4155564,"samples":6},{"name":"Using backtick (`)","opsSec":849895108.9093494,"samples":9},{"name":"Using array.join","opsSec":12234441.834621157,"samples":6}]}-->
