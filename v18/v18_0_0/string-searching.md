## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,616,615|97|
|Using indexof|822,158,360|94|
|Using RegExp.test|16,166,701|100|
|Using RegExp.text with cached regex pattern|17,100,777|96|
|Using new RegExp.test|3,553,706|95|
|Using new RegExp.test with cached regex pattern|3,968,473|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using includes","opsSec":17616614.757002275,"samples":6},{"name":"Using indexof","opsSec":822158359.7076255,"samples":7},{"name":"Using RegExp.test","opsSec":16166700.834324373,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17100777.190722488,"samples":6},{"name":"Using new RegExp.test","opsSec":3553705.9938347293,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3968472.8468454434,"samples":5}]}-->
