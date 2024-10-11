## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|136,251,361|68128724|
|Using indexof|15,442,147|7721246|
|Using RegExp.test|12,800,892|6401086|
|Using RegExp.text with cached regex pattern|13,781,845|6890923|
|Using new RegExp.test|4,575,564|2287843|
|Using new RegExp.test with cached regex pattern|5,379,402|2689708|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:40:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":136251361.37918445,"samples":68128724},{"name":"Using indexof","opsSec":15442147.609224018,"samples":7721246},{"name":"Using RegExp.test","opsSec":12800892.34599574,"samples":6401086},{"name":"Using RegExp.text with cached regex pattern","opsSec":13781845.779490467,"samples":6890923},{"name":"Using new RegExp.test","opsSec":4575564.216782806,"samples":2287843},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5379402.217971518,"samples":2689708}]}-->
