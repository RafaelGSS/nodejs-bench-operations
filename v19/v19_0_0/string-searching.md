## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,242,790|98|
|Using indexof|717,971,904|95|
|Using RegExp.test|12,127,354|96|
|Using RegExp.text with cached regex pattern|12,743,758|97|
|Using new RegExp.test|3,149,081|97|
|Using new RegExp.test with cached regex pattern|3,544,323|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":714242790.3193058,"samples":6},{"name":"Using indexof","opsSec":717971903.7817652,"samples":7},{"name":"Using RegExp.test","opsSec":12127354.412624683,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":12743758.119163122,"samples":6},{"name":"Using new RegExp.test","opsSec":3149081.2361637373,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3544323.0621585594,"samples":4}]}-->
