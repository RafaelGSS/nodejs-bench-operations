## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|845,803,147|98|
|Getter|88,688,114|96|
|Method|798,912,273|98|
|DefineProperty (getter)|849,901,993|98|
|DefineProperty (getter & enumerable=false)|86,204,464|96|
|DefineProperty (getter & configurable=false)|848,173,224|97|
|DefineProperty (getter & enumerable=false & configurable=false)|89,210,427|97|
|DefineProperty (writable)|847,676,067|99|
|DefineProperty (writable & enumerable=false)|847,309,101|95|
|DefineProperty (writable & enumerable=false & configurable=false)|846,354,388|96|
|DefineProperties (getter)|89,094,667|96|
|DefineProperties (getter & enumerable=false)|88,705,751|98|
|DefineProperties (getter & enumerable=false & configurable=false)|67,131,419|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:07:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":845803147.0122418,"samples":6},{"name":"Getter","opsSec":88688114.08085996,"samples":5},{"name":"Method","opsSec":798912272.9052001,"samples":7},{"name":"DefineProperty (getter)","opsSec":849901993.2908306,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":86204463.53542814,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":848173223.8831502,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":89210426.93597564,"samples":6},{"name":"DefineProperty (writable)","opsSec":847676066.9248631,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":847309101.1711836,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":846354387.7523081,"samples":7},{"name":"DefineProperties (getter)","opsSec":89094667.26508854,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":88705751.3200447,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":67131418.64868568,"samples":5}]}-->
