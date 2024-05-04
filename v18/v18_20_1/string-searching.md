## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|909,372,642|98|
|Using indexof|909,056,745|97|
|Using RegExp.test|17,905,974|96|
|Using RegExp.text with cached regex pattern|18,768,098|99|
|Using new RegExp.test|3,890,292|99|
|Using new RegExp.test with cached regex pattern|4,217,987|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:33:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":909372642.313933,"samples":6},{"name":"Using indexof","opsSec":909056745.1523153,"samples":8},{"name":"Using RegExp.test","opsSec":17905974.36193884,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":18768097.865337446,"samples":5},{"name":"Using new RegExp.test","opsSec":3890291.7528793807,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4217986.729733349,"samples":5}]}-->
