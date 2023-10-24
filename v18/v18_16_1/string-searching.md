## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|587,929,364|96|
|Using indexof|588,853,129|96|
|Using RegExp.test|8,886,683|96|
|Using RegExp.text with cached regex pattern|9,321,506|95|
|Using new RegExp.test|2,480,781|94|
|Using new RegExp.test with cached regex pattern|2,846,059|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":587929364.3221627,"samples":6},{"name":"Using indexof","opsSec":588853129.0441865,"samples":10},{"name":"Using RegExp.test","opsSec":8886682.790940505,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":9321506.171399247,"samples":5},{"name":"Using new RegExp.test","opsSec":2480781.438291734,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":2846058.5555388876,"samples":6}]}-->
