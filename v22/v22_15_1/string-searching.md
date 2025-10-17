## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,195,303|8104029|
|Using indexof|16,017,642|8008977|
|Using RegExp.test|13,637,060|6819242|
|Using RegExp.text with cached regex pattern|14,296,326|7148686|
|Using new RegExp.test|4,680,385|2341382|
|Using new RegExp.test with cached regex pattern|5,444,080|2722042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:19:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":8104029,"opsSec":16195303.35645102},{"name":"Using indexof","samples":8008977,"opsSec":16017642.424819551},{"name":"Using RegExp.test","samples":6819242,"opsSec":13637060.509075822},{"name":"Using RegExp.text with cached regex pattern","samples":7148686,"opsSec":14296326.166555611},{"name":"Using new RegExp.test","samples":2341382,"opsSec":4680385.615245757},{"name":"Using new RegExp.test with cached regex pattern","samples":2722042,"opsSec":5444080.613781858}]}-->
