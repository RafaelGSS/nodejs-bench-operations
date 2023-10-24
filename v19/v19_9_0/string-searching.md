## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|658,987,659|87|
|Using indexof|647,149,598|89|
|Using RegExp.test|10,220,896|89|
|Using RegExp.text with cached regex pattern|11,016,059|90|
|Using new RegExp.test|2,714,931|88|
|Using new RegExp.test with cached regex pattern|2,993,886|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":658987658.9939677,"samples":8},{"name":"Using indexof","opsSec":647149597.860574,"samples":7},{"name":"Using RegExp.test","opsSec":10220896.172745954,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11016059.0002731,"samples":6},{"name":"Using new RegExp.test","opsSec":2714931.3332201447,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":2993886.2056882926,"samples":4}]}-->
