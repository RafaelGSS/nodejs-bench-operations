## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,285,727|93|
|Using indexof|820,664,152|95|
|Using RegExp.test|15,628,380|97|
|Using RegExp.text with cached regex pattern|16,265,636|98|
|Using new RegExp.test|4,811,064|93|
|Using new RegExp.test with cached regex pattern|5,776,270|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using includes","opsSec":16285726.763867728,"samples":5},{"name":"Using indexof","opsSec":820664151.7336175,"samples":6},{"name":"Using RegExp.test","opsSec":15628380.103294227,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":16265636.313712252,"samples":7},{"name":"Using new RegExp.test","opsSec":4811063.564071043,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5776270.148184683,"samples":4}]}-->
