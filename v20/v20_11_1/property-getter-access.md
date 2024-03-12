## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|843,194,883|96|
|Getter|88,864,122|94|
|Method|812,882,718|95|
|DefineProperty (getter)|840,221,593|96|
|DefineProperty (getter & enumerable=false)|87,928,437|93|
|DefineProperty (getter & configurable=false)|839,306,389|96|
|DefineProperty (getter & enumerable=false & configurable=false)|88,274,163|98|
|DefineProperty (writable)|839,833,692|98|
|DefineProperty (writable & enumerable=false)|838,975,314|94|
|DefineProperty (writable & enumerable=false & configurable=false)|843,431,549|95|
|DefineProperties (getter)|87,863,083|96|
|DefineProperties (getter & enumerable=false)|87,964,787|96|
|DefineProperties (getter & enumerable=false & configurable=false)|65,951,164|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":843194883.1220034,"samples":5},{"name":"Getter","opsSec":88864122.37305355,"samples":6},{"name":"Method","opsSec":812882717.7442017,"samples":7},{"name":"DefineProperty (getter)","opsSec":840221592.9656763,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":87928437.2581641,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":839306388.6512752,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":88274162.64672428,"samples":5},{"name":"DefineProperty (writable)","opsSec":839833692.0690151,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":838975314.3866265,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":843431549.4528241,"samples":7},{"name":"DefineProperties (getter)","opsSec":87863082.87876928,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":87964787.22690044,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":65951164.159100324,"samples":6}]}-->
