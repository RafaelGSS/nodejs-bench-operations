## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|849,710,218|100|
|Getter|93,946,504|97|
|Method|850,134,814|99|
|DefineProperty (getter)|850,090,221|101|
|DefineProperty (getter & enumerable=false)|93,774,217|96|
|DefineProperty (getter & configurable=false)|850,612,876|99|
|DefineProperty (getter & enumerable=false & configurable=false)|94,288,352|98|
|DefineProperty (writable)|849,193,654|98|
|DefineProperty (writable & enumerable=false)|549,506,960|68|
|DefineProperty (writable & enumerable=false & configurable=false)|144,170,370|84|
|DefineProperties (getter)|57,329,101|90|
|DefineProperties (getter & enumerable=false)|93,916,472|95|
|DefineProperties (getter & enumerable=false & configurable=false)|93,790,648|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:52:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":849710218.2944398,"samples":6},{"name":"Getter","opsSec":93946503.63723586,"samples":7},{"name":"Method","opsSec":850134813.7045143,"samples":9},{"name":"DefineProperty (getter)","opsSec":850090221.4682009,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":93774217.3728765,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":850612875.9770522,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":94288351.73538716,"samples":6},{"name":"DefineProperty (writable)","opsSec":849193653.8678926,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":549506959.510271,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":144170370.26594317,"samples":5},{"name":"DefineProperties (getter)","opsSec":57329101.45968896,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":93916472.00272693,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":93790648.37497649,"samples":5}]}-->
