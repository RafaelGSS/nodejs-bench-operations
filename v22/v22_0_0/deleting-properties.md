## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,489,998|92|
|Using delete property (proto: null)|21,196,998|94|
|Using delete property (cached proto: null)|4,563,585|94|
|Using undefined assignment|142,768,332|79|
|Using undefined assignment (proto: null)|24,224,136|95|
|Using undefined property (cached proto: null)|143,228,209|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4489998.408050981,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21196997.891104277,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4563585.447484376,"samples":5},{"name":"Using undefined assignment","opsSec":142768332.20986706,"samples":5},{"name":"Using undefined assignment (proto: null)","opsSec":24224135.881430566,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":143228208.89583343,"samples":9}]}-->
