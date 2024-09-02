## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,885,131|1442566|
|Using delete property (proto: null)|8,005,551|4002776|
|Using delete property (cached proto: null)|2,876,749|1438375|
|Using undefined assignment|13,113,064|6556533|
|Using undefined assignment (proto: null)|8,313,203|4156602|
|Using undefined property (cached proto: null)|12,068,849|6034425|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:20:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2885131.1323232884,"samples":1442566},{"name":"Using delete property (proto: null)","opsSec":8005551.032989174,"samples":4002776},{"name":"Using delete property (cached proto: null)","opsSec":2876749.0277894023,"samples":1438375},{"name":"Using undefined assignment","opsSec":13113064.245064793,"samples":6556533},{"name":"Using undefined assignment (proto: null)","opsSec":8313203.61676517,"samples":4156602},{"name":"Using undefined property (cached proto: null)","opsSec":12068849.337582322,"samples":6034425}]}-->
