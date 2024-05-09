## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|300,449|150225|
|[True conditional] Using constructor name|307,356|153679|
|[True conditional] Check if property is valid then instanceof |313,856|156929|
|[False conditional] Using instanceof only|12,940,977|6470489|
|[False conditional] Using constructor name|16,546,632|8273317|
|[False conditional] Check if property is valid then instanceof |16,515,149|8257575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:51:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":300449.7713480782,"samples":150225},{"name":"[True conditional] Using constructor name","opsSec":307356.9677833919,"samples":153679},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313856.4683956635,"samples":156929},{"name":"[False conditional] Using instanceof only","opsSec":12940977.765511917,"samples":6470489},{"name":"[False conditional] Using constructor name","opsSec":16546632.548230939,"samples":8273317},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16515149.86612437,"samples":8257575}]}-->
