## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,498,846|47764415|
|Getter|49,952,934|24976480|
|Method|94,799,891|47399966|
|DefineProperty (getter)|96,955,127|48477583|
|DefineProperty (getter & enumerable=false)|50,030,768|25015404|
|DefineProperty (getter & configurable=false)|95,128,585|47564302|
|DefineProperty (getter & enumerable=false & configurable=false)|46,865,949|23432983|
|DefineProperty (writable)|96,961,337|48480681|
|DefineProperty (writable & enumerable=false)|94,071,480|47035910|
|DefineProperty (writable & enumerable=false & configurable=false)|87,920,224|43960127|
|DefineProperties (getter)|46,616,714|23308367|
|DefineProperties (getter & enumerable=false)|47,111,544|23559345|
|DefineProperties (getter & enumerable=false & configurable=false)|48,223,745|24112338|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:24:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":47764415,"opsSec":95498846.41818778},{"name":"Getter","samples":24976480,"opsSec":49952934.524003394},{"name":"Method","samples":47399966,"opsSec":94799891.04644707},{"name":"DefineProperty (getter)","samples":48477583,"opsSec":96955127.2179491},{"name":"DefineProperty (getter & enumerable=false)","samples":25015404,"opsSec":50030768.075447075},{"name":"DefineProperty (getter & configurable=false)","samples":47564302,"opsSec":95128585.73531155},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":23432983,"opsSec":46865949.971845105},{"name":"DefineProperty (writable)","samples":48480681,"opsSec":96961337.37182032},{"name":"DefineProperty (writable & enumerable=false)","samples":47035910,"opsSec":94071480.77824032},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":43960127,"opsSec":87920224.63464497},{"name":"DefineProperties (getter)","samples":23308367,"opsSec":46616714.60744672},{"name":"DefineProperties (getter & enumerable=false)","samples":23559345,"opsSec":47111544.49782292},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24112338,"opsSec":48223745.57105295}]}-->
