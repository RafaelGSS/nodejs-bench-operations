## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|914,463,689|99|
|Using indexof|915,358,371|97|
|Using RegExp.test|16,791,170|97|
|Using RegExp.text with cached regex pattern|17,409,351|98|
|Using new RegExp.test|4,893,242|96|
|Using new RegExp.test with cached regex pattern|5,817,925|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:35:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":914463689.0374608,"samples":8},{"name":"Using indexof","opsSec":915358370.7991023,"samples":6},{"name":"Using RegExp.test","opsSec":16791170.205320023,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17409351.001412954,"samples":7},{"name":"Using new RegExp.test","opsSec":4893242.237977236,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5817924.553266885,"samples":5}]}-->
