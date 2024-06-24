## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,907,483|9953742|
|Using indexof|18,925,983|9462992|
|Using RegExp.test|9,025,596|4512799|
|Using RegExp.text with cached regex pattern|9,474,946|4737474|
|Using new RegExp.test|3,601,739|1800870|
|Using new RegExp.test with cached regex pattern|4,062,861|2031431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":19907483.56202365,"samples":9953742},{"name":"Using indexof","opsSec":18925983.54587556,"samples":9462992},{"name":"Using RegExp.test","opsSec":9025596.971106354,"samples":4512799},{"name":"Using RegExp.text with cached regex pattern","opsSec":9474946.787234046,"samples":4737474},{"name":"Using new RegExp.test","opsSec":3601739.7550869333,"samples":1800870},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4062861.488080521,"samples":2031431}]}-->
