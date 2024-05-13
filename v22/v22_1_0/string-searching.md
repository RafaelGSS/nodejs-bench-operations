## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,659,695|7829848|
|Using indexof|15,648,441|7824221|
|Using RegExp.test|8,291,567|4145784|
|Using RegExp.text with cached regex pattern|8,536,924|4268463|
|Using new RegExp.test|3,762,249|1881125|
|Using new RegExp.test with cached regex pattern|3,990,684|1995343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:42:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15659695.310989846,"samples":7829848},{"name":"Using indexof","opsSec":15648441.530560715,"samples":7824221},{"name":"Using RegExp.test","opsSec":8291567.635134824,"samples":4145784},{"name":"Using RegExp.text with cached regex pattern","opsSec":8536924.292612327,"samples":4268463},{"name":"Using new RegExp.test","opsSec":3762249.194874075,"samples":1881125},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3990684.459598689,"samples":1995343}]}-->
