## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|822,891,837|96|
|Using indexof|820,995,080|98|
|Using RegExp.test|16,916,567|98|
|Using RegExp.text with cached regex pattern|17,708,358|97|
|Using new RegExp.test|4,622,691|97|
|Using new RegExp.test with cached regex pattern|5,119,554|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using includes","opsSec":822891836.7289296,"samples":8},{"name":"Using indexof","opsSec":820995079.8876286,"samples":6},{"name":"Using RegExp.test","opsSec":16916566.83099029,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17708357.771944508,"samples":5},{"name":"Using new RegExp.test","opsSec":4622690.9102385435,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5119553.790215294,"samples":6}]}-->
