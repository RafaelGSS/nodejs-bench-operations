## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|688,752,661|89|
|Using indexof|694,149,410|87|
|Using RegExp.test|9,240,146|87|
|Using RegExp.text with cached regex pattern|9,920,021|88|
|Using new RegExp.test|2,295,876|86|
|Using new RegExp.test with cached regex pattern|2,758,731|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":688752661.1334761,"samples":9},{"name":"Using indexof","opsSec":694149409.6367636,"samples":6},{"name":"Using RegExp.test","opsSec":9240145.65300417,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":9920021.251961557,"samples":6},{"name":"Using new RegExp.test","opsSec":2295876.176967583,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":2758731.156435859,"samples":5}]}-->
