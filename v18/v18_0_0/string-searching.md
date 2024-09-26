## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,287,679|4143840|
|Using indexof|8,716,758|4358380|
|Using RegExp.test|8,062,229|4031117|
|Using RegExp.text with cached regex pattern|8,269,277|4134639|
|Using new RegExp.test|3,283,284|1641643|
|Using new RegExp.test with cached regex pattern|3,503,513|1751757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:52:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8287679.630932054,"samples":4143840},{"name":"Using indexof","opsSec":8716758.483471368,"samples":4358380},{"name":"Using RegExp.test","opsSec":8062229.946471384,"samples":4031117},{"name":"Using RegExp.text with cached regex pattern","opsSec":8269277.050699019,"samples":4134639},{"name":"Using new RegExp.test","opsSec":3283284.411070886,"samples":1641643},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3503513.838629942,"samples":1751757}]}-->
