## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|844,990,866|95|
|Using indexof|847,317,061|99|
|Using RegExp.test|17,313,008|96|
|Using RegExp.text with cached regex pattern|17,888,824|96|
|Using new RegExp.test|4,585,297|96|
|Using new RegExp.test with cached regex pattern|5,553,933|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:21:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":844990865.767045,"samples":6},{"name":"Using indexof","opsSec":847317061.4250976,"samples":7},{"name":"Using RegExp.test","opsSec":17313008.370021172,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17888823.633109223,"samples":5},{"name":"Using new RegExp.test","opsSec":4585296.609554741,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5553933.314038393,"samples":4}]}-->
