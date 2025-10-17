## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|904,568|452334|
|Using brackets {}|908,093|454047|
|Using '' + |906,450|453325|
|Using date.toString()|1,215,827|607915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:09:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":452334,"opsSec":904568.9804519858},{"name":"Using brackets {}","samples":454047,"opsSec":908093.0864583551},{"name":"Using '' + ","samples":453325,"opsSec":906450.3506844604},{"name":"Using date.toString()","samples":607915,"opsSec":1215827.4443307118}]}-->
