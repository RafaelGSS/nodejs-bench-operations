## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,533,080|1266859|
|Using delete property (proto: null)|8,018,146|4009074|
|Using delete property (cached proto: null)|2,588,809|1294405|
|Using undefined assignment|13,537,707|6768854|
|Using undefined assignment (proto: null)|8,169,987|4084994|
|Using undefined property (cached proto: null)|13,334,041|6667021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:15:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2533080.2623489047,"samples":1266859},{"name":"Using delete property (proto: null)","opsSec":8018146.208088428,"samples":4009074},{"name":"Using delete property (cached proto: null)","opsSec":2588809.4874708885,"samples":1294405},{"name":"Using undefined assignment","opsSec":13537707.843043344,"samples":6768854},{"name":"Using undefined assignment (proto: null)","opsSec":8169987.061389739,"samples":4084994},{"name":"Using undefined property (cached proto: null)","opsSec":13334041.787672006,"samples":6667021}]}-->
