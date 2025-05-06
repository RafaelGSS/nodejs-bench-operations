## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,615,526|48307770|
|Using backtick (`)|96,180,376|48090831|
|Using array.join|10,276,170|5138214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:07:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":48307770,"opsSec":96615526.28059527},{"name":"Using backtick (`)","samples":48090831,"opsSec":96180376.45308834},{"name":"Using array.join","samples":5138214,"opsSec":10276170.664134229}]}-->
