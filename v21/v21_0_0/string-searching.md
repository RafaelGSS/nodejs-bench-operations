## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|591,968,725|98|
|Using indexof|593,326,051|94|
|Using RegExp.test|11,244,170|98|
|Using RegExp.text with cached regex pattern|11,767,611|97|
|Using new RegExp.test|3,394,929|99|
|Using new RegExp.test with cached regex pattern|3,970,941|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:55:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using includes","opsSec":591968724.5742807,"samples":6},{"name":"Using indexof","opsSec":593326050.7263244,"samples":5},{"name":"Using RegExp.test","opsSec":11244170.151363626,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11767610.624907369,"samples":7},{"name":"Using new RegExp.test","opsSec":3394928.9611566467,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3970940.830058832,"samples":6}]}-->
