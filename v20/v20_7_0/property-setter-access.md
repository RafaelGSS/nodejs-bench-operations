## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|475,581,052|93|
|Setter|8,535,735|97|
|Method|481,556,222|95|
|DefineProperty (setter)|465,528,090|94|
|DefineProperty (setter & enumerable=false)|8,441,027|99|
|DefineProperty (setter & configurable=false)|8,544,475|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,580,315|97|
|DefineProperty (writable)|483,173,637|97|
|DefineProperty (writable & enumerable=false)|483,041,911|96|
|DefineProperty (writable & enumerable=false & configurable=false)|426,885,953|86|
|DefineProperties (setter)|65,149,333|85|
|DefineProperties (setter & enumerable=false)|8,464,397|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,430,473|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":475581052.4696927,"samples":6},{"name":"Setter","opsSec":8535734.977692023,"samples":5},{"name":"Method","opsSec":481556222.1272536,"samples":6},{"name":"DefineProperty (setter)","opsSec":465528090.2717145,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8441027.020148652,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":8544474.704276701,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8580314.742639324,"samples":7},{"name":"DefineProperty (writable)","opsSec":483173636.7093125,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":483041911.4287671,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":426885952.9417701,"samples":7},{"name":"DefineProperties (setter)","opsSec":65149333.06178079,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8464397.411553184,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8430473.308156103,"samples":4}]}-->
