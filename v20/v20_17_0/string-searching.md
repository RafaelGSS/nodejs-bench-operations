## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|138,028,980|69014523|
|Using indexof|16,128,185|8064096|
|Using RegExp.test|13,567,496|6784451|
|Using RegExp.text with cached regex pattern|14,214,897|7107450|
|Using new RegExp.test|4,374,454|2187260|
|Using new RegExp.test with cached regex pattern|5,114,952|2557564|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:52:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":138028980.57426322,"samples":69014523},{"name":"Using indexof","opsSec":16128185.968058446,"samples":8064096},{"name":"Using RegExp.test","opsSec":13567496.814354936,"samples":6784451},{"name":"Using RegExp.text with cached regex pattern","opsSec":14214897.12859078,"samples":7107450},{"name":"Using new RegExp.test","opsSec":4374454.794376834,"samples":2187260},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5114952.587815953,"samples":2557564}]}-->
