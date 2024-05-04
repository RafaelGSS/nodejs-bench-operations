## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|937,529,672|98|
|Using indexof|937,404,271|99|
|Using RegExp.test|19,183,317|97|
|Using RegExp.text with cached regex pattern|19,882,118|97|
|Using new RegExp.test|5,002,511|97|
|Using new RegExp.test with cached regex pattern|5,893,128|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":937529671.7173458,"samples":5},{"name":"Using indexof","opsSec":937404270.6357776,"samples":6},{"name":"Using RegExp.test","opsSec":19183316.679377496,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":19882117.916569065,"samples":4},{"name":"Using new RegExp.test","opsSec":5002510.835635637,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5893127.602561776,"samples":6}]}-->
