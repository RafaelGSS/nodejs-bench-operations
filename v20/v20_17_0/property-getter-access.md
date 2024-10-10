## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|145,857,060|73024412|
|Getter|50,296,687|25148376|
|Method|98,073,225|49036619|
|DefineProperty (getter)|98,618,791|49309401|
|DefineProperty (getter & enumerable=false)|51,924,950|25962497|
|DefineProperty (getter & configurable=false)|98,349,075|49175336|
|DefineProperty (getter & enumerable=false & configurable=false)|50,634,480|25349313|
|DefineProperty (writable)|98,436,262|49243739|
|DefineProperty (writable & enumerable=false)|87,463,326|43731748|
|DefineProperty (writable & enumerable=false & configurable=false)|94,801,614|47405921|
|DefineProperties (getter)|51,088,392|25555829|
|DefineProperties (getter & enumerable=false)|52,177,643|26089334|
|DefineProperties (getter & enumerable=false & configurable=false)|52,334,585|26167348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:36:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":145857060.4717436,"samples":73024412},{"name":"Getter","opsSec":50296687.62023985,"samples":25148376},{"name":"Method","opsSec":98073225.44662715,"samples":49036619},{"name":"DefineProperty (getter)","opsSec":98618791.34917054,"samples":49309401},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51924950.27919187,"samples":25962497},{"name":"DefineProperty (getter & configurable=false)","opsSec":98349075.99119481,"samples":49175336},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":50634480.72078848,"samples":25349313},{"name":"DefineProperty (writable)","opsSec":98436262.7937036,"samples":49243739},{"name":"DefineProperty (writable & enumerable=false)","opsSec":87463326.84592588,"samples":43731748},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":94801614.42262964,"samples":47405921},{"name":"DefineProperties (getter)","opsSec":51088392.346125565,"samples":25555829},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52177643.23108694,"samples":26089334},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52334585.36468654,"samples":26167348}]}-->
