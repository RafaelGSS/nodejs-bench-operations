## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,922,700|7961354|
|Using indexof|15,853,440|7926722|
|Using RegExp.test|13,539,273|6771397|
|Using RegExp.text with cached regex pattern|14,409,773|7207091|
|Using new RegExp.test|4,587,408|2294854|
|Using new RegExp.test with cached regex pattern|5,382,823|2692547|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:21:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":7961354,"opsSec":15922700.802939236},{"name":"Using indexof","samples":7926722,"opsSec":15853440.639070585},{"name":"Using RegExp.test","samples":6771397,"opsSec":13539273.78881491},{"name":"Using RegExp.text with cached regex pattern","samples":7207091,"opsSec":14409773.9924966},{"name":"Using new RegExp.test","samples":2294854,"opsSec":4587408.1396284625},{"name":"Using new RegExp.test with cached regex pattern","samples":2692547,"opsSec":5382823.611126005}]}-->
