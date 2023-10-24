## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,820,992|98|
|Using indexof|717,684,510|96|
|Using RegExp.test|10,865,568|98|
|Using RegExp.text with cached regex pattern|11,221,444|95|
|Using new RegExp.test|3,123,675|95|
|Using new RegExp.test with cached regex pattern|3,782,744|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":11820992.464898927,"samples":6},{"name":"Using indexof","opsSec":717684510.1204404,"samples":6},{"name":"Using RegExp.test","opsSec":10865567.598469593,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11221443.97879396,"samples":6},{"name":"Using new RegExp.test","opsSec":3123675.3798927492,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3782743.626689926,"samples":5}]}-->
