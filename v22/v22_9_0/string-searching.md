## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|132,346,169|66174322|
|Using indexof|14,758,714|7379412|
|Using RegExp.test|12,288,834|6145173|
|Using RegExp.text with cached regex pattern|13,388,675|6705020|
|Using new RegExp.test|4,746,172|2373371|
|Using new RegExp.test with cached regex pattern|5,303,883|2651943|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:40:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using includes","opsSec":132346169.9206995,"samples":66174322},{"name":"Using indexof","opsSec":14758714.077097552,"samples":7379412},{"name":"Using RegExp.test","opsSec":12288834.006441517,"samples":6145173},{"name":"Using RegExp.text with cached regex pattern","opsSec":13388675.850609291,"samples":6705020},{"name":"Using new RegExp.test","opsSec":4746172.098639084,"samples":2373371},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5303883.040433263,"samples":2651943}]}-->
