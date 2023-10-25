## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|699,077,876|96|
|Using indexof|712,536,494|97|
|Using RegExp.test|12,008,397|99|
|Using RegExp.text with cached regex pattern|12,636,814|98|
|Using new RegExp.test|3,131,744|96|
|Using new RegExp.test with cached regex pattern|3,672,390|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":699077875.7526152,"samples":6},{"name":"Using indexof","opsSec":712536493.5689224,"samples":7},{"name":"Using RegExp.test","opsSec":12008396.984353542,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":12636813.946944512,"samples":8},{"name":"Using new RegExp.test","opsSec":3131743.505091444,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3672389.969399047,"samples":7}]}-->
