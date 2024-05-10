## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,101,480|8050741|
|Using indexof|16,220,177|8110089|
|Using RegExp.test|7,966,860|3983431|
|Using RegExp.text with cached regex pattern|8,101,213|4050607|
|Using new RegExp.test|3,629,379|1814690|
|Using new RegExp.test with cached regex pattern|3,838,488|1919245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:24:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16101480.711879928,"samples":8050741},{"name":"Using indexof","opsSec":16220177.675555652,"samples":8110089},{"name":"Using RegExp.test","opsSec":7966860.820927038,"samples":3983431},{"name":"Using RegExp.text with cached regex pattern","opsSec":8101213.497715075,"samples":4050607},{"name":"Using new RegExp.test","opsSec":3629379.905642111,"samples":1814690},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3838488.203586424,"samples":1919245}]}-->
