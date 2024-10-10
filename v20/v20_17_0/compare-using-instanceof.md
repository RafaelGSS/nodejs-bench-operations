## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|386,076|193183|
|[True conditional] Using constructor name|321,734|160868|
|[True conditional] Check if property is valid then instanceof |316,370|158217|
|[False conditional] Using instanceof only|96,011,724|48005867|
|[False conditional] Using constructor name|96,348,878|48181936|
|[False conditional] Check if property is valid then instanceof |96,659,758|48329884|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:10:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":386076.7528410785,"samples":193183},{"name":"[True conditional] Using constructor name","opsSec":321734.6956875437,"samples":160868},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":316370.1887656664,"samples":158217},{"name":"[False conditional] Using instanceof only","opsSec":96011724.20680413,"samples":48005867},{"name":"[False conditional] Using constructor name","opsSec":96348878.572912,"samples":48181936},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96659758.33402416,"samples":48329884}]}-->
