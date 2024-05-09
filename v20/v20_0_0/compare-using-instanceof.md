## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|312,412|156207|
|[True conditional] Using constructor name|306,265|153133|
|[True conditional] Check if property is valid then instanceof |312,174|156088|
|[False conditional] Using instanceof only|12,504,221|6252111|
|[False conditional] Using constructor name|15,909,029|7954515|
|[False conditional] Check if property is valid then instanceof |15,961,782|7980908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:52:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":312412.51819643093,"samples":156207},{"name":"[True conditional] Using constructor name","opsSec":306265.6205911244,"samples":153133},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":312174.66401309514,"samples":156088},{"name":"[False conditional] Using instanceof only","opsSec":12504221.385864828,"samples":6252111},{"name":"[False conditional] Using constructor name","opsSec":15909029.99241398,"samples":7954515},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15961782.054178255,"samples":7980908}]}-->
