## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,069,853|1534927|
|Using replaceAll()|2,628,110|1314056|
|Using replaceAll(//g)|2,815,580|1407791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:55:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3069853.9631614136,"samples":1534927},{"name":"Using replaceAll()","opsSec":2628110.41787855,"samples":1314056},{"name":"Using replaceAll(//g)","opsSec":2815580.8794015776,"samples":1407791}]}-->
