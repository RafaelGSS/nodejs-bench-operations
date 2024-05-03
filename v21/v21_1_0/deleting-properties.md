## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,345,442|95|
|Using delete property (proto: null)|23,178,651|99|
|Using delete property (cached proto: null)|4,452,069|95|
|Using undefined assignment|911,368,570|95|
|Using undefined assignment (proto: null)|25,388,808|98|
|Using undefined property (cached proto: null)|907,733,799|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:38:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4345441.708185158,"samples":4},{"name":"Using delete property (proto: null)","opsSec":23178651.49736016,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":4452069.438911501,"samples":5},{"name":"Using undefined assignment","opsSec":911368570.1974441,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":25388807.51247176,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":907733798.659244,"samples":8}]}-->
