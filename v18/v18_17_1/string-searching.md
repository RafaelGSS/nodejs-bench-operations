## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|847,648,867|99|
|Using indexof|848,442,443|97|
|Using RegExp.test|15,995,853|98|
|Using RegExp.text with cached regex pattern|16,694,431|101|
|Using new RegExp.test|4,316,186|96|
|Using new RegExp.test with cached regex pattern|5,062,554|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:55:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":847648867.4757007,"samples":6},{"name":"Using indexof","opsSec":848442443.0791402,"samples":7},{"name":"Using RegExp.test","opsSec":15995852.855356896,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":16694430.917669568,"samples":5},{"name":"Using new RegExp.test","opsSec":4316186.108015911,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5062554.031428182,"samples":5}]}-->
