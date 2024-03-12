## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|822,017,013|99|
|Using indexof|822,137,563|94|
|Using RegExp.test|17,084,038|97|
|Using RegExp.text with cached regex pattern|17,616,487|95|
|Using new RegExp.test|4,802,904|93|
|Using new RegExp.test with cached regex pattern|5,462,487|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using includes","opsSec":822017013.3762975,"samples":6},{"name":"Using indexof","opsSec":822137563.4900614,"samples":6},{"name":"Using RegExp.test","opsSec":17084037.601491854,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17616487.2543741,"samples":6},{"name":"Using new RegExp.test","opsSec":4802903.948796353,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5462487.301787908,"samples":6}]}-->
