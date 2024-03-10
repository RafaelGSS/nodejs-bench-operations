## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|824,406,914|97|
|Using indexof|824,625,541|96|
|Using RegExp.test|15,028,029|94|
|Using RegExp.text with cached regex pattern|15,676,430|98|
|Using new RegExp.test|4,358,728|95|
|Using new RegExp.test with cached regex pattern|5,190,412|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using includes","opsSec":824406913.693955,"samples":6},{"name":"Using indexof","opsSec":824625541.0497199,"samples":7},{"name":"Using RegExp.test","opsSec":15028028.961541282,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":15676430.151629694,"samples":4},{"name":"Using new RegExp.test","opsSec":4358727.9998251675,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5190411.6209793985,"samples":6}]}-->
