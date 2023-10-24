## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|390,533,523|91|
|Setter|5,768,998|96|
|Method|395,026,457|93|
|DefineProperty (setter)|394,659,996|96|
|DefineProperty (setter & enumerable=false)|5,717,732|97|
|DefineProperty (setter & configurable=false)|5,853,775|96|
|DefineProperty (setter & enumerable=false & configurable=false)|5,594,354|96|
|DefineProperty (writable)|586,293,349|95|
|DefineProperty (writable & enumerable=false)|421,769,677|72|
|DefineProperty (writable & enumerable=false & configurable=false)|72,128,041|84|
|DefineProperties (setter)|58,046,291|83|
|DefineProperties (setter & enumerable=false)|5,733,861|98|
|DefineProperties (setter & enumerable=false & configurable=false)|5,667,609|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":390533522.7514041,"samples":6},{"name":"Setter","opsSec":5768998.300443538,"samples":6},{"name":"Method","opsSec":395026456.7027329,"samples":6},{"name":"DefineProperty (setter)","opsSec":394659996.16506386,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5717732.476603195,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5853775.181614168,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5594353.624380901,"samples":5},{"name":"DefineProperty (writable)","opsSec":586293348.5218532,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":421769676.76187325,"samples":10},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":72128040.99285018,"samples":4},{"name":"DefineProperties (setter)","opsSec":58046291.427935265,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5733861.178657872,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5667608.816691364,"samples":7}]}-->
