## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|116,200,048|58101217|
|Using indexof|16,108,476|8054774|
|Using RegExp.test|13,240,903|6621554|
|Using RegExp.text with cached regex pattern|14,233,280|7116643|
|Using new RegExp.test|4,366,782|2183392|
|Using new RegExp.test with cached regex pattern|5,291,667|2645907|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:39:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using includes","opsSec":116200048.87779674,"samples":58101217},{"name":"Using indexof","opsSec":16108476.01313828,"samples":8054774},{"name":"Using RegExp.test","opsSec":13240903.177766452,"samples":6621554},{"name":"Using RegExp.text with cached regex pattern","opsSec":14233280.904485434,"samples":7116643},{"name":"Using new RegExp.test","opsSec":4366782.017480964,"samples":2183392},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5291667.791218929,"samples":2645907}]}-->
