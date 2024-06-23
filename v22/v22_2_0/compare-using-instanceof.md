## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|335,349|167675|
|[True conditional] Using constructor name|329,859|164930|
|[True conditional] Check if property is valid then instanceof |332,260|166131|
|[False conditional] Using instanceof only|14,646,397|7323200|
|[False conditional] Using constructor name|14,711,641|7355821|
|[False conditional] Check if property is valid then instanceof |14,629,328|7314665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:02:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":335349.3393617652,"samples":167675},{"name":"[True conditional] Using constructor name","opsSec":329859.81197992706,"samples":164930},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":332260.6948799557,"samples":166131},{"name":"[False conditional] Using instanceof only","opsSec":14646397.861642292,"samples":7323200},{"name":"[False conditional] Using constructor name","opsSec":14711641.705727914,"samples":7355821},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14629328.27374283,"samples":7314665}]}-->
