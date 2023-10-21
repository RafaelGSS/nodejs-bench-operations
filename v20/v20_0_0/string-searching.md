## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|704,867,895|95|
|Using indexof|716,661,892|93|
|Using RegExp.test|11,175,434|87|
|Using RegExp.text with cached regex pattern|11,816,446|96|
|Using new RegExp.test|3,313,268|96|
|Using new RegExp.test with cached regex pattern|4,012,640|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":704867894.6692827,"samples":5},{"name":"Using indexof","opsSec":716661891.7412158,"samples":8},{"name":"Using RegExp.test","opsSec":11175433.734687818,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11816446.49157919,"samples":7},{"name":"Using new RegExp.test","opsSec":3313268.2960559768,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4012640.245081775,"samples":5}]}-->
