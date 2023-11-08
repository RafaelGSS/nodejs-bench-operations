## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,089,450|100|
|Using indexof|847,309,940|98|
|Using RegExp.test|16,400,355|97|
|Using RegExp.text with cached regex pattern|16,682,721|99|
|Using new RegExp.test|5,350,419|98|
|Using new RegExp.test with cached regex pattern|6,335,787|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:51:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":17089450.28032001,"samples":4},{"name":"Using indexof","opsSec":847309939.5406765,"samples":10},{"name":"Using RegExp.test","opsSec":16400354.74661546,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":16682721.376659514,"samples":8},{"name":"Using new RegExp.test","opsSec":5350418.555059917,"samples":9},{"name":"Using new RegExp.test with cached regex pattern","opsSec":6335786.836938719,"samples":5}]}-->
