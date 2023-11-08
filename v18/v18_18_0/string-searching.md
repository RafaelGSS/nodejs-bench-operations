## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|847,389,015|99|
|Using indexof|848,741,333|98|
|Using RegExp.test|15,890,140|99|
|Using RegExp.text with cached regex pattern|17,024,048|99|
|Using new RegExp.test|4,358,575|98|
|Using new RegExp.test with cached regex pattern|5,039,056|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:53:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":847389015.1098441,"samples":8},{"name":"Using indexof","opsSec":848741333.4406807,"samples":11},{"name":"Using RegExp.test","opsSec":15890139.548258418,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17024048.22407149,"samples":5},{"name":"Using new RegExp.test","opsSec":4358575.436177182,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5039055.764162341,"samples":5}]}-->
