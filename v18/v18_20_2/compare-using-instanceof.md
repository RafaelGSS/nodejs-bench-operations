## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|303,284|151643|
|[True conditional] Using constructor name|302,530|151266|
|[True conditional] Check if property is valid then instanceof |302,992|151497|
|[False conditional] Using instanceof only|13,191,951|6595976|
|[False conditional] Using constructor name|17,003,027|8501514|
|[False conditional] Check if property is valid then instanceof |16,992,635|8496318|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:57:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":303284.8426601823,"samples":151643},{"name":"[True conditional] Using constructor name","opsSec":302530.17573689774,"samples":151266},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":302992.21056898095,"samples":151497},{"name":"[False conditional] Using instanceof only","opsSec":13191951.050934022,"samples":6595976},{"name":"[False conditional] Using constructor name","opsSec":17003027.969026145,"samples":8501514},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16992635.24022758,"samples":8496318}]}-->
