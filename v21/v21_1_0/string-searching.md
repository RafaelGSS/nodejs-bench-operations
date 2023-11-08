## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|845,219,746|97|
|Using indexof|850,089,106|97|
|Using RegExp.test|16,114,017|97|
|Using RegExp.text with cached regex pattern|16,614,509|100|
|Using new RegExp.test|4,839,132|101|
|Using new RegExp.test with cached regex pattern|5,493,500|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:59:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":845219745.5674785,"samples":6},{"name":"Using indexof","opsSec":850089106.2124943,"samples":9},{"name":"Using RegExp.test","opsSec":16114017.108033631,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":16614509.205093738,"samples":8},{"name":"Using new RegExp.test","opsSec":4839132.136935432,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5493499.555403267,"samples":6}]}-->
