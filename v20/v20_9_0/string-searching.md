## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|849,717,270|96|
|Using indexof|849,905,304|99|
|Using RegExp.test|15,567,324|100|
|Using RegExp.text with cached regex pattern|16,453,322|97|
|Using new RegExp.test|4,546,446|95|
|Using new RegExp.test with cached regex pattern|5,351,740|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:58:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":849717269.9405522,"samples":7},{"name":"Using indexof","opsSec":849905303.6858305,"samples":6},{"name":"Using RegExp.test","opsSec":15567324.208932213,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":16453321.507366044,"samples":7},{"name":"Using new RegExp.test","opsSec":4546445.51365073,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5351739.687227602,"samples":9}]}-->
