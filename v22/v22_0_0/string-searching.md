## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,006,316|4003159|
|Using indexof|8,011,064|4005533|
|Using RegExp.test|7,200,998|3600500|
|Using RegExp.text with cached regex pattern|7,143,441|3571722|
|Using new RegExp.test|3,306,293|1653147|
|Using new RegExp.test with cached regex pattern|3,633,936|1816969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:58:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8006316.638921457,"samples":4003159},{"name":"Using indexof","opsSec":8011064.878394435,"samples":4005533},{"name":"Using RegExp.test","opsSec":7200998.790271299,"samples":3600500},{"name":"Using RegExp.text with cached regex pattern","opsSec":7143441.414084819,"samples":3571722},{"name":"Using new RegExp.test","opsSec":3306293.1800520523,"samples":1653147},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3633936.4083097996,"samples":1816969}]}-->
