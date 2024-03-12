## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|819,952,424|96|
|Using indexof|819,318,174|99|
|Using RegExp.test|15,997,315|96|
|Using RegExp.text with cached regex pattern|16,921,512|98|
|Using new RegExp.test|3,533,927|94|
|Using new RegExp.test with cached regex pattern|3,786,405|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":819952423.5336107,"samples":8},{"name":"Using indexof","opsSec":819318174.3390874,"samples":7},{"name":"Using RegExp.test","opsSec":15997314.57376252,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":16921511.787822757,"samples":7},{"name":"Using new RegExp.test","opsSec":3533926.826170087,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3786404.860918862,"samples":5}]}-->
