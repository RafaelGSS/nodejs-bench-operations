## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|12,764,789|95|
|Using indexof|713,462,369|91|
|Using RegExp.test|12,092,411|98|
|Using RegExp.text with cached regex pattern|12,718,646|97|
|Using new RegExp.test|3,111,633|97|
|Using new RegExp.test with cached regex pattern|3,491,473|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":12764788.667813268,"samples":8},{"name":"Using indexof","opsSec":713462368.657356,"samples":6},{"name":"Using RegExp.test","opsSec":12092411.468625579,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":12718645.967938693,"samples":7},{"name":"Using new RegExp.test","opsSec":3111633.125085994,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3491473.478716595,"samples":5}]}-->
