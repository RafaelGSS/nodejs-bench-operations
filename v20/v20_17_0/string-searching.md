## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|136,908,568|68473284|
|Using indexof|16,096,054|8048531|
|Using RegExp.test|13,139,234|6569619|
|Using RegExp.text with cached regex pattern|14,079,705|7040243|
|Using new RegExp.test|4,326,646|2163458|
|Using new RegExp.test with cached regex pattern|5,177,770|2588909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:41:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":136908568.20544317,"samples":68473284},{"name":"Using indexof","opsSec":16096054.869846793,"samples":8048531},{"name":"Using RegExp.test","opsSec":13139234.189622086,"samples":6569619},{"name":"Using RegExp.text with cached regex pattern","opsSec":14079705.871657064,"samples":7040243},{"name":"Using new RegExp.test","opsSec":4326646.077857787,"samples":2163458},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5177770.613043349,"samples":2588909}]}-->
