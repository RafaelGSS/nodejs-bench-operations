## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|314,795|157398|
|[True conditional] Using constructor name|337,261|168631|
|[True conditional] Check if property is valid then instanceof |338,766|169384|
|[False conditional] Using instanceof only|15,712,899|7856450|
|[False conditional] Using constructor name|16,053,813|8026907|
|[False conditional] Check if property is valid then instanceof |16,127,846|8063924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:01:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":314795.4352570501,"samples":157398},{"name":"[True conditional] Using constructor name","opsSec":337261.9419908849,"samples":168631},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":338766.77976208954,"samples":169384},{"name":"[False conditional] Using instanceof only","opsSec":15712899.842923226,"samples":7856450},{"name":"[False conditional] Using constructor name","opsSec":16053813.38995474,"samples":8026907},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16127846.064704522,"samples":8063924}]}-->
