## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|310,116|155059|
|[True conditional] Using constructor name|304,587|152294|
|[True conditional] Check if property is valid then instanceof |308,364|154183|
|[False conditional] Using instanceof only|12,476,423|6238212|
|[False conditional] Using constructor name|15,961,666|7980834|
|[False conditional] Check if property is valid then instanceof |15,994,588|7997295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:58:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":310116.87307103566,"samples":155059},{"name":"[True conditional] Using constructor name","opsSec":304587.40726356977,"samples":152294},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":308364.56916874496,"samples":154183},{"name":"[False conditional] Using instanceof only","opsSec":12476423.501723582,"samples":6238212},{"name":"[False conditional] Using constructor name","opsSec":15961666.43517246,"samples":7980834},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15994588.17361639,"samples":7997295}]}-->
