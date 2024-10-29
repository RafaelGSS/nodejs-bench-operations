## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,958,457|1979280|
|Using delete property (proto: null)|16,410,517|8205859|
|Using delete property (cached proto: null)|3,909,592|1954928|
|Using undefined assignment|78,499,523|39253399|
|Using undefined assignment (proto: null)|18,318,591|9160830|
|Using undefined property (cached proto: null)|77,506,170|39265773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:39:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3958457.2622002168,"samples":1979280},{"name":"Using delete property (proto: null)","opsSec":16410517.176816104,"samples":8205859},{"name":"Using delete property (cached proto: null)","opsSec":3909592.860942901,"samples":1954928},{"name":"Using undefined assignment","opsSec":78499523.44916198,"samples":39253399},{"name":"Using undefined assignment (proto: null)","opsSec":18318591.196328424,"samples":9160830},{"name":"Using undefined property (cached proto: null)","opsSec":77506170.67446972,"samples":39265773}]}-->
