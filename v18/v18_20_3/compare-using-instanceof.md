## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|292,177|146089|
|[True conditional] Using constructor name|303,260|151631|
|[True conditional] Check if property is valid then instanceof |307,473|153737|
|[False conditional] Using instanceof only|12,869,503|6434752|
|[False conditional] Using constructor name|17,139,781|8569891|
|[False conditional] Check if property is valid then instanceof |17,139,338|8569670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:57:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":292177.787243563,"samples":146089},{"name":"[True conditional] Using constructor name","opsSec":303260.6280679862,"samples":151631},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":307473.10709401837,"samples":153737},{"name":"[False conditional] Using instanceof only","opsSec":12869503.88940832,"samples":6434752},{"name":"[False conditional] Using constructor name","opsSec":17139781.123059068,"samples":8569891},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17139338.973156225,"samples":8569670}]}-->
