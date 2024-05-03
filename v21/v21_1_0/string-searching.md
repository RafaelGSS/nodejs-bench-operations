## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|911,416,932|95|
|Using indexof|913,274,872|99|
|Using RegExp.test|18,877,974|97|
|Using RegExp.text with cached regex pattern|19,587,455|99|
|Using new RegExp.test|5,198,426|94|
|Using new RegExp.test with cached regex pattern|6,116,937|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:18:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":911416931.5654714,"samples":6},{"name":"Using indexof","opsSec":913274871.9373868,"samples":9},{"name":"Using RegExp.test","opsSec":18877974.322216693,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":19587455.041045405,"samples":5},{"name":"Using new RegExp.test","opsSec":5198426.382277311,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":6116937.0607908685,"samples":4}]}-->
