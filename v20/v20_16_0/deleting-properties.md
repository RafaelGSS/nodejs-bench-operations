## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,883,505|1441753|
|Using delete property (proto: null)|8,463,561|4231781|
|Using delete property (cached proto: null)|2,866,974|1433488|
|Using undefined assignment|19,392,256|9696129|
|Using undefined assignment (proto: null)|8,906,971|4453486|
|Using undefined property (cached proto: null)|19,111,386|9555694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:19:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2883505.4175274917,"samples":1441753},{"name":"Using delete property (proto: null)","opsSec":8463561.492197715,"samples":4231781},{"name":"Using delete property (cached proto: null)","opsSec":2866974.216739368,"samples":1433488},{"name":"Using undefined assignment","opsSec":19392256.332056005,"samples":9696129},{"name":"Using undefined assignment (proto: null)","opsSec":8906971.803996783,"samples":4453486},{"name":"Using undefined property (cached proto: null)","opsSec":19111386.203410894,"samples":9555694}]}-->
