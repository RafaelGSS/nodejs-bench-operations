## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,257,760|97|
|Using indexof|714,546,479|99|
|Using RegExp.test|10,941,202|99|
|Using RegExp.text with cached regex pattern|11,259,867|96|
|Using new RegExp.test|3,008,127|96|
|Using new RegExp.test with cached regex pattern|3,473,184|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":714257759.770902,"samples":8},{"name":"Using indexof","opsSec":714546478.6957994,"samples":7},{"name":"Using RegExp.test","opsSec":10941201.659057654,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11259867.214007856,"samples":6},{"name":"Using new RegExp.test","opsSec":3008126.6891231304,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3473184.250767408,"samples":5}]}-->
