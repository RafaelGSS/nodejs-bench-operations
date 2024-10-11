## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|126,782,325|63391238|
|Getter|48,756,239|24378123|
|Method|97,496,728|48749846|
|DefineProperty (getter)|95,586,207|47793412|
|DefineProperty (getter & enumerable=false)|51,653,240|25826629|
|DefineProperty (getter & configurable=false)|97,138,026|48569508|
|DefineProperty (getter & enumerable=false & configurable=false)|51,859,187|25933428|
|DefineProperty (writable)|96,136,584|48068311|
|DefineProperty (writable & enumerable=false)|91,787,916|45895603|
|DefineProperty (writable & enumerable=false & configurable=false)|90,465,822|45233252|
|DefineProperties (getter)|51,308,687|25656881|
|DefineProperties (getter & enumerable=false)|50,698,933|25350784|
|DefineProperties (getter & enumerable=false & configurable=false)|51,374,269|25687149|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:44:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":126782325.88972615,"samples":63391238},{"name":"Getter","opsSec":48756239.17412651,"samples":24378123},{"name":"Method","opsSec":97496728.29445331,"samples":48749846},{"name":"DefineProperty (getter)","opsSec":95586207.27779064,"samples":47793412},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51653240.64451114,"samples":25826629},{"name":"DefineProperty (getter & configurable=false)","opsSec":97138026.55206154,"samples":48569508},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51859187.89304138,"samples":25933428},{"name":"DefineProperty (writable)","opsSec":96136584.12218586,"samples":48068311},{"name":"DefineProperty (writable & enumerable=false)","opsSec":91787916.68821757,"samples":45895603},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":90465822.97328465,"samples":45233252},{"name":"DefineProperties (getter)","opsSec":51308687.57079925,"samples":25656881},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50698933.07505022,"samples":25350784},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51374269.53865467,"samples":25687149}]}-->
