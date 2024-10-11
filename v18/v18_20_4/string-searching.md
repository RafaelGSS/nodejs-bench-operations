## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|156,135,927|78069521|
|Using indexof|15,721,557|7863853|
|Using RegExp.test|13,864,472|6932794|
|Using RegExp.text with cached regex pattern|14,696,578|7348291|
|Using new RegExp.test|4,355,721|2177862|
|Using new RegExp.test with cached regex pattern|4,897,821|2449028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:03:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":156135927.0882546,"samples":78069521},{"name":"Using indexof","opsSec":15721557.9904185,"samples":7863853},{"name":"Using RegExp.test","opsSec":13864472.38136536,"samples":6932794},{"name":"Using RegExp.text with cached regex pattern","opsSec":14696578.472821165,"samples":7348291},{"name":"Using new RegExp.test","opsSec":4355721.386567169,"samples":2177862},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4897821.75677666,"samples":2449028}]}-->
