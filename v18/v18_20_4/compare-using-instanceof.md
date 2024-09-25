## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|265,739|132870|
|[True conditional] Using constructor name|268,915|134458|
|[True conditional] Check if property is valid then instanceof |278,523|139262|
|[False conditional] Using instanceof only|11,104,849|5552425|
|[False conditional] Using constructor name|14,483,027|7241514|
|[False conditional] Check if property is valid then instanceof |14,763,513|7381757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:19:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":265739.46536005056,"samples":132870},{"name":"[True conditional] Using constructor name","opsSec":268915.4842015227,"samples":134458},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":278523.4864747829,"samples":139262},{"name":"[False conditional] Using instanceof only","opsSec":11104849.050596694,"samples":5552425},{"name":"[False conditional] Using constructor name","opsSec":14483027.457430301,"samples":7241514},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14763513.594400741,"samples":7381757}]}-->
