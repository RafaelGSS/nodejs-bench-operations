## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,952,356|7976179|
|Using indexof|16,019,258|8009630|
|Using RegExp.test|8,223,758|4111880|
|Using RegExp.text with cached regex pattern|8,331,502|4165752|
|Using new RegExp.test|3,666,627|1833314|
|Using new RegExp.test with cached regex pattern|3,869,323|1934662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:24:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15952356.691899147,"samples":7976179},{"name":"Using indexof","opsSec":16019258.654352535,"samples":8009630},{"name":"Using RegExp.test","opsSec":8223758.881567515,"samples":4111880},{"name":"Using RegExp.text with cached regex pattern","opsSec":8331502.700277439,"samples":4165752},{"name":"Using new RegExp.test","opsSec":3666627.3473392306,"samples":1833314},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3869323.597592842,"samples":1934662}]}-->
