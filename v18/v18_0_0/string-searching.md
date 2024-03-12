## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,617,008|99|
|Using indexof|822,164,765|97|
|Using RegExp.test|16,008,216|99|
|Using RegExp.text with cached regex pattern|17,006,218|93|
|Using new RegExp.test|3,640,819|94|
|Using new RegExp.test with cached regex pattern|4,049,283|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":17617008.07838536,"samples":6},{"name":"Using indexof","opsSec":822164764.541563,"samples":6},{"name":"Using RegExp.test","opsSec":16008215.901736343,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17006218.184705235,"samples":6},{"name":"Using new RegExp.test","opsSec":3640818.63696416,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4049282.673459846,"samples":5}]}-->
