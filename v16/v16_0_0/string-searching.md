## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,777,248|96|
|Using indexof|593,109,272|99|
|Using RegExp.test|11,049,768|95|
|Using RegExp.text with cached regex pattern|11,550,026|99|
|Using new RegExp.test|3,435,098|95|
|Using new RegExp.test with cached regex pattern|4,150,370|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":11777248.430725597,"samples":6},{"name":"Using indexof","opsSec":593109271.925809,"samples":9},{"name":"Using RegExp.test","opsSec":11049768.35825118,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":11550026.21015568,"samples":7},{"name":"Using new RegExp.test","opsSec":3435098.48130961,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4150370.189549999,"samples":5}]}-->
