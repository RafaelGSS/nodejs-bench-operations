## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|915,710|457908|
|Using brackets {}|923,684|461843|
|Using '' + |918,196|459099|
|Using date.toString()|1,012,603|506303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:37:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":457908,"opsSec":915710.9130156223},{"name":"Using brackets {}","samples":461843,"opsSec":923684.6569625088},{"name":"Using '' + ","samples":459099,"opsSec":918196.0332240968},{"name":"Using date.toString()","samples":506303,"opsSec":1012603.3611556408}]}-->
