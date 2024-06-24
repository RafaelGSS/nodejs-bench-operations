## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,902,472|9951237|
|Getter|16,062,469|8031235|
|Method|19,770,438|9885220|
|DefineProperty (getter)|19,914,447|9957224|
|DefineProperty (getter & enumerable=false)|16,122,749|8061375|
|DefineProperty (getter & configurable=false)|19,982,182|9991092|
|DefineProperty (getter & enumerable=false & configurable=false)|14,531,513|7265757|
|DefineProperty (writable)|20,168,703|10084352|
|DefineProperty (writable & enumerable=false)|19,896,524|9948263|
|DefineProperty (writable & enumerable=false & configurable=false)|19,877,231|9938616|
|DefineProperties (getter)|16,175,330|8087666|
|DefineProperties (getter & enumerable=false)|16,222,096|8111049|
|DefineProperties (getter & enumerable=false & configurable=false)|16,126,638|8063320|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:36:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":19902472.28838456,"samples":9951237},{"name":"Getter","opsSec":16062469.71089771,"samples":8031235},{"name":"Method","opsSec":19770438.457800627,"samples":9885220},{"name":"DefineProperty (getter)","opsSec":19914447.36280847,"samples":9957224},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16122749.387393853,"samples":8061375},{"name":"DefineProperty (getter & configurable=false)","opsSec":19982182.24152695,"samples":9991092},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14531513.331436923,"samples":7265757},{"name":"DefineProperty (writable)","opsSec":20168703.274408206,"samples":10084352},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19896524.408063833,"samples":9948263},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":19877231.99890981,"samples":9938616},{"name":"DefineProperties (getter)","opsSec":16175330.802821983,"samples":8087666},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16222096.280149385,"samples":8111049},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16126638.258324355,"samples":8063320}]}-->
