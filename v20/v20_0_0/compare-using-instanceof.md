## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|283,851|141926|
|[True conditional] Using constructor name|302,391|151196|
|[True conditional] Check if property is valid then instanceof |310,535|155268|
|[False conditional] Using instanceof only|12,452,626|6226314|
|[False conditional] Using constructor name|15,693,401|7846701|
|[False conditional] Check if property is valid then instanceof |15,737,281|7868641|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:47:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":283851.0189780304,"samples":141926},{"name":"[True conditional] Using constructor name","opsSec":302391.676001503,"samples":151196},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":310535.39748357184,"samples":155268},{"name":"[False conditional] Using instanceof only","opsSec":12452626.859927962,"samples":6226314},{"name":"[False conditional] Using constructor name","opsSec":15693401.363928264,"samples":7846701},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15737281.902446428,"samples":7868641}]}-->
