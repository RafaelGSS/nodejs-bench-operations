## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|854,565,943|98|
|Using indexof|855,246,484|99|
|Using RegExp.test|16,058,804|101|
|Using RegExp.text with cached regex pattern|16,505,920|99|
|Using new RegExp.test|4,681,797|96|
|Using new RegExp.test with cached regex pattern|5,476,575|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:55:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":854565942.6195331,"samples":6},{"name":"Using indexof","opsSec":855246483.9977725,"samples":7},{"name":"Using RegExp.test","opsSec":16058804.447682038,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":16505919.959932378,"samples":6},{"name":"Using new RegExp.test","opsSec":4681796.866863197,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5476574.834936297,"samples":4}]}-->
