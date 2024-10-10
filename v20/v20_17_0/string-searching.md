## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|136,785,317|68392699|
|Using indexof|15,694,927|7847654|
|Using RegExp.test|13,290,426|6646583|
|Using RegExp.text with cached regex pattern|14,128,702|7064353|
|Using new RegExp.test|4,398,523|2199509|
|Using new RegExp.test with cached regex pattern|5,210,732|2606104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:49:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":136785317.57023326,"samples":68392699},{"name":"Using indexof","opsSec":15694927.806068826,"samples":7847654},{"name":"Using RegExp.test","opsSec":13290426.763301522,"samples":6646583},{"name":"Using RegExp.text with cached regex pattern","opsSec":14128702.411309589,"samples":7064353},{"name":"Using new RegExp.test","opsSec":4398523.913808761,"samples":2199509},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5210732.53939561,"samples":2606104}]}-->
