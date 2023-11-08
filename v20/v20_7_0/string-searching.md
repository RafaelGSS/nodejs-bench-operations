## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|853,850,464|95|
|Using indexof|854,482,238|94|
|Using RegExp.test|16,330,360|100|
|Using RegExp.text with cached regex pattern|16,973,178|100|
|Using new RegExp.test|4,723,561|95|
|Using new RegExp.test with cached regex pattern|5,557,986|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:57:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":853850463.9120045,"samples":6},{"name":"Using indexof","opsSec":854482238.15209,"samples":6},{"name":"Using RegExp.test","opsSec":16330360.363356676,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":16973177.74991538,"samples":4},{"name":"Using new RegExp.test","opsSec":4723561.159275459,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5557986.197043575,"samples":4}]}-->
