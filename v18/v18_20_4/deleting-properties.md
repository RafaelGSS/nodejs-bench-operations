## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,600,844|1300423|
|Using delete property (proto: null)|7,875,765|3937883|
|Using delete property (cached proto: null)|2,536,225|1268113|
|Using undefined assignment|13,940,298|6970150|
|Using undefined assignment (proto: null)|8,589,785|4294893|
|Using undefined property (cached proto: null)|13,660,966|6830484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:16:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2600844.8141316897,"samples":1300423},{"name":"Using delete property (proto: null)","opsSec":7875765.191036314,"samples":3937883},{"name":"Using delete property (cached proto: null)","opsSec":2536225.818531218,"samples":1268113},{"name":"Using undefined assignment","opsSec":13940298.598702077,"samples":6970150},{"name":"Using undefined assignment (proto: null)","opsSec":8589785.376018839,"samples":4294893},{"name":"Using undefined property (cached proto: null)","opsSec":13660966.516958,"samples":6830484}]}-->
