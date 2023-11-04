## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|651,892,924|85|
|Setter|7,737,431|83|
|Method|626,315,603|85|
|DefineProperty (setter)|646,645,717|82|
|DefineProperty (setter & enumerable=false)|7,708,016|87|
|DefineProperty (setter & configurable=false)|7,600,871|80|
|DefineProperty (setter & enumerable=false & configurable=false)|7,909,249|80|
|DefineProperty (writable)|632,176,320|81|
|DefineProperty (writable & enumerable=false)|634,902,978|85|
|DefineProperty (writable & enumerable=false & configurable=false)|517,113,931|72|
|DefineProperties (setter)|638,682,413|86|
|DefineProperties (setter & enumerable=false)|7,776,897|83|
|DefineProperties (setter & enumerable=false & configurable=false)|7,895,260|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:38:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":651892924.245494,"samples":9},{"name":"Setter","opsSec":7737431.187130003,"samples":5},{"name":"Method","opsSec":626315602.6795619,"samples":6},{"name":"DefineProperty (setter)","opsSec":646645717.246242,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7708016.475380411,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7600870.51227999,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7909249.097657357,"samples":5},{"name":"DefineProperty (writable)","opsSec":632176319.7742302,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":634902978.027198,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":517113931.4498037,"samples":6},{"name":"DefineProperties (setter)","opsSec":638682413.4795297,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7776897.132753654,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7895260.29022597,"samples":5}]}-->
