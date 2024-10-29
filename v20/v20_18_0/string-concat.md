## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|147,149,157|73574648|
|Using backtick (`)|99,543,128|49772167|
|Using array.join|10,297,759|5149287|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:40:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":147149157.67979178,"samples":73574648},{"name":"Using backtick (`)","opsSec":99543128.33362962,"samples":49772167},{"name":"Using array.join","opsSec":10297759.900293324,"samples":5149287}]}-->
