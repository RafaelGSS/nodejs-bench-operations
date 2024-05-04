## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|910,916,791|96|
|Using indexof|910,932,828|96|
|Using RegExp.test|16,240,160|95|
|Using RegExp.text with cached regex pattern|16,973,273|98|
|Using new RegExp.test|4,992,421|94|
|Using new RegExp.test with cached regex pattern|5,465,386|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:38:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":910916790.5726385,"samples":9},{"name":"Using indexof","opsSec":910932828.1616387,"samples":8},{"name":"Using RegExp.test","opsSec":16240159.8915229,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":16973272.936409727,"samples":5},{"name":"Using new RegExp.test","opsSec":4992421.494583237,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5465386.439985793,"samples":5}]}-->
