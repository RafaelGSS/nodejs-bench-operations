## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,847,010|1423506|
|Using delete property (proto: null)|7,810,184|3905093|
|Using delete property (cached proto: null)|2,837,175|1418588|
|Using undefined assignment|13,537,986|6768994|
|Using undefined assignment (proto: null)|8,646,295|4323148|
|Using undefined property (cached proto: null)|14,243,781|7121891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:22:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2847010.5024684262,"samples":1423506},{"name":"Using delete property (proto: null)","opsSec":7810184.812870629,"samples":3905093},{"name":"Using delete property (cached proto: null)","opsSec":2837175.846802217,"samples":1418588},{"name":"Using undefined assignment","opsSec":13537986.45659889,"samples":6768994},{"name":"Using undefined assignment (proto: null)","opsSec":8646295.723297745,"samples":4323148},{"name":"Using undefined property (cached proto: null)","opsSec":14243781.68666157,"samples":7121891}]}-->
