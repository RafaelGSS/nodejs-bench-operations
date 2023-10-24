## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,531,586|92|
|Using indexof|596,551,413|96|
|Using RegExp.test|11,066,539|96|
|Using RegExp.text with cached regex pattern|11,553,085|98|
|Using new RegExp.test|3,438,223|95|
|Using new RegExp.test with cached regex pattern|4,101,841|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using includes","opsSec":11531586.03465377,"samples":5},{"name":"Using indexof","opsSec":596551413.2727462,"samples":7},{"name":"Using RegExp.test","opsSec":11066539.079333935,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11553085.28548778,"samples":7},{"name":"Using new RegExp.test","opsSec":3438222.844117143,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4101840.8149476843,"samples":5}]}-->
