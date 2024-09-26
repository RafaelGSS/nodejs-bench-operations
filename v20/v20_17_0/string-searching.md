## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,099,975|4549988|
|Using indexof|9,029,648|4514825|
|Using RegExp.test|8,221,441|4110721|
|Using RegExp.text with cached regex pattern|8,153,428|4076716|
|Using new RegExp.test|3,291,557|1645779|
|Using new RegExp.test with cached regex pattern|3,854,215|1927108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:54:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":9099975.453979503,"samples":4549988},{"name":"Using indexof","opsSec":9029648.067650454,"samples":4514825},{"name":"Using RegExp.test","opsSec":8221441.3587362105,"samples":4110721},{"name":"Using RegExp.text with cached regex pattern","opsSec":8153428.999561732,"samples":4076716},{"name":"Using new RegExp.test","opsSec":3291557.3219300774,"samples":1645779},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3854215.4527153266,"samples":1927108}]}-->
